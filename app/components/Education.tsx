"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function Education() {
  return (
    <motion.section id="education" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="pt-24 border-t border-white/5 mt-20">
      
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">Education & Certifications</h2>
        <p className="text-blue-500 font-medium text-lg">My Academic Background</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
        
        {/* Education Card */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl w-full text-left flex flex-col border border-blue-500/10 hover:border-blue-500/30 transition-all">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Education</h3>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white">Bachelor of Computer Application (BCA)</h4>
              <p className="text-sm text-gray-400 mt-1">Annamalai University (Distance Education, Karasagod, Kerala)</p>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-blue-400">
                <span className="flex items-center gap-1"><Calendar size={12} /> Aug 2021 - Oct 2024</span>
                <span className="flex items-center gap-1"><Award size={12} /> Grade: A</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <h4 className="text-lg font-semibold text-white">Digital Marketing</h4>
              <p className="text-sm text-gray-400 mt-1">Inspire Computer Education</p>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-blue-400">
                <span className="flex items-center gap-1"><Calendar size={12} /> Jan 2025 - Jul 2025</span>
                <span className="flex items-center gap-1"><Award size={12} /> Grade: A</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Card */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl w-full text-left flex flex-col border border-green-500/10 hover:border-green-500/30 transition-all">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 border border-green-500/30">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Certifications</h3>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">AI Powered Performance Marketing Mastery</h4>
            <p className="text-sm text-gray-400 mt-1">Entri Software Private Limited</p>
            <div className="flex items-center gap-4 mt-2 text-xs text-green-400 mb-4">
              <span className="flex items-center gap-1"><Calendar size={12} /> Sep 2026 - Present</span>
            </div>
            
            <ul className="text-sm text-gray-500 list-disc list-inside space-y-2">
              <li>Advanced training in campaign strategy, funnel planning, audience targeting and conversion optimization.</li>
              <li>Hands-on practice running paid ad campaigns across multiple advertising platforms.</li>
              <li>In-depth study of market research, competitive analysis and consumer behavior.</li>
            </ul>
          </div>
        </div>

      </div>
    </motion.section>
  );
}