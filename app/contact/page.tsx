"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Let's work together.</h1>
        <p className="text-gray-400 mb-12 max-w-md mx-auto">Looking for a developer who understands marketing? Let's build something that scales.</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="mailto:sadikalike7@gmail.com" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-green-500 text-black font-semibold hover:bg-green-400 transition-all">
            <Mail size={18} /> Email Me
          </a>
          <a href="tel:+918217436350" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all">
            <Phone size={18} /> Call Me
          </a>
          <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </motion.div>
    </div>
  );
}