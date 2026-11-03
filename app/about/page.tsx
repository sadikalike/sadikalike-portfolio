"use client";
import { motion } from "framer-motion";
import { MonitorSmartphone, Rocket } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold text-white mb-8">About Me.</h1>
        <p className="text-lg leading-relaxed text-gray-400 mb-12">
          I am a <span className="text-white font-medium">Performance Marketer</span> and <span className="text-white font-medium">Frontend Developer</span> who loves turning ideas into fast, high-converting digital experiences. I bridge the gap between marketing strategy and code — building landing pages that not only look great but actually generate leads.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/30 transition">
            <MonitorSmartphone className="text-green-400 mb-4" size={32} />
            <h2 className="text-xl font-bold text-white mb-2">Frontend Development</h2>
            <p className="text-sm text-gray-400">Pixel-perfect interfaces with React, Next.js & Tailwind. I build fast, responsive, and accessible websites.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/30 transition">
            <Rocket className="text-green-400 mb-4" size={32} />
            <h2 className="text-xl font-bold text-white mb-2">Performance Marketing</h2>
            <p className="text-sm text-gray-400">Meta & Google Ads focused on ROAS and Lead Gen. I use data to optimize campaigns for maximum ROI.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}