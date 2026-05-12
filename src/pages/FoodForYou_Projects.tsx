import React, { useEffect, useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Smartphone, Zap, Store, Bell, Code, ZoomIn, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import img1 from "../assets/images/projects/FoodForYou/1.webp"
import img2 from "../assets/images/projects/FoodForYou/2.webp"
import img3 from "../assets/images/projects/FoodForYou/3.webp"
import img4 from "../assets/images/projects/FoodForYou/4.webp"
import img5 from "../assets/images/projects/FoodForYou/5.webp"
import img6 from "../assets/images/projects/FoodForYou/6.webp"
import img7 from "../assets/images/projects/FoodForYou/7.webp"
import img8 from "../assets/images/projects/FoodForYou/8.webp"
import img9 from "../assets/images/projects/FoodForYou/9.webp"
import img10 from "../assets/images/projects/FoodForYou/10.webp"
import img10_1 from "../assets/images/projects/FoodForYou/10_1.webp"
import img11 from "../assets/images/projects/FoodForYou/11.webp"
import img12 from "../assets/images/projects/FoodForYou/12.webp"
import img13 from "../assets/images/projects/FoodForYou/13.webp"
import img14 from "../assets/images/projects/FoodForYou/14.webp"
import img15 from "../assets/images/projects/FoodForYou/15.webp"
import img16 from "../assets/images/projects/FoodForYou/16.webp"
import img17 from "../assets/images/projects/FoodForYou/17.webp"

// 📱 ข้อมูลภาพหน้าจอแอปพลิเคชัน
const appScreens = [
  { 
    id: 1, 
    title: "Welcome Screen", 
    description: "หน้าแรกของแอปพลิเคชัน FoodForYou สำหรับเริ่มต้นการใช้งาน", 
    image: img1 
  },
  { 
    id: 2, 
    title: "User Login", 
    description: "หน้าต่างเข้าสู่ระบบสำหรับผู้ใช้งาน", 
    image: img2 
  },
  { 
    id: 3, 
    title: "Account Registration", 
    description: "หน้าลงทะเบียนและสมัครบัญชีผู้ใช้งานใหม่", 
    image: img3 
  },
  { 
    id: 4, 
    title: "Main Order Screen", 
    description: "หน้าหลักของแอปพลิเคชันสำหรับจัดการและทำรายการออเดอร์", 
    image: img4 
  },
  { 
    id: 5, 
    title: "Restaurant Menu", 
    description: "หน้าแสดงรายการเมนูอาหารทั้งหมดพร้อมราคาของร้าน", 
    image: img5 
  },
  { 
    id: 6, 
    title: "Menu Management", 
    description: "ระบบจัดการเพิ่มรายการอาหารและหมวดหมู่เมนูของร้าน", 
    image: img6 
  },
  { 
    id: 7, 
    title: "Quick Order Entry", 
    description: "บันทึกรายการอาหารที่เลือกเพื่อความรวดเร็วในการสั่งซื้อ", 
    image: img7 
  },
  { 
    id: 8, 
    title: "System Processing", 
    description: "หน้าต่างแสดงสถานะกำลังดำเนินการระบบ...", 
    image: img8 
  },
  { 
    id: 9, 
    title: "Order Summary", 
    description: "ระบุจำนวนรายการอาหารที่สั่ง พร้อมแสดงสรุปยอดชำระเงินรวม", 
    image: img9 
  },
  { 
    id: 10, 
    title: "Restaurant Order Queue", 
    description: "ระบบฝั่งร้านอาหารสำหรับรับออเดอร์ พร้อมแสดงคิวที่ต้องจัดเตรียม", 
    image: img10 
  },
  { 
    id: 18, 
    title: "Order Status Tracking", 
    description: "หน้าต่างแสดงรายการออเดอร์ที่ดำเนินการสำเร็จและออเดอร์ที่ถูกยกเลิก", 
    image: img10_1 
  },
  { 
    id: 11, 
    title: "Order Details", 
    description: "แสดงรายละเอียดเมนูอาหารที่ต้องจัดเตรียมในแต่ละคิว", 
    image: img11 
  },
  { 
    id: 12, 
    title: "Order Confirmation", 
    description: "จัดการสถานะออเดอร์ (เสร็จสิ้น/ยกเลิก) เพื่อสรุปและบันทึกลงระบบ", 
    image: img12 
  },
  { 
    id: 13, 
    title: "Order History", 
    description: "แสดงประวัติการสั่งซื้อที่เสร็จสิ้น พร้อมสรุปรายการและยอดชำระ", 
    image: img13 
  },
  { 
    id: 14, 
    title: "Sales Dashboard", 
    description: "หน้าแดชบอร์ดสรุปข้อมูลสถิติและยอดขายทั้งหมดของร้านอาหาร", 
    image: img14 
  },
  { 
    id: 15, 
    title: "Help & Support", 
    description: "ช่องทางสำหรับส่งข้อมูลเพื่อแจ้งปัญหาการใช้งานหรือขอความช่วยเหลือ", 
    image: img15 
  },
  { 
    id: 16, 
    title: "QR Code Management", 
    description: "ฟังก์ชันสร้างและสแกน QR Code สำหรับระบบการสั่งอาหารออนไลน์", 
    image: img16 
  },
  { 
    id: 17, 
    title: "QR Code Scanner", 
    description: "หน้าต่างใช้งานกล้องสำหรับสแกน QR Code เพื่อทำรายการ", 
    image: img17 
  },
];

const techStack = [
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Android Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" }
];

// 🚀 OPTIMIZATION: ใช้ memo ครอบเพื่อรีด Performance
const FoodForYouProject: React.FC = memo(() => {
  // 🌟 เพิ่ม State สำหรับเก็บสถานะรูปภาพที่ถูกคลิกดูเต็มจอ
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🌟 ล็อกการ Scroll หน้าเว็บตอนเปิดดูรูป
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
      
      {/* Background Gradients (แสงฟุ้งสีส้มผสมฟ้า) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#F97316]/20 via-[#38BDF8]/10 to-transparent blur-[120px] pointer-events-none" />

      {/* Navigation */}
      <div className="pt-8 px-6 lg:px-24 max-w-7xl mx-auto relative z-20">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md w-fit group">
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Portfolio</span>
        </Link>
      </div>

      {/* 1. HERO SECTION (Split Layout) */}
      <div className="max-w-6xl mx-auto px-6 mt-12 mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Content */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          {/* Badge ส้ม-ขาว */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/30 text-[#F97316] text-sm font-bold tracking-wide mb-6">
            <Smartphone className="w-4 h-4" /> MOBILE APPLICATION
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-white drop-shadow-md">
            Food For You
          </h1>
          
          <p className="text-xl text-gray-400 font-light mb-8 leading-relaxed">
            แอปพลิเคชันสั่งอาหารที่พัฒนาขึ้นเพื่อตอบโจทย์วิถีชีวิต <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#38BDF8] font-bold">ยุค Covid-19 (Contactless)</strong> ลดการสัมผัสและลดความหนาแน่นหน้าร้าน ลูกค้าสั่งอาหารง่ายผ่านมือถือ <strong className="text-white font-semibold">"ออเดอร์เด้งเข้าหลังร้านทันที"</strong> พร้อมระบบจัดการคิวและกราฟสรุปยอดขายสำหรับผู้ประกอบการอย่างครบวงจร
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
          <a href="https://github.com/gong-sn-ix-ii/Food-For-You-Mobile-Application.git" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white font-extrabold hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:scale-105 transition-all duration-300">
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
          <div 
            className="absolute top-10 right-0 w-[260px] h-[550px] bg-gray-900 border-[8px] border-gray-800 rounded-[2.5rem] shadow-2xl transform rotate-6 opacity-60 overflow-hidden cursor-pointer hover:opacity-100 hover:z-30 transition-all duration-300"
            onClick={() => setSelectedImage(appScreens[1].image)}
          >
             {/* 🚀 OPTIMIZATION: บังคับโหลดภาพ (LCP) */}
             <img src={appScreens[1].image} alt="App Screen" fetchPriority="high" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity" />
          </div>
          
          {/* มือถือเครื่องหน้า (เงาสีฟ้าให้ตัดกับสีส้ม) */}
          <div 
            className="absolute top-0 right-24 w-[280px] h-[600px] bg-black border-[10px] border-gray-800 rounded-[2.5rem] shadow-[0_0_60px_rgba(56,189,248,0.2)] overflow-hidden z-10 cursor-pointer group"
            onClick={() => setSelectedImage(appScreens[0].image)}
          >
            {/* รอยบากมือถือ (Notch) */}
            <div className="absolute top-0 inset-x-0 h-5 bg-gray-800 rounded-b-xl w-32 mx-auto z-20"></div>
            {/* 🚀 OPTIMIZATION: บังคับโหลดภาพหน้าหลักสุด (LCP) */}
            <img src={appScreens[0].image} alt="App Screen" fetchPriority="high" loading="eager" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
        </motion.div>

      </div>

      {/* 2. APP INTERFACE GALLERY */}
      <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            App <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#38BDF8]">Interface</span>
          </h2>
          <p className="text-gray-400 text-lg">หน้าจอการใช้งานจริงที่ออกแบบมาเพื่อประสบการณ์ที่ดีที่สุด</p>
        </div>

        {/* Grid โชว์หน้าจอ 18 หน้า */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {appScreens.map((screen, idx) => (
            <motion.div 
              key={screen.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 5) * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
              onClick={() => setSelectedImage(screen.image)} // 🌟 เรียกใช้ระบบซูมภาพ
            >
              {/* Phone Mockup Frame (Hover เป็นกรอบสีฟ้า) */}
              <div className="relative w-full max-w-[240px] aspect-[9/19] bg-black border-[6px] border-gray-800 rounded-[2rem] overflow-hidden mb-4 group-hover:-translate-y-2 group-hover:border-[#38BDF8] transition-all duration-500 shadow-xl group-hover:shadow-[0_15px_30px_rgba(56,189,248,0.2)]">
                <div className="absolute top-0 inset-x-0 h-3 bg-gray-800 rounded-b-lg w-20 mx-auto z-20 transition-colors duration-500 group-hover:bg-[#38BDF8]"></div>
                
                {/* 🌟 Overlay ซูมภาพตอน Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <ZoomIn className="w-8 h-8 text-white drop-shadow-md" />
                </div>

                {/* 🚀 OPTIMIZATION: รูปเยอะขนาดนี้ ต้องเปิด Lazy Loading เท่านั้น */}
                <img 
                  src={screen.image} 
                  alt={screen.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              
              {/* Screen Description (Hover ตัวหนังสือสีส้ม) */}
              <div className="text-center px-2">
                <h3 className="text-sm font-bold text-white mb-1 group-hover:text-[#F97316] transition-colors">{screen.title}</h3>
                <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-2">{screen.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. CORE FEATURES (Bento Box Text) */}
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-[#0A0A0C] border border-gray-800 rounded-3xl p-8 hover:bg-white/5 hover:border-[#38BDF8]/50 transition-colors group cursor-default">
            <Zap className="w-8 h-8 text-[#F97316] mb-4 group-hover:text-[#38BDF8] group-hover:scale-110 transition-all" />
            <h3 className="text-xl font-bold text-white mb-2">Real-time Order & Sync</h3>
            <p className="text-gray-400 text-sm">
              ลูกค้าสั่งอาหารผ่านแอปพลิเคชัน ออเดอร์จะ <strong>"เด้งเข้าหน้าจอหลังร้านทันทีแบบ Real-time"</strong> ช่วยลดความผิดพลาดในการจดออเดอร์ และลดการสัมผัส (Contactless) ในยุค Covid-19
            </p>
          </div>

          <div className="bg-[#0A0A0C] border border-gray-800 rounded-3xl p-8 hover:bg-white/5 hover:border-[#38BDF8]/50 transition-colors group cursor-default">
            <Store className="w-8 h-8 text-[#F97316] mb-4 group-hover:text-[#38BDF8] group-hover:scale-110 transition-all" />
            <h3 className="text-xl font-bold text-white mb-2">Smart Merchant Dashboard</h3>
            <p className="text-gray-400 text-sm">
              ระบบหลังบ้านครบวงจรสำหรับร้านค้า มีหน้าต่าง <strong>Cooking Screen</strong> จัดการคิวทำอาหารได้อย่างเป็นระบบ พร้อมกราฟแสดงสถิติและสรุปยอดขายรายวันแบบละเอียด
            </p>
          </div>

          <div className="bg-[#0A0A0C] border border-gray-800 rounded-3xl p-8 hover:bg-white/5 hover:border-[#38BDF8]/50 transition-colors group cursor-default">
            <Bell className="w-8 h-8 text-[#F97316] mb-4 group-hover:text-[#38BDF8] group-hover:scale-110 transition-all" />
            <h3 className="text-xl font-bold text-white mb-2">Full-Loop User Experience</h3>
            <p className="text-gray-400 text-sm">
              ครอบคลุมทุกการใช้งานตั้งแต่ค้นหาเมนู, ติดตามสถานะคิว, สแกน QR Code, ระบบรีวิวให้คะแนน, ไปจนถึงช่องทางติดต่อฝ่ายสนับสนุน (Support & Chat) จบในแอปเดียว
            </p>
          </div>

        </div>
      </div>

      {/* 🌟 4. FULLSCREEN IMAGE MODAL (ระบบซูมภาพ) 🌟 */}
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

export default FoodForYouProject;