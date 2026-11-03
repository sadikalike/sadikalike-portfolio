"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MonitorSmartphone, Rocket, TrendingUp, Code2, Zap, BarChart3, Globe } from "lucide-react";
import { SiInstagram, SiGoogleads, SiMeta } from "react-icons/si";
import dynamic from "next/dynamic";

// SSR (Server Side Rendering) ನಲ್ಲಿ Three.js ಕೆಲಸ ಮಾಡುವುದಿಲ್ಲ, ಹಾಗಾಗಿ dynamic import ಬಳಸುತ್ತಿದ್ದೇವೆ
const Planet = dynamic(() => import("./components/Planet"), { ssr: false });

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      
      {/* Top Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <main className="max-w-6xl mx-auto px-5 sm:px-6 pt-20 pb-0 w-full relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section id="home" className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16 w-full">
          
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start justify-center">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 text-white leading-[1.1]">
              Muhammad <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
                Sadik P.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed mt-2">
              Performance Marketer & <span className="text-blue-500 font-semibold">Website Developer</span> building high-converting digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 w-full px-4 sm:px-0">
              <a href="#projects" className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(37,99,235,0.4)] text-sm sm:text-base">
                View My Work <ArrowUpRight size={20} />
              </a>
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full glass-card text-white font-bold hover:bg-white/5 transition-all flex items-center justify-center text-sm sm:text-base border border-white/10">
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end relative"
          >
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-[320px] md:h-[320px] flex items-center justify-center -mt-10 md:-mt-24">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-[80px] opacity-30 z-0"></div>
              <div className="relative w-full h-full z-10 flex items-center justify-center overflow-visible">
                <img 
                  src="/sadik.png" 
                  alt="Muhammad Sadik P" 
                  className="w-full h-full object-contain mix-blend-multiply"
                  style={{ 
                    filter: "contrast(1.1) brightness(1.05)",
                    maskImage: "radial-gradient(circle, black 40%, transparent 75%)",
                    WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 75%)",
                    transform: "scale(1.05)" 
                  }}
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="pt-20 border-t border-white/5">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-500 mb-6 sm:mb-8 flex items-center gap-4">
            About Me <span className="h-[1px] w-16 bg-blue-500/30"></span>
          </h2>
          
          <div className="glass-card rounded-3xl p-6 sm:p-10 w-full mb-6">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            <div className="glass-card rounded-3xl p-6 flex flex-col justify-center w-full">
              <MonitorSmartphone className="text-blue-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Website Developer</h3>
              <p className="text-sm text-gray-400">MERN Stack Developer building fast, scalable & responsive web apps.</p>
            </div>
            <div className="glass-card rounded-3xl p-6 flex flex-col justify-center w-full">
              <TrendingUp className="text-blue-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Digital Marketer</h3>
              <p className="text-sm text-gray-400">Driving online growth through SEO, social media, content & paid campaigns.</p>
            </div>
            <div className="glass-card rounded-3xl p-6 flex flex-col justify-center w-full">
              <Rocket className="text-blue-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Performance Marketer</h3>
              <p className="text-sm text-gray-400">Data-driven ad campaigns (Meta/Google) focused on ROAS and Lead Gen.</p>
            </div>
          </div>
        </motion.section>

        {/* --- 3D CREATIVE SECTION (Robot & Icons) --- */}
        <section className="relative w-full py-16 flex flex-col items-center justify-center overflow-hidden">
           
           <div className="text-center mb-8 relative z-20">
              <h2 className="text-sm sm:text-base font-bold uppercase tracking-widest text-blue-400">
                Scroll to Rotate the Tech Universe
              </h2>
           </div>

           {/* 3D Scene Wrapper */}
           <div className="relative w-full max-w-4xl h-[450px] md:h-[550px] flex items-center justify-center">
              
              {/* === STATIC SKY ICONS (HTML overlay) === */}
              <div className="absolute top-8 left-8 md:top-12 md:left-16 z-20 animate-bounce-slow">
                <div className="flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                  <SiGoogleads className="text-blue-400 text-3xl md:text-5xl" />
                </div>
              </div>

              <div className="absolute bottom-12 right-8 md:bottom-16 md:right-16 z-20 animate-pulse-slow">
                <div className="flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-[0_0_30px_rgba(6,104,225,0.3)]">
                  <SiMeta className="text-blue-500 text-3xl md:text-5xl" />
                </div>
              </div>

              <div className="absolute top-1/2 -right-2 md:top-1/3 md:right-4 z-20 animate-bounce-slow">
                <div className="flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                  <BarChart3 className="text-green-400 text-3xl md:text-5xl" />
                </div>
              </div>

              <div className="absolute bottom-1/4 left-4 md:bottom-1/3 md:left-8 z-20 animate-pulse-slow">
                <div className="flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                  <TrendingUp className="text-purple-400 text-3xl md:text-5xl" />
                </div>
              </div>

              {/* 3D Canvas (Center) */}
              <Planet />
           </div>
        </section>

        {/* --- EXPERIENCE SECTION (Updated with Links) --- */}
        <motion.section id="experience" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="pt-10">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-500 mb-6 sm:mb-8 flex items-center gap-4">
            Experience <span className="h-[1px] w-16 bg-blue-500/30"></span>
          </h2>
          <div className="space-y-5 w-full">
            
            {/* 1. Skillon English Academy */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl w-full">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-white">Marketing Team Member</h3>
                <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full w-fit">Nov 2025 - Present</span>
              </div>
              <p className="text-gray-400 font-medium mb-3 text-sm sm:text-base">Skillon English Academy, Mangaluru</p>
              
              {/* Skillon Links */}
              <div className="flex flex-wrap gap-3 mb-4 text-xs sm:text-sm">
                <a href="https://skillonenglishacademy.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/10 px-3 py-1 rounded-md">
                  <Globe size={14} /> Website
                </a>
                <a href="https://www.instagram.com/skillon_kannada" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-pink-400 hover:text-pink-300 transition-colors bg-pink-500/10 px-3 py-1 rounded-md">
                  <SiInstagram size={14} /> Instagram
                </a>
              </div>

              <ul className="text-sm text-gray-500 list-disc list-inside space-y-2">
                <li>Built the academy's website and handle its marketing.</li>
                <li>Support digital marketing campaigns and lead generation activities.</li>
              </ul>
            </div>

            {/* 2. Growzy Digital (Freelance Agency) */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl w-full">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-white">Founder & Freelance Digital Marketer</h3>
                <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full w-fit">2024 - Present</span>
              </div>
              <p className="text-gray-400 font-medium mb-3 text-sm sm:text-base">Growzy Digital (Freelance Agency)</p>
              
              {/* Growzy Instagram Link */}
              <div className="flex flex-wrap gap-3 mb-4 text-xs sm:text-sm">
                <a href="https://www.instagram.com/growzy.digital" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-pink-400 hover:text-pink-300 transition-colors bg-pink-500/10 px-3 py-1 rounded-md">
                  <SiInstagram size={14} /> Instagram
                </a>
              </div>

              <ul className="text-sm text-gray-500 list-disc list-inside space-y-2">
                <li>Handle multiple freelance clients end to end: website development, branding, competitor research, target audience research, Meta Ads and Google Ads campaigns.</li>
                <li>Built websites and ran Meta/Google Ads for subhamastucafe.in, indrabhayaquaratna.com, and malnadinteriors.co.in.</li>
              </ul>
            </div>

          </div>
        </motion.section>

        {/* --- SKILLS SECTION --- */}
        <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="pt-24">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-500 mb-6 sm:mb-8 flex items-center gap-4">
            Skills & Tools <span className="h-[1px] w-16 bg-blue-500/30"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            <div className="glass-card p-6 sm:p-8 rounded-3xl w-full">
              <div className="flex items-center gap-3 mb-5">
                <TrendingUp className="text-blue-500" size={24} />
                <h3 className="text-lg font-bold text-white">Marketing</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {['Meta Ads', 'Google Ads', 'GA4', 'SEO', 'Lead Gen', 'A/B Testing', 'LinkedIn Ads', 'TikTok Ads'].map(s => (
                  <span key={s} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300">{s}</span>
                ))}
              </div>
            </div>
            <div className="glass-card p-6 sm:p-8 rounded-3xl w-full">
              <div className="flex items-center gap-3 mb-5">
                <Code2 className="text-blue-500" size={24} />
                <h3 className="text-lg font-bold text-white">Development</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {['React', 'Next.js', 'Node.js', 'Tailwind', 'HTML/CSS', 'Git', 'JavaScript', 'MongoDB'].map(s => (
                  <span key={s} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- PROJECTS SECTION --- */}
        <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="pt-24 pb-12">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-500 mb-6 sm:mb-8 flex items-center gap-4">
            Featured Projects <span className="h-[1px] w-16 bg-blue-500/30"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            
            <a href="#" className="group glass-card rounded-3xl overflow-hidden block w-full">
              <div className="h-48 overflow-hidden bg-gray-900">
                <img src="/project1.jpg" alt="Subhamastu" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors flex justify-between items-center mb-3">
                  Subhamastu Cafe <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-gray-400 mb-5">Website dev & Meta/Google Ads for franchise leads.</p>
                <div className="flex gap-2 text-xs text-blue-400/80">
                  <span className="px-2.5 py-1 bg-blue-500/10 rounded-md">Web Dev</span>
                  <span className="px-2.5 py-1 bg-blue-500/10 rounded-md">Meta Ads</span>
                </div>
              </div>
            </a>

            <a href="#" className="group glass-card rounded-3xl overflow-hidden block w-full">
              <div className="h-48 overflow-hidden bg-gray-900">
                <img src="/project2.jpg" alt="Indrabhavya" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors flex justify-between items-center mb-3">
                  Indrabhavya <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-gray-400 mb-5">Website & targeted lead gen campaigns.</p>
                <div className="flex gap-2 text-xs text-blue-400/80">
                  <span className="px-2.5 py-1 bg-blue-500/10 rounded-md">Next.js</span>
                  <span className="px-2.5 py-1 bg-blue-500/10 rounded-md">Google Ads</span>
                </div>
              </div>
            </a>

            <a href="#" className="group glass-card rounded-3xl overflow-hidden block w-full">
              <div className="h-48 overflow-hidden bg-gray-900">
                <img src="/project3.jpg" alt="Malnad" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors flex justify-between items-center mb-3">
                  Malnad Interiors <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-gray-400 mb-5">Website design & data-driven Google Ads.</p>
                <div className="flex gap-2 text-xs text-blue-400/80">
                  <span className="px-2.5 py-1 bg-blue-500/10 rounded-md">Web Dev</span>
                  <span className="px-2.5 py-1 bg-blue-500/10 rounded-md">Google Ads</span>
                </div>
              </div>
            </a>
          </div>
        </motion.section>

      </main>

      {/* --- CONTACT SECTION --- */}
      <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full bg-[#020617] border-t border-blue-900/30">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 py-24 text-center">
          <Zap className="text-blue-500 mx-auto mb-6" size={40} />
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-5">Let's work together.</h2>
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

    </div>
  );
}