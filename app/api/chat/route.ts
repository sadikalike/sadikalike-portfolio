import { NextResponse } from 'next/server';
import { getAIResponse } from './knowledge';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content;

    // 1. ಮೊದಲು ನಮ್ಮ ಲೋಕಲ್ ನಾಲೆಡ್ಜ್ ಬೇಸ್ (Personal questions) ಚೆಕ್ ಮಾಡುವುದು
    const localReply = getAIResponse(lastMessage);
    
    // ಒಂದು ವೇಳೆ ಲೋಕಲ್ ಉತ್ತರ ಸಿಕ್ಕಿದ್ರೆ (ಡೀಫಾಲ್ಟ್ ಉತ್ತರ ಅಲ್ಲದಿದ್ರೆ) ಅದನ್ನೇ ಕೊಡುವುದು
    if (localReply && !localReply.includes("I'm Sadik's AI assistant. I can answer questions")) {
      return NextResponse.json({ content: localReply });
    }

    // 2. ಇಲ್ಲದಿದ್ದರೆ, Wikipedia API ಬಳಸಿ ಜನರಲ್ ನಾಲೆಡ್ಜ್ ಹುಡುಕುವುದು
    try {
      // ಯೂಸರ್ ಕೇಳಿದ ಪ್ರಶ್ನೆಯಿಂದ ಕೀವರ್ಡ್ಸ್ ತೆಗೆದುಕೊಳ್ಳುವುದು (ಉದಾ: "what is react" -> "react")
      const searchQuery = lastMessage.replace(/what is|who is|tell me about|explain/gi, '').trim();
      
      const wikiResponse = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchQuery)}`);
      
      if (wikiResponse.ok) {
        const wikiData = await wikiResponse.json();
        if (wikiData.extract) {
          // Wikipedia ನಿಂದ ಸಿಕ್ಕಿದ ಉತ್ತರವನ್ನು ಕಳುಹಿಸುವುದು
          return NextResponse.json({ content: wikiData.extract });
        }
      }
    } catch (wikiError) {
      console.error("Wikipedia fetch error:", wikiError);
    }

    // 3. ಎರಡೂ ಸಿಕ್ಕಿಲ್ಲದಿದ್ದರೆ ಡೀಫಾಲ್ಟ್ ಉತ್ತರ
    return NextResponse.json({ 
      content: "I couldn't find a specific answer for that. I'm best at answering questions about Sadik's skills, projects, or marketing. You can also try asking about general topics like 'What is React?' or 'What is Marketing?'." 
    });
    
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}