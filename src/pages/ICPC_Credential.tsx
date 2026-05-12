import React, { useEffect, useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, MapPin, Users, Code2, Terminal, Cpu, X, ZoomIn, Braces } from 'lucide-react';
import { Link } from 'react-router-dom';

// 📸 Import โลโก้การแข่งขัน
import logo from "../assets/images/credentials/ICPC 2024/logo.webp";

// 📸 Import รูปภาพแกลเลอรี่ 1-9 (.webp)
import img1 from "../assets/images/credentials/ICPC 2024/1.webp";
import img2 from "../assets/images/credentials/ICPC 2024/2.webp";
import img3 from "../assets/images/credentials/ICPC 2024/3.webp";
import img4 from "../assets/images/credentials/ICPC 2024/4.webp";
import img5 from "../assets/images/credentials/ICPC 2024/5.webp";
import img6 from "../assets/images/credentials/ICPC 2024/6.webp";
import img7 from "../assets/images/credentials/ICPC 2024/7.webp";
import img8 from "../assets/images/credentials/ICPC 2024/8.webp";
import img9 from "../assets/images/credentials/ICPC 2024/9.webp";

const highlights = [
  { icon: <MapPin className="w-5 h-5 text-red-500" />, title: "VENUE", value: "ENG, CHULA", desc: "คณะวิศวกรรมศาสตร์ จุฬาฯ" },
  { icon: <Users className="w-5 h-5 text-white" />, title: "TEAMS", value: "57 Teams", desc: "ตัวแทนจาก 16 มหาวิทยาลัย" },
  { icon: <Braces className="w-5 h-5 text-red-500" />, title: "SKILLS", value: "DSA & C++", desc: "Algorithms & Data Structures" },
];

const galleryImages = [
  { src: img1, title: "Team Registration", desc: "ภาพถ่ายทีมผู้เข้าแข่งขันหน้า Backdrop" },
  { src: img2, title: "Group Photo", desc: "รวมตัวแทนมหาวิทยาลัยจากทั่วประเทศ ณ หอประชุม" },
  { src: img3, title: "Opening Ceremony", desc: "รวมทีมแข่งของมหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออก" },
  { src: img4, title: "Rules & Briefing", desc: "เตรียมความพร้อมก่อนเข้าสู่ห้องปฏิบัติการคอมพิวเตอร์" },
  { src: img5, title: "System Introduction", desc: "การอธิบายระบบ Judge สำหรับส่งคำตอบ" },
  { src: img6, title: "Pre-Contest Preparation", desc: "รับฟังการชี้แจงกติกาและข้อกำหนดจากคณะกรรมการ" },
  { src: img7, title: "Contest Phase", desc: "บรรยากาศการแข่งขันจริงในห้องแล็บสุดเข้มข้น" },
  { src: img8, title: "Team Collaboration", desc: "ระดมสมองวิเคราะห์และออกแบบ Data Structure" },
  { src: img9, title: "Coding & Debugging", desc: "เขียนโปรแกรมและไล่หาบั๊กเพื่อพิชิตโจทย์ในข้อต่างๆ" },
];

// 🚀 OPTIMIZATION: ครอบคอมโพเนนต์ด้วย memo
const ICPCCredential: React.FC = memo(() => {
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
    <section className="min-h-screen bg-[#050505] text-white pb-24 relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-[#050505] to-transparent pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <div className="pt-8 px-6 lg:px-24 max-w-7xl mx-auto relative z-20">
        <Link to="/#honors" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md w-fit group">
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Credentials</span>
        </Link>
      </div>

      {/* 1. HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 mt-12 mb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* ฝั่งซ้าย: เนื้อหา */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-red-900/20 border border-red-500/30 text-red-500 text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(220,38,38,0.15)]">
              <Terminal className="w-3 h-3" /> COMPETITIVE_PROGRAMMING
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 text-white uppercase drop-shadow-md">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">ICPC</span> 2024
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-8 font-mono border-l-4 border-red-600 pl-4">
              International Collegiate Programming Contest
            </h2>
            
            <p className="text-base text-gray-400 font-light mb-10 leading-relaxed max-w-2xl">
              ตัวแทนมหาวิทยาลัยเข้าร่วมการแข่งขันเขียนโปรแกรมระดับอุดมศึกษาที่เก่าแก่และทรงเกียรติที่สุดในโลก 
              ณ <strong className="text-white font-semibold">คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย</strong> 
              ประชันทักษะการแก้โจทย์ปัญหา (Problem Solving), การออกแบบอัลกอริทึม (Algorithms), และโครงสร้างข้อมูล (Data Structures) ขั้นสูง
            </p>

            {/* Stats Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-lg">
              {highlights.map((item, idx) => (
                <div key={idx} className="bg-[#0A0A0A] border border-white/10 rounded-xl p-4 flex flex-col justify-center backdrop-blur-sm hover:border-red-500/30 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    {item.icon}
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{item.title}</span>
                  </div>
                  <p className="text-2xl font-black text-white">{item.value}</p>
                  <p className="text-[10px] text-gray-500 mt-1 uppercase">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ฝั่งขวา: โลโก้ ICPC */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative group cursor-pointer"
            onClick={() => setSelectedImage(logo)}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-black rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-700"></div>
            
            <div className="relative bg-black border border-white/10 rounded-2xl p-2 shadow-[0_0_40px_rgba(220,38,38,0.1)] overflow-hidden">
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 backdrop-blur-sm">
                 <ZoomIn className="w-12 h-12 text-white/80" />
              </div>

              {/* 🚀 OPTIMIZATION: โลโก้ Hero บังคับโหลดทันทีด้วย fetchPriority="high" */}
              <img 
                src={logo} 
                alt="ICPC Thailand 2024 Logo" 
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="w-full h-auto object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* 2. EVENT GALLERY */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
          <Code2 className="w-6 h-6 text-red-500" />
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
              <div className="relative w-full aspect-video bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden mb-3 group-hover:border-red-500/50 group-hover:shadow-[0_5px_20px_rgba(220,38,38,0.15)] transition-all duration-300">
                
                <div className="absolute inset-0 bg-red-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 backdrop-blur-[1px]">
                  <ZoomIn className="w-8 h-8 text-white drop-shadow-lg" />
                </div>

                {/* 🚀 OPTIMIZATION: รูปภาพแกลลอรี่ทั้งหมดตั้งเป็น Lazy Load */}
                <img 
                  src={img.src} 
                  alt={img.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                />
              </div>
              <div className="px-1 border-l-2 border-transparent group-hover:border-red-500 pl-2 transition-colors">
                <h4 className="text-sm font-bold text-white mb-1 group-hover:text-red-400 transition-colors">{img.title}</h4>
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
              alt="ICPC 2024 Event Zoom"
              className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_50px_rgba(220,38,38,0.2)] border border-white/10 cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
});

export default ICPCCredential;