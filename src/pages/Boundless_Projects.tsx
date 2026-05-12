import React, { useEffect, useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Smartphone, Zap, MessageCircle, Bell, Code2, ExternalLink, Code, X, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';

import img1 from "../assets/images/projects/boundless/1.webp"
import img2 from "../assets/images/projects/boundless/2.webp"
import img3 from "../assets/images/projects/boundless/3.webp"
import img4 from "../assets/images/projects/boundless/4.webp"
import img5 from "../assets/images/projects/boundless/5.webp"
import img6 from "../assets/images/projects/boundless/6.webp"
import img7 from "../assets/images/projects/boundless/7.webp"
import img8 from "../assets/images/projects/boundless/8.webp"
import img9 from "../assets/images/projects/boundless/9.webp"
import img10 from "../assets/images/projects/boundless/10.webp"

// 📱 ข้อมูลภาพหน้าจอแอปพลิเคชัน
const appScreens = [
  {
    id: 1,
    title: "Welcome Screen",
    description: "หน้าหลักสำหรับเข้าสู่ระบบหรือสมัครสมาชิก",
    image: img1
  },
  {
    id: 2,
    title: "Account Registration",
    description: "หน้าลงทะเบียนและสมัครบัญชีผู้ใช้งานใหม่",
    image: img2
  },
  {
    id: 3,
    title: "Social Interaction Feed",
    description: "หน้าแสดงโซเชียลฟีดและโพสต์ต่างๆ ของผู้ใช้งาน",
    image: img3
  },
  {
    id: 4,
    title: "Auction Marketplace",
    description: "หน้าสำหรับเข้าร่วมการประมูลสินค้า รูปภาพ และรายการอื่นๆ",
    image: img4
  },
  {
    id: 5,
    title: "User Profile Management",
    description: "จัดการข้อมูลส่วนตัว ข้อมูลโพสต์ และจำนวนผู้ติดตาม",
    image: img5
  },
  {
    id: 6,
    title: "Live Auction Details",
    description: "หน้าจอเข้าร่วมการประมูล พร้อมแสดงรายละเอียดการเสนอราคา (Bid) และราคาปัจจุบัน",
    image: img6
  },
  {
    id: 7,
    title: "Create Auction Listing",
    description: "ตั้งค่าและจัดการข้อมูลเพื่อเปิดประมูลสินค้า",
    image: img7
  },
  {
    id: 8,
    title: "Listing Status Processing",
    description: "หน้าต่างแสดงสถานะการสร้างโพสต์ประมูลสินค้าเข้าสู่ระบบ",
    image: img8
  },
  {
    id: 9,
    title: "Auction Dashboard",
    description: "ผู้จัดการประมูลสามารถแก้ไขและตรวจสอบสถานะการประมูลล่าสุดได้",
    image: img9
  },
  {
    id: 10,
    title: "Auction Results & Notifications",
    description: "แสดงผลผู้ชนะและส่งการแจ้งเตือนแบบ Real-Time ไปยังผู้เข้าร่วมประมูลทุกคนทันที",
    image: img10
  }
];

const techStack = [
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Android Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" }
];

const BoundlessProject: React.FC = memo(() => {
  // 🌟 เพิ่ม State สำหรับเก็บรููปที่ผู้ใช้คลิก
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🌟 ป้องกันการ Scroll หน้าเว็บเวลาเปิดดูรูปเต็มจอ
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
    <section className="min-h-screen bg-[#020617] text-white pb-24 relative overflow-hidden">
      
      {/* Background Gradients (แสงฟุ้งสีม่วง ตามธีมเว็บ) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#A855F7]/20 via-[#6200ff]/10 to-transparent blur-[120px] pointer-events-none" />

      {/* Navigation */}
      <div className="pt-8 px-6 lg:px-24 max-w-7xl mx-auto relative z-20">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md w-fit">
          <ChevronLeft className="w-5 h-5" />
          <span className="font-medium">Back to Portfolio</span>
        </Link>
      </div>

      {/* 1. HERO SECTION (Split Layout) */}
      <div className="max-w-6xl mx-auto px-6 mt-12 mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Content */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          {/* Badge เหลือง */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700] text-sm font-bold tracking-wide mb-6">
            <Smartphone className="w-4 h-4" /> MOBILE APPLICATION
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-white drop-shadow-md">
            Boundless
          </h1>
          
          <p className="text-xl text-gray-400 font-light mb-8 leading-relaxed">
            แอปพลิเคชันประมูลสินค้าและโซเชียลเน็ตเวิร์กแบบ <strong className="text-[#FFD700]">Real-time</strong> รวมทุกไลฟ์สไตล์ไว้ในที่เดียว ทั้งระบบติดตาม, กดไลค์, แชทสด, และแจ้งเตือนผู้ชนะประมูลทันที
          </p>

          {/* Tech Stack */}
          <div className="mb-10">
            <h3 className="text-sm font-mono text-gray-500 mb-4 tracking-wider">BUILT WITH</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl shadow-sm cursor-default">
                  <img src={tech.logo} alt={tech.name} className="w-5 h-5 object-contain" />
                  <span className="text-sm font-semibold text-gray-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <a href="https://github.com/gong-sn-ix-ii/Boundless.git" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#FFD700] to-[#F59E0B] text-black font-extrabold hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:-translate-y-1 transition-all">
            <Code className="w-5 h-5" />
            View on GitHub
          </a>
        </motion.div>

        {/* Right: Hero Mockups */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[600px] hidden lg:block"
        >
          {/* มือถือเครื่องหลัง */}
          <div className="absolute top-10 right-0 w-[260px] h-[550px] bg-gray-900 border-[8px] border-gray-800 rounded-[2.5rem] shadow-2xl transform rotate-6 opacity-60 overflow-hidden cursor-pointer hover:opacity-100 transition-opacity"
               onClick={() => setSelectedImage(appScreens[1].image)}
          >
             <img src={appScreens[1].image} alt="App Screen" fetchPriority="high" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity" />
          </div>
          
          {/* มือถือเครื่องหน้า */}
          <div className="absolute top-0 right-24 w-[280px] h-[600px] bg-black border-[10px] border-gray-800 rounded-[2.5rem] shadow-[0_0_50px_rgba(255,215,0,0.15)] overflow-hidden z-10 cursor-pointer group"
               onClick={() => setSelectedImage(appScreens[0].image)}
          >
            <div className="absolute top-0 inset-x-0 h-5 bg-gray-800 rounded-b-xl w-32 mx-auto z-20"></div>
            <img src={appScreens[0].image} alt="App Screen" fetchPriority="high" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
        </motion.div>

      </div>

      {/* 2. APP INTERFACE GALLERY */}
      <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            App <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#F59E0B]">Interface</span>
          </h2>
          <p className="text-gray-400 text-lg">หน้าจอการใช้งานจริงที่ออกแบบมาเพื่อประสบการณ์ที่ดีที่สุด</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {appScreens.map((screen, idx) => (
            <motion.div 
              key={screen.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 5) * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
              onClick={() => setSelectedImage(screen.image)} // 🌟 เรียกใช้ฟังก์ชันเปิดรูป
            >
              {/* Phone Mockup Frame */}
              <div className="relative w-full max-w-[240px] aspect-[9/19] bg-black border-[6px] border-gray-800 rounded-[2rem] overflow-hidden mb-4 group-hover:-translate-y-2 group-hover:border-gray-600 transition-all duration-500 shadow-xl group-hover:shadow-[0_15px_30px_rgba(255,215,0,0.15)]">
                <div className="absolute top-0 inset-x-0 h-3 bg-gray-800 rounded-b-lg w-20 mx-auto z-20 transition-colors duration-500 group-hover:bg-gray-600"></div>
                
                {/* 🌟 Overlay ตอน Hover เพื่อบอกว่าคลิกได้ */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <ZoomIn className="w-8 h-8 text-white drop-shadow-md" />
                </div>

                <img 
                  src={screen.image} 
                  alt={screen.title} 
                  loading="lazy" 
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              
              {/* Screen Description */}
              <div className="text-center px-2">
                <h3 className="text-sm font-bold text-white mb-1 group-hover:text-[#FFD700] transition-colors">{screen.title}</h3>
                <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-2">{screen.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. CORE FEATURES (Bento Box Text) */}
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0A0A0C] border border-gray-800 rounded-3xl p-8 hover:bg-white/5 transition-colors cursor-default">
            <Zap className="w-8 h-8 text-[#FFD700] mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Real-time Bidding</h3>
            <p className="text-gray-400 text-sm">สถาปัตยกรรมฐานข้อมูลแบบ Real-time (Firebase) ช่วยให้อัปเดตราคาประมูลได้ทันทีโดยไม่ต้องรีเฟรชหน้าจอ</p>
          </div>
          <div className="bg-[#0A0A0C] border border-gray-800 rounded-3xl p-8 hover:bg-white/5 transition-colors cursor-default">
            <MessageCircle className="w-8 h-8 text-[#FFD700] mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Social Connect</h3>
            <p className="text-gray-400 text-sm">เพิ่มมิติให้การประมูลด้วยระบบ Social Network ผู้ใช้สามารถแชทพูดคุย กดไลค์ และแชร์โพสต์กันได้</p>
          </div>
          <div className="bg-[#0A0A0C] border border-gray-800 rounded-3xl p-8 hover:bg-white/5 transition-colors cursor-default">
            <Bell className="w-8 h-8 text-[#FFD700] mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Smart Notifications</h3>
            <p className="text-gray-400 text-sm">ระบบแจ้งเตือนอัจฉริยะเมื่อมีคนเสนอราคาสูงกว่า หรือเมื่อคุณเป็นผู้ชนะการประมูลในสินค้านั้นๆ</p>
          </div>
        </div>
      </div>

      {/* 🌟 4. FULLSCREEN IMAGE MODAL 🌟 */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10 cursor-zoom-out"
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
              alt="Enlarged App Screen view"
              className="max-h-[90vh] w-auto max-w-full object-contain rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 cursor-default"
              onClick={(e) => e.stopPropagation()} // ป้องกันไม่ให้คลิกรูปแล้วหน้าต่างปิด
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
});

export default BoundlessProject;