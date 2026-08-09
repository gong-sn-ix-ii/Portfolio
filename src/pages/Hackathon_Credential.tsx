import React, { useEffect, useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Trophy, Users, BrainCircuit, Target, Terminal, Medal, X, ZoomIn, MonitorPlay } from 'lucide-react';
import { Link } from 'react-router-dom';

// 📸 Import รูปภาพรางวัลหลัก (Award)
import award from "../assets/images/credentials/Hackathon 2024/AI Enginner Prompt Award.webp";

// 📸 Import รูปภาพแกลเลอรี่
import img1 from "../assets/images/credentials/Hackathon 2024/1.webp";
import img2 from "../assets/images/credentials/Hackathon 2024/2.webp";
import leaderboard from "../assets/images/credentials/Hackathon 2024/Leaderboard Score.webp";
import img3 from "../assets/images/credentials/Hackathon 2024/3.webp";
import img4 from "../assets/images/credentials/Hackathon 2024/4.webp";
import img5 from "../assets/images/credentials/Hackathon 2024/5.webp";
import img6 from "../assets/images/credentials/Hackathon 2024/6.webp";
import img7 from "../assets/images/credentials/Hackathon 2024/7.webp";
import img8 from "../assets/images/credentials/Hackathon 2024/8.webp";
import img9 from "../assets/images/credentials/Hackathon 2024/9.webp";

const highlights = [
  { icon: <Trophy className="w-5 h-5 text-yellow-400" />, title: "RANK", value: "8TH" },
  { icon: <Users className="w-5 h-5 text-blue-400" />, title: "TEAMS", value: "157" },
  { icon: <BrainCircuit className="w-5 h-5 text-purple-400" />, title: "TRACK", value: "AI PROMPT" },
];

const galleryImages = [
  { src: img1, title: "AI Hackathon 2024", desc: "ภาพรวมโครงการ AI Thailand Hakathon 2024" },
  { src: img2, title: "Prize Pool", desc: "รายละเอียดรางวัลการแข่งขัน" },
  { src: img3, title: "Competitors Stats", desc: "สถิติผู้เข้าร่วม 357 คนทั่วประเทศ" },
  { src: img4, title: "Track Levels", desc: "การแบ่งระดับความยากของโจทย์" },
  { src: img5, title: "Scoring Criteria", desc: "เกณฑ์การให้คะแนนสุดหิน" },
  { src: img6, title: "Rules", desc: "กติกาการใช้ Generative AI" },
  { src: img7, title: "Task: Ackermann's", desc: "โจทย์ระดับง่าย: อัลกอริทึมคณิตศาสตร์" },
  { src: img8, title: "Task: Classification", desc: "โจทย์ระดับยาก: จำแนกข้อความ (Part 1)" },
  { src: img9, title: "Task: Classification", desc: "โจทย์ระดับยาก: จำแนกข้อความ (Part 2)" },
];

// 🚀 OPTIMIZATION: ครอบคอมโพเนนต์ด้วย memo
const HackathonCredential: React.FC = memo(() => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section className="min-h-screen bg-[#030712] text-white pb-24 relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1E3A8A]/20 via-[#030712] to-transparent pointer-events-none" />
      <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <div className="pt-8 px-6 lg:px-24 max-w-7xl mx-auto relative z-20">
        <Link to="/#honors" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md w-fit group">
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Credentials</span>
        </Link>
      </div>

      {/* 1. HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 mt-12 mb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-widest uppercase mb-6">
              <Terminal className="w-3 h-3" /> AI_THAILAND_HACKATHON_2024
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 text-white uppercase leading-none">
              Prompt <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">Engineering</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-gray-600"></span>
              AI Hackathon 2024 Prompt Engineering
            </h2>
            
            <p className="text-base text-gray-400 font-light mb-10 max-w-2xl leading-relaxed">
              การแข่งขันระดับประเทศที่ท้าทายขีดจำกัดของการใช้ Generative AI.
              ผู้เข้าแข่งขันต้องใช้เทคนิค <strong className="text-white font-semibold">Prompt Engineering</strong>
              เพื่อสั่งการ AI ให้แก้โจทย์ปัญหาอัลกอริทึมซับซ้อนภายใต้ความกดดันของเวลาและข้อจำกัดของระบบ
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-lg">
              {highlights.map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-center backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    {item.icon}
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">{item.title}</span>
                  </div>
                  <p className="text-2xl font-black text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative group cursor-pointer"
            onClick={() => setSelectedImage(award)}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-blue-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-700"></div>
            <div className="relative bg-[#0A0F24] border border-white/10 rounded-2xl p-3 shadow-2xl">
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-yellow-500/30 flex items-center gap-2 z-10">
                <Trophy className="w-3 h-3 text-yellow-400" />
                <span className="text-[10px] font-mono text-yellow-400 uppercase font-bold tracking-widest">Awarded</span>
              </div>
              
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl z-10">
                 <ZoomIn className="w-12 h-12 text-white/80" />
              </div>

              {/* 🚀 OPTIMIZATION: รูปหลัก (LCP) บังคับโหลดทันทีด้วย fetchPriority="high" และ loading="eager" */}
              <img
                src={award}
                alt="AI Engineer Prompt Award"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="w-full h-auto max-h-[500px] object-cover rounded-xl"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* 2. LEADERBOARD HIGHLIGHT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 mb-24 relative z-10"
      >
        <div className="bg-gradient-to-br from-[#0F172A] to-[#030712] border border-yellow-500/30 rounded-[2rem] p-6 md:p-10 shadow-[0_0_50px_rgba(234,179,8,0.1)] relative overflow-hidden group cursor-pointer"
             onClick={() => setSelectedImage(leaderboard)}
        >
          <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
            <Trophy className="w-96 h-96" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Medal className="w-6 h-6 text-yellow-400" />
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide group-hover:text-yellow-400 transition-colors">Official Leaderboard</h3>
              </div>
              <p className="text-yellow-400/80 font-mono text-sm">Team: Ctrl-C Ctrl-V | Final Rank: 8th</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-white transition-colors">
              <ZoomIn className="w-4 h-4" /> Click to enlarge
            </div>
          </div>

          <div className="w-full border-2 border-white/5 rounded-xl overflow-hidden bg-black/50 backdrop-blur-sm relative z-10">
             {/* 🚀 OPTIMIZATION: รูปที่อยู่ด้านล่างให้ทำ Lazy Load */}
             <img 
               src={leaderboard} 
               alt="Final Leaderboard" 
               loading="lazy" 
               decoding="async" 
               className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500" 
             />
          </div>
        </div>
      </motion.div>

      {/* 3. SOLUTION EXPLANATION VIDEO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 mb-24 relative z-10"
      >
        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
          <MonitorPlay className="w-6 h-6 text-blue-400" />
          <h3 className="text-xl font-bold text-white font-mono uppercase tracking-widest">{'>>'} Solution_Breakdown</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-[#0F172A]/80 to-[#030712] border border-blue-900/50 rounded-[2rem] p-6 lg:p-8 shadow-xl">
          
          <div className="lg:col-span-8 relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.15)] bg-black">
            <iframe
              className="w-full aspect-video outline-none"
              src="https://www.youtube.com/embed/uUT-UaDJ77w"
              title="AI Hackathon 2024 Team Ctrl C Ctrl V"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono mb-4 w-fit">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> 10 Mins Watch
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
              Behind the Scenes <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Prompt Deep Dive</span>
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              วิดีโออธิบายเบื้องหลังแนวคิดและเทคนิคการเขียน Prompt เพื่อแก้โจทย์ทั้ง 6 ข้อ ตั้งแต่ระดับง่ายไปจนถึงระดับยาก (เช่น Ackermann's Function และ Text Classification) พร้อมเทคนิคการทำ Optimization ที่ทำให้ทีมฝ่าฟันขึ้นมาถึงอันดับ 8 ได้สำเร็จ
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300 font-mono">Algorithm Logic</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300 font-mono">Prompt Tuning</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300 font-mono">Problem Solving</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 4. EVENT GALLERY */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
          <Target className="w-6 h-6 text-yellow-400" />
          <h3 className="text-xl font-bold text-white font-mono uppercase tracking-widest">{'>>'} Event_Logs</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="group cursor-pointer flex flex-col"
              onClick={() => setSelectedImage(img.src)}
            >
              <div className="relative w-full aspect-video bg-[#0B1229] border border-white/10 rounded-xl overflow-hidden mb-3 group-hover:border-blue-500/50 transition-colors duration-300">
                <div className="absolute inset-0 bg-blue-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <ZoomIn className="w-8 h-8 text-white drop-shadow-md" />
                </div>
                {/* 🚀 OPTIMIZATION: แกลลอรี่ด้านล่างทั้งหมดต้องตั้งเป็น Lazy Load */}
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="px-1">
                <h4 className="text-sm font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{img.title}</h4>
                <p className="text-xs text-gray-500 font-mono">{img.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🌟 FULLSCREEN IMAGE MODAL 🌟 */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10 cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 z-50"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
});

export default HackathonCredential;