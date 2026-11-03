"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function Contact() {
  return (
    <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full bg-[#020617] border-t border-blue-900/30 mt-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 py-20 sm:py-24 text-center">
        <Zap className="text-blue-500 mx-auto mb-6" size={40} />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">Let's work together.</h2>
        <p className="text-base text-gray-400 mb-10 max-w-md mx-auto">Looking for a developer who understands marketing? Let's build something that scales.</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
          <a href="mailto:sadikalike7@gmail.com" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all text-base">
            <Mail size={20} /> Email Me
          </a>
          <a href="tel:+918217436350" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/5 transition-all text-base">
            <Phone size={20} /> Call Me
          </a>
        </div>
      </div>
    </motion.section>
  );
}