import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Code, ExternalLink, Shield, Smartphone, Globe, Cpu, Target, Gamepad2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// ... (Import รูปภาพเหมือนเดิม) ...

const projectsData = [
  {
    id: 1,
    filterCategory: "Cyber",
    icon: <Shield className="w-5 h-10 text-purple-400" />,
    categoryLabel: "🏆 NSC 2024 NATIONAL FINALIST · CYBERSECURITY",
    title: "Cybersecurise",
    description: "แอปพลิเคชันมือถือป้องกันภัยมิจฉาชีพ มี 4 ฟีเจอร์หลัก: (1) สแกนการตั้งค่าเครื่องที่อาจเป็นอันตราย (2) ตรวจจับ SMS Scam/Spam/OTP ด้วย AI/NLP (3) แบบทดสอบความรู้ด้านความปลอดภัย (4) ตรวจสอบเลขบัญชี/เบอร์โทร/ชื่อ ใน Blacklist ผ่าน CheckGon และ ChaladOhn — ผ่านเข้ารอบชิงระดับประเทศ NSC 2024 พร้อมรับเงินสนับสนุนจาก NECTEC",
    tags: ["NSC 2024 Finalist", "Anti-Fraud", "Mobile", "AI/NLP"],
    languages: [
      { name: "Kotlin", color: "#A97BFF" },
      { name: "Dart", color: "#0175C2" },
      { name: "Flutter", color: "#02569B" },
      { name: "Firebase", color: "#DA5B0B" },
    ],
    githubUrl: "#",
    demoUrl : "",
    projectUrl: "/cybersecurise"
  },
  {
    id: 7,
    filterCategory: "AI",
    icon: <Cpu className="w-5 h-5 text-pink-400" />,
    categoryLabel: "🤖 AI HACKATHON TOP 10 · AI/NLP",
    title: "AI Detect Scam Spam SMS (Accuracy 95%)",
    description: "ระบบ Machine Learning ตรวจจับและจำแนกประเภท SMS หลอกลวง (Scam/Spam/OTP/Legitimate) ด้วย Natural Language Processing — เป็น ML Model ที่ใช้ใน Cybersecurise และเป็นพื้นฐานของผลงาน AI Engineer Prompt Hackathon 2024 (อันดับ 8 ระดับประเทศ)",
    tags: ["NLP", "Classification", "AI Hackathon Top 10", "Python"],
    languages: [
      { name: "Python", color: "#3572A5" },
      { name: "Jupyter Notebook", color: "#DA5B0B" }
    ],
    githubUrl: "",
    demoUrl : "/ai-sms-detect",
    projectUrl: "/ai-sms-detect"
  },
  {
    id: 2,
    filterCategory: "Mobile/Web",
    icon: <Smartphone className="w-5 h-5 text-blue-400" />,
    categoryLabel: "MOBILE APPLICATION · REAL-TIME",
    title: "Boundless",
    description: "แอปพลิเคชันประมูลสินค้าและโซเชียลเน็ตเวิร์กแบบ Real-time มีระบบกดติดตาม ไลค์ แชท โพสต์ และแจ้งเตือนผู้ชนะประมูล",
    tags: ["Real-time", "Auction", "Social", "Mobile"],
    languages: [
      { name: "Dart", color: "#0175C2" },
      { name: "Flutter", color: "#02569B" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Firebase", color: "#DA5B0B" },
    ],
    githubUrl: "https://github.com/gong-sn-ix-ii/Boundless.git",
    demoUrl : "",
    projectUrl: "/boundless"
  },
  {
    id: 4,
    filterCategory: "AI",
    icon: <Cpu className="w-5 h-5 text-pink-400" />,
    categoryLabel: "AI · IMAGE CLASSIFICATION",
    title: "AI Detect Cat & Dog (Accuracy 97%)",
    description: "สร้าง AI Classifications จำแนกประเภท Dog และ Cat ด้วย Dataset รูปภาพจำนวน 25K พร้อมทั้ง Clean Data และปรับจูนทดสอบโมเดลจนได้ความแม่นยำถึง 97%",
    tags: ["Image Classification", "Deep Learning", "Python", "97% Accuracy"],
    languages: [
      { name: "Python", color: "#3572A5" },
      { name: "Jupyter Notebook", color: "#DA5B0B" }
    ],
    githubUrl: "https://github.com/gong-sn-ix-ii/AI-Cat-Dog-Accuracy-97.git",
    demoUrl : "",
    projectUrl: "https://github.com/gong-sn-ix-ii/AI-Cat-Dog-Accuracy-97.git"
  },
  {
    id: 3,
    filterCategory: "Mobile/Web",
    icon: <Globe className="w-5 h-5 text-cyan-400" />,
    categoryLabel: "MOBILE APPLICATION",
    title: "Food For You",
    description: "แอปพลิเคชันสั่งอาหารผ่าน ลูกค้าสามารถสั่งอาหาร เมื่อยืนยันออเดอร์จะถูกส่งไปที่ร้านอาหารเพื่อรับคิวและรายการอารหารที่ต้องจัดทำให้กับลูกค้าในยุค covid-19",
    tags: ["Mobile", "Food Delivery", "Real-time", "UX/UI"],
    languages: [
      { name: "Dart", color: "#0175C2" },
      { name: "Flutter", color: "#02569B" },
      { name: "Firebase", color: "#DA5B0B" },
    ],
    githubUrl: "https://github.com/gong-sn-ix-ii/Food-For-You-Mobile-Application.git",
    demoUrl : "",
    projectUrl: "/foodforyou"
  },
  {
    id: 6,
    filterCategory: "Game",
    icon: <Gamepad2 className="w-5 h-5 text-green-400" />,
    categoryLabel: "GAME · GAMEMAKER STUDIO",
    title: "Science Fair Adventure Game",
    description: "เกมเพื่อการศึกษา รวม Science Learning กับ Interactive Gameplay พัฒนาด้วย GameMaker Studio ออกแบบเพื่อให้การเรียนรู้สนุกสำหรับนักเรียน",
    tags: ["Game Dev", "GameMaker", "Educational", "2D"],
    languages: [
      { name: "GML", color: "#00ffa6" }
    ],
    githubUrl: "https://github.com/gong-sn-ix-ii/Game-Public-Relations-SCIENCE.git",
    demoUrl: "",
    projectUrl: "/scifare"
  },
  {
    id: 5,
    filterCategory: "Mobile/Web",
    icon: <Target className="w-5 h-5 text-red-400" />,
    categoryLabel: "UX/UI · PROTOTYPE",
    title: "UX/UI Prototype FoodApp",
    description: "ออกแบบ UX/UI Prototype ของแอปสั่งอาหาร 10 ฟังก์ชันหลัก พร้อม Interactive Flow ใช้ Figma สำหรับ Design + Prototyping",
    tags: ["UX/UI", "Figma", "Prototype", "Design"],
    languages: [
      { name: "Figma", color: "#ff0073" },
    ],
    githubUrl: "",
    demoUrl : "https://www.figma.com/proto/uL6o5tqwLgLH4W7vmtXTR8/Applicatoin-10-Function?node-id=164-4401&t=zaxMqgGIXdAIENMK-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=164%3A4401",
    projectUrl: "https://www.figma.com/design/uL6o5tqwLgLH4W7vmtXTR8/Applicatoin-10-Function?node-id=0-1&t=piorGr0f8i0ovmqs-1"
  },
];

const filterOptions = [
  // ... (เหมือนเดิม) ...
  { id: "All", label: "All Projects" },
  { id: "Cyber", label: "🛡️ Cyber" },
  { id: "AI", label: "🧠 AI" },
  { id: "Mobile/Web", label: "📱 Mobile/Web" },
  { id: "Game", label: "🎮 Game" }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const floatingIconVariants: Variants = {
  animate: { y: [0, -10, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } }
};

const FeaturedProjects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  const filteredProjects = projectsData.filter(project => 
    activeFilter === "All" ? true : project.filterCategory === activeFilter
  );

  const handleCardClick = (url?: string) => {
    if (!url) return; // ถ้าไม่มีลิงก์ก็ไม่ต้องทำอะไร

    if (url.startsWith('http')) {
      // ถ้าเป็นเว็บนอก (เช่น Figma) เปิดแท็บใหม่
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      // ถ้าเป็นหน้าในเว็บเรา (เช่น /cybersecurise) เปลี่ยนหน้าเลย
      navigate(url);
    }
  };

  return (
    <section id="projects" className="scroll-mt-24 py-20 px-6 lg:px-24 w-full min-h-screen relative">
      
      {/* Header & Filter (เหมือนเดิม) */}
      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-end mb-16 gap-6 relative z-10">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d00ff] to-[#5d00ff]">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">ผลงานครอบคลุมตั้งแต่ Web, Mobile, AI จนถึง Security</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {filterOptions.map((filter) => (
            <button 
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeFilter === filter.id 
                  ? "bg-[#A855F7] text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]" 
                  : "bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid ของการ์ด */}
      <motion.div 
        key={activeFilter}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 relative z-10"
      >
        {filteredProjects.map((project) => (
          <motion.div 
            key={project.id}
            variants={cardVariants} 
            onClick={() => handleCardClick(project.projectUrl)}
            className="relative group pt-0.5 bg-gradient-to-br from-[#6200ff]/20 via-black to-[#4400ff]/20 rounded-[1.5rem] hover:shadow-[0_0_50px_-5px_rgba(168,85,247,0.3)] hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden border border-white/5"
          >
            {/* กล่องกระจกด้านใน */}
            <div className="w-full h-full rounded-[1.4rem]   backdrop-blur-3xl p-7 flex flex-col relative z-10 overflow-hidden">
              
            <div className="absolute -top-10 -right-6 text-white/5 group-hover:text-[#A855F7]/10 transition-colors duration-500 transform scale-[5] z-0">
                {project.icon}
              </div>
              {/* แสง Glow วงกลมด้านหลัง */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] opacity-100 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Giant Icon Header ลอยได้ */}
              <motion.div 
                variants={floatingIconVariants}
                animate="animate"
                className="absolute -top-10 -right-6 text-white/5 group-hover:text-[#A855F7]/20 transition-colors duration-500 transform scale-[5] z-0"
              >
                {project.icon}
              </motion.div>

              {/* Tag Category */}
              <div className="inline-flex items-center gap-2 mb-4 relative z-10">
                 <span className="text-[10px] font-bold uppercase tracking-widest text-[#A855F7] bg-[#A855F7]/10 px-3 py-1 rounded-full border border-[#A855F7]/20">
                    {project.categoryLabel}
                 </span>
              </div>
              
              {/* Title & Description */}
              <div className="relative z-10 mb-6 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00d0ff] group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.6)] transition-all duration-300 line-clamp-1">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="relative z-10 flex flex-wrap gap-2.5 mb-5">
                {project.tags.map((tag, index) => (
                  <span key={index} className="text-[11px] font-mono px-2.5 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-300 group-hover:border-white/20 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              {/* 👇 ส่วนล่างสุด: แสดงภาษาที่ใช้ และ ปุ่ม Code */}
              <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                
                {/* 🔴 ส่วนแสดงภาษา (Languages) */}
                <div className="flex items-center gap-3">
                  {project.languages?.map((lang, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span 
                        className="w-2.5 h-2.5 rounded-full shadow-sm" 
                        style={{ backgroundColor: lang.color }} 
                      />
                      <span className="text-xs font-medium text-gray-400 group-hover:text-gray-300 transition-colors">
                        {lang.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 💻 ปุ่ม Code (GitHub) */}
                {project.demoUrl ? ( 
                    project.demoUrl.startsWith('/') ? (
                      /* 🟢 1. มี demoUrl และเป็น Internal Link -> ใช้ <Link> ของ React Router */
                      <Link 
                        to={project.demoUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-sm font-bold text-[#22D3EE] hover:text-cyan-300 px-4 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all border border-cyan-500/30"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    ) : (
                      /* 🔵 2. มี demoUrl แต่เป็น External Link -> ใช้ <a> ปกติ */
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-sm font-bold text-[#22D3EE] hover:text-cyan-300 px-4 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all border border-cyan-500/30"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )
                  ) : project.githubUrl ? (
                    /* ⚪ 3. ถ้าไม่มี demoUrl แต่มี githubUrl จะแสดงปุ่ม Code ธรรมดา (เป็นลิงก์นอกเสมอ ใช้ <a>) */
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-sm font-semibold text-gray-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <Code className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  ) : null}

              </div>

            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;