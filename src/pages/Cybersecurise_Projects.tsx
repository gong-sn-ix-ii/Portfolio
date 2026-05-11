import React, { useRef, useEffect, memo, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Smartphone, BrainCircuit, Lock, Code2, 
  ChevronLeft, Award, ExternalLink, PlayCircle, Network, 
  Image, Lightbulb, TrendingUp, Users, FileText, Download 
} from 'lucide-react';
import { Link } from 'react-router-dom';

// 🎬 Import วิดีโอ
import cyberVideo from '../assets/vdo/cybersecurise/Cybersecurise_Tutorial.mp4';  

import nsc1 from "../assets/images/credentials/NSC2024/1.jpg";
import nsc2 from "../assets/images/credentials/NSC2024/2.jpg"; 
import nsc3 from "../assets/images/credentials/NSC2024/3.jpg";
import nsc4 from "../assets/images/credentials/NSC2024/4.jpg";
import nsc5 from "../assets/images/credentials/NSC2024/5.jpg";
import nsc6 from "../assets/images/credentials/NSC2024/6.jpg";
import nsc7 from "../assets/images/credentials/NSC2024/7.jpg";
import nsc8 from "../assets/images/credentials/NSC2024/8.jpg";
import nsc9 from "../assets/images/credentials/NSC2024/9.jpg";
import poster from "../assets/images/projects/Cybersecurise/ข่าวไปแข่ง.jpg"; 

import cerNSC from "../assets/images/credentials/NSC2024/nsc.png"
import cerNSC_budget from "../assets/images/credentials/NSC2024/nsc-budget.png"

import cyberFile from "../assets/document/cybersecurise/CyberSecurise.pdf"
import cyber_24p14e0061 from "../assets/document/cybersecurise/26p14e0061.pdf" 

const projectDocuments = [
  {
    id: 1,
    title: "โปรเจค NSC ของมหาลัย",
    description: "เอกสารนำเสนอโครงการ รายละเอียดเชิงเทคนิค และสถาปัตยกรรมระบบ",
    fileUrl: cyberFile,
    fileSize: "2.4 MB"
  },
  {
    id: 2,
    title: "แบบฟอร์มสรุปข้อมูลโครงการแข่งขัน NSC",
    description: "บทสรุปผู้บริหาร ภาพรวมผลลัพธ์การทดสอบ และประโยชน์ของแอปพลิเคชัน",
    fileUrl: cyber_24p14e0061,
    fileSize: "1.1 MB"
  }, 
];

const certificatesData = [
  {
    id: 1,
    title: "NSC 2024 Finalist",
    issuer: "NECTEC & NSTDA",
    date: "March 2024",
    description: "ผ่านเข้ารอบชิงชนะเลิศระดับประเทศ โครงการการแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทย ครั้งที่ 26 (หมวดโปรแกรมเพื่องานการพัฒนาด้านวิทยาศาสตร์และเทคโนโลยี)",
    image: cerNSC, 
    highlightColor: "from-[#FFBD2E]"
  },
  {
    id: 2,
    title: "Cyber Security Excellence",
    issuer: "Thailand Cyber Toptalent",
    date: "Late 2023",
    description: "ทุนสนับสนุนผู้พัฒนาโครงการในรอบชิงชนะเลิศระดับประเทศ ครั้งที่ 26 (หมวดโปรแกรมเพื่องานการพัฒนาด้านวิทยาศาสตร์และเทคโนโลยี)",
    image: cerNSC_budget, 
    highlightColor: "from-[#27C93F]"
  }
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
    title: "Technical Leap",
    description: "ยกระดับทักษะการเขียน Kotlin และการฝังโมเดล AI (NLP) ลงบนแอปพลิเคชันมือถือให้ทำงานแบบ Offline ได้จริง",
    icon: <TrendingUp className="w-6 h-6 text-[#22D3EE]" />
  },
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
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // 🌟 เพิ่ม State สำหรับเก็บ URL รูปภาพที่โดนคลิก
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
      description: "วิเคราะห์บริบทข้อความด้วยความแม่นยำสูง 95%",
      icon: <BrainCircuit className="w-6 h-6 text-[#A855F7]" />,
      colSpan: "md:col-span-1"
    },
    {
      title: "Privacy First (Offline)",
      description: "ประมวลผลบนเครื่อง (On-device) ไม่เก็บข้อมูลส่วนตัวผู้ใช้",
      icon: <Lock className="w-6 h-6 text-[#27C93F]" />,
      colSpan: "md:col-span-3"
    }
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-[#020617] text-white pb-24 relative overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#27C93F]/15 via-[#22D3EE]/5 to-transparent blur-[120px] pointer-events-none" />

      {/* Navigation */}
      <div className="pt-8 px-6 lg:px-24 max-w-7xl mx-auto relative z-20">
        <Link to="/#honors" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md w-fit">
          <ChevronLeft className="w-5 h-5" />
          <span className="font-medium">Back to Portfolio</span>
        </Link>
      </div>

      {/* 1. HERO & VIDEO SECTION */}
      <div className="max-w-5xl mx-auto px-6 mt-12 mb-20 relative z-10 flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#27C93F]/10 border border-[#27C93F]/20 text-[#27C93F] text-sm font-bold tracking-wide mb-6 shadow-[0_0_15px_rgba(39,201,63,0.2)]">
            <ShieldCheck className="w-4 h-4" /> SECURE APP DEPLOYMENT
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
            Cybersecurise
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto mb-10">
            แอปพลิเคชันป้อมปราการดักจับ SMS มิจฉาชีพ ด้วยพลังของ <strong className="text-[#A855F7] font-semibold">AI & NLP</strong> เพื่อความปลอดภัยในยุคดิจิทัล
          </p>
        </motion.div>

        {/* Video Player */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full relative rounded-[2rem] p-2 bg-gradient-to-b from-gray-800 to-[#020617] shadow-[0_20px_50px_rgba(39,201,63,0.1)] border border-gray-800"
        >
          <div className="relative rounded-[1.5rem] overflow-hidden bg-black aspect-video border border-gray-900 group">
            <video 
              ref={videoRef}
              src={cyberVideo} 
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 flex items-center gap-2 pointer-events-none">
              <PlayCircle className="w-4 h-4 text-[#27C93F]" />
              <span className="text-xs font-mono text-gray-300">SYSTEM_DEMO.MP4</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 2. OVERVIEW & FEATURES BENTO GRID */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 relative z-10">
        <div className="md:col-span-3 bg-gradient-to-br from-[#0A0A0C] to-[#050505] border border-gray-800 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-lg">
          <div>
            <h3 className="text-gray-400 font-mono text-sm mb-4 tracking-wider">TECHNOLOGY_STACK</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, idx) => (
                <div key={idx} className="flex items-center gap-2.5 px-4 py-2 bg-[#111113] border border-gray-800 hover:border-gray-600 hover:bg-white/5 transition-all duration-300 rounded-xl shadow-sm cursor-default">
                  {tech.logo ? (
                    <img src={tech.logo} alt={tech.name} loading="lazy" decoding="async" className="w-5 h-5 object-contain" />
                  ) : (
                    tech.icon
                  )}
                  <span className="text-sm font-semibold text-gray-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          <a href="https://drive.google.com/file/d/16573uAFrf_xFJZHgUnuVtlGCWwP6CMDa/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#22D3EE] text-black font-bold hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all whitespace-nowrap w-full md:w-auto mt-4 md:mt-0">
            <Code2 className="w-5 h-5" />
            View Source Code
          </a>
        </div>

        {features.map((feature, idx) => (
          <div key={idx} className={`bg-gradient-to-br from-[#0A0A0C] to-[#050505] border border-gray-800 rounded-3xl p-8 hover:border-gray-600 transition-colors ${feature.colSpan}`}>
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* 3. PROJECT DOCUMENTATION */}
      <div className="max-w-5xl mx-auto px-6 mb-24 relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <FileText className="w-8 h-8 text-[#22D3EE]" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#A855F7]">Documentation</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {projectDocuments.map((doc, idx) => (
            <motion.div 
              key={doc.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <a 
                href={doc.fileUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 md:p-6 bg-[#0A0A0C] border border-gray-800 rounded-2xl hover:border-[#22D3EE]/50 hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4 md:gap-6 mb-4 sm:mb-0">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-[#22D3EE]/10 border border-[#22D3EE]/20 flex items-center justify-center text-[#22D3EE] group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#22D3EE] transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed max-w-xl">
                      {doc.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end border-t border-gray-800 sm:border-t-0 pt-4 sm:pt-0">
                  <span className="text-xs font-mono text-gray-500 bg-gray-900 px-3 py-1.5 rounded-lg border border-gray-800">
                    PDF • {doc.fileSize}
                  </span>
                  <div className="flex items-center gap-2 text-sm font-bold text-[#22D3EE] group-hover:text-cyan-300 transition-colors">
                    <span>View File</span>
                    <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. WHAT I'VE LEARNED */}
      <div className="max-w-5xl mx-auto px-6 mb-24 relative z-10">
        <div className="flex items-center gap-3 mb-10">
          <Lightbulb className="w-8 h-8 text-[#a200ff]" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">What I've <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFBD2E] to-[#27C93F]">Learned</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {keyTakeaways.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#0A0A0C] border border-gray-800 rounded-2xl p-6 hover:bg-white/5 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 5. CERTIFICATES & AWARDS */}
      <div className="max-w-5xl mx-auto px-6 mb-24 relative z-10">
        <div className="flex items-center gap-3 mb-10">
          <Award className="w-8 h-8 text-[#FFBD2E]" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Honors & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFBD2E] to-[#F472B6]">Certifications</span></h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certificatesData.map((cert) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-[#0A0A0C] border border-gray-800 rounded-[2rem] overflow-hidden hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500"
            >
              {/* 🌟 กดที่รูปเกียรติบัตรเพื่อเปิด Modal ได้ */}
              <div 
                className="relative h-60 overflow-hidden bg-black/50 border-b border-gray-800 cursor-pointer"
                onClick={() => setSelectedImg(cert.image)}
              >
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                />
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${cert.highlightColor}/20 to-transparent opacity-50`}></div>
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-gray-300">
                  {cert.date}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">{cert.issuer}</p>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#22D3EE] transition-colors">{cert.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{cert.description}</p>
                
                {/* 🌟 เปลี่ยนปุ่มตรงนี้ให้ทำงานคู่กับ Modal แทนการเปิดแท็บใหม่ */}
                <button 
                  onClick={() => setSelectedImg(cert.image)}
                  className="inline-flex items-center gap-2 text-[#22D3EE] text-sm font-semibold hover:text-cyan-300 w-fit"
                >
                  <span>View Full Certificate</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 6. EVENT ATMOSPHERE & MEMORIES */}
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <Image className="w-8 h-8 text-[#22D3EE]" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Event Atmosphere & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#A855F7]">Memories</span></h2>
        </div>
        <p className="text-gray-400 text-base max-w-3xl mb-10 leading-relaxed">
          เก็บตกภาพบรรยากาศจากโครงการ NSC 2024 รอบชิงชนะเลิศ ตั้งแต่วินาทีการนำเสนอสุดเข้มข้น ไปจนถึงการรับฟังคำแนะนำจากผู้เชี่ยวชาญ และความภาคภูมิใจร่วมกันของทีม
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {eventImages.map((image) => (
            <motion.div 
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }} 
              onClick={() => setSelectedImg(image.url)} // 🌟 เพิ่ม onClick ตรงนี้เพื่อให้เปิดดูรูปเต็มได้
              className="relative aspect-[4/3] group bg-[#0A0A0C] border border-gray-800 rounded-2xl overflow-hidden cursor-pointer hover:border-[#22D3EE]/50 transition-all duration-500"
            >
              <img 
                src={image.url} 
                alt={image.title} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:opacity-100 opacity-70 transition-opacity" 
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#22D3EE]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-sm font-bold text-white mb-1 tracking-wide">{image.title}</h4>
                <p className="text-[11px] text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🌟 7. MODAL OVERLAY สำหรับแสดงรูปภาพแบบเต็มจอ */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <button className="absolute -top-10 right-0 text-white text-3xl hover:text-[#A855F7] transition-colors">
              &times;
            </button>
            <img
              src={selectedImg}
              alt="Expanded View"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            />
          </div>
        </div>
      )}

    </section>
  );
});

export default CybersecuriseProject;