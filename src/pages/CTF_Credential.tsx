import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Shield, Sword, Lock, Search, Terminal, X, ZoomIn, Flag } from 'lucide-react';
import { Link } from 'react-router-dom';

// 📸 Import รูปภาพ (ปรับ Path ให้ตรงกับโฟลเดอร์ของคุณ)
import certImg from "../assets/images/credentials/CTF/CTF_Cert Senior THCTT24_Num675_page-0001.webp";
import posterImg from "../assets/images/credentials/CTF/Logo.webp";

// 🛡️ ข้อมูลทักษะที่ใช้ใน CTF (เพื่อเติมเต็มเนื้อหาให้ดูโปรขึ้น แม้จะมีรูปน้อย)
const ctfSkills = [
  { icon: <Search className="w-5 h-5 text-blue-400" />, title: "Web Exploitation", desc: "วิเคราะห์และเจาะช่องโหว่บนเว็บแอปพลิเคชัน" },
  { icon: <Lock className="w-5 h-5 text-white" />, title: "Cryptography", desc: "ถอดรหัสและวิเคราะห์กลไกการเข้ารหัสข้อมูล" },
  { icon: <Shield className="w-5 h-5 text-blue-400" />, title: "Digital Forensics", desc: "สืบสวนและแกะรอยหลักฐานทางดิจิทัล" },
  { icon: <Terminal className="w-5 h-5 text-red-500" />, title: "Reverse Engineering", desc: "วิศวกรรมย้อนกลับเพื่อวิเคราะห์การทำงานของโปรแกรม" },
];

const CTFCredential: React.FC = () => {
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
    <section className="min-h-screen bg-[#05050A] text-white pb-24 relative overflow-hidden font-sans">
      
      {/* Background Decor (Red vs Blue Cyber Theme) */}
      <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-red-600/20 blur-[150px] rounded-full" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

      {/* Navigation */}
      <div className="pt-8 px-6 lg:px-24 max-w-7xl mx-auto relative z-20">
        <Link to="/#honors" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md w-fit group">
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Credentials</span>
        </Link>
      </div>

      {/* 1. HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 mt-12 mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/50 border border-white/20 text-white text-sm font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <Flag className="w-4 h-4 text-red-500" /> CAPTURE THE FLAG 2024
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 uppercase drop-shadow-lg leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Thailand</span> Cyber <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Top Talent</span>
          </h1>
          <h2 className="text-xl font-medium text-gray-300 mb-8 font-mono border-b border-white/10 pb-6 inline-block">
            Cybersecurity & Penetration Testing Competition
          </h2>
          
          <p className="text-base text-gray-400 font-light leading-relaxed">
            เข้าร่วมการแข่งขันด้านความมั่นคงปลอดภัยทางไซเบอร์ระดับประเทศ 
            ประชันทักษะการค้นหาช่องโหว่ (Red Team) และการป้องกันระบบ (Blue Team) 
            ผ่านโจทย์ปัญหาจำลองสถานการณ์จริงสุดท้าทาย
          </p>
        </motion.div>
      </div>

      {/* 2. SHOWCASE SECTION (แบ่งซ้ายขวา เกียรติบัตร vs โปสเตอร์) */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ซ้าย: โปสเตอร์งาน (Context) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col h-full"
          >
            <div className="bg-[#0A0A0F] border border-blue-900/50 rounded-2xl p-4 flex-1 shadow-xl group cursor-pointer"
                 onClick={() => setSelectedImage(posterImg)}>
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-500" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Event Details</h3>
                </div>
                <ZoomIn className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
              </div>
              <div className="relative w-full rounded-xl overflow-hidden border border-white/5 bg-black">
                <img 
                  src={posterImg} 
                  alt="THCTT 2024 Poster" 
                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="mt-6 px-2 space-y-3">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-xs text-gray-500 font-mono">CATEGORY</span>
                  <span className="text-sm text-white font-semibold">Senior Level</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-xs text-gray-500 font-mono">TYPE</span>
                  <span className="text-sm text-red-400 font-semibold">Jeopardy CTF</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ขวา: เกียรติบัตร (Highlight) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 flex flex-col h-full"
          >
            <div className="relative bg-[#0A0A0F] border border-red-900/50 rounded-2xl p-6 md:p-8 flex-1 shadow-[0_0_40px_rgba(220,38,38,0.1)] group cursor-pointer"
                 onClick={() => setSelectedImage(certImg)}>
              
              {/* Glow Effect สีแดง/น้ำเงิน */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Sword className="w-6 h-6 text-red-500" />
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider">Official Certificate</h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 group-hover:bg-white/10 transition-colors">
                    <ZoomIn className="w-4 h-4" /> Click to Verify
                  </div>
                </div>

                <div className="w-full flex-1 flex items-center justify-center border-2 border-white/5 rounded-xl overflow-hidden bg-black/50 p-2">
                  <img 
                    src={certImg} 
                    alt="CTF Certificate" 
                    className="w-full h-auto max-h-[400px] object-contain drop-shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* 3. SKILLS DOMAIN (เติมเนื้อหาให้หน้าเว็บดูโปรขึ้น) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
          <Terminal className="w-6 h-6 text-white" />
          <h3 className="text-xl font-bold text-white font-mono uppercase tracking-widest">{'>>'} Security_Domains</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ctfSkills.map((skill, idx) => (
            <div key={idx} className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl p-5 hover:border-red-500/50 hover:bg-white/5 transition-colors">
              <div className="mb-4 bg-black/50 w-10 h-10 rounded-lg flex items-center justify-center border border-white/5">
                {skill.icon}
              </div>
              <h4 className="text-sm font-bold text-white mb-2">{skill.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 🌟 FULLSCREEN IMAGE MODAL 🌟 */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10 cursor-zoom-out"
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
              alt="CTF Credential Zoom"
              className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_50px_rgba(220,38,38,0.2)] border border-white/10 cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default CTFCredential;