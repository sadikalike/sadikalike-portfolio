"use client";
import { useState, useEffect, useRef } from "react";
import { PlusCircle, Image as ImageIcon, Send, Lock, User, Trash2, Upload } from "lucide-react";

interface Update {
  _id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string>(""); 
  const [updates, setUpdates] = useState<Update[]>([]);
  const [loading, setLoading] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const ADMIN_USERNAME = "sadikalike";
  const ADMIN_PASSWORD = "sadik@123";

  useEffect(() => {
    const auth = sessionStorage.getItem("isAdminAuthenticated");
    if (auth === "true") {
      setIsAuthenticated(true);
      loadUpdates();
    }
  }, []);

  const loadUpdates = async () => {
    try {
      const res = await fetch('/api/updates');
      const data = await res.json();
      if (data.success) setUpdates(data.data);
    } catch (err) {
      console.error("Failed to load updates", err);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("isAdminAuthenticated", "true");
      loadUpdates();
      setError("");
    } else {
      setError("Invalid Username or Password!");
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;
    setLoading(true);

    try {
      const res = await fetch('/api/updates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          title, 
          content, 
          image: image || "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400&auto=format&fit=crop" 
        }),
      });

      if (res.ok) {
        setTitle(""); setContent(""); setImage("");
        if (fileInputRef.current) fileInputRef.current.value = "";
        loadUpdates();
        alert("Posted Successfully!");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to post update.");
    } finally {
      setLoading(false);
    }
  };

  // === ಇಲ್ಲಿ ಡೇಟಾಬೇಸ್‌ನಿಂದ ಡಿಲೀಟ್ ಮಾಡುವ ಲಾಜಿಕ್ ಇದೆ ===
  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this update?")) {
      try {
        const res = await fetch(`/api/updates?id=${id}`, {
          method: 'DELETE',
        });

        if (res.ok) {
          loadUpdates(); // ಡಿಲೀಟ್ ಆದ ನಂತರ ಪಟ್ಟಿಯನ್ನು ರಿಫ್ರೆಶ್ ಮಾಡಿ
        } else {
          alert("Failed to delete from database.");
        }
      } catch (error) {
        console.error(error);
        alert("Something went wrong while deleting.");
      }
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("isAdminAuthenticated");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#030712] px-4">
        <div className="w-full max-w-md bg-[#0a1128] border border-white/10 p-8 rounded-3xl shadow-2xl">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 border border-blue-500/20">
              <Lock className="text-blue-500" size={32} />
            </div>
            <h1 className="text-2xl font-bold text-white">Admin Login</h1>
            <p className="text-gray-400 text-sm mt-2">Enter credentials to access the dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-gray-500" size={18} />
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 pl-10 text-white outline-none focus:border-blue-500" placeholder="Username" required />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-gray-500" size={18} />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 pl-10 text-white outline-none focus:border-blue-500" placeholder="Password" required />
            </div>
            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl transition-all">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030712] p-5 sm:p-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3"><PlusCircle className="text-blue-500" /> Admin Panel</h1>
          <button onClick={handleLogout} className="text-sm text-red-400 hover:text-red-300 border border-red-500/30 bg-red-500/10 px-4 py-2 rounded-lg transition-all">Logout</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0a1128] border border-white/10 p-6 rounded-2xl h-fit">
            <h2 className="text-xl text-white font-semibold mb-4">Post New Update</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-blue-500" placeholder="Title" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Content</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-blue-500 h-32 resize-none" placeholder="Content" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Image (Optional)</label>
                <div className="flex flex-col gap-2">
                  <div onClick={() => fileInputRef.current?.click()} className="w-full bg-white/5 border border-dashed border-white/20 hover:border-blue-500/50 hover:bg-white/10 rounded-lg p-4 cursor-pointer flex flex-col items-center justify-center gap-2 transition-all">
                    <Upload className="text-blue-400" size={24} />
                    <p className="text-sm text-gray-300">Click to upload</p>
                  </div>
                  <div className="relative mt-2">
                    <ImageIcon className="absolute left-3 top-3 text-gray-500" size={18} />
                    <input type="text" value={image.startsWith('data:') ? '' : image} onChange={(e) => setImage(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 pl-10 text-white outline-none focus:border-blue-500 text-sm" placeholder="Or paste Image URL" />
                  </div>
                  {image && (
                    <div className="mt-2 relative w-full h-32 rounded-lg overflow-hidden border border-white/10">
                      <img src={image} alt="Preview" className="w-full h-full object-cover" />
                      <button type="button" onClick={() => setImage("")} className="absolute top-1 right-1 bg-black/60 text-white p-1 rounded-full hover:bg-red-500 transition-colors"><Trash2 size={14} /></button>
                    </div>
                  )}
                </div>
                <input type="file" accept="image/*" onChange={handleImageUpload} ref={fileInputRef} className="hidden" />
              </div>
              <button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 mt-4">
                <Send size={18} /> {loading ? "Publishing..." : "Publish Update"}
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl text-white font-semibold mb-4">Recent Updates</h2>
            {updates.length === 0 ? (
              <p className="text-gray-500 text-sm">No updates yet.</p>
            ) : (
              updates.map((update) => (
                <div key={update._id} className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-4 relative group">
                  {update.image && <img src={update.image} alt={update.title} className="w-20 h-20 object-cover rounded-lg" />}
                  <div className="flex-1 pr-14">
                    <h3 className="text-white font-semibold">{update.title}</h3>
                    <p className="text-xs text-gray-400 mt-1">{new Date(update.createdAt).toLocaleDateString()}</p>
                  </div>
                  <button onClick={() => handleDelete(update._id)} className="absolute top-1/2 -translate-y-1/2 right-2 p-3 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-xl transition-all shadow-lg border border-red-500/20" title="Delete"><Trash2 size={24} /></button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}