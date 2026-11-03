"use client"; // ಇದು ಮುಖ್ಯ, ಮೆನು ಟಾಗಲ್ ಮಾಡಲು
import { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        
        {/* --- NAVBAR --- */}
        <nav className="fixed top-0 w-full z-50 border-b border-blue-900/30 bg-[#030712]/90 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              
              {/* Logo */}
              <div className="flex-shrink-0">
                <a href="#home" className="text-xl font-bold tracking-tighter text-white">
                  SADIK<span className="text-blue-500">.</span>
                </a>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-blue-400 hover:bg-blue-900/20 px-3 py-2 rounded-md text-sm font-medium transition-all"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA Button (Desktop) */}
              <div className="hidden md:block">
                <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all">
                  Hire Me
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-300 hover:text-white focus:outline-none p-2"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden bg-[#030712] border-b border-blue-900/30">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="flex-grow pt-16 overflow-x-hidden">
          {children}
        </main>

        {/* --- FOOTER --- */}
        <footer className="border-t border-blue-900/30 bg-[#020617] py-8 text-center text-sm text-gray-500">
          <p>© 2026 Muhammad Sadik P. Built with Next.js & Tailwind.</p>
        </footer>
      </body>
    </html>
  );
}