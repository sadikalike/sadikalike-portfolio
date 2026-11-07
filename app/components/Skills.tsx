"use client";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, MonitorSmartphone, Globe, Rocket, Code2, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

// ಇಲ್ಲಿ Math.random() ಬಳಸುತ್ತಿಲ್ಲ. ಬದಲಿಗೆ ಸ್ಥಿರವಾದ ಮೌಲ್ಯಗಳನ್ನು ಇಟ್ಟಿದ್ದೇವೆ.
const glowingOrbs = [
  { size: 8, left: 10, top: 20, duration: 7, delay: 0 },
  { size: 12, left: 25, top: 60, duration: 9, delay: 1 },
  { size: 6, left: 40, top: 30, duration: 6, delay: 2 },
  { size: 15, left: 55, top: 80, duration: 10, delay: 0.5 },
  { size: 10, left: 70, top: 15, duration: 8, delay: 1.5 },
  { size: 9, left: 85, top: 50, duration: 7.5, delay: 3 },
  { size: 14, left: 15, top: 75, duration: 11, delay: 2.5 },
  { size: 7, left: 60, top: 40, duration: 6.5, delay: 1.2 },
];

export default function Skills() {
  return (
    <motion.section 
      id="skills" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      variants={fadeUp} 
      className="relative pt-24 border-t border-white/5 mt-20 overflow-hidden"
    >
      
      {/* === DIFFERENT 3D BACKGROUND (Radial Waves & Glowing Orbs) === */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* 1. ದೊಡ್ಡ ವೃತ್ತಾಕಾರದ ಅಲೆ (Radial Wave 1) */}
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] border border-blue-500/20 rounded-full"
        />

        {/* 2. ಇನ್ನೊಂದು ದೊಡ್ಡ ವೃತ್ತಾಕಾರದ ಅಲೆ (Radial Wave 2) */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] border border-purple-500/20 rounded-full"
        />

        {/* 3. ತೇಲಾಡುವ ನಿಯಾನ್ ಬೆಳಕಿನ ಚುಕ್ಕಿಗಳು (Floating Glowing Orbs) */}
        {glowingOrbs.map((el, i) => (
          <motion.div
            key={`orb-${i}`}
            animate={{ 
              y: [0, -50, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{ 
              duration: el.duration, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: el.delay
            }}
            className="absolute rounded-full bg-blue-400 blur-[2px]"
            style={{ 
              width: el.size, 
              height: el.size, 
              left: `${el.left}%`, 
              top: `${el.top}%` 
            }}
          />
        ))}

      </div>

      {/* === MAIN CONTENT === */}
      <div className="relative z-10 w-full px-5 sm:px-6">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">Skills & Tools</h2>
          <p className="text-blue-500 font-medium text-lg">What I Work With</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
          
          {/* 1. Paid Media */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl w-full text-left flex flex-col border border-white/5 bg-[#0a1128]/60 backdrop-blur-lg hover:border-blue-500/30 transition-all">
            <div className="flex items-center gap-3 mb-5">
              <Zap className="text-blue-500" size={24} />
              <h3 className="text-lg font-bold text-white">Paid Media</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {['Meta Ads', 'Google Ads', 'Snapchat Ads', 'TikTok Ads', 'LinkedIn Ads', 'SEM', 'Media Buying'].map(s => (
                <span key={s} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300">{s}</span>
              ))}
            </div>
          </div>

          {/* 2. Performance Marketing */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl w-full text-left flex flex-col border border-white/5 bg-[#0a1128]/60 backdrop-blur-lg hover:border-blue-500/30 transition-all">
            <div className="flex items-center gap-3 mb-5">
              <TrendingUp className="text-blue-500" size={24} />
              <h3 className="text-lg font-bold text-white">Performance Marketing</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {['Lead Generation', 'Customer Acquisition', 'Conversion Optimization', 'A/B Testing', 'Audience Targeting', 'Funnel Strategy'].map(s => (
                <span key={s} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300">{s}</span>
              ))}
            </div>
          </div>

          {/* 3. Research & Analytics */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl w-full text-left flex flex-col border border-white/5 bg-[#0a1128]/60 backdrop-blur-lg hover:border-blue-500/30 transition-all">
            <div className="flex items-center gap-3 mb-5">
              <BarChart3 className="text-blue-500" size={24} />
              <h3 className="text-lg font-bold text-white">Research & Analytics</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {['Competitive Intelligence', 'Market Research', 'Keyword Research', 'Search Volume Analysis', 'Consumer Behavior'].map(s => (
                <span key={s} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300">{s}</span>
              ))}
            </div>
          </div>

          {/* 4. Tracking & Reporting */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl w-full text-left flex flex-col border border-white/5 bg-[#0a1128]/60 backdrop-blur-lg hover:border-blue-500/30 transition-all">
            <div className="flex items-center gap-3 mb-5">
              <MonitorSmartphone className="text-blue-500" size={24} />
              <h3 className="text-lg font-bold text-white">Tracking & Reporting</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {['GA4', 'Meta Pixel', 'Google Tag Manager', 'Conversion Tracking', 'UTM Tagging', 'KPI Reporting'].map(s => (
                <span key={s} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300">{s}</span>
              ))}
            </div>
          </div>

          {/* 5. Research Tools */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl w-full text-left flex flex-col border border-white/5 bg-[#0a1128]/60 backdrop-blur-lg hover:border-blue-500/30 transition-all">
            <div className="flex items-center gap-3 mb-5">
              <Globe className="text-blue-500" size={24} />
              <h3 className="text-lg font-bold text-white">Research Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {['Similarweb', 'Google Trends', 'Foreplay', 'AnswerThePublic', 'Glimpse'].map(s => (
                <span key={s} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300">{s}</span>
              ))}
            </div>
          </div>

          {/* 6. AI Tools */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl w-full text-left flex flex-col border border-white/5 bg-[#0a1128]/60 backdrop-blur-lg hover:border-blue-500/30 transition-all">
            <div className="flex items-center gap-3 mb-5">
              <Rocket className="text-blue-500" size={24} />
              <h3 className="text-lg font-bold text-white">AI Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {['ChatGPT', 'Claude AI', 'Perplexity AI', 'Prompt Engineering', 'AI Marketing'].map(s => (
                <span key={s} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300">{s}</span>
              ))}
            </div>
          </div>

          {/* 7. Web & Design */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl w-full md:col-span-2 lg:col-span-3 text-left flex flex-col border border-white/5 bg-[#0a1128]/60 backdrop-blur-lg hover:border-blue-500/30 transition-all">
            <div className="flex items-center gap-3 mb-5">
              <Code2 className="text-blue-500" size={24} />
              <h3 className="text-lg font-bold text-white">Web & Design</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'WordPress', 'Front-End Development', 'Canva', 'Figma'].map(s => (
                <span key={s} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300">{s}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}