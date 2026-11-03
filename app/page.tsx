"use client";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3 } from "lucide-react";
import { SiGoogleads, SiMeta } from "react-icons/si";
import dynamic from "next/dynamic";

// ಕಾಂಪೊನೆಂಟ್‌ಗಳನ್ನು ಇಂಪೋರ್ಟ್ ಮಾಡುವುದು
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AIChat from "./components/AIChat"; // ಹೊಸ AI ಚಾಟ್ ಬಾಕ್ಸ್

// 3D ರೋಬೋಟ್ ಅನ್ನು ಡೈನಾಮಿಕ್ ಆಗಿ ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ
const Planet = dynamic(() => import("./components/Planet"), { ssr: false });

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#030712]">
      
      {/* Top Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pt-20 pb-0 w-full relative z-10">
        
        {/* 1. Hero Section */}
        <Hero />
        
        {/* 2. About Me Section */}
        <About />

        {/* ========================================= */}
        {/* 3. 3D CREATIVE SECTION (Robot & Icons) - About ನಂತರ ಇಲ್ಲಿದೆ */}
        {/* ========================================= */}
        <section className="relative w-full py-10 flex flex-col items-center justify-center overflow-hidden border-t border-white/5 mt-20">
           <div className="relative w-full max-w-4xl h-[350px] sm:h-[450px] md:h-[550px] flex items-center justify-center">
              
              {/* Static Icons */}
              <div className="absolute top-4 left-4 sm:top-8 sm:left-8 md:top-12 md:left-16 z-20">
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                  <SiGoogleads className="text-blue-400 text-2xl sm:text-4xl md:text-5xl" />
                </div>
              </div>

              <div className="absolute bottom-8 right-4 sm:bottom-12 sm:right-8 md:bottom-16 md:right-16 z-20">
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-[0_0_30px_rgba(6,104,225,0.3)]">
                  <SiMeta className="text-blue-500 text-2xl sm:text-4xl md:text-5xl" />
                </div>
              </div>

              <div className="absolute top-1/2 -right-2 sm:top-1/3 sm:right-4 z-20">
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                  <BarChart3 className="text-green-400 text-2xl sm:text-4xl md:text-5xl" />
                </div>
              </div>

              <div className="absolute bottom-1/4 left-2 sm:bottom-1/3 sm:left-4 md:left-8 z-20">
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                  <TrendingUp className="text-purple-400 text-2xl sm:text-4xl md:text-5xl" />
                </div>
              </div>

              {/* 3D Robot Component */}
              <Planet />
           </div>
        </section>

        {/* 4. Experience Section */}
        <Experience />
        
        {/* 5. Skills & Tools Section */}
        <Skills />
        
        {/* 6. Featured Projects Section */}
        <Projects />

      </main>

      {/* 7. Contact Section */}
      <Contact />

      {/* 8. Footer Section */}
      <Footer />

      {/* 9. AI Chatbot (ತೇಲುವ ಚಾಟ್ ಬಾಕ್ಸ್) */}
      <AIChat />
      
    </div>
  );
}