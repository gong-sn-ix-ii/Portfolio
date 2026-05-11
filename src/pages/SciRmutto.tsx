import React, { useEffect, useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Users, Award, Calendar, Activity, Flag, ZoomIn, X, Megaphone, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

// 📸 Import รูปภาพ
import certImg from "../assets/images/credentials/SciRmutto/00.jpg"; 
import img0 from "../assets/images/credentials/SciRmutto/0.jpg";
import img1 from "../assets/images/credentials/SciRmutto/1.jpg";
import img2 from "../assets/images/credentials/SciRmutto/2.jpg";
import img3 from "../assets/images/credentials/SciRmutto/3.jpg";
import img4 from "../assets/images/credentials/SciRmutto/4.jpg";
import img5 from "../assets/images/credentials/SciRmutto/5.jpg";
import img6 from "../assets/images/credentials/SciRmutto/6.jpg";
import img7 from "../assets/images/credentials/SciRmutto/7.jpg";
import img8 from "../assets/images/credentials/SciRmutto/8.jpg";
import img9 from "../assets/images/credentials/SciRmutto/9.jpg";
import img10 from "../assets/images/credentials/SciRmutto/10.jpg";

import cerScismo from "../assets/images/credentials/SciRmutto/sci.png"

// 🏆 ข้อมูลทักษะ Soft Skills ที่ได้จากการทำกิจกรรม
const leadershipSkills = [
  { icon: <Activity className="w-5 h-5 text-yellow-400" />, title: "Sports Management", desc: "บริหารจัดการและดำเนินการจัดการแข่งขันกีฬาของคณะ" },
  { icon: <Megaphone className="w-5 h-5 text-blue-400" />, title: "Event Coordination", desc: "ประสานงานระหว่างคณาจารย์และนักศึกษาเพื่อจัดกิจกรรมส่วนรวม" },
  { icon: <Target className="w-5 h-5 text-green-400" />, title: "Team Leadership", desc: "นำทีมและแก้ไขปัญหาเฉพาะหน้าในการจัดโครงการต่างๆ" },
];

// 🖼️ ข้อมูลแกลเลอรี่กิจกรรมนักศึกษา
const galleryImages = [
  { src: img0, title: "Student Council Board", desc: "คณะกรรมการสโมสรนักศึกษา" },
  { src: img1, title: "Outdoor Activities", desc: "กิจกรรมสันทนาการและสานสัมพันธ์นักศึกษา" },
  { src: img2, title: "Payomgame 2025", desc: "กิจกรรมการแข่งขันกีฬาภายในมหาวิทยาลัย พะยอมเกมส์ครั้งที่ 17 ปี 2567" },
  { src: img3, title: "Payomgame 2025", desc: "กิจกรรมการแข่งขันกีฬาภายในมหาวิทยาลัย พะยอมเกมส์ครั้งที่ 17 ปี 2567 สานสันพันธ์" },
  { src: img5, title: "กิจกรรมไหว้ครู", desc: "กิจกรรมไหว้ครู คณะวิทยาศาสตร์" },
  { src: img8, title: "Cheer & Spirit", desc: "กิจกรรมเชียร์และเสริมสร้างความสามัคคี" },
  { src: img9, title: "Cheer & Spirit", desc: "กิจกรรมเชียร์และเสริมสร้างความสามัคคี" },
  { src: img10, title: "Cheer & Spirit", desc: "กิจกรรมเชียร์และเสริมสร้างความสามัคคี" },  
  { src: img6, title: "Cheer & Spirit", desc: "กิจกรรมสานสันพันธ์น้องใหม่และเสริมสร้างความสามัคคี" },
  { src: img7, title: "Cheer & Spirit", desc: "กิจกรรมสานสันพันธ์น้องใหม่และเสริมสร้างความสามัคคี" },
];

// 🚀 OPTIMIZATION: ใช้ memo ครอบเพื่อรีดประสิทธิภาพการ Render
const SciRmuttoCredential: React.FC = memo(() => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ป้องกันการ Scroll หน้าเว็บตอนเปิด Modal ซูมรูป
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
    <section className="min-h-screen bg-[#070B14] text-white pb-24 relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1E3A8A]/30 via-[#070B14] to-transparent pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-yellow-600/10 blur-[150px] rounded-full pointer-events-none" />

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
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              <Users className="w-3 h-3" /> STUDENT_UNION_BOARD
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white uppercase drop-shadow-md leading-tight">
              Faculty of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Science & Technology</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-yellow-400 mb-8 border-l-4 border-yellow-500 pl-4">
              ประธานสภา ฝ่ายกีฬา (Head of Sports Department)
            </h2>
            
            <p className="text-base text-gray-400 font-light mb-10 leading-relaxed max-w-2xl">
              ได้รับความไว้วางใจให้ดำรงตำแหน่ง <strong className="text-white font-semibold">ประธานสภา ฝ่ายกีฬา</strong> ประจำสโมสรนักศึกษา คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออก 
              คอยช่วยเหลือรับผิดชอบการบริหารจัดการกิจกรรมร่วมกับนายกสโมสรนักศึกษา และคอยประสานงานระหว่างบุคลากรและนักศึกษา ได้พัฒนาทักษะความเป็นผู้นำในการจัดโครงการส่วนรวมเพื่อพัฒนาศักยภาพของนักศึกษา
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              {leadershipSkills.map((item, idx) => (
                <div key={idx} className="bg-[#0D1528] border border-white/5 rounded-xl p-4 flex flex-col justify-start backdrop-blur-sm hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center gap-2 mb-3 bg-white/5 w-fit p-2 rounded-lg">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ฝั่งขวา: ภาพรับเกียรติบัตร */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative group cursor-pointer"
            onClick={() => setSelectedImage(cerScismo)}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-blue-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-700"></div>
            
            <div className="relative bg-[#0A1020] border border-white/10 rounded-2xl p-3 shadow-2xl overflow-hidden">
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-yellow-500/30 flex items-center gap-2 z-10 shadow-lg">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-[10px] font-mono text-yellow-400 uppercase font-bold tracking-widest">Official Recognition</span>
              </div>
              
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 backdrop-blur-[1px] rounded-xl">
                 <ZoomIn className="w-12 h-12 text-white/80" />
              </div>

              {/* 🚀 OPTIMIZATION: บังคับโหลดรูป LCP นี้เป็นอันดับแรก */}
              <img 
                src={cerScismo} 
                alt="Student Union Official Certificate" 
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="w-full h-auto max-h-[450px] object-cover rounded-xl group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <p className="text-center text-xs text-gray-500 mt-4 font-mono">คณะกรรมการสโมสรนักศึกษา ปีการศึกษา 2566 - 2567</p>
          </motion.div>

        </div>
      </div>

      {/* 2. ACTIVITY GALLERY */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
          <Flag className="w-6 h-6 text-blue-400" />
          <h3 className="text-xl font-bold text-white font-mono uppercase tracking-widest">{">>"} Activities_&_Events</h3>
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
              <div className="relative w-full aspect-[4/3] bg-[#0A1020] border border-white/10 rounded-xl overflow-hidden mb-3 group-hover:border-yellow-500/40 group-hover:shadow-[0_5px_20px_rgba(234,179,8,0.15)] transition-all duration-300">
                <div className="absolute inset-0 bg-[#0A1020]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 backdrop-blur-[2px]">
                  <ZoomIn className="w-10 h-10 text-white drop-shadow-lg" />
                </div>

                {/* 🚀 OPTIMIZATION: รูปกิจกรรมด้านล่างให้ทำ Lazy Load ทั้งหมด */}
                <img 
                  src={img.src} 
                  alt={img.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                />
              </div>
              <div className="px-1 border-l-2 border-transparent group-hover:border-yellow-500 pl-2 transition-colors">
                <h4 className="text-sm font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">{img.title}</h4>
                <p className="text-xs text-gray-500">{img.desc}</p>
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
              alt="Activity Zoom"
              className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_50px_rgba(59,130,246,0.3)] border border-white/10 cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
});

export default SciRmuttoCredential;