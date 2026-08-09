import React, { useState, useMemo } from "react";
import ai1 from "../assets/images/certificates/AI Enginner Prompt.webp";
import refAI from "../assets/images/certificates/email_20240624162519_page-0001.webp";
import ctf from "../assets/images/certificates/CTF_Cert Senior THCTT24_Num675_page-0001.webp";
import unity from "../assets/images/certificates/Unity Certified User Programmer_page-0001.webp";
import udemy_ai from "../assets/images/certificates/udemy_ai_machine.webp";
import udemy_block from "../assets/images/certificates/udemy_blockchain.webp";
import udemy_fullstack from "../assets/images/certificates/udemy_fullstack.webp";
import depa from "../assets/images/certificates/depa.webp";
import certiport from "../assets/images/certificates/Certified by Certiport.webp";
import futureskill_game from "../assets/images/certificates/future_certificate-coding-for-metaverse create game_page-0001.webp";
import futureskill_page from "../assets/images/certificates/future_certificate-coding-for-metaverse_page-0001.webp";
import konD from "../assets/images/certificates/คนดีศรีเทคโน.webp";
import bigData from "../assets/images/certificates/cer_BigData.webp";
import excel from "../assets/images/certificates/cer_MicrosoftExcel.webp";
import mspow from "../assets/images/certificates/cer_MicrosoftPowerApp.webp";
import buuJava from "../assets/images/certificates/buu_JavaProgrammingFundamentals.webp";
import nsc_cer from "../assets/images/certificates/nsc.webp";
import nsc_budget from "../assets/images/certificates/nsc-budget.webp";
import sci_cer from "../assets/images/certificates/sci.webp";

// 1. แอบเพิ่มฟิลด์ category เข้าไปในข้อมูล เพื่อใช้จัดหมวดหมู่
const certData = [
  {
    id: 1,
    title: "AI Engineer Award (Prompting)",
    issuer: "Hackathon AI Cooling 2024",
    rank: "Rank: 8th (Top 10 Award)",
    date: "2024",
    color: "from-[#F472B6] to-[#A855F7]",
    image: ai1,
    category: "Awards", 
  },
  {
    id: 2,
    title: "Thailand Cyber Top Talent 2024",
    issuer: "Senior Level Competition",
    rank: "Cybersecurity Participant",
    date: "2024",
    color: "from-[#22D3EE] to-[#3B82F6]",
    image: ctf,
    category: "Awards",
  },
  {
    id: 3,
    title: "NSC 2024 Finalist",
    issuer: "National Software Contest",
    rank: "Project: Cybersecurise",
    date: "2024",
    color: "from-[#A855F7] to-[#22D3EE]",
    image: nsc_cer,
    category: "Awards",
  },
    {
    id: 4,
    title: "NSC 2024 Project funding from NECTEC, NSTDA",
    issuer: "National Software Contest",
    rank: "Project: Cybersecurise",
    date: "2024",
    color: "from-[#A855F7] to-[#22D3EE]",
    image: nsc_budget,
    category: "Awards",
  },
      {
    id: 20,
    title: "Student Club, Faculty of Science, President of the Student Council, Sports Division.",
    issuer: "Leadership",
    rank: "Student Club, Student Council President, Sports Department",
    date: "2024",
    color: "from-[#A855F7] to-[#22D3EE]",
    image: sci_cer,
    category: "Awards",
  },
  {
    id: 13,
    title: "Unity Certified User: Programmer",
    issuer: "Certiport / Unity",
    rank: "Professional Certification",
    date: "2024",
    color: "from-[#4B5563] to-[#1F2937]",
    image: unity,
    category: "Professional",
  },
  // {
  //   id: 5,
  //   title: "IT Specialist Certification",
  //   issuer: "Certiport",
  //   rank: "Verified Professional",
  //   date: "2024",
  //   color: "from-[#3B82F6] to-[#1E3A8A]",
  //   image: certiport,
  //   category: "Professional",
  // },
   {
    id: 6,
    title: "Coding for Metaverse",
    issuer: "FutureSkill",
    rank: "Core Concepts Completion",
    date: "2024",
    color: "from-[#FACC15] to-[#EAB308]",
    image: futureskill_page,
    category: "Courses",
  },
  {
    id: 7,
    title: "Metaverse Game Development",
    issuer: "FutureSkill",
    rank: "Project-Based Learning",
    date: "2024",
    color: "from-[#10B981] to-[#059669]",
    image: futureskill_game,
    category: "Courses",
  },
    {
    id: 21,
    title: "Digital Literacy (depa)",
    issuer: "DEPA Thailand",
    rank: "Development VR AR MR 3D",
    date: "2024",
    color: "from-[#22D3EE] to-[#0EA5E9]",
    image: depa,
    category: "Professional",
  },
  {
    id: 16,
    title: "คนดีศรีเทคโน",
    issuer: "รางวัลเกียรติยศ",
    rank: "Outstanding Student Award",
    date: "2024",
    color: "from-[#FDE047] to-[#CA8A04]",
    image: konD,
    category: "Awards",
  },
    {
    id: 8,
    title: "AI & Machine Learning",
    issuer: "Udemy Professional",
    rank: "Technical Specialization",
    date: "2024",
    color: "from-[#F472B6] to-[#DB2777]",
    image: udemy_ai,
    category: "Courses",
  },
  {
    id: 9,
    title: "Fullstack Web Development",
    issuer: "Udemy Professional",
    rank: "Web Application Architecture",
    date: "2023",
    color: "from-[#6366F1] to-[#4338CA]",
    image: udemy_fullstack,
    category: "Courses",
  },
  {
    id: 10,
    title: "Blockchain Technology",
    issuer: "Udemy Professional",
    rank: "Emerging Tech Knowledge",
    date: "2023",
    color: "from-[#8B5CF6] to-[#6D28D9]",
    image: udemy_block,
    category: "Courses",
  },
  {
    id: 11,
    title: "Java Programming Fundamentals",
    issuer: "Burapha University (BUU)",
    rank: "Academic Achievement",
    date: "2023",
    color: "from-[#F97316] to-[#C2410C]",
    image: buuJava,
    category: "Courses",
  },
  {
    id: 14,
    title: "Microsoft PowerApps",
    issuer: "Microsoft Training",
    rank: "Learning Skill Microsoft",
    date: "2024",
    color: "from-[#7C3AED] to-[#5B21B6]",
    image: mspow,
    category: "Courses",
  },
  {
    id: 15,
    title: "Microsoft Excel Specialist",
    issuer: "Data Management",
    rank: "Learning Skill Microsoft",
    date: "2024",
    color: "from-[#16A34A] to-[#15803D]",
    image: excel,
    category: "Courses",
  },
  {
    id: 12,
    title: "Big Data Essentials",
    issuer: "Professional Training",
    rank: "Data Analysis Foundation",
    date: "2024",
    color: "from-[#06B6D4] to-[#0891B2]",
    image: bigData,
    category: "Courses",
  },
];

const filterTabs = [
  { id: "All", label: "All Certificates" },
  { id: "Awards", label: "Trophy & Awards" },
  { id: "Professional", label: "Professional Certs" },
  { id: "Courses", label: "Bootcamps & Courses" },
];

const Certificates: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("All");

  // 2. กรองข้อมูลตาม Tab ที่เลือก
  const filteredCerts = useMemo(() => {
    if (activeTab === "All") return certData;
    return certData.filter((cert) => cert.category === activeTab);
  }, [activeTab]);

  return (
    <section
      id="certificates"
      className="py-12 px-6 w-full mb-72 relative max-w-[1800px] mx-auto"
    >
      {/* Header & Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 border-l-4 border-[#A855F7] pl-8 md:ml-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Verified <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#22D3EE]">
              Certificates
            </span>
          </h2>
          <p className="text-gray-500 mt-2 font-mono text-sm uppercase tracking-widest">
            // Authentication successful: {certData.length} credentials found
          </p>
        </div>

        {/* 3. ปุ่ม Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-bold border transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#A855F7] border-[#A855F7] text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                  : "bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid ของเกียรติบัตร (ปรับเป็น lg:grid-cols-4 แล้ว) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto md:ml-4 transition-all duration-500">
        {filteredCerts.map((cert) => (
          <div
            key={cert.id}
            className="group relative animate-in fade-in zoom-in-95 duration-500"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${cert.color} blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
            ></div>

            <div className="relative bg-[#050505] border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 h-full flex flex-col">
              <div
                className="relative aspect-[4/3] overflow-hidden bg-gray-900 cursor-pointer"
                onClick={() => setSelectedImg(cert.image)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-white font-bold text-[15px] leading-snug group-hover:text-[#22D3EE] transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-[#A855F7] text-[10px] font-bold mt-1.5 uppercase tracking-wider">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="text-gray-600 font-mono text-[10px] bg-white/5 px-2 py-1 rounded">
                    {cert.date}
                  </span>
                </div>

                <div className="space-y-2 mb-6 mt-auto">
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#27C93F] shadow-[0_0_5px_#27C93F]"></div>
                    {cert.rank}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedImg(cert.image)}
                  className="w-full py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-300"
                >
                  <span>VIEW CREDENTIAL</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
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
              alt="Certificate Full"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
