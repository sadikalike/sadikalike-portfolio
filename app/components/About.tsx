"use client";
import { motion } from "framer-motion";
import { MonitorSmartphone, TrendingUp, Rocket } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function About() {
  return (
    <motion.section 
      id="about" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      variants={fadeUp} 
      // ಇಲ್ಲಿ relative ಮತ್ತು overflow-hidden ಸೇರಿಸಲಾಗಿದೆ
      className="relative pt-20 border-t border-white/5 mt-10 overflow-hidden"
    >
      
      {/* === 3D ACTIVE BACKGROUND ELEMENTS === */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* 1. ತೇಲಾಡುವ 3D ಗೋಳ (Floating Sphere) - ಎಡಭಾಗ */}
        <motion.div 
          animate={{ 
            y: [0, -40, 0],
            rotate: [0, 360],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-2xl opacity-60"
        />

        {/* 2. ತೇಲಾಡುವ 3D ಗೋಳ (Floating Sphere) - ಬಲಭಾಗ */}
        <motion.div 
          animate={{ 
            y: [0, 40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-bl from-green-600/20 to-blue-600/20 blur-3xl opacity-60"
        />

        {/* 3. ಸುತ್ತುವ ರಿಂಗ್ (Rotating Ring) - ಮಧ್ಯದಲ್ಲಿ */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-[1px] border-blue-500/10 rounded-full"
        >
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-500 rounded-full blur-sm"></div>
          <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-green-500 rounded-full blur-sm"></div>
        </motion.div>

        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border-[1px] border-purple-500/10 rounded-full"
        >
           <div className="absolute top-1/2 left-0 w-2 h-2 bg-purple-500 rounded-full blur-sm"></div>
        </motion.div>

      </div>

      {/* === MAIN CONTENT === */}
      <div className="relative z-10 w-full px-5 sm:px-6">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">About Me</h2>
          <p className="text-blue-500 font-medium text-lg">My Story</p>
        </div>
        
        {/* Paragraph Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 w-full max-w-4xl mx-auto mb-10 text-left border border-blue-500/20 shadow-[0_0_30px_rgba(37,99,235,0.05)]">
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

        {/* 3 Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl p-6 lg:p-8 flex flex-col items-center text-center justify-center w-full border-white/5 hover:border-blue-500/30 transition-all">
            <MonitorSmartphone className="text-blue-500 mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-2">Website Developer</h3>
            <p className="text-sm text-gray-400">MERN Stack Developer building fast, scalable & responsive web apps.</p>
          </div>
          <div className="glass-card rounded-3xl p-6 lg:p-8 flex flex-col items-center text-center justify-center w-full border-white/5 hover:border-blue-500/30 transition-all">
            <TrendingUp className="text-blue-500 mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-2">Digital Marketer</h3>
            <p className="text-sm text-gray-400">Driving online growth through SEO, social media, content & paid campaigns.</p>
          </div>
          <div className="glass-card rounded-3xl p-6 lg:p-8 flex flex-col items-center text-center justify-center w-full border-white/5 hover:border-blue-500/30 transition-all">
            <Rocket className="text-blue-500 mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-2">Performance Marketer</h3>
            <p className="text-sm text-gray-400">Data-driven ad campaigns (Meta/Google) focused on ROAS and Lead Gen.</p>
          </div>
        </div>

      </div>
    </motion.section>
  );
}