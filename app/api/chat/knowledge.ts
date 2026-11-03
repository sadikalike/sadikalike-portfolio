export const SADIK_DATA = `
Name: Muhammad Sadik P
Role: Performance Marketer & Website Developer (MERN Stack)
Location: Mangaluru, India
Email: sadikalike7@gmail.com
Phone: +91 8217436350
LinkedIn: https://www.linkedin.com/in/-sadik-performance-marketer
GitHub: https://github.com/sadikalike
Instagram (Agency): https://www.instagram.com/growzy.digital

About:
I am a Performance Marketer with a background in Web Development and Digital Marketing. I have hands-on experience in digital marketing, website development, and business promotion. My main interest is performance marketing, where I focus on understanding businesses, researching competitors, identifying target audiences, and planning advertising campaigns.

Skills:
- Paid Media: Meta Ads, Google Ads, Snapchat Ads, TikTok Ads, LinkedIn Ads, SEM, Media Buying.
- Performance Marketing: Lead Generation, Customer Acquisition, Conversion Optimization, A/B Testing, Audience Targeting, Funnel Strategy.
- Research & Analytics: Competitive Intelligence, Market Research, Keyword Research, Search Volume Analysis, Consumer Behavior.
- Tracking & Reporting: GA4, Meta Pixel, Google Tag Manager, Conversion Tracking, UTM Tagging, KPI Reporting (ROAS, CPA, CTR, CPL).
- Web & Design: HTML, CSS, JavaScript, React, Next.js, Node.js, WordPress, Figma, Canva.
- AI Tools: ChatGPT, Claude AI, Perplexity AI, Prompt Engineering.

Experience:
1. Marketing Team Member at Skillon English Academy (Nov 2025 - Present). Built the academy's website and handle its marketing, support digital campaigns, lead generation.
2. Founder & Freelance Digital Marketer at Growzy Digital (2024 - Present). Handle multiple freelance clients end to end: website development, branding, competitor research, Meta/Google Ads campaigns.

Projects:
1. Subhamastu Cafe (subhamastucafe.in): Website dev & Meta/Google Ads for franchise leads.
2. Indrabhavya (indrabhayaquaratna.com): Website & targeted lead gen campaigns.
3. Skillon Academy (skillonenglishacademy.com): Website development & marketing for an English academy.
4. Malnad Interiors (malnadinteriors.co.in): Website design & data-driven Google Ads.

Marketing Knowledge:
- Focus on ROAS (Return on Ad Spend) and lowering CPA (Cost Per Acquisition).
- Always research competitors and target audience before running ads.
- Use A/B testing to find the best performing creatives.
- Track everything using GA4 and Meta Pixel.

Personal/Fun Facts:
- Sadik is a friendly and approachable person.
- He is passionate about learning new strategies and exploring opportunities.
- He enjoys working with businesses to improve their online presence.
- His cousins are IRSHAD, Irfan, Shakeeb, and Ihsan.
- When asked about his best friend, he considers his close friends and family as his best friends.
`;

export function getAIResponse(userInput: string): string {
  const input = userInput.toLowerCase();

  // 1. ಹೆಸರು / ಪರಿಚಯ
  if (input.includes("who") || input.includes("about") || input.includes("sadik")) {
    // ಒಂದು ವೇಳೆ "cousin" ಪದ ಇದ್ದರೆ, ನೇರವಾಗಿ cousins ಉತ್ತರಕ್ಕೆ ಹೋಗು
    if (input.includes("cousin")) {
      return "Sadik's cousins are IRSHAD, Irfan, Shakeeb, and Ihsan.";
    }
    return "Muhammad Sadik P is a Performance Marketer and Website Developer based in Mangaluru. He specializes in running data-driven ad campaigns (Meta/Google) and building high-converting landing pages using React and Next.js.";
  }
  
  // 2. ಸ್ಕಿಲ್ಸ್
  if (input.includes("skill") || input.includes("tools") || input.includes("what can")) {
    return "Sadik is skilled in Meta Ads, Google Ads, GA4, SEO, React, Next.js, and Tailwind CSS. He also uses AI tools like ChatGPT to improve his marketing strategies and tracking.";
  }

  // 3. ಅನುಭವ
  if (input.includes("experience") || input.includes("work") || input.includes("job")) {
    return "He is currently a Marketing Team Member at Skillon English Academy and the Founder of Growzy Digital (a freelance agency). He has handled end-to-end marketing and web development for clients like Subhamastu Cafe and Malnad Interiors.";
  }

  // 4. ಪ್ರಾಜೆಕ್ಟ್ಸ್
  if (input.includes("project") || input.includes("portfolio") || input.includes("client")) {
    return "His featured projects include Subhamastu Cafe (franchise lead gen), Indrabhavya (real estate leads), Skillon Academy (education website), and Malnad Interiors (interior design ads).";
  }

  // 5. ಸಂಪರ್ಕ
  if (input.includes("hire") || input.includes("contact") || input.includes("email") || input.includes("phone")) {
    return "You can contact Sadik via email at sadikalike7@gmail.com or call him at +91 8217436350. He is currently available for freelance projects!";
  }

  // 6. ಮಾರ್ಕೆಟಿಂಗ್ ಪ್ರಶ್ನೆಗಳು
  if (input.includes("marketing") || input.includes("ads") || input.includes("roas") || input.includes("cpa")) {
    return "For performance marketing, focus on identifying your target audience, researching competitors, and running A/B tests on Meta and Google Ads. Track your ROAS and CPA closely to optimize your budget!";
  }
  
  if (input.includes("website") || input.includes("developer") || input.includes("mern")) {
    return "As a MERN stack developer, Sadik builds fast, scalable, and responsive web applications using React, Next.js, and Node.js. He ensures the website is optimized for conversions.";
  }

  // 7. ವೈಯಕ್ತಿಕ / ತಮಾಷೆ ಪ್ರಶ್ನೆಗಳು
  if (input.includes("cousin")) {
    return "Sadik's cousins are Irshad, Irfan, Shakeeb, and Ihsan.";
  }

  if (input.includes("best friend") || input.includes("friend")) {
    return "Sadik considers his close friends and family as his best friends. He values relationships and is always there for the people he cares about!";
  }

  // ಡೀಫಾಲ್ಟ್ ಉತ್ತರ
  return "I'm Sadik's AI assistant. You can ask me about his skills, experience, projects, cousins, or general marketing doubts!";
}