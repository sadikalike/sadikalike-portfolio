import { NextResponse } from 'next/server';
import { getAIResponse } from './knowledge';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content;

    // ನಮ್ಮ ಸ್ಥಳೀಯ ಡೇಟಾ ಬಳಸಿ ಉತ್ತರ ಪಡೆಯುವುದು
    const reply = getAIResponse(lastMessage);

    return NextResponse.json({ content: reply });
    
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}