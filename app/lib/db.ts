import mongoose from 'mongoose';
import dns from 'dns';

// === Windows ನಲ್ಲಿ MongoDB DNS ಸಮಸ್ಯೆ ಪರಿಹಾರ ===
// Node.js ಗೆ Google ನ DNS ಬಳಸಲು ಸೂಚಿಸಿ
dns.setServers(['8.8.8.8', '8.8.4.4']);

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = { 
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000, // 5 ಸೆಕೆಂಡ್ ನಂತರ ಟೈಮ್ ಔಟ್
    };
    
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("✅ MongoDB Connected Successfully!");
      return mongoose;
    }).catch((err) => {
      console.error("❌ MongoDB Connection Error:", err.message);
      throw err;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;