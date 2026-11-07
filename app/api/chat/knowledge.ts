export const SADIK_DATA = `
Name: Muhammad Sadik P
Role: Performance Marketer & Website Developer (MERN Stack)
Location: Mangaluru, India
Email: sadikalike7@gmail.com
Phone: +91 8217436350

Education: BCA (Annamalai University), Digital Marketing (Inspire Computer Education).
Certifications: AI Powered Performance Marketing Mastery (Entri Software).
Skills: Meta Ads, Google Ads, SEO, React, Next.js, Tailwind CSS, GA4, Meta Pixel.
Experience: Marketing at Skillon Academy, Founder of Growzy Digital (Freelance).
Projects: Subhamastu Cafe, Indrabhavya, Skillon Academy, Malnad Interiors.
`;

export function getAIResponse(userInput: string): string {
  const input = userInput.toLowerCase().trim();

  // Greetings
  if (input.match(/^(hi|hello|hey|namaste|namaskara)/)) {
    return "Hello! I'm Sadik's AI assistant. How can I help you today? You can ask me about his skills, projects, experience, or general marketing questions.";
  }

  // Education & Certifications
  if (input.includes("education") || input.includes("study") || input.includes("college") || input.includes("bca")) {
    return "Sadik holds a Bachelor of Computer Application (BCA) from Annamalai University (2021-2024) with Grade A. He also completed a Digital Marketing course at Inspire Computer Education.";
  }

  if (input.includes("certification") || input.includes("certificate") || input.includes("course")) {
    return "Sadik completed the 'AI Powered Performance Marketing Mastery' certification from Entri Software Private Limited. It covers campaign strategy, funnel planning, and conversion optimization.";
  }

  // Family & Personal
  if (input.includes("brother") || input.includes("souhar") || input.includes("shafeek") || input.includes("shaheem")) {
    return "Sadik's brothers are Souhar, Shafeek, and Shaheem.";
  }

  if (input.includes("cousin") || input.includes("irfan") || input.includes("irshad") || input.includes("ihsan") || input.includes("rafeek") || input.includes("shakeeb")) {
    return "Sadik's cousins are Irfan, Irshad, Ihsan, Rafeek, and Shakeeb.";
  }

  // Contact
  if (input.includes("hire") || input.includes("contact") || input.includes("email") || input.includes("phone") || input.includes("call")) {
    return "You can reach Sadik at sadikalike7@gmail.com or call +91 8217436350. He is available for freelance projects!";
  }

  // Marketing Questions
  if (input.includes("marketing") || input.includes("ads") || input.includes("roas") || input.includes("cpa")) {
    return "For successful performance marketing, focus on: 1) Identifying your target audience, 2) Researching competitors, 3) Running A/B tests on Meta and Google Ads, and 4) Tracking ROAS & CPA closely to optimize your budget.";
  }

  // Projects
  if (input.includes("project") || input.includes("portfolio") || input.includes("client")) {
    return "Sadik has worked on several projects including Subhamastu Cafe (franchise leads), Indrabhavya (real estate leads), Skillon Academy (education website), and Malnad Interiors (interior design ads).";
  }

  // Skills
  if (input.includes("skill") || input.includes("tools") || input.includes("what can")) {
    return "Sadik's core skills include Meta Ads, Google Ads, SEO, GA4, React, Next.js, and Tailwind CSS. He also uses AI tools like ChatGPT to enhance his marketing strategies.";
  }

  // Experience
  if (input.includes("experience") || input.includes("work") || input.includes("job")) {
    return "Currently, Sadik is a Marketing Team Member at Skillon English Academy and the Founder of Growzy Digital (a freelance agency). He has 1+ years of hands-on experience in digital marketing and web development.";
  }

  // Who is Sadik
  if (input.includes("who is") || input.includes("about sadik") || input.includes("sadik")) {
    return "Muhammad Sadik P is a Performance Marketer and Website Developer based in Mangaluru. He specializes in scaling businesses through data-driven ad campaigns and building high-converting landing pages using React and Next.js.";
  }

  // Default Response
  return "I'm Sadik's AI assistant. I can answer questions about his skills, experience, projects, education, or general marketing doubts. Try asking: 'What are his skills?' or 'How to improve ROAS?'";
}