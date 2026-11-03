"use client";
import { useState, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    { role: "assistant", content: "Hi! I'm Sadik's AI assistant. Ask me about his work, skills, or any marketing doubts!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // "Ask with AI" ನೋಟಿಫಿಕೇಶನ್ ಕಾಣಿಸಲು
  const [showNotification, setShowNotification] = useState(true);

  // ಪ್ರತಿ 10 ಸೆಕೆಂಡುಗಳಿಗೆ ಒಮ್ಮೆ ನೋಟಿಫಿಕೇಶನ್ ಬಂದು ಹೋಗುವಂತೆ ಮಾಡುವ ಲಾಜಿಕ್
  useEffect(() => {
    // ಚಾಟ್ ತೆರೆದಿದ್ದರೆ ನೋಟಿಫಿಕೇಶನ್ ತೋರಿಸಬೇಡ
    if (isOpen) {
      setShowNotification(false);
      return;
    }

    const interval = setInterval(() => {
      setShowNotification(true);
      
      // 3 ಸೆಕೆಂಡುಗಳ ನಂತರ ನೋಟಿಫಿಕೇಶನ್ ಮರೆಯಾಗುತ್ತದೆ
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      
    }, 10000); // 10000ms = 10 ಸೆಕೆಂಡುಗಳು

    return () => clearInterval(interval);
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] })
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      
      setTimeout(() => {
        setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
        setIsLoading(false);
      }, 800);

    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I'm having trouble connecting right now." }]);
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button Area */}
      <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
        
        {/* "Ask with AI" Notification - Pops up every 10 seconds */}
        <AnimatePresence>
          {showNotification && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-black border border-green-500 text-green-400 text-xs font-bold px-4 py-2 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] flex items-center gap-2 cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Ask with AI
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Icon Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="relative p-4 rounded-full bg-black text-white shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:shadow-[0_0_35px_rgba(34,197,94,0.5)] hover:scale-105 transition-all flex items-center justify-center border-2 border-green-500/50 hover:border-green-400"
        >
          <MessageCircle size={26} className="text-green-400" />
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-4 sm:right-6 z-[60] w-[calc(100vw-32px)] sm:w-[380px] h-[500px] bg-[#0a1128] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#030712] p-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 border border-green-500/30">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Sadik's AI Assistant</h3>
                  <p className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white bg-white/5 p-1.5 rounded-full transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user" 
                      ? "bg-green-600 text-white rounded-br-sm" 
                      : "bg-white/5 text-gray-300 border border-white/10 rounded-bl-sm"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-bl-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-white/10 bg-[#030712]">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 focus-within:border-green-500/50 focus-within:bg-white/10 transition-all">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about my work or marketing..."
                  className="flex-1 bg-transparent text-sm text-white outline-none placeholder-gray-500"
                />
                <button type="submit" disabled={isLoading} className="text-green-500 hover:text-green-400 disabled:opacity-50 p-1">
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}