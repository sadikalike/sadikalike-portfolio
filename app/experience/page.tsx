"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Marketing Team Member",
    company: "Skillon English Academy, Mangaluru",
    period: "Nov 2025 - Present",
    description: [
      "Built the academy's website and handle its marketing.",
      "Support digital marketing campaigns and lead generation activities.",
      "Coordinate with trainers and management teams to improve student engagement.",
    ],
  },
  {
    role: "Freelance Digital Marketer & Web Developer",
    company: "Self-employed",
    period: "2024 - Present",
    description: [
      "Handle multiple freelance clients end to end: website development, branding, competitor research, target audience research, Meta Ads and Google Ads campaigns.",
      "Built websites and ran Meta/Google Ads for subhamastucafe.in, indrabhayaquaratna.com, and malnadinteriors.co.in.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold text-white mb-12">Work Experience.</h1>
        <div className="space-y-10 border-l-2 border-white/10 pl-6 ml-2">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-green-500 border-4 border-[#0a0a0a]" />
              <h2 className="text-2xl font-bold text-white">{exp.role}</h2>
              <p className="text-green-400 font-medium mb-1">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}