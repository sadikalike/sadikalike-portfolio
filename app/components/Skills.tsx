"use client";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, MonitorSmartphone, Globe, Rocket, Code2, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function Skills() {
  return (
    <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="pt-24 border-t border-white/5 mt-20">
      
      {/* ಶೀರ್ಷಿಕೆ ಮಧ್ಯದಲ್ಲೇ ಇರಲಿ */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">Skills & Tools</h2>
        <p className="text-blue-500 font-medium text-lg">What I Work With</p>
      </div>
      
      {/* ಕಾರ್ಡ್‌ಗಳು ಮಧ್ಯದಲ್ಲಿವೆ, ಆದರೆ ಒಳಗಿನ ಅಂಶಗಳು ಎಡಕ್ಕೆ ಒರಗಿಕೊಂಡಿವೆ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
        
        {/* 1. Paid Media */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl w-full text-left flex flex-col">
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
        <div className="glass-card p-6 sm:p-8 rounded-3xl w-full text-left flex flex-col">
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
        <div className="glass-card p-6 sm:p-8 rounded-3xl w-full text-left flex flex-col">
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
        <div className="glass-card p-6 sm:p-8 rounded-3xl w-full text-left flex flex-col">
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
        <div className="glass-card p-6 sm:p-8 rounded-3xl w-full text-left flex flex-col">
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
        <div className="glass-card p-6 sm:p-8 rounded-3xl w-full text-left flex flex-col">
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
        <div className="glass-card p-6 sm:p-8 rounded-3xl w-full md:col-span-2 lg:col-span-3 text-left flex flex-col">
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
    </motion.section>
  );
}