import React, { memo } from 'react';

// 🚀 OPTIMIZATION: ใช้ memo ครอบเพื่อป้องกันการ Re-render ที่ไม่จำเป็นสำหรับ Static Component
const Awards: React.FC = memo(() => {
  return (
    <section id="awards" className="py-20 px-6 lg:px-24 w-full min-h-screen flex flex-col justify-center mb-12">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          AI <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#6f00ff] to-[#41c6ff]">SMS Scam Spam Detection</span>
        </h2>
        <p className="text-gray-400 mt-4 text-lg">ประวัติการทำงานและรางวัลที่ผ่านมา</p>
      </div>

      {/* กรอบหน้าจอ Terminal */}
      <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.15)] bg-[#0A0A0A] border border-gray-800 font-mono text-sm md:text-base">
        
        {/* แถบด้านบน (สไตล์ Mac) */}
        <div className="flex items-center px-4 py-3 bg-[#111] border-b border-gray-800">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <p className="mx-auto text-xs text-gray-500 tracking-widest">root@gong-portfolio:~</p>
        </div>

        {/* พื้นที่พิมพ์โค้ดด้านใน */}
        <div className="p-6 md:p-8 text-gray-300">
          
          {/* บรรทัดคำสั่ง (Command) */}
          <div className="mb-6">
            <span className="text-[#27C93F]">root@gong</span>:<span className="text-[#22D3EE]">~/awards</span>$ ./fetch_history.sh
          </div>

          {/* ผลลัพธ์ที่โชว์ออกมา */}
          <div className="space-y-6 pl-4 md:pl-6 border-l-2 border-gray-800/50 ml-2">
            
            {/* Item 1: Hackathon */}
            <div className="hover:bg-white/5 p-3 rounded-lg transition-colors group cursor-default">
              <p className="text-[#F472B6] font-bold">[*] 2024_HACKATHON_AI.exe</p>
              <p className="text-gray-400 mt-1">&gt; Role: <span className="text-white">AI Engineer (Prompting)</span></p>
              <p className="text-gray-400 mt-1">&gt; Status: <span className="text-[#27C93F]">SUCCESS</span> <span className="text-gray-500">(Rank: Top 10 / 8th)</span></p>
              <p className="text-gray-500 mt-2 text-sm group-hover:text-gray-400 transition-colors">
                // พิสูจน์ความเชี่ยวชาญในการเขียน Prompt ดึงศักยภาพ AI มาแก้ปัญหาจริง
              </p>
            </div>
    
            <div className="hover:bg-white/5 p-3 rounded-lg transition-colors group cursor-default">
              <p className="text-[#A855F7] font-bold">[*] 2024_NSC_CYBERSECURISE.apk</p>
              <p className="text-gray-400 mt-1">&gt; Type: <span className="text-white">National Software Contest</span></p>
              <p className="text-gray-400 mt-1">&gt; Status: <span className="text-[#27C93F]">DEPLOYED</span></p>
              <p className="text-gray-500 mt-2 text-sm group-hover:text-gray-400 transition-colors">
                // แอปพลิเคชันดักจับและคัดกรอง SMS มิจฉาชีพ ป้องกันภัยคุกคามทางไซเบอร์
              </p>
            </div>
    
            <div className="hover:bg-white/5 p-3 rounded-lg transition-colors group cursor-default">
              <p className="text-[#22D3EE] font-bold">[*] ONGOING_CTF_PLAYER.sh</p>
              <p className="text-gray-400 mt-1">&gt; Skill: <span className="text-white">Security-First Mindset</span></p>
              <p className="text-gray-400 mt-1">&gt; Status: <span className="text-[#FFBD2E]">ACTIVE</span></p>
              <p className="text-gray-500 mt-2 text-sm group-hover:text-gray-400 transition-colors">
                // ประสบการณ์แข่ง Capture The Flag (CTF) ให้ความสำคัญกับโค้ดที่ปลอดภัย
              </p>
            </div>

          </div>

          {/* เคอร์เซอร์กะพริบ */}
          <div className="mt-8 flex items-center">
            <span className="text-[#27C93F]">root@gong</span>:<span className="text-[#22D3EE]">~/awards</span>$ 
            <span className="w-2.5 h-5 bg-white ml-2 animate-pulse"></span>
          </div>

        </div>
      </div>

    </section>
  );
});

export default Awards;