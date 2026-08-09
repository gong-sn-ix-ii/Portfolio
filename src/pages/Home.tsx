import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // เพิ่ม AnimatePresence สำหรับ Modal
import Experience from "../components/Experience";
import FeaturedProjects from "../components/FeaturedProjects";
import AchievementShowcase from "../components/Archivement";
import Awards from "../components/Award";
import Certificates from "../components/Certificates";
import Skills from "../components/Skills";
import profileImg from "../assets/images/profile.webp";
import { X, FileText, Eye } from "lucide-react"; // เพิ่ม Icon สำหรับ Preview
import { useLocation } from "react-router-dom";
import { GMAIL_COMPOSE_URL } from "../utils/gmail";
import Contact from "../components/Contact";

// Rotating roles for typewriter-like effect
const ROLES = [
  "Junior Full-Stack Developer",
  "Software Engineer",
  "Mobile Developer (Flutter)",
];

const useRotatingText = (items: string[], interval = 2500) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), interval);
    return () => clearInterval(id);
  }, [items, interval]);
  return items[index];
};

const Home: React.FC = () => {
  const rotatingRole = useRotatingText(ROLES, 2500);
 
  
  // 2. เรียกใช้งาน useLocation
  const location = useLocation();

  // 3. ปรับ useEffect ใหม่
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // เช็กว่า URL มี Hash (เช่น #projects) ติดมาด้วยไหม
    if (location.hash) {
      // 🌟 ถ้ามี: ให้หน่วงเวลาเสี้ยววินาทีรอให้เว็บ Render เสร็จ แล้วเลื่อนไปที่ Section นั้นแบบสมูทๆ
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1)); // ตัดเครื่องหมาย # ออก
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150); // ดีเลย์ 150ms ให้ชัวร์ว่าโหลดคอมโพเนนต์เสร็จแล้ว
    } else {
      // 🌟 ถ้าไม่มี (เช่นคนพิมพ์เข้าเว็บมาใหม่): ให้เริ่มจากตำแหน่งบนสุด 0,0
      window.scrollTo(0, 0);
    }
  }, [location]); // ใส่ location เป็น dependency เพื่อให้ทำงานใหม่ทุกครั้งที่ URL เปลี่ยน

  // 🌟 เพิ่ม State สำหรับจัดการ PDF Modal (เฉพาะส่วนที่สั่งให้ปรับ)
  const [pdfModal, setPdfModal] = useState<{ isOpen: boolean; url: string; title: string }>({
    isOpen: false,
    url: "",
    title: ""
  });

  const openPdf = (url: string, title: string) => {
    setPdfModal({ isOpen: true, url, title });
  };

  return (
    <div className="relative bg-[#020617] min-h-[100vh] overflow-hidden font-sans text-white">
      <div className="fixed top-[-15%] md:top-[-35%] right-[-20%] md:right-[-10%] w-[150px] md:w-[800px] h-[200px] md:h-[800px] bg-[#7f0de98c] blur-[50px] md:blur-[120px] rounded-full"></div>
  
  {/* ก้อนที่ 2: สีน้ำเงิน บนขวา */}
  <div className="fixed top-[-10%] md:top-[-30%] right-[-15%] md:right-[-10%] w-[120px] md:w-[800px] h-[150px] md:h-[500px] bg-[#362fff] blur-[40px] md:blur-[120px] rounded-full"></div>

  {/* ก้อนที่ 3: สีม่วง ล่างซ้าย (ผลักออกไปนอกขอบมากขึ้น) */}
  <div className="fixed bottom-[-15%] md:bottom-[-30%] left-[-20%] md:left-[-15%] w-[150px] md:w-[800px] h-[200px] md:h-[800px] bg-[#7f0de987] blur-[60px] md:blur-[200px] rounded-full"></div>
  
  {/* ก้อนที่ 4: สีน้ำเงิน ล่างซ้าย */}
  <div className="fixed bottom-[-10%] md:bottom-[-30%] left-[-15%] md:left-[-15%] w-[120px] md:w-[800px] h-[150px] md:h-[500px] bg-[#334bffbb] blur-[40px] md:blur-[120px] rounded-full"></div>

      <div className="relative z-10">

        {/* <nav className="fixed top-0 left-0 w-full z-50 p-4 border-b border-[#1E1B4B]/50 backdrop-blur-md"> */}
        <nav className="fixed top-0 left-0 w-full z-50 p-4 border-b border-[#1E1B4B]/90 backdrop-blur-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-extrabold tracking-widest">
              <span className="text-[#A855F7] ">MY</span>PORTFOLIO
            </div>

            <div className="hidden md:flex items-center gap-8 font-bold text-gray-300">
                <a href="#about" className="hover:text-white transition-colors">About</a>
                <a href="#honors" className="hover:text-[#A855F7] transition-colors">Achievements & Awards</a>
                <a href="#projects" className="hover:text-[#22D3EE] transition-colors">Projects</a>
                <a href="#experiences" className="hover:text-[#ffd815] transition-colors">Experience</a>
                <a href="#skills" className="hover:text-[#F472B6] transition-colors">Skills</a>
                <a href="#certificates" className="hover:text-[#ff4d4d] transition-colors">Certificates</a>
                <a href="#contact" className="hover:text-[#ff4d4d] transition-colors">Contact</a>
                <a href="/resume-en.pdf" download className="relative group cursor-pointer hidden md:block">
                <div className="absolute inset-0 bg-[#A855F7]/40 blur-md rounded-lg group-hover:bg-[#A855F7]/60 transition-all"></div>
                <button className="relative px-5 py-2 bg-gradient-to-b from-[#181818] to-black rounded-lg text-white text-sm font-semibold border border-white/20 hover:border-white/40 transition-all">
                  Download Resume
                </button>
              </a>
            </div>
            
          </div> 

      
        </nav>


        <section id="about" className="relative scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-[7rem] pb-[10rem] min-h-[90vh]">

            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.025)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

            {/* Two-column layout */}
            <div className="relative grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-20 items-center">

              {/* ========== LEFT: PROFILE PHOTO ========== */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative flex justify-center lg:justify-start"
              >
                <div className="relative">
                  {/* Subtle glow — purple only (theme color) */}
                  <div className="absolute -inset-4 rounded-full bg-[#A855F7]/30 blur-3xl"></div>
                  <div className="absolute -inset-2 rounded-full bg-[#22D3EE]/20 blur-2xl"></div>

                  {/* Profile photo wrapper — sleek single-tone border */}
                  <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden ring-1 ring-white/10 shadow-[0_0_60px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A]">

                    {/* Inner glass border */}
                    <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 z-10 pointer-events-none"></div>

                    {/* Profile Image — from src/assets/images/profile.jpg */}
                    <img
                      src={profileImg}
                      alt="Kitsada Khamnuan"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                        const fallback = e.currentTarget.nextElementSibling as HTMLDivElement;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />

                    {/* Fallback Initials (shows only if image fails to load) */}
                    <div
                      className="w-full h-full flex flex-col items-center justify-center text-white"
                      style={{ display: "none" }}
                    >
                      <div className="text-7xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-[#A855F7] to-[#22D3EE]">
                        KK
                      </div>
                    </div>
                  </div>

                  {/* Floating award badges — only 2, theme colors */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-3 -right-3 md:-top-5 md:-right-5"
                  >
                    <div className="relative px-3 py-1.5 rounded-lg bg-[#0F172A] border border-[#A855F7]/50 shadow-[0_8px_30px_rgba(168,85,247,0.4)] backdrop-blur-sm">
                      <div className="absolute inset-0 rounded-lg bg-[#A855F7]/10"></div>
                      <div className="relative flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-[#A855F7]" viewBox="0 0 24 24" fill="currentColor"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5m14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>
                        <span className="text-xs font-extrabold text-white tracking-wide">NSC 2024 Finalist</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    className="absolute -bottom-3 -left-3 md:-bottom-5 md:-left-5"
                  >
                    <div className="relative px-3 py-1.5 rounded-lg bg-[#0F172A] border border-[#22D3EE]/50 shadow-[0_8px_30px_rgba(34,211,238,0.4)] backdrop-blur-sm">
                      <div className="absolute inset-0 rounded-lg bg-[#22D3EE]/10"></div>
                      <div className="relative flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-[#22D3EE]" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A1 1 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5L12 10.85l5.96-3.35L12 4.15M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71l6-3.38z"/></svg>
                        <span className="text-xs font-extrabold text-white tracking-wide">AI Hackathon 2024 (Prompt Engineer) · Top 8</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>


              {/* ========== RIGHT: CONTENT ========== */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                {/* Open to Work — Status Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/5 text-emerald-300 text-xs md:text-sm font-semibold mb-6 backdrop-blur-sm">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Available for Junior Full Stack / Software Developer · Chonburi / Bangkok
                </div>

                {/* Greeting */}
                <p className="text-base md:text-lg text-gray-400 mb-2 font-medium tracking-wide">
                  Hello, I'm
                </p>

                {/* Name — Theme gradient (purple → cyan only) */}
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-3">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A855F7] to-[#22D3EE]">
                    Kitsada Khamnuan
                  </span>
                </h1>
                <p className="text-base md:text-lg text-gray-500 mb-6">
                  กฤษฎา คำนวน
                </p>

                {/* Rotating Role */}
                <div className="text-2xl md:text-4xl font-extrabold mb-3 h-[1.5em]">
                  <motion.span
                    key={rotatingRole}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="text-white inline-block"
                  >
                    {rotatingRole}
                  </motion.span>
                </div>

                {/* Tagline */}
                <p className="text-base md:text-lg text-gray-300 max-w-xl mb-8 leading-relaxed">
                  Building <span className="text-white font-semibold">secure</span> and <span className="text-white font-semibold">maintainable</span> applications. Focused on <span className="text-[#A855F7] font-semibold">Full Stack</span> development and <span className="text-[#22D3EE] font-semibold">Mobile</span> delivery.
                </p>

                {/* Quick info bar — minimal, no emojis */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 text-sm text-gray-400 mb-8">
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#A855F7]"></span>
                    Chonburi · Bangkok
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#22D3EE]"></span>
                    RMUTTO · CS · GPA 3.60
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-white/50"></span>
                    6 months Freelance
                  </span>
                </div>

                {/* CTAs — 🌟 ปรับเปลี่ยนเป็น Preview ตามคำสั่ง 🌟 */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-2"> 
                  <button
                    onClick={() => openPdf("/resume-en.pdf", "Resume · English")}
                    className="relative group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#A855F7] to-[#22D3EE] blur-lg rounded-lg opacity-40 group-hover:opacity-70 transition-all"></div>
                    <div className="relative px-5 py-3 bg-gradient-to-r from-[#A855F7] to-[#22D3EE] rounded-lg text-white font-bold flex items-center gap-2 shadow-lg">
                      <Eye className="w-4 h-4" />
                      Preview Resume
                      <span className="ml-1 text-[11px] font-bold px-1.5 py-0.5 rounded bg-white/25 tracking-wide">EN</span>
                    </div>
                  </button>

                  {/* Secondary: Preview Resume — ภาษาไทย */}
                  <button
                    onClick={() => openPdf("/resume-th.pdf", "Resume · ภาษาไทย")}
                    className="relative group cursor-pointer"
                  >
                    <div className="absolute -inset-px bg-gradient-to-r from-[#A855F7] to-[#22D3EE] rounded-lg opacity-60 group-hover:opacity-100 transition-all"></div>
                    <div className="relative px-5 py-3 bg-[#020617] rounded-lg text-white font-bold flex items-center gap-2 m-[1px]">
                      <Eye className="w-4 h-4" />
                      Resume
                      <span className="ml-1 text-[11px] font-bold px-1.5 py-0.5 rounded bg-white/10 tracking-wide">TH</span>
                    </div>
                  </button>

                  {/* Primary: Preview CV */}
                  {/* <button  
                    className="relative group cursor-pointer"
                  >
                    <div className="absolute -inset-px bg-gradient-to-r from-[#A855F7] to-[#22D3EE] rounded-lg opacity-100"></div>
                    <div className="relative px-5 py-3 bg-[#020617] rounded-lg text-white font-bold flex items-center gap-2 m-[1px]">
                      <FileText className="w-4 h-4 text-[#22D3EE]" />
                      Preview CV
                    </div>
                  </button> */}

                  {/* Social: GitHub */}
                  <a 
                    href="https://github.com/gong-sn-ix-ii" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative group cursor-pointer inline-block"
                  >
                    <div className="absolute -inset-px bg-gradient-to-r from-[#A855F7] to-[#22D3EE] rounded-lg opacity-100"></div>
                    <div className="relative px-5 py-3 bg-[#020617] rounded-lg text-white font-bold flex items-center gap-2 m-[1px]">
                      <svg 
                        className="w-4 h-4 text-[#22D3EE]" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                      Github
                    </div>
                  </a>

                  {/* Social: LinkedIn */}
                  <a href="https://www.linkedin.com/in/kitsada-khamnuan-2a6729407/" target="_blank" rel="noopener noreferrer" className="relative group cursor-pointer">
                    <button className="relative px-5 py-3 bg-white/[0.03] backdrop-blur-sm rounded-lg text-gray-200 font-bold border border-white/10 hover:border-[#22D3EE]/50 hover:bg-[#22D3EE]/5 hover:text-white transition-all flex items-center gap-2">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      LinkedIn
                    </button>
                  </a>

                  {/* Social: Email */}
                  <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noopener noreferrer" className="relative group cursor-pointer">
                    <button className="relative px-5 py-3 bg-white/[0.03] backdrop-blur-sm rounded-lg text-gray-200 font-bold border border-white/10 hover:border-white/40 hover:bg-white/5 hover:text-white transition-all flex items-center gap-2">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      Email
                    </button>
                  </a>
                </div>

                {/* Currently learning line */}
                <p className="text-xs text-gray-500 mt-6 tracking-wide">
                  <span className="text-[#22D3EE] mr-1">●</span>
                  Currently focused on: React, TypeScript, Node.js, PostgreSQL and writing well-tested code
                </p>
              </motion.div>

            </div>


            {/* ========== STATS GRID ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-20 max-w-5xl mx-auto"
            >
              {[
                {
                  tag: "HACKATHON · 2024",
                  hero: "Top 8",
                  heroNote: "Award · AI Engineer",
                  desc: "การแข่งขัน Prompt Engineering ระดับประเทศ · อันดับ 8 · รางวัล AI Engineer มอบให้เฉพาะ Top 10",
                  color: "#22D3EE",
                  icon: (
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A1 1 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5L12 10.85l5.96-3.35L12 4.15M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71l6-3.38z"/></svg>
                  ),
                },
                {
                  tag: "NSC · 2024",
                  hero: "Finalist",
                  heroNote: "Cybersecurise Application",
                  desc: "ผ่านเข้ารอบชิงระดับประเทศ · ได้รับเงินสนับสนุนโครงการจาก NECTEC, NSTDA",
                  color: "#A855F7",
                  icon: (
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5m14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>
                  ),
                },
                {
                  tag: "EDUCATION",
                  hero: "3.60",
                  heroNote: "GPA · CS",
                  desc: "วิทยาการคอมพิวเตอร์ · มหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออก",
                  color: "#A855F7",
                  icon: (
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>
                  ),
                },
                {
                  tag: "EXPERIENCE",
                  hero: "6 months",
                  heroNote: "Freelance",
                  desc: "Full-Stack Developer · พัฒนาทั้ง Mobile App ระยะยาว และ Website",
                  color: "#22D3EE",
                  icon: (
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor"><path d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2m4 4V4h-4v2h4z"/></svg>
                  ),
                },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/25 rounded-xl p-5 md:p-6 overflow-hidden cursor-default transition-all"
                >
                  {/* Hover gradient glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${stat.color}1A, transparent 70%)`,
                    }}
                  ></div>

                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-30 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
                  ></div>

                  {/* Background ghost icon (very subtle) */}
                  <div
                    className="absolute right-3 top-3 w-16 h-16 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity pointer-events-none"
                    style={{ color: stat.color }}
                  >
                    {stat.icon}
                  </div>

                  <div className="relative">
                    {/* Tag */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: stat.color }}></div>
                      <div className="text-[10px] font-bold tracking-[0.18em]" style={{ color: stat.color }}>
                        {stat.tag}
                      </div>
                    </div>

                    {/* Hero */}
                    <div
                      className="text-3xl md:text-4xl font-extrabold leading-none mb-1"
                      style={{ color: stat.color }}
                    >
                      {stat.hero}
                    </div>

                    {/* Hero note */}
                    <div className="text-sm font-bold text-white mb-3">
                      {stat.heroNote}
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-white/10 mb-3"></div>

                    {/* Description */}
                    <div className="text-xs text-gray-500 leading-relaxed">
                      {stat.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>


            {/* ========== TWO FEATURED AWARDS — Side by Side ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid md:grid-cols-2 gap-5 mt-12 max-w-5xl mx-auto"
            >
              {/* === AWARD CARD 1: NSC === */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#A855F7]/40 to-transparent rounded-2xl blur opacity-50 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative bg-[#0A0F1F]/95 backdrop-blur-xl border border-[#A855F7]/30 rounded-2xl p-6 md:p-7 h-full flex flex-col">

                  {/* Header with icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-[10px] font-bold tracking-[0.2em] text-[#A855F7] mb-1">CYBERSECURITY · 2024</div>
                      <div className="text-[10px] font-semibold tracking-wider text-gray-500">NATIONAL FINALIST</div>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-[#A855F7]/10 border border-[#A855F7]/30 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#A855F7]" viewBox="0 0 24 24" fill="currentColor"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5m14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2 leading-tight">
                    NSC 2024
                  </h3>
                  <div className="text-sm text-[#A855F7] font-semibold mb-3">
                    National Software Contest
                  </div>

                  <div className="h-px bg-gradient-to-r from-[#A855F7]/40 to-transparent mb-3"></div>

                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed mb-4 flex-1">
                    <span className="text-white font-semibold">"Cybersecurise"</span> แอปพลิเคชันบนมือถือสำหรับป้องกันมิจฉาชีพ ช่วยปกป้องผู้ใช้งานผ่าน 5 ฟีเจอร์หลัก ได้แก่: ระบบตรวจสอบการตั้งค่าที่มีความเสี่ยง, ตรวจสอบแอปพลิเคชันที่อาจเป็นอันตราย, ระบบตรวจจับ SMS หลอกลวง/สแปม/OTP, แบบทดสอบความรู้ด้านความปลอดภัยไซเบอร์, และระบบตรวจสอบรายชื่อบัญชีดำ (Blacklist) ที่เชื่อมต่อฐานข้อมูลกับ CheckGon และ Chaladohn
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <div className="text-xs text-gray-500">
                      Funded by <span className="text-gray-300 font-semibold">NECTEC, NSTDA</span>
                    </div>
                    <a href="#projects" className="text-xs text-[#A855F7] hover:text-white font-semibold transition-colors">
                      See Project →
                    </a>
                  </div>
                </div>
              </div>

              {/* === AWARD CARD 2: HACKATHON === */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#22D3EE]/40 to-transparent rounded-2xl blur opacity-50 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative bg-[#0A0F1F]/95 backdrop-blur-xl border border-[#22D3EE]/30 rounded-2xl p-6 md:p-7 h-full flex flex-col">

                  {/* Header with icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-[10px] font-bold tracking-[0.2em] text-[#22D3EE] mb-1">PROMPT ENGINEERING · 2024</div>
                      <div className="text-[10px] font-semibold tracking-wider text-gray-500">RANK 8 · NATIONAL</div>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-[#22D3EE]/10 border border-[#22D3EE]/30 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#22D3EE]" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A1 1 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5L12 10.85l5.96-3.35L12 4.15M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71l6-3.38z"/></svg>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2 leading-tight">
                    AI Hackathon 2024 (Prompt Engineer)
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-sm text-[#22D3EE] font-semibold">
                      8th Place Nationally
                    </div>
                    <div className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#22D3EE]/15 text-[#22D3EE] border border-[#22D3EE]/30 tracking-wider">
                      TOP 10 AWARD
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-[#22D3EE]/40 to-transparent mb-3"></div>

                  {/* Description with emphasis on award exclusivity */}
                  <p className="text-sm text-gray-300 leading-relaxed mb-4 flex-1">
                    <span className="text-white font-semibold">คว้าอันดับ 8 ระดับประเทศของงาน AI Hackathon 2024 (Prompt Engineer)</span> · ได้รับรางวัล<span className="text-white font-semibold">"AI Engineer"</span> มอบให้ผู้ที่เข้ารอบ <span className="text-[#22D3EE] font-semibold">Top 10 ทีม</span> ได้แสดงทักษะ Prompt Engineering ขั้นสูง มาประยุกต์ใช้งานจริง ได้เรียนรู้ทักษะการทำงานเป็นทีม การแก้ปัญหาและโจทย์ต่างๆภายใต้ความกดดันด้านเวลาในการแข่งขัน
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <div className="text-xs text-gray-500">
                      Award: <span className="text-gray-300 font-semibold">"AI Engineer"</span>
                    </div>
                    <a href="#honors" className="text-xs text-[#22D3EE] hover:text-white font-semibold transition-colors">
                      See Award →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

      <AchievementShowcase />
      <FeaturedProjects />
      <Experience />
      <Skills />
      <Certificates />

      {/* 🌟 4. PDF PREVIEW MODAL 🌟 (เพิ่มเข้ามาสำหรับดูไฟล์) */}
      <AnimatePresence>
        {pdfModal.isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-6"
            onClick={() => setPdfModal({ ...pdfModal, isOpen: false })} // คลิกข้างนอกเพื่อปิด
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl h-[90vh] bg-[#0F172A] rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()} // ป้องกันการปิดเมื่อคลิกตัว Modal
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#A855F7]/20 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#A855F7]" />
                  </div>
                  <h3 className="font-bold text-white text-lg tracking-tight">{pdfModal.title}</h3>
                </div>
                <button 
                  onClick={() => setPdfModal({ ...pdfModal, isOpen: false })}
                  className="p-2 rounded-lg bg-white/5 hover:bg-[#FF5F56]/20 text-gray-400 hover:text-[#FF5F56] transition-all border border-white/5"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* PDF Content Area */}
              <div className="flex-1 bg-white">
                <iframe 
                  src={`${pdfModal.url}#view=FitH`} 
                  className="w-full h-full border-none"
                  title="PDF Preview"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

        <Contact />
      
      </div>
    </div>
  );
};

export default Home;