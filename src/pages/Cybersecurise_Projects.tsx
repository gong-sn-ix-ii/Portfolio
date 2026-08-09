import React, { useRef, useEffect, memo, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Smartphone, BrainCircuit, Lock, Code2, 
  ChevronLeft, Award, ExternalLink, PlayCircle, Network, 
  Image, Lightbulb, TrendingUp, Users, FileText, Download,
  Layers3, Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';

// 📸 Import รูปภาพกิจกรรม & เกียรติบัตร
import nsc1 from "../assets/images/credentials/NSC2024/1.webp";
import nsc2 from "../assets/images/credentials/NSC2024/2.webp"; 
import nsc3 from "../assets/images/credentials/NSC2024/3.webp";
import nsc4 from "../assets/images/credentials/NSC2024/4.webp";
import nsc5 from "../assets/images/credentials/NSC2024/5.webp";
import nsc6 from "../assets/images/credentials/NSC2024/6.webp";
import nsc7 from "../assets/images/credentials/NSC2024/7.webp";
import nsc8 from "../assets/images/credentials/NSC2024/8.webp";
import nsc9 from "../assets/images/credentials/NSC2024/9.webp";
import poster from "../assets/images/projects/Cybersecurise/ข่าวไปแข่ง.webp"; 
import cerNSC from "../assets/images/credentials/NSC2024/nsc.webp"
import cerNSC_budget from "../assets/images/credentials/NSC2024/nsc-budget.webp"

// 📂 Import เอกสาร
import cyberFile from "../assets/document/cybersecurise/CyberSecurise.pdf"
import cyber_24p14e0061 from "../assets/document/cybersecurise/26p14e0061.pdf" 

// 📱 IMPORT รูปภาพหน้าจอ UI (26 รูป)
import ui0 from "../assets/images/projects/Cybersecurise/ui/0.webp";
import ui1 from "../assets/images/projects/Cybersecurise/ui/1.webp";
import ui2 from "../assets/images/projects/Cybersecurise/ui/2.webp";
import ui3 from "../assets/images/projects/Cybersecurise/ui/3.webp";
import ui4 from "../assets/images/projects/Cybersecurise/ui/4.webp";
import ui4_0 from "../assets/images/projects/Cybersecurise/ui/4_0.webp";
import ui4_1 from "../assets/images/projects/Cybersecurise/ui/4_1.webp";
import ui5 from "../assets/images/projects/Cybersecurise/ui/5.webp";
import ui6 from "../assets/images/projects/Cybersecurise/ui/6.webp";
import ui8 from "../assets/images/projects/Cybersecurise/ui/7.webp";
import ui7 from "../assets/images/projects/Cybersecurise/ui/8.webp";
import ui9 from "../assets/images/projects/Cybersecurise/ui/9.webp";
import ui10 from "../assets/images/projects/Cybersecurise/ui/10.webp";
import ui11 from "../assets/images/projects/Cybersecurise/ui/11.webp";
import ui11_1 from "../assets/images/projects/Cybersecurise/ui/11_1.webp";
import ui11_2 from "../assets/images/projects/Cybersecurise/ui/11_2.webp";
import ui12 from "../assets/images/projects/Cybersecurise/ui/12.webp";
import ui13 from "../assets/images/projects/Cybersecurise/ui/13.webp";
import ui14 from "../assets/images/projects/Cybersecurise/ui/14.webp";
import ui15 from "../assets/images/projects/Cybersecurise/ui/15.webp";
import ui16 from "../assets/images/projects/Cybersecurise/ui/16.webp";
import ui17 from "../assets/images/projects/Cybersecurise/ui/17.webp";
import ui18 from "../assets/images/projects/Cybersecurise/ui/18.webp";
import ui19 from "../assets/images/projects/Cybersecurise/ui/19.webp";
import ui20 from "../assets/images/projects/Cybersecurise/ui/20.webp";
import ui21 from "../assets/images/projects/Cybersecurise/ui/21.webp";

const appScreensData = [
  { id: 0, image: ui0, title: "Welcome Screen", description: "หน้าแรกของแอปพลิเคชัน" },
  { id: 1, image: ui1, title: "User Authentication", description: "เข้าสู่ระบบ" },
  { id: 2, image: ui2, title: "Account Registration", description: "สมัครบัญชีเพื่อใช้งาน" },
  { id: 3, image: ui3, title: "Password Recovery", description: "หน้าสำหรับผู้ใช้ลืมรหัสผ่าน" },
  { id: 4, image: ui4, title: "Main Dashboard", description: "หน้าหลักสำหรับการใช้งาน" },
  { id: 5, image: ui4_0, title: "Knowledge Hub", description: "คำแนะนำวิธีการรับมือกับมิจฉาชีพรูปแบบต่างๆ" },
  { id: 6, image: ui4_1, title: "Account Verification", description: "หน้าตรวจสอบชื่อบัญชีและเลขบัญชี" }, 
  { id: 8, image: ui6, title: "Verification Results", description: "หน้าตรวจสอบชื่อบัญชีและเลขบัญชี พร้อมแสดงข้อมูลหากพบความผิดปกติ" },
  { id: 9, image: ui7, title: "Bank Account Lookup", description: "หน้าตรวจสอบชื่อบัญชีและเลขบัญชี พร้อมแสดงข้อมูลหากพบความผิดปกติ" },
  { id: 10, image: ui8, title: "Phone Number Lookup", description: "หน้าตรวจสอบเบอร์โทรศัพท์ พร้อมแสดงข้อมูลหากพบความผิดปกติ" },
  { id: 11, image: ui9, title: "AI SMS Threat Detection", description: "ตรวจสอบข้อความบนเครื่องมือถือ พร้อมใช้ AI จำแนกประเภทข้อความ" },
  { id: 12, image: ui10, title: "Threat Category Legend", description: "กล่องข้อความแสดงหมวดหมู่ไอคอน แต่ละประเภทของข้อความที่ AI ตรวจจับ" },
  { id: 13, image: ui11, title: "Message Analysis Details", description: "ตรวจสอบรายละเอียดข้อความผ่านแอปมือถือ Cybersecurise โดยตรง" },
  { id: 14, image: ui11_1, title: "Block Confirmation", description: "บล็อคข้อความ" },
  { id: 15, image: ui11_2, title: "Unblock Confirmation", description: "ปลดบล็อคข้อความ" },
  { id: 16, image: ui12, title: "Quarantined Messages", description: "ข้อความที่ถูกบล็อคผู้ใช้จะไม่เห้นรายละเอียดข้อความ เพื่อป้องกันไม่ให้ไปคลิ๊กโดนลิ้งค์หรือข้อมูลที่อาจส่งผลอันตรายต่อผู้ใช้งาน" },
  { id: 17, image: ui13, title: "Navigation Menu", description: "เมนูต่างๆของระบบบนแอปพลิเคชัน" },
  { id: 18, image: ui14, title: "Vulnerability Scanner", description: "ตรวจสอบ Setting ที่หากเปิดอยู่จะเป็นอันตรายให้มิจฉาชีพเข้ามาควบคุมเครื่องมือถือได้" },
  { id: 19, image: ui15, title: "Security Remediation Guide", description: "ระบบนำทางไปยัง Setting เพื่อปิด พร้อมให้คำแนะนำว่าหากเปิดไว้จะเป็นอันตรายในรูปแบบใด" },
  { id: 20, image: ui16, title: "Application Risk Assessment", description: "ตรวจสอบและให้เปอร์เซ็นความอันตรายแต่ละแอปพลิเคชัน จากการขอสิทธิ์การเข้าถึง" },
  { id: 21, image: ui17, title: "Permission Audit", description: "ตรวจสอบสิทธิ์การเข้าถึงแต่ละแอปพลิเคชัน" },
  { id: 22, image: ui18, title: "Cybersecurity Quiz Module", description: "หมวดหมู่แบบทดสอบกลลวงโลกออนไลน์" },
  { id: 23, image: ui19, title: "Quiz Categories", description: "แบบทดสอบกลลวงโลกออนไลน์เพื่อเพิ่มความรู้ให้กับผู้ใช้งาน" },
  { id: 24, image: ui20, title: "Help & Support", description: "ล็อคอินก่อนใช้งาน เพื่อส่งรายละเอียดหรือปัญหาที่พบเจอได้" },
  { id: 25, image: ui21, title: "Logout Confirmation", description: "ออกจากระบบ" },
];

const projectDocuments = [
  { id: 1, title: "โปรเจค NSC ของมหาลัย", description: "เอกสารนำเสนอโครงการ รายละเอียดเชิงเทคนิค และสถาปัตยกรรมระบบ", fileUrl: cyberFile, fileSize: "2.4 MB" },
  { id: 2, title: "แบบฟอร์มสรุปข้อมูลโครงการแข่งขัน NSC", description: "บทสรุปผู้บริหาร ภาพรวมผลลัพธ์การทดสอบ และประโยชน์ของแอปพลิเคชัน", fileUrl: cyber_24p14e0061, fileSize: "1.1 MB" }, 
];

const certificatesData = [
  { id: 1, title: "NSC 2024 Finalist", issuer: "NECTEC & NSTDA", date: "March 2024", description: "ผ่านเข้ารอบชิงชนะเลิศระดับประเทศ โครงการการแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทย ครั้งที่ 26", image: cerNSC, highlightColor: "from-[#FFBD2E]" },
  { id: 2, title: "Cyber Security Excellence", issuer: "Thailand Cyber Toptalent", date: "Late 2023", description: "ทุนสนับสนุนผู้พัฒนาโครงการในรอบชิงชนะเลิศระดับประเทศ ครั้งที่ 26", image: cerNSC_budget, highlightColor: "from-[#27C93F]" }
];

const eventImages = [
  { id: 1, title: "National Software Contest - NSC Thailand 2024", description: "งานแข่งขัน NSC 2024 ", url: poster },
  { id: 2, title: "National Software Contest - NSC Thailand 2024", description: "งานแข่งขัน NSC 2024 ", url: nsc1 },
  { id: 3, title: "Tech Lead Feedback", description: "รับฟังคำแนะนำเชิงเทคนิคจากผู้เชี่ยวชาญเพื่อนำมาปรับปรุงโมเดล AI NLP", url: nsc2 },
  { id: 4, title: "Interactive Demo Booth", description: "อธิบายการทำงานของแอปแบบ Real-time ให้กับผู้เข้าชมงานที่บูธ", url: nsc3 },
  { id: 5, title: "Interactive Demo Booth", description: "อธิบายการทำงานของแอปแบบ Real-time ให้กับผู้เข้าชมงานที่บูธ", url: nsc4 },
  { id: 6, title: "Interactive Demo Booth", description: "อธิบายการทำงานของแอปแบบ Real-time ให้กับผู้เข้าชมงานที่บูธ", url: nsc5 },
  { id: 7, title: "Interactive Demo Booth", description: "อธิบายการทำงานและวิธีการใช้งานของแอปพลิเคชันให้คณะกรรมการ", url: nsc6 },
  { id: 8, title: "Interactive Demo Booth", description: "อธิบายการทำงานของแอปและระบบต่างๆ", url: nsc7 },
  { id: 9, title: "Interactive Demo Booth", description: "อธิบายการทำงานของแอปแบบ Real-time ให้กับผู้เข้าชมงานที่บูธ", url: nsc8 },
  { id: 10, title: "Interactive Demo Booth", description: "อธิบายการทำงานของแอปแบบ Real-time ให้กับผู้เข้าชมงานที่บูธ", url: nsc9 },
];

const keyTakeaways = [
  {
    title: "Performance Optimization",
    description: "เรียนรู้การแก้ปัญหาคอขวด (Bottleneck) ลดการกินทรัพยากรเครื่อง เพื่อให้สแกน SMS ได้แบบ Real-time ไร้ความหน่วง",
    icon: <Lock className="w-6 h-6 text-[#27C93F]" />
  },
  {
    title: "Communication & Pitching",
    description: "ได้ประสบการณ์พรีเซนต์โปรเจกต์เทคโนโลยีซับซ้อนให้คณะกรรมการเข้าใจง่าย และการทำงานร่วมกันเป็นทีม",
    icon: <Users className="w-6 h-6 text-[#F472B6]" />
  }
];

const CybersecuriseProject: React.FC = memo(() => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const features = [
    {
      title: "Real-time Filtering",
      description: "ดักจับและคัดกรองข้อความ SMS ทันทีที่ได้รับ ป้องกันมิจฉาชีพก่อนเกิดความเสียหาย",
      icon: <Smartphone className="w-6 h-6 text-[#22D3EE]" />,
      colSpan: "md:col-span-2"
    },
    {
      title: "AI NLP Engine",
      description: "วิเคราะห์บริบทข้อความภาษาไทยด้วยความแม่นยำสูง 95%",
      icon: <BrainCircuit className="w-6 h-6 text-[#A855F7]" />,
      colSpan: "md:col-span-1"
    },
  ];

  const techStack = [
    { name: "Android Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
    { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" }, 
    { name: "NLP", icon: <BrainCircuit className="w-4 h-4 text-[#A855F7]" /> }
  ];

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="min-h-screen bg-[#020617] text-white pb-24 relative overflow-hidden font-sans">
      
      {/* 🔮 Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#A855F7]/15 via-[#22D3EE]/5 to-transparent blur-[120px] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 pt-8 relative z-20">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md w-fit group mb-12">
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Portfolio</span>
        </Link>

        <div className="grid lg:grid-cols-[1fr,auto] gap-12 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#4000ff88]/10 border border-[#4000ff88]/20 text-[#00bbff] text-xs font-bold tracking-widest uppercase mb-6">
              <Smartphone className="w-4 h-4" /> MOBILE APPLICATION
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-6 uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-[#4000ff88] break-words">
              Cybersecurise
            </h1>
            
            <p className="text-base md:text-lg text-gray-300 font-light mb-8 leading-[1.8] w-full max-w-full md:max-w-2xl break-words [word-break:break-word] text-left">
              แอปพลิเคชันที่ช่วยป้องกันภัยอันตรายจาก <strong className="text-white font-semibold">อาชญากรรมทางเทคโนโลยีดิจิทัล</strong> ของคนไทยให้ครอบคลุมหลายช่องทาง เพื่อลดโอกาสการตกเป็นเหยื่อ โดยเน้นฟีเจอร์ที่สามารถ <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">ตรวจสอบและแจ้งเตือน</span> ความเสี่ยงที่อาจเกิดขึ้น เช่น 
              การตรวจสอบประวัติ <span className="text-cyan-400 font-medium">ธุรกรรมทางการเงิน</span>, 
              การแจ้งเตือนสายโทรศัพท์หรือ <span className="text-blue-400 font-medium">SMS ที่อาจเป็นอันตราย</span>, 
              การแนะนำ <span className="text-purple-400 font-medium">การตั้งค่าความปลอดภัย</span> ในสมาร์ทโฟน 
              และการประเมินความเสี่ยงของแอปพลิเคชันที่ติดตั้งในเครื่อง
              <br /><br />
              รวมไปถึงมีคำแนะนำและ <span className="text-indigo-400 font-medium">แบบทดสอบกลลวงโลกไซเบอร์</span> เพื่อเพิ่มภูมิคุ้มกันให้ผู้ใช้สามารถใช้งานเทคโนโลยีได้อย่างปลอดภัยและมั่นใจมากยิ่งขึ้น ขับเคลื่อนด้วยพลังของ <strong className="font-black tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">AI และ NLP</strong> ประมวลผลบนอุปกรณ์ของคุณโดยตรงแบบ <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 tracking-wider">Real-time</span>
            </p>

            <div className="mb-10">
              <h3 className="text-xs font-bold text-gray-500 mb-4 tracking-[0.2em] uppercase">BUILT WITH</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:border-white/30 transition-colors">
                    {tech.logo ? <img src={tech.logo} alt={tech.name} className="w-4 h-4 object-contain" /> : tech.icon}
                    <span className="text-sm font-bold text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* <a href="https://drive.google.com/file/d/16573uAFrf_xFJZHgUnuVtlGCWwP6CMDa/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-[#00b7ff] text-black font-black rounded-2xl hover:scale-105 transition-all shadow-[0_10px_20px_rgba(145,000,156,0.2)]"> */}
            <a href="https://github.com/gong-sn-ix-ii/Cybersecurise" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-[#00b7ff] text-black font-black rounded-2xl hover:scale-105 transition-all shadow-[0_10px_20px_rgba(145,000,156,0.2)]">
              <Code2 className="w-5 h-5" />
              View on Github
            </a>
          </motion.div>

          {/* Right Side: Stacked Phone Mockups */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative hidden lg:flex justify-center items-center w-[500px] h-[600px]">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-pink-500/10 blur-[100px] rounded-full"></div>

            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-10 top-16 right-4 w-[280px] aspect-[9/19] bg-[#0A0A0C] border-[10px] border-[#18181b] rounded-[2.5rem] shadow-2xl overflow-hidden rotate-[15deg] transition-transform duration-500"
            >
              <div className="absolute top-0 inset-x-0 h-5 bg-[#18181b] rounded-b-xl w-28 mx-auto z-20"></div>
              <img src={ui1} alt="Onboarding Screen" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute z-20 top-2 left-10 w-[310px] aspect-[9/19] bg-[#0A0A0C] border-[12px] border-[#18181b] rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden transition-transform duration-500"
            >
              <div className="absolute top-0 inset-x-0 h-6 bg-[#18181b] rounded-b-2xl w-32 mx-auto z-20"></div>
              <img src={ui4} alt="Dashboard Preview" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 2. HONORS & CERTIFICATIONS (ย้ายขึ้นมาดึงดูด HR ทันที) */}
      <div className="max-w-5xl mx-auto px-6 mb-32 relative z-10">
        <div className="flex items-center gap-3 mb-10">
          <Award className="w-8 h-8 text-[#FFBD2E]" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Honors & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFBD2E] to-[#F472B6]">Certifications</span></h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="group flex flex-col bg-[#0A0A0C] border border-gray-800 rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all">
              <div className="relative h-60 overflow-hidden cursor-pointer" onClick={() => setSelectedImg(cert.image)}>
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-gray-300">{cert.date}</div>
              </div>
              <div className="p-8">
                <p className="text-sm font-bold text-gray-500 uppercase mb-2">{cert.issuer}</p>
                <h3 className="text-2xl font-bold text-white mb-4">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{cert.description}</p>
                <button onClick={() => setSelectedImg(cert.image)} className="inline-flex items-center gap-2 text-[#22D3EE] font-semibold"><span>View Certificate</span><ExternalLink className="w-4 h-4" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. VIDEO SECTION */}
      <div className="max-w-5xl mx-auto px-6 mb-32 relative z-10 flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full relative rounded-[2rem] p-2 bg-gradient-to-b from-gray-800 to-[#020617] border border-gray-800 shadow-2xl">
          <div className="relative rounded-[1.5rem] overflow-hidden bg-black aspect-video border border-gray-900 group">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/xgWA_ukfgJg"
              title="Cybersecurise System Demo"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 flex items-center gap-2 pointer-events-none">
              <PlayCircle className="w-4 h-4 text-[#27C93F]" />
              <span className="text-xs font-mono text-gray-300">SYSTEM_DEMO.MP4</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 4. OVERVIEW & FEATURES BENTO GRID */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 mb-32 relative z-10">
        <div className="md:col-span-3 bg-gradient-to-br from-[#0A0A0C] to-[#050505] border border-gray-800 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-lg">
          <div>
            <h3 className="text-gray-400 font-mono text-sm mb-4 tracking-wider">TECHNOLOGY_STACK_SUMMARY</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, idx) => (
                <div key={idx} className="flex items-center gap-2.5 px-4 py-2 bg-[#111113] border border-gray-800 rounded-xl">
                  {tech.logo ? <img src={tech.logo} alt={tech.name} className="w-4 h-4" /> : tech.icon}
                  <span className="text-sm font-semibold text-gray-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {features.map((feature, idx) => (
          <div key={idx} className={`bg-[#0A0A0C] border border-gray-800 rounded-3xl p-8 hover:border-gray-600 transition-colors ${feature.colSpan}`}>
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">{feature.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* 5. APPLICATION INTERFACE (UI SHOWCASE) */}
      <div id="ui-showcase" className="max-w-[95rem] mx-auto px-4 lg:px-8 mb-32 relative z-10">
        <div className="flex items-center gap-3 mb-10 justify-center md:justify-start">
          <Layers3 className="w-8 h-8 text-[#22D3EE]" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center md:text-left">
            Application <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#27C93F]">Interface</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-10">
          {appScreensData.map((screen, idx) => (
            <motion.div key={screen.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.02 }} className="flex flex-col items-center group">
              <div className="relative w-full max-w-[180px] aspect-[9/19] bg-black border-[5px] border-gray-800 rounded-[1.5rem] overflow-hidden shadow-xl cursor-pointer transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#22D3EE]" onClick={() => setSelectedImg(screen.image)}>
                <div className="absolute top-0 inset-x-0 h-2.5 bg-gray-800 rounded-b-md w-12 mx-auto z-20 group-hover:bg-[#22D3EE]"></div>
                <img src={screen.image} alt={screen.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <Eye className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="mt-4 text-center px-1">
                <h4 className="text-[13px] font-bold text-white group-hover:text-[#22D3EE] transition-colors line-clamp-1">{screen.title}</h4>
                <p className="text-[10px] text-gray-500 mt-1 line-clamp-2 leading-relaxed">{screen.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 6. PROJECT DOCUMENTATION */}
      <div className="max-w-5xl mx-auto px-6 mb-32 relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <FileText className="w-8 h-8 text-[#22D3EE]" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Project <span className="text-[#A855F7]">Documentation</span></h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {projectDocuments.map((doc, idx) => (
            <motion.div key={doc.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
              <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer" className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-[#0A0A0C] border border-gray-800 rounded-2xl hover:border-[#22D3EE]/50 hover:bg-white/5 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-[#22D3EE]/10 border border-[#22D3EE]/20 flex items-center justify-center text-[#22D3EE] group-hover:scale-110 transition-transform"><FileText className="w-6 h-6" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#22D3EE]">{doc.title}</h3>
                    <p className="text-sm text-gray-400 max-w-xl">{doc.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                  <span className="text-xs font-mono text-gray-500 bg-gray-900 px-3 py-1.5 rounded-lg">PDF • {doc.fileSize}</span>
                  <div className="flex items-center gap-2 text-sm font-bold text-[#22D3EE]"><span>View File</span><Download className="w-4 h-4" /></div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 7. WHAT I'VE LEARNED */}
      <div className="max-w-5xl mx-auto px-6 mb-32 relative z-10">
        <div className="flex items-center gap-3 mb-10">
          <Lightbulb className="w-8 h-8 text-[#a200ff]" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">What I've <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#a200ff]">Learned</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {keyTakeaways.map((item, idx) => (
            <div key={idx} className="bg-[#0A0A0C] border border-gray-800 rounded-2xl p-6 hover:bg-white/5 transition-colors">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 8. EVENT ATMOSPHERE & MEMORIES */}
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <Image className="w-8 h-8 text-[#22D3EE]" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Event Atmosphere & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#A855F7]">Memories</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {eventImages.map((image) => (
            <div key={image.id} className="relative aspect-[4/3] group bg-[#0A0A0C] border border-gray-800 rounded-2xl overflow-hidden cursor-pointer" onClick={() => setSelectedImg(image.url)}>
              <img src={image.url} alt={image.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent translate-y-4 group-hover:translate-y-0 transition-transform">
                <h4 className="text-sm font-bold text-white">{image.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 9. MODAL OVERLAY */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10 cursor-zoom-out" onClick={() => setSelectedImg(null)}>
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <button className="absolute -top-10 right-0 text-white text-3xl hover:text-[#A855F7]">&times;</button>
            <img src={selectedImg} alt="Expanded View" className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300" />
          </div>
        </div>
      )}

    </section>
  );
});

export default CybersecuriseProject;