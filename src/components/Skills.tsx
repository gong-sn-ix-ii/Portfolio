import React, { type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { MonitorSmartphone, Database, BrainCircuit, Terminal, Gamepad2, Cloud, Globe } from 'lucide-react';

// 1. สร้างพิมพ์เขียว
interface SkillItem {
  name: string;
  logo?: string;
  icon?: ReactNode;
  invert?: boolean;
}

interface SkillCategory {
  category: string;
  icon: ReactNode;
  gradient: string;
  borderColor: string;
  items: SkillItem[];
}

// 2. จัดโครงสร้างแบบ Professional / HR Friendly
const skillsData: SkillCategory[] = [
  {
    category: "Frontend & Mobile",
    icon: <MonitorSmartphone className="w-6 h-6 text-[#22D3EE]" />,
    gradient: "from-[#22D3EE]/20 to-transparent",
    borderColor: "group-hover:border-[#22D3EE]/50",
    items: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
      { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
      { name: "HTML5/CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    ]
  },
  {
    category: "Backend & Database",
    icon: <Database className="w-6 h-6 text-[#27C93F]" />,
    gradient: "from-[#27C93F]/20 to-transparent",
    borderColor: "group-hover:border-[#27C93F]/50",
    items: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      // เปลี่ยนจาก pgAdmin เป็น PostgreSQL เพื่อความเป็นมืออาชีพ
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    ]
  },
  {
    category: "AI & Game Engineering",
    icon: <BrainCircuit className="w-6 h-6 text-[#A855F7]" />,
    gradient: "from-[#A855F7]/20 to-transparent",
    borderColor: "group-hover:border-[#A855F7]/50",
    items: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      { name: "Prompt", icon: <BrainCircuit className="w-5 h-5 text-[#F472B6]" /> },
      { name: "Unity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", invert: true },
      { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "GameMaker", icon: <Gamepad2 className="w-5 h-5 text-gray-300" /> },
    ]
  },
  {
    category: "Cloud & Tools",
    icon: <Terminal className="w-6 h-6 text-[#FF5F56]" />,
    gradient: "from-[#FF5F56]/20 to-transparent",
    borderColor: "group-hover:border-[#FF5F56]/50",
    items: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
      { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Render", icon: <Cloud className="w-5 h-5 text-[#22D3EE]" /> },
      { name: "Hostinger", icon: <Globe className="w-5 h-5 text-[#A855F7]" /> },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Android Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
    ]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 lg:px-24 w-full min-h-screen relative flex flex-col justify-center">
      
      {/* Background Effects */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#A855F7] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-[#22D3EE] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 pointer-events-none"></div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Tech Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#A855F7]">& Tools</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          ภาษาและเครื่องมือที่ผมเชี่ยวชาญ พร้อมปรับตัวและเรียนรู้เทคโนโลยีใหม่ๆ เพื่อสร้างสรรค์ผลงานที่มีประสิทธิภาพสูงสุด
        </p>
      </div>

      {/* Skills Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto w-full relative z-10"
      >
        {skillsData.map((category, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className={`group relative bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 md:p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] ${category.borderColor}`}
          >
            {/* แสง Glow ตอน Hover ด้านหลังการ์ด */}
            <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-white tracking-wide">
                {category.category}
              </h3>
            </div>

            {/* Skill Items */}
            <div className="flex flex-wrap gap-3 relative z-10">
              {category.items.map((skill, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2.5 px-4 py-2.5 bg-[#111113] border border-gray-800 rounded-xl hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-sm"
                >
                  {skill.logo ? (
                    <img 
                      src={skill.logo} 
                      alt={skill.name} 
                      className={`w-5 h-5 object-contain ${skill.invert ? 'filter invert opacity-90' : ''}`}
                    />
                  ) : (
                    skill.icon
                  )}
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

          </motion.div>
        ))}
      </motion.div>
      
    </section>
  );
};

export default Skills;