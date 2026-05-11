import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ExternalLink, Award, Calendar, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import รูปภาพ (แนะนำให้แปลงไฟล์เหล่านี้เป็น .webp ในอนาคตเพื่อความเร็วขั้นสุด)
import hackathon from "../assets/images/credentials/hackathon-2024.jpg";
import nsc2024 from "../assets/images/credentials/NSC.png";
import ctf from "../assets/images/credentials/CTF.jpg";
import icpc2024 from "../assets/images/credentials/ICPC.jpg";
import sci_rmutto from "../assets/images/credentials/SciRmutto/00.jpg"

const achievements = [
  {
    id: 1,
    title: "AI Cooking Hackathon 2024",
    role: "Ranked 8th & AI Engineer Award",
    category: "Competition",
    description: "เข้าร่วมการแข่งขันและได้รับรางวัล AI Engineer ดีเด่นด้าน Prompt Engineering โดยติดอันดับที่ 8 ของงาน Hackathon 2024 ด้วยทีมชื่อ 'ctrl c ctrl v'",
    image: hackathon,
    date: "2024",
    tags: ["Prompt Engineering", "LLMs", "AI Solution"],
    icon: <Award className="w-6 h-6" />,
    link: "/hackathon" 
  },
  {
    id: 2,
    title: "National Software Contest (NSC - 2024)",
    role: "Project: Cybersecurise (Finalist)",
    category: "National Project",
    description: "โครงการ Cybersecurise เข้ารอบชิงชนะเลิศระดับประเทศ แอปพลิเคชันป้องกันภัยไซเบอร์แบบครบวงจร (All-in-One Security) Risk Detection: ตรวจจับการตั้งค่าระบบ (Settings) และแอปพลิเคชันที่ขอสิทธิ์เข้าถึงข้อมูลอันตราย อ้างอิงจากงานวิจัยด้าน Cybersecurity AI Spam Filter: ประยุกต์ใช้ AI ในการคัดกรอง SMS ขยะ, Scam และ OTP ปลอมCyber Awareness: มีระบบแบบทดสอบประเมินและเสริมสร้างความรู้ด้านความปลอดภัยให้ผู้ใช้งาน",
    image: nsc2024,
    date: "2024",
    tags: ["Cybersecurity", "Software Architecture"],
    icon: <Shield className="w-6 h-6" />,
    link: "/cybersecurise" 
  },
    {
    id: 5,
    title: "The International Collegiate Programming Contest (ICPC - 2024)",
    role: "Contestant",
    category: "Programming Contest",
    description: "เข้าร่วมการแข่งขัน ICPC 2024 ณ คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ซึ่งถือเป็นหนึ่งในรายการแข่งขันเขียนโปรแกรมที่สำคัญที่สุดสำหรับสถาบันอุดมศึกษา โดยมีตัวแทนจาก 16 มหาวิทยาลัยทั่วประเทศ รวม 57 ทีม",
    image: icpc2024, 
    date: "2024",
    tags: ["Algorithms", "Problem Solving", "C++"],
    icon: <Award className="w-6 h-6" />,
    link: "/icpc2024"
  },
  {
    id: 3,
    title: "Thailand Cyber Tobtalent (CTF - 2024)",
    role: "Security Researcher / Participant",
    category: "Cybersecurity",
    description: "แข่งขัน Capture The Flag เพื่อฝึกฝนการทดสอบเจาะระบบ (Penetration Testing) และวิเคราะห์ช่องโหว่",
    image: ctf,
    date: "2024",
    tags: ["Pen Test", "Reverse Engineering"],
    icon: <ExternalLink className="w-6 h-6" />,
    link: "/ctf2024" 
  },
  {
    id: 4,
    title: "สโมสรนักศึกษา คณะวิทยาศาสตร์และเทคโนโลยี",
    role: "Board Member / Coordinator",
    category: "Leadership",
    description: "สวัสดีครับ ผมนาย กฤษฎา คำนวน ตำแหน่ง ประธานสภา ฝ่ายกีฬา คอยช่วยเหลือและบริหารจัดการกิจกรรม ประสานงานระหว่างบุคลากรและนักศึกษา รวมถึงจัดโครงการส่วนรวมของคณะ",
    image: sci_rmutto,
    date: "2023 - 2024",
    tags: ["Management", "Communication", "Teamwork"],
    icon: <Users className="w-6 h-6" />,
    link: "/scirmutto"
  }, 
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15 
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const AchievementShowcase = () => {
  return (
    <section id="honors" className="scroll-mt-24 min-h-screen py-20 px-6 sm:px-12 relative overflow-hidden ">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:flex justify-between items-end"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-400 text-sm font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              Verified Credentials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Awards</span>
            </h2>
            <p className="text-gray-400 text-lg">
              รวมความสำเร็จระดับประเทศ และประสบการณ์การเป็นผู้นำที่สะท้อนถึงศักยภาพการทำงานจริง
            </p>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6"
        >
          {achievements.map((item) => (
            <motion.div 
              key={item.id} 
              variants={cardVariants}
              className="group relative flex flex-col rounded-3xl bg-gradient-to-br from-[#6200ff15] via-black to-[#4400ff17] border border-white/5 overflow-hidden hover:border-purple-500/50 transition-colors duration-500 shadow-lg hover:shadow-purple-500/20"
            >
              <Link to={item.link} className="flex flex-col h-full w-full cursor-pointer">
                
                {/* Graphic Display Section */}
                <div className="relative h-48 m-2 rounded-2xl overflow-hidden bg-gradient-to-br from-[#1b143a] via-[#0f1123] to-[#05050f] border border-white/5">
                  {/* 🚀 OPTIMIZATION: ใส่ loading="lazy" และ decoding="async" ให้รูปภาพ */}
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 transition-colors duration-500 z-10" />

                  {/* Floating Date Badge */}
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-gray-300">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative flex-1 p-6 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400 bg-purple-500/10 px-2 py-1 rounded-md">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-cyan-400 font-medium mb-3">
                    <span className="text-xs">{item.role}</span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                    {item.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 text-[11px] text-gray-400 bg-white/5 border border-white/5 rounded-md group-hover:border-white/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AchievementShowcase;