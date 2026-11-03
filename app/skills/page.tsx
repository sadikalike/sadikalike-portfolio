"use client";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Paid Media & Marketing",
    skills: ["Meta Ads", "Google Ads", "Snapchat Ads", "TikTok Ads", "LinkedIn Ads", "SEM", "Media Buying"],
  },
  {
    title: "Performance Marketing",
    skills: ["Lead Generation", "Customer Acquisition", "Conversion Optimization", "A/B Testing", "Funnel Strategy"],
  },
  {
    title: "Research & Analytics",
    skills: ["GA4", "Meta Pixel", "GTM", "Competitive Intelligence", "Market Research", "Keyword Research"],
  },
  {
    title: "Web & Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "Tailwind CSS", "WordPress", "Figma"],
  },
  {
    title: "AI & Tools",
    skills: ["ChatGPT", "Claude AI", "Perplexity AI", "Prompt Engineering", "Similarweb", "Google Trends"],
  },
];

export default function Skills() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold text-white mb-12">Skills & Tools.</h1>
        <div className="space-y-10">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h2 className="text-sm font-bold uppercase tracking-widest text-green-400 mb-4 flex items-center gap-3">
                {category.title} <span className="h-[1px] w-12 bg-green-400/30"></span>
              </h2>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 hover:text-white hover:border-green-400/50 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}