export const SADIK_DATA = `
Name: Muhammad Sadik P
Role: Performance Marketer & Website Developer (MERN Stack)
Location: Mangaluru, India
Email: sadikalike7@gmail.com
Phone: +91 8217436350
Education: BCA (Annamalai University, 2021-2024), Digital Marketing (Inspire Computer Education, 2025).
Certifications: AI Powered Performance Marketing Mastery (Entri Software, 2026).
Skills: Meta Ads, Google Ads, SEO, GA4, React, Next.js, Tailwind CSS, Node.js, AI Tools.
Experience: Marketing Team Member at Skillon English Academy, Founder of Growzy Digital.
Projects: Subhamastu Cafe, Indrabhavya, Skillon Academy, Malnad Interiors.
Family: Brothers (Souhar, Shafeek, Shaheem), Cousins (Irfan, Irshad, Ihsan, Rafeek, Shakeeb).
`;

export function getAIResponse(userInput: string): string {
  const input = userInput.toLowerCase().trim();

  // 1. Greetings
  if (input.match(/^(hi|hello|hey|namaste|namaskara|good morning|good evening)/)) {
    return "Hello! I'm Sadik's AI assistant. How can I help you today? You can ask me about his skills, projects, experience, or general marketing doubts.";
  }

  // 2. General Knowledge (ಸಾಮಾನ್ಯ ಜ್ಞಾನ)
  if (input.includes("what is marketing") || input.includes("marketing ಅಂದ್ರೆ")) {
    return "Marketing is the process of promoting and selling products or services. It includes market research, advertising, and customer relationship management.";
  }
  if (input.includes("roas") || input.includes("return on ad spend")) {
    return "ROAS (Return on Ad Spend) is a key metric in marketing. It is calculated as: Revenue / Ad Spend. A higher ROAS means your ads are more profitable.";
  }
  if (input.includes("what is react") || input.includes("react js")) {
    return "React is a JavaScript library for building user interfaces. Sadik uses React and Next.js to build fast, responsive web applications.";
  }
  if (input.includes("what is next.js") || input.includes("nextjs")) {
    return "Next.js is a React framework for building full-stack web applications. It offers features like server-side rendering and static site generation.";
  }
  if (input.includes("cpa") || input.includes("cost per acquisition")) {
    return "CPA (Cost Per Acquisition) is the cost of acquiring a new customer. It is calculated by dividing the total campaign cost by the number of conversions.";
  }

  // 3. Sadik's Information
  if (input.includes("who is sadik") || input.includes("about sadik") || input.includes("sadik")) {
    return "Muhammad Sadik P is a Performance Marketer and Website Developer based in Mangaluru. He specializes in scaling businesses through data-driven ad campaigns and building high-converting landing pages using React and Next.js.";
  }
  if (input.includes("education") || input.includes("study") || input.includes("bca")) {
    return "Sadik holds a Bachelor of Computer Application (BCA) from Annamalai University (2021-2024) with Grade A, and a Digital Marketing certification from Inspire Computer Education.";
  }
  if (input.includes("certification") || input.includes("course")) {
    return "Sadik completed the 'AI Powered Performance Marketing Mastery' certification from Entri Software Private Limited.";
  }
  if (input.includes("project") || input.includes("portfolio")) {
    return "Sadik has worked on several projects including Subhamastu Cafe, Indrabhavya, Skillon Academy, and Malnad Interiors. You can view them in the Projects section.";
  }
  if (input.includes("skill") || input.includes("tools")) {
    return "Sadik's core skills include Meta Ads, Google Ads, SEO, GA4, React, Next.js, and Tailwind CSS. He also uses AI tools like ChatGPT.";
  }
  if (input.includes("experience") || input.includes("job")) {
    return "Sadik is currently a Marketing Team Member at Skillon English Academy and the Founder of Growzy Digital (a freelance agency).";
  }
  if (input.includes("contact") || input.includes("hire") || input.includes("email")) {
    return "You can reach Sadik at sadikalike7@gmail.com or call +91 8217436350. He is available for freelance projects!";
  }

  // 4. Family
  if (input.includes("brother") || input.includes("souhar")) {
    return "Sadik's brothers are Souhar, Shafeek, and Shaheem.";
  }
  if (input.includes("cousin") || input.includes("irfan")) {
    return "Sadik's cousins are Irfan, Irshad, Ihsan, Rafeek, and Shakeeb.";
  }
  if (input.includes("best friend") || input.includes("friend")) {
    return "Sadik considers his close friends and family as his best friends!";
  }

  // 5. Default
  return "I'm Sadik's AI assistant. I can answer questions about his skills, experience, projects, education, or general marketing doubts. Try asking: 'What are his skills?' or 'What is ROAS?'";
}