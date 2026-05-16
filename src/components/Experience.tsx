import React, { memo } from "react";
import { motion } from "framer-motion";

type ExperienceItem = {
  period: string;
  duration: string;
  type: "FREELANCE" | "INTERNSHIP";
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
  techStack?: string[];
  color: string; // theme color
  icon: React.ReactNode;
};

const experiences: ExperienceItem[] = [
  {
    period: "พฤษภาคม 2568 – พฤศจิกายน 2568",
    duration: "6 เดือน",
    type: "FREELANCE",
    role: "Freelance Mobile & Full-Stack Developer",
    company: "Self-Employed",
    location: "Remote",
    description:
      "พัฒนาทั้ง Mobile Application ระยะยาว (ระบบประมูล Real-time + ฟีเจอร์โซเชียล) และ Website สำหรับลูกค้า ดูแลแบบ End-to-End ตั้งแต่วางโครงสร้าง Database, เชื่อมต่อ API, ทำ UI/UX จนถึง Deploy ขึ้น Production ด้วยตนเอง",
    highlights: [
      "พัฒนา Mobile App ระยะยาว แบบ Real-time พร้อมระบบประมูลและฟีเจอร์โซเชียล",
      "พัฒนา Website ด้วย React + TypeScript + Tailwind CSS · Responsive ทุกอุปกรณ์",
      "ออกแบบสถาปัตยกรรม Database, REST API และ Frontend Component",
      "ติดตั้งระบบ Authentication, Authorization, Input Validation ตามแนวทาง OWASP",
      "Deploy ขึ้น Production (Render, Hostinger) ผ่าน GitHub Actions",
    ],
    techStack: [
      "Dart",
      "Flutter",
      "Kotlin",
      "Firebase",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
    color: "#22D3EE",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    period: "พฤษภาคม 2565 – พฤศจิกายน 2565",
    duration: "6 เดือน",
    type: "INTERNSHIP",
    role: "IT Support Intern",
    company: "Eastern IT Sriracha",
    location: "จ.ชลบุรี",
    description:
      "ให้บริการสนับสนุนทางเทคนิคด้าน Hardware, Software และ Network แก่ลูกค้า SME ในเขตศรีราชา พร้อมพัฒนาโปรเจกต์ส่วนตัวเพื่อเสริมสร้างทักษะ Software Engineering",
    highlights: [
      "ตรวจวินิจฉัยและแก้ไขปัญหา Hardware, Software, Network ให้ลูกค้า",
      "ติดตั้งระบบปฏิบัติการ ซอฟต์แวร์ใช้งาน และเครื่องมือพื้นฐานด้านความปลอดภัย",
      "พัฒนาโปรเจกต์เขียนโปรแกรมส่วนตัวควบคู่ไปกับการทำงาน",
    ],
    techStack: ["Windows", "Hardware Troubleshooting"],
    color: "#A855F7",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    period: "พฤศจิกายน 2563 – กุมภาพันธ์ 2564",
    duration: "4 เดือน",
    type: "INTERNSHIP",
    role: "Loan Credit Intern",
    company: "ธนาคารออมสิน สาขาบ่อวิน",
    location: "จ.ชลบุรี",
    description:
      "ฝึกงานฝ่ายสินเชื่อ ตรวจสอบความถูกต้องของข้อมูลเครดิตบูโรและเอกสารทางการเงิน เรียนรู้กระบวนการกฎหมายการเงิน ความเป็นส่วนตัวของข้อมูล (Data Privacy) และความเสี่ยงในการดำเนินงาน",
    highlights: [
      "ตรวจสอบความถูกต้องของรายงานเครดิตบูโร (NCB) เปรียบเทียบกับใบสมัครสินเชื่อ",
      "ตรวจสอบเอกสารทางการเงิน รวมถึงเอกสารยืนยันรายได้",
      "รักษาความลับและคุ้มครองข้อมูลส่วนบุคคลของลูกค้าตามมาตรฐาน", 
    ],
    techStack: ["Data Privacy", "Document Verification", "Financial Compliance"],
    color: "#A855F7",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="3" y1="22" x2="21" y2="22" />
        <line x1="6" y1="18" x2="6" y2="11" />
        <line x1="10" y1="18" x2="10" y2="11" />
        <line x1="14" y1="18" x2="14" y2="11" />
        <line x1="18" y1="18" x2="18" y2="11" />
        <polygon points="12 2 20 7 4 7" />
      </svg>
    ),
  },
];

// 🚀 OPTIMIZATION: ใช้ React.memo ป้องกันการ Render ซ้ำเมื่อ Parent Component มีการอัปเดต
const Experience: React.FC = memo(() => {
  return (
    <section id="experiences" className="scroll-mt-24 py-20 px-6 lg:px-24 w-full relative">
      {/* Section Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/5 text-[#22D3EE] text-xs font-bold tracking-[0.2em] mb-4">
          <span className="w-1 h-1 rounded-full bg-[#22D3EE]"></span>
          PROFESSIONAL JOURNEY
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-3">
          Work{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#22D3EE]">
            Experience
          </span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          เส้นทางการทำงานและประสบการณ์ที่หล่อหลอมทักษะของผม
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-[18px] md:left-[28px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#22D3EE] via-[#A855F7] to-transparent opacity-50"></div>

        {experiences.map((exp, idx) => (
          <motion.div
            key={`exp-${idx}`} // 🚀 เปลี่ยน Key ให้เป็น Unique string
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative pl-14 md:pl-24 mb-10 group"
          >
            {/* Timeline node */}
            <div
              className="absolute left-0 md:left-[5px] top-2 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#020617] border-2 flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300"
              style={{
                borderColor: exp.color,
                boxShadow: `0 0 15px ${exp.color}66`,
              }}
            >
              <span style={{ color: exp.color }}>{exp.icon}</span>
            </div>

            {/* Card */}
            <div
              className="relative p-[1.5px] rounded-2xl transition-all duration-300 group-hover:-translate-y-1"
              style={{
                background: `linear-gradient(135deg, ${exp.color}50, transparent 50%)`,
              }}
            >
              <div className="bg-[#0A0F1F]/95 backdrop-blur-xl p-5 md:p-7 rounded-[15px] border border-white/10">
                {/* Top row: Type tag + Duration */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span
                    className="px-2.5 py-0.5 rounded text-[10px] font-bold tracking-[0.18em] border"
                    style={{
                      color: exp.color,
                      borderColor: `${exp.color}50`,
                      background: `${exp.color}10`,
                    }}
                  >
                    {exp.type}
                  </span>
                  <span className="text-xs text-gray-500 font-semibold tracking-wide">
                    {exp.period}
                  </span>
                  <span className="text-xs text-gray-600">·</span>
                  <span className="text-xs text-gray-400 font-semibold">
                    {exp.duration}
                  </span>
                </div>

                {/* Role + Company */}
                <h3 className="text-xl md:text-2xl font-extrabold text-white mb-1 leading-tight">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-base font-semibold" style={{ color: exp.color }}>
                    {exp.company}
                  </span>
                  <span className="text-gray-600 text-sm">·</span>
                  <span className="text-sm text-gray-400">{exp.location}</span>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="text-[11px] font-bold tracking-[0.18em] text-gray-500 mb-2">
                    KEY HIGHLIGHTS
                  </div>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={`highlight-${idx}-${hIdx}`} className="flex items-start gap-2 text-sm text-gray-300 leading-relaxed">
                        <span
                          className="flex-shrink-0 mt-2 w-1 h-1 rounded-full"
                          style={{ backgroundColor: exp.color }}
                        ></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack tags */}
                {exp.techStack && exp.techStack.length > 0 && (
                  <div>
                    <div className="text-[11px] font-bold tracking-[0.18em] text-gray-500 mb-2">
                      TECH STACK
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech} // 🚀 ใช้ชื่อ Tech เป็น Key ตรงๆ เพื่อประสิทธิภาพที่ดีกว่าของ React (Reconciliation)
                          className="px-2.5 py-1 rounded-md text-xs font-semibold bg-white/[0.04] border border-white/10 text-gray-300 hover:border-white/20 hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {/* End marker */}
        <div className="relative pl-14 md:pl-24">
          <div className="absolute left-[7px] md:left-[20px] top-1 w-5 h-5 rounded-full bg-[#020617] border-2 border-white/30 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
          </div>
          <div className="text-sm text-gray-500 font-semibold tracking-wide pt-0.5">
            <span className="text-[#22D3EE]">●</span> Currently exploring opportunities in{" "}
            <span className="text-white font-bold">Cybersecurity</span> &{" "}
            <span className="text-white font-bold">AI Engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Experience;