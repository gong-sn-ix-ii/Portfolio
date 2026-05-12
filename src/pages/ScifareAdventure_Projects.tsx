import React, { useEffect, useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Terminal, Cpu, Binary, FolderGit2, Code2, ZoomIn, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// 📸 Import รูปภาพทั้งหมด (18 รูป)
import img1 from "../assets/images/projects/scifare/1.webp";
import img2 from "../assets/images/projects/scifare/2.webp";
import img3 from "../assets/images/projects/scifare/3.webp";
import img4 from "../assets/images/projects/scifare/4.webp";
import img4_1 from "../assets/images/projects/scifare/4_1.webp";
import img4_2 from "../assets/images/projects/scifare/4_2.webp";
import img4_3 from "../assets/images/projects/scifare/4_3.webp";
import img4_5 from "../assets/images/projects/scifare/4_5.webp";
import img5 from "../assets/images/projects/scifare/5.webp";
import img5_1 from "../assets/images/projects/scifare/5_1.webp";
import img6 from "../assets/images/projects/scifare/6.webp";
import img6_1 from "../assets/images/projects/scifare/6_1.webp";
import img7 from "../assets/images/projects/scifare/7.webp";
import img7_1 from "../assets/images/projects/scifare/7_1.webp";
import img8 from "../assets/images/projects/scifare/8.webp";
import img8_1 from "../assets/images/projects/scifare/8_1.webp";
import credit from "../assets/images/projects/scifare/credit.webp";
import tutorial from "../assets/images/projects/scifare/tutorial.webp";

// 🗂️ ข้อมูลหมวดหมู่ภาพหลัก (Core Environment)
const coreScreens = [
  { img: img1, title: "SYSTEM_BOOT.exe", desc: "หน้าต่าง Main Menu เข้าสู่ระบบเกม" },
  { img: tutorial, title: "MANUAL.md", desc: "คู่มือการควบคุมตัวละครและการโต้ตอบ (WASD)" },
  { img: img2, title: "SPAWN_POINT.cfg", desc: "จุดเริ่มต้นของผู้เล่นภายในห้องพักส่วนตัว" },
  { img: img3, title: "EXPLORATION_HUB", desc: "แผนที่จำลองคณะวิทยาศาสตร์ฯ และ NPC" },
  { img: credit, title: "DEVELOPERS.log", desc: "รายชื่อทีมนักพัฒนา (Credits)" }
];

// 💻 ข้อมูลหมวดหมู่ภารกิจ (NPC & Minigames)
const minigameModules = [
  {
    id: "MODULE_01: PYTHON_SYNTAX",
    npc: img4,
    npcDesc: "NPC อาจารย์ภาควิชา CS - มอบภารกิจทดสอบตรรกะและ Syntax ของภาษา Python",
    stages: [img4_1, img4_2, img4_3, img4_5]
  },
  {
    id: "MODULE_02: CLI_PROTOCOL",
    npc: img5,
    npcDesc: "NPC อาจารย์ภาควิชา ICT - เข้าสู่ระบบทดสอบความรู้พื้นฐานระบบเครือข่าย/คำสั่งพื้นฐาน",
    stages: [img5_1]
  },
  {
    id: "MODULE_03: DATA_SORTING",
    npc: img6,
    npcDesc: "NPC ประจำสาขา - มินิเกมทดสอบการแยกแยะหมวดหมู่และการจัดการข้อมูลให้ถูกต้อง",
    stages: [img6_1]
  },
  {
    id: "MODULE_04: MEMORY_ALLOC",
    npc: img7,
    npcDesc: "NPC ประจำสาขา - ภารกิจจับคู่ภาพ ทดสอบความจำและการประมวลผลแบบรวดเร็ว",
    stages: [img7_1]
  },
  {
    id: "MODULE_05: LOGIC_GATE",
    npc: img8,
    npcDesc: "NPC ประจำสาขา - มินิเกมตอบคำถามเชิงตรรกะและกระบวนการคิดวิเคราะห์",
    stages: [img8_1]
  }
];

const techStack = [
  { name: "Game Maker", icon: <Cpu className="w-4 h-4" /> },
  { name: "GML", icon: <Terminal className="w-4 h-4" /> },
  { name: "Pixel Art", icon: <Binary className="w-4 h-4" /> }
];

// 🚀 OPTIMIZATION: ใช้ memo ครอบเพื่อประสิทธิภาพสูงสุด
const ScifareAdventureProject: React.FC = memo(() => {
  // 🌟 เพิ่ม State สำหรับระบบซูมรูปภาพ
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🌟 ล็อกการเลื่อนหน้าจอเวลาเปิดรูปภาพเต็มจอ
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
    <section className="min-h-screen bg-black text-white pb-24 relative overflow-hidden font-sans cursor-default">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-white/5 via-white/2 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

      {/* Navigation */}
      <div className="pt-8 px-6 lg:px-24 max-w-7xl mx-auto relative z-20">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors px-4 py-2 rounded-md border border-gray-800 hover:border-gray-500 bg-black group font-mono text-sm">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>cd ../portfolio</span>
        </Link>
      </div>

      {/* 1. HERO SECTION */}
      <div className="max-w-6xl mx-auto px-6 mt-16 mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Content */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-white/20 text-white/70 text-xs font-mono tracking-widest uppercase">
            <Terminal className="w-3 h-3" /> ./execute_game.sh
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 text-white uppercase">
            Scifare <br/><span className="text-gray-500">Adventure</span>
          </h1>
          
          <p className="text-lg text-gray-400 font-light mb-8 leading-relaxed">
            เกมประชาสัมพันธ์คณะวิทยาศาสตร์และเทคโนโลยี ในรูปแบบโลกเสมือนจริง <strong className="text-white font-mono">2D Pixel Art</strong> ผู้เล่นจะได้สวมบทบาทสำรวจสภาพแวดล้อม พูดคุยกับคณาจารย์ (NPC) และเขียนโค้ดเพื่อปลดล็อกมินิเกม
          </p>

          <div className="mb-10">
            <h3 className="text-xs font-mono text-gray-600 mb-4 tracking-widest">{'>'}{'>'} TECH_STACK</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-black border border-white/10 rounded-md">
                  {tech.icon}
                  <span className="text-sm font-mono text-gray-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a href="https://github.com/gong-sn-ix-ii/Game-Public-Relations-SCIENCE.git" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-white bg-black text-white font-mono font-bold hover:bg-white hover:text-black transition-all duration-300">
              <Code2 className="w-5 h-5" />
              VIEW_SOURCE_CODE
            </a>
          </div>
        </motion.div>

        {/* Right: Hero Image */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:block group cursor-pointer"
          onClick={() => setSelectedImage(coreScreens[0].img)}
        >
          <div className="relative w-full aspect-[4/3] bg-black border border-white/20 p-2 overflow-hidden z-10 transition-colors group-hover:border-white/50">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-2 px-1">
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
            </div>
            
            {/* 🌟 Overlay ซูมรูป */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 backdrop-blur-[1px]">
              <ZoomIn className="w-10 h-10 text-white drop-shadow-lg" />
            </div>

            {/* 🚀 OPTIMIZATION: บังคับโหลดรูปนี้ก่อน (LCP) */}
            <img 
              src={coreScreens[0].img} 
              alt="Game Screen" 
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover grayscale-[20%] border border-white/10 group-hover:grayscale-0 transition-all duration-500" 
            />
          </div>
        </motion.div>
      </div>

      {/* 2. CORE ENVIRONMENT */}
      <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <div className="mb-12 border-b border-white/10 pb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-mono uppercase tracking-widest flex items-center gap-3">
            <FolderGit2 className="w-6 h-6 text-gray-500" />
            01_Core_Environment
          </h2>
          <p className="text-gray-500 text-sm font-mono mt-2">บรรยากาศภายในเกม แผนที่ และระบบพื้นฐาน</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {coreScreens.map((screen, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col group cursor-pointer"
              onClick={() => setSelectedImage(screen.img)}
            >
              <div className="relative w-full aspect-video bg-black border border-white/10 overflow-hidden mb-3 group-hover:border-white/50 transition-colors duration-300">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <ZoomIn className="w-8 h-8 text-white drop-shadow-md" />
                </div>
                {/* 🚀 OPTIMIZATION: รูปอื่นๆ ทั้งหมด ใช้ Lazy Load */}
                <img 
                  src={screen.img} 
                  alt={screen.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pixelated" 
                />
              </div>
              <h3 className="text-sm font-bold text-white font-mono tracking-wide group-hover:text-gray-300">{screen.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed mt-1">{screen.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. NPC & MINIGAME MODULES */}
      <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <div className="mb-12 border-b border-white/10 pb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-mono uppercase tracking-widest flex items-center gap-3">
            <Binary className="w-6 h-6 text-gray-500" />
            02_Subsystem_Modules
          </h2>
          <p className="text-gray-500 text-sm font-mono mt-2">การโต้ตอบกับ NPC และระบบมินิเกมทดสอบความรู้</p>
        </div>

        <div className="flex flex-col gap-12">
          {minigameModules.map((module, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row gap-6 bg-[#050505] border border-white/10 p-6 hover:bg-[#0a0a0a] transition-colors"
            >
              {/* ฝั่งซ้าย: ข้อมูล NPC */}
              <div className="w-full lg:w-1/3 flex flex-col">
                <div className="inline-block px-2 py-1 bg-white text-black font-mono text-xs font-bold mb-4 w-fit">
                  {module.id}
                </div>
                <div 
                  className="relative w-full aspect-video border border-white/20 mb-4 overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedImage(module.npc)}
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <ZoomIn className="w-8 h-8 text-white drop-shadow-md" />
                  </div>
                  <img src={module.npc} alt="NPC Dialog" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-sm text-gray-400 font-mono leading-relaxed border-l-2 border-white/20 pl-3">
                  {module.npcDesc}
                </p>
              </div>

              {/* ฝั่งขวา: ภาพมินิเกม */}
              <div className="w-full lg:w-2/3">
                <div className="text-xs text-gray-600 font-mono mb-3 uppercase tracking-widest border-b border-white/10 pb-1">
                  {'>'}{'>'} Execution_Frames ({module.stages.length})
                </div>
                <div className={`grid gap-4 ${module.stages.length > 1 ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-2'}`}>
                  {module.stages.map((stageImg, sIdx) => (
                    <div 
                      key={sIdx} 
                      className="relative aspect-video border border-white/10 overflow-hidden group cursor-pointer"
                      onClick={() => setSelectedImage(stageImg)}
                    >
                       <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                         <ZoomIn className="w-8 h-8 text-white drop-shadow-md" />
                       </div>
                       <img 
                         src={stageImg} 
                         alt={`Minigame Stage ${sIdx + 1}`} 
                         loading="lazy"
                         decoding="async"
                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                       />
                       <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 text-[10px] font-mono text-white/70 border border-white/10 z-20">
                         frame_{sIdx}.webp
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. SYSTEM FEATURES LOG */}
      <div className="max-w-5xl mx-auto px-6 relative z-10 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-white/10 p-6 hover:border-white/40 transition-colors">
            <h3 className="text-lg font-bold text-white mb-2 font-mono">{'>'} RPG_EXPLORATION</h3>
            <p className="text-gray-500 text-sm font-mono leading-relaxed">บังคับตัวละคร 2D Pixel Art สำรวจอาคารและห้องเรียนต่างๆ ภายในแผนที่</p>
          </div>
          <div className="border border-white/10 p-6 hover:border-white/40 transition-colors">
            <h3 className="text-lg font-bold text-white mb-2 font-mono">{'>'} NPC_DIALOGUE</h3>
            <p className="text-gray-500 text-sm font-mono leading-relaxed">ระบบสนทนาโต้ตอบกับคณาจารย์ประจำสาขา เพื่อรับข้อมูลและภารกิจ</p>
          </div>
          <div className="border border-white/10 p-6 hover:border-white/40 transition-colors">
            <h3 className="text-lg font-bold text-white mb-2 font-mono">{'>'} EDUCATIONAL_MINIGAME</h3>
            <p className="text-gray-500 text-sm font-mono leading-relaxed">สอดแทรกความรู้ผ่านระบบเกมเพลย์ เช่น การเรียงโค้ด Python (Drag & Drop)</p>
          </div>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10 cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-md border border-white/10 transition-all duration-300 z-50 font-mono"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Game Screen Zoom"
              className="max-w-full max-h-full object-contain border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.1)] pixelated cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
            {/* Terminal Style Decoration on Modal */}
            <div className="absolute bottom-6 left-6 text-white/50 font-mono text-xs pointer-events-none hidden md:block">
              {'>'} Viewing: {selectedImage.split('/').pop()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
});

export default ScifareAdventureProject;