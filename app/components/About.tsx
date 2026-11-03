"use client";
import { motion } from "framer-motion";
import { MonitorSmartphone, TrendingUp, Rocket } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function About() {
  return (
    <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="pt-20 border-t border-white/5 mt-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">About Me</h2>
        <p className="text-blue-500 font-medium text-lg">My Story</p>
      </div>
      
      {/* ಪ್ಯಾರಾಗ್ರಾಫ್ ಕಾರ್ಡ್ - ಇಲ್ಲಿ text-left ಎಂದು ಬದಲಾಯಿಸಲಾಗಿದೆ */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 w-full max-w-4xl mx-auto mb-10 text-left">
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
          Hi, I'm <span className="text-white font-semibold">Muhammad Sadik</span>, a Performance Marketer with a background in Web Development and Digital Marketing.
        </p>
        <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-4">
          I have hands-on experience in digital marketing, website development, and business promotion. My main interest is performance marketing, where I focus on understanding businesses, researching competitors, identifying target audiences, and planning advertising campaigns.
        </p>
        <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-4">
          I have worked with advertising platforms like <span className="text-blue-400">Meta Ads</span> and <span className="text-blue-400">Google Ads</span>, along with LinkedIn, Snapchat, and TikTok Ads. I also explore market research, competitor analysis, audience targeting, and AI tools to improve my work.
        </p>
        <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-4">
          Alongside marketing, my web development background helps me understand websites, landing pages, and the technical side of digital campaigns.
        </p>
        <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
          I'm always interested in learning new strategies, exploring opportunities, and working with businesses to improve their online presence and generate better results.
        </p>
      </div>

      {/* ಕಾರ್ಡ್‌ಗಳು - ಇವು ಮಧ್ಯದಲ್ಲೇ ಇರಲಿ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
        <div className="glass-card rounded-3xl p-6 lg:p-8 flex flex-col items-center text-center justify-center w-full">
          <MonitorSmartphone className="text-blue-500 mb-4" size={32} />
          <h3 className="text-xl font-bold text-white mb-2">Website Developer</h3>
          <p className="text-sm text-gray-400">MERN Stack Developer building fast, scalable & responsive web apps.</p>
        </div>
        <div className="glass-card rounded-3xl p-6 lg:p-8 flex flex-col items-center text-center justify-center w-full">
          <TrendingUp className="text-blue-500 mb-4" size={32} />
          <h3 className="text-xl font-bold text-white mb-2">Digital Marketer</h3>
          <p className="text-sm text-gray-400">Driving online growth through SEO, social media, content & paid campaigns.</p>
        </div>
        <div className="glass-card rounded-3xl p-6 lg:p-8 flex flex-col items-center text-center justify-center w-full">
          <Rocket className="text-blue-500 mb-4" size={32} />
          <h3 className="text-xl font-bold text-white mb-2">Performance Marketer</h3>
          <p className="text-sm text-gray-400">Data-driven ad campaigns (Meta/Google) focused on ROAS and Lead Gen.</p>
        </div>
      </div>
    </motion.section>
  );
}