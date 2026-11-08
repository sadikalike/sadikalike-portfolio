"use client";
import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface Update {
  _id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

export default function Updates() {
  const [updates, setUpdates] = useState<Update[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/updates');
      const data = await res.json();
      if (data.success) setUpdates(data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] pt-24 pb-12 px-5 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Latest Updates</h1>
        <p className="text-blue-500 mb-10">News, Projects & Insights</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {updates.map((update) => (
            <div key={update._id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all">
              {update.image && <img src={update.image} alt={update.title} className="w-full h-48 object-cover" />}
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-2">{update.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{update.content}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500 border-t border-white/5 pt-3">
                  <Clock size={14} />
                  {new Date(update.createdAt).toLocaleDateString("en-IN", { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}