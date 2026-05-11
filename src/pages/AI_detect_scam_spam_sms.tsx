import React, { useState, useRef, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, BrainCircuit, Terminal, Code2, Globe, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CommandLog {
  id: number;
  command: string;
  prediction: string | null;
  rawResponse: string | null;
  status: 'loading' | 'success' | 'error';
}

// 🎨 ฟังก์ชัน Syntax Highlight
const syntaxHighlight = (json: string | null) => {
  if (!json) return "";
  let formatted = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return formatted.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
      let cls = 'text-[#FFBD2E]'; 
      if (/^"/.test(match)) {
          if (/:$/.test(match)) {
              cls = 'text-[#22D3EE]'; 
          } else {
              cls = 'text-[#27C93F]'; 
          }
      } else if (/true|false/.test(match)) {
          cls = 'text-[#A855F7]'; 
      } else if (/null/.test(match)) {
          cls = 'text-gray-500'; 
      }
      return `<span class="${cls}">${match}</span>`;
  });
};

// 🛠️ Tech Stack Data (เพิ่ม Jupyter เข้าไปแล้ว)
const techStack = [
  { name: "Python (FastAPI)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" }, 
  { name: "Hugging Face", icon: <Globe className="w-4 h-4 text-yellow-400" /> },
  // { name: "Scikit-Learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  // { name: "React (TS)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
];

const AIDetectScamSpam: React.FC = memo(() => {
  const [inputValue, setInputValue] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      const currentCmd = inputValue.trim();
      setInputValue(''); 

      if (currentCmd.toLowerCase() === 'clear') {
        setLogs([]);
        return;
      }

      const newLogId = Date.now();
      setLogs((prev) => [...prev, { id: newLogId, command: currentCmd, prediction: null, rawResponse: null, status: 'loading' }]);

      try {
        const url = `https://gong-sn-ix-ii-spam-scam-sms-detect.hf.space/msg=${encodeURIComponent(currentCmd)}`;
        const response = await fetch(url);
        const data = await response.json(); 
        const prettyJson = JSON.stringify(data, null, 2);

        setLogs((prev) => prev.map((log) => log.id === newLogId ? { ...log, prediction: data.detect, rawResponse: prettyJson, status: 'success' } : log));
      } catch (error) {
        setLogs((prev) => prev.map((log) => log.id === newLogId ? { ...log, prediction: "ERROR", rawResponse: "{\n  \"error\": \"Connection Refused\"\n}", status: 'error' } : log));
      }
    }
  };

  const getResultColor = (result: string) => {
    const text = result.toUpperCase();
    if (text.includes('SPAM') || text.includes('SCAM')) return 'text-[#FF5F56] bg-[#FF5F56]/10 px-2 py-0.5 rounded border border-[#FF5F56]/20'; 
    if (text.includes('OK') || text.includes('NORMAL')) return 'text-[#27C93F] bg-[#27C93F]/10 px-2 py-0.5 rounded border border-[#27C93F]/20'; 
    return 'text-[#22D3EE] bg-[#22D3EE]/10 px-2 py-0.5 rounded border border-[#22D3EE]/20'; 
  };

  const docJsonSample = JSON.stringify({ text: "<input_message>", detect: "<prediction_result>", model: "thai_sms_filter_model.pkl" }, null, 2);

  return (
    <section className="min-h-screen bg-[#020617] text-white pb-24 relative overflow-hidden font-sans">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#A855F7]/15 via-[#22D3EE]/5 to-transparent blur-[120px] pointer-events-none" />

      {/* 1. NAVIGATION */}
      <div className="pt-8 px-6 lg:px-24 max-w-7xl mx-auto relative z-20">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md w-fit group">
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Portfolio</span>
        </Link>
      </div>

      {/* 2. HERO CONTENT */}
      <div className="max-w-5xl mx-auto px-6 mt-12 mb-16 relative z-10 flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#A855F7]/10 border border-[#A855F7]/20 text-[#A855F7] text-xs font-mono font-bold tracking-widest uppercase mb-6">
            <BrainCircuit className="w-4 h-4" /> AI_SMS_FILTER_PROJECT
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-white uppercase">
            SMS Scam <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#A855F7]">Detection</span>
          </h1>
          
          <p className="text-xl text-gray-400 font-light mb-10 max-w-3xl leading-relaxed">
            โมเดล AI สำหรับจำแนกข้อความภาษาไทย เพื่อคัดกรอง <strong className="text-[#FF5F56]">Scam/Spam</strong> มิจฉาชีพ 
            ประมวลผลผ่าน Natural Language Processing (NLP) และเปิดให้บริการผ่าน Public API ฟรี
          </p>

          {/* Tech Stack Display */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {techStack.map((tech, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-[#0A0A0B] border border-gray-800 rounded-xl cursor-default hover:border-[#22D3EE]/50 transition-colors">
                {tech.logo ? <img src={tech.logo} alt={tech.name} className="w-4 h-4 object-contain" /> : tech.icon}
                <span className="text-xs font-mono font-bold text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 3. ORIGINAL CONSOLE */}
      <div 
        onClick={handleTerminalClick}
        className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.1)] bg-[#0A0A0B] border border-gray-800 font-mono text-sm md:text-base cursor-text relative z-10"
      >
        <div className="flex items-center px-4 py-3 bg-[#111113] border-b border-gray-800 sticky top-0 z-20">
          <div className="flex gap-2.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_5px_rgba(255,95,86,0.5)]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_5px_rgba(255,189,46,0.5)]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_5px_rgba(39,201,63,0.5)]"></div>
          </div>
          <p className="mx-auto text-xs text-gray-500 tracking-widest font-semibold uppercase">API_TESTER_CONSOLE</p>
        </div>

        <div className="p-6 md:p-8 text-gray-300 min-h-[500px] max-h-[600px] overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          
          <div className="mb-8 opacity-90">
            <p className="text-white font-bold mb-2 tracking-wide">Welcome to AI SMS Shield v1.0.0</p>
            <p className="text-gray-400">Type any SMS message to analyze. Press [Enter] to submit.</p>
            <p className="text-gray-400 mb-5">Type <span className="text-[#FF5F56]">"clear"</span> to clear console.</p>
            
            <div className="border border-gray-800 bg-[#111113] rounded-lg p-5 mt-4 shadow-inner">
              <p className="text-[#27C93F] font-bold mb-3 tracking-wider">--- PUBLIC API DOCUMENTATION ---</p>
              <p className="mb-1"><span className="text-gray-500 w-24 inline-block">Endpoint</span>: <span className="text-[#FFBD2E] font-bold">GET</span> <span className="text-[#22D3EE]">https://gong-sn-ix-ii-spam-scam-sms-detect.hf.space</span></p>
              <p className="mb-1"><span className="text-gray-500 w-24 inline-block">Route</span>: <span className="text-gray-300">/msg=&#123;msg&#125;</span></p>
              <p className="mb-4"><span className="text-gray-500 w-24 inline-block">Params</span>: <span className="text-gray-300">msg (string) - The Thai SMS text to classify</span></p>
              
              <p className="text-gray-500 mb-2">Response Format :</p>
              <pre 
                className="text-gray-400 bg-[#050505] p-4 rounded-md border border-gray-800 text-xs md:text-sm shadow-inner"
                dangerouslySetInnerHTML={{ __html: syntaxHighlight(docJsonSample) }}
              />
            </div>
            <br/>
          </div>

          {logs.map((log) => (
            <div key={log.id} className="mb-8 animate-in fade-in slide-in-from-bottom-2">
              <div className="mb-3">
                <span className="text-[#27C93F] font-semibold">root@gong</span>:<span className="text-[#22D3EE] font-semibold">~/api-tester</span>$ <span className="text-white">{log.command}</span>
              </div>
              
              <div className="pl-4 md:pl-6 border-l-2 border-[#22D3EE]/30 ml-2">
                <p className="text-[#A855F7] font-bold mb-3 tracking-wide">[*] Sending GET request to Hugging Face API...</p>
                
                {log.status === 'loading' && (
                  <p className="text-[#FFBD2E] animate-pulse">&gt; Waiting for model inference...</p>
                )}
                
                {log.status === 'error' && (
                  <>
                    <p className="text-[#FF5F56] mb-2">&gt; Error Response:</p>
                    <pre className="bg-[#050505] p-4 rounded-md border border-[#FF5F56]/30 text-xs md:text-sm" dangerouslySetInnerHTML={{ __html: syntaxHighlight(log.rawResponse) }} />
                  </>
                )}

                {log.status === 'success' && (
                  <>
                    <p className="text-gray-400 mb-2">&gt; Response <span className="text-[#27C93F] font-bold">200 OK</span> :</p>
                    <pre className="bg-[#050505] p-4 rounded-md border border-gray-800 text-xs md:text-sm mb-4" dangerouslySetInnerHTML={{ __html: syntaxHighlight(log.rawResponse) }} />
                    <p className="text-gray-300">
                      &gt; Final Detection Result: <span className={`font-bold ml-2 ${getResultColor(log.prediction || '')}`}>{log.prediction}</span>
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}

          <div className="flex items-center mt-4">
            <span className="text-[#27C93F] whitespace-nowrap font-semibold whitespace-nowrap">root@gong</span>
            <span className="text-white whitespace-nowrap">:</span>
            <span className="text-[#22D3EE] font-semibold whitespace-nowrap">~/api-tester</span>
            <span className="text-white whitespace-nowrap mr-2">$</span>
            
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-white font-semibold caret-[#22D3EE]"
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
          </div>

          <div ref={terminalEndRef} className="h-4" />
        </div>
      </div>
    </section>
  );
});

export default AIDetectScamSpam;