"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Subhamastu Cafe",
    description: "Website development & Meta/Google Ads campaign to generate franchise enquiries.",
    image: "/project1.jpg",
    tags: ["Web Dev", "Meta Ads", "Lead Gen"],
    link: "#",
  },
  {
    title: "Indrabhavya Quaratna",
    description: "Built website and ran targeted lead generation campaigns based on competitor analysis.",
    image: "/project2.jpg",
    tags: ["Next.js", "Google Ads", "Research"],
    link: "#",
  },
  {
    title: "Malnad Interiors",
    description: "Website design and data-driven Google Ads campaign to boost interior design enquiries.",
    image: "/project3.jpg",
    tags: ["Web Dev", "Google Ads"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold text-white mb-12">Featured Projects.</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a key={index} href={project.link} className="group block rounded-2xl bg-white/5 border border-white/5 hover:border-green-500/30 hover:bg-white/[0.07] transition-all duration-300 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors flex items-center justify-between mb-2">
                  {project.title}
                  <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h2>
                <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-green-400/80">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-green-500/10 rounded-md">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}