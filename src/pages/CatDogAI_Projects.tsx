import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Brain, UploadCloud, Image as ImageIcon, Scan, Activity, Code, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const techStack = [
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Keras", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
];

const CatDogAIProject: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State สำหรับระบบอัปโหลดภาพและการทำนาย
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPredicting, setIsPredicting] = useState<boolean>(false);
  const [predictionResult, setPredictionResult] = useState<{ class: string; confidence: number } | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ฟังก์ชันเมื่อผู้ใช้อัปโหลดรูป
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setPredictionResult(null); // รีเซ็ตผลลัพธ์เก่า
    }
  };

  // ฟังก์ชันจำลองการทำนาย (Mock Prediction)
  const runPrediction = () => {
    if (!selectedImage) return;
    
    setIsPredicting(true);
    setPredictionResult(null);

    // จำลองเวลาประมวลผล AI 2 วินาที (เพื่อให้เห็นแอนิเมชันสแกน)
    setTimeout(() => {
      // สุ่มผลลัพธ์ว่าเป็นหมาหรือแมว (ไว้โชว์ UI)
      const isDog = Math.random() > 0.5;
      const fakeConfidence = (Math.random() * (0.99 - 0.85) + 0.85) * 100; // สุ่มความมั่นใจ 85% - 99%
      
      setPredictionResult({
        class: isDog ? "DOG 🐶" : "CAT 🐱",
        confidence: parseFloat(fakeConfidence.toFixed(2))
      });
      setIsPredicting(false);
    }, 2000);
  };

  return (
    <section className="min-h-screen bg-[#05050A] text-white pb-24 relative overflow-hidden font-sans">
      
      {/* Background Gradients (แสง AI สีม่วง-ฟ้า) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#A855F7]/15 via-[#06B6D4]/10 to-transparent blur-[120px] pointer-events-none" />

      {/* Navigation */}
      <div className="pt-8 px-6 lg:px-24 max-w-7xl mx-auto relative z-20">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md w-fit">
          <ChevronLeft className="w-5 h-5" />
          <span className="font-medium">Back to Portfolio</span>
        </Link>
      </div>

      {/* 1. HERO & PROJECT INFO SECTION */}
      <div className="max-w-6xl mx-auto px-6 mt-12 mb-16 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/30 text-[#A855F7] text-sm font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            <Brain className="w-4 h-4" /> MACHINE LEARNING MODEL
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-white drop-shadow-md">
            Cat & Dog <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#06B6D4]">Detection</span>
          </h1>
          
          <p className="text-xl text-gray-400 font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            โมเดลปัญญาประดิษฐ์จำแนกรูปภาพสุนัขและแมว (Binary Classification) สถาปัตยกรรม CNN ขนาดภาพ <strong className="text-[#06B6D4]">200x200px</strong> (Model: <span className="font-mono text-xs border border-gray-700 bg-gray-900 px-1 py-0.5 rounded">9712_Model_200x200x128</span>)
          </p>

          <div className="flex justify-center flex-wrap gap-4 mb-8">
            {techStack.map((tech, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                <img src={tech.logo} alt={tech.name} className="w-5 h-5 object-contain" />
                <span className="text-sm font-semibold text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>

          <a href="https://github.com/gong-sn-ix-ii" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors">
            <Code className="w-5 h-5" /> View Model Source Code
          </a>
        </motion.div>
      </div>

      {/* 2. LIVE DEMO WORKSPACE (UI สำหรับอัปโหลดและทำนายผล) */}
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-[#0A0A0F] border border-gray-800 rounded-3xl p-6 md:p-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-4">
            <Activity className="w-6 h-6 text-[#06B6D4]" />
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide">Live Inference Workspace</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* ฝั่งซ้าย: อัปโหลดและแสดงรูปภาพ */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-mono text-gray-500 uppercase">1. Input Image</h3>
              
              {/* กรอบแสดงรูปภาพ */}
              <div className="relative w-full aspect-square bg-black border-2 border-dashed border-gray-700 rounded-2xl overflow-hidden flex flex-col items-center justify-center group hover:border-[#A855F7] transition-colors">
                
                {selectedImage ? (
                  <>
                    <img src={selectedImage} alt="Uploaded" className="w-full h-full object-cover" />
                    
                    {/* Scanning Animation Layer (แสดงตอนกด Predict) */}
                    {isPredicting && (
                      <motion.div 
                        initial={{ top: "0%" }}
                        animate={{ top: "100%" }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="absolute left-0 w-full h-1 bg-[#06B6D4] shadow-[0_0_20px_#06B6D4] z-10"
                      />
                    )}
                    {isPredicting && (
                      <div className="absolute inset-0 bg-[#06B6D4]/10 animate-pulse"></div>
                    )}
                  </>
                ) : (
                  <div className="text-center p-6 pointer-events-none">
                    <ImageIcon className="w-12 h-12 text-gray-600 mx-auto mb-3 group-hover:text-[#A855F7] transition-colors" />
                    <p className="text-sm text-gray-400">อัปโหลดภาพน้องหมาหรือน้องแมว</p>
                    <p className="text-xs text-gray-600 mt-1">แนะนำรูปทรงสี่เหลี่ยมจัตุรัส</p>
                  </div>
                )}
                
                {/* ปุ่มอัปโหลดที่ซ่อนไว้ */}
                <input 
                  type="file" 
                  accept="image/jpeg, image/png, image/jpg" 
                  ref={fileInputRef} 
                  onChange={handleImageUpload} 
                  className="hidden" 
                />
              </div>

              {/* ปุ่มเลือกรูป */}
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                disabled={isPredicting}
              >
                <UploadCloud className="w-5 h-5" /> Select Image
              </button>
            </div>

            {/* ฝั่งขวา: ปุ่มประมวลผล และ ผลลัพธ์ */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-mono text-gray-500 uppercase">2. Prediction</h3>
              
              {/* ปุ่ม Predict */}
              <button 
                onClick={runPrediction}
                disabled={!selectedImage || isPredicting}
                className={`w-full py-4 rounded-xl font-extrabold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                  !selectedImage 
                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                    : isPredicting
                    ? 'bg-gradient-to-r from-[#A855F7] to-[#06B6D4] text-white opacity-70 animate-pulse cursor-wait'
                    : 'bg-gradient-to-r from-[#A855F7] to-[#06B6D4] text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-[1.02]'
                }`}
              >
                <Scan className="w-6 h-6" />
                {isPredicting ? 'ANALYZING TENSOR...' : 'PREDICT IMAGE'}
              </button>

              {/* กล่องแสดงผลลัพธ์ */}
              <div className="flex-grow mt-4 bg-black border border-gray-800 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"></div>
                
                <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">OUTPUT_RESULT</h4>
                
                {isPredicting ? (
                  <div className="flex flex-col items-center justify-center h-32 space-y-3">
                    <div className="w-8 h-8 border-4 border-[#06B6D4]/30 border-t-[#06B6D4] rounded-full animate-spin"></div>
                    <p className="text-xs font-mono text-[#06B6D4] animate-pulse">Processing Model_200x200x128...</p>
                  </div>
                ) : predictionResult ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    className="flex flex-col items-center justify-center h-full"
                  >
                    <span className="text-5xl font-black text-white mb-2 drop-shadow-lg">{predictionResult.class}</span>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-sm text-gray-400">Confidence:</span>
                      <span className="text-lg font-mono text-[#06B6D4] font-bold">{predictionResult.confidence}%</span>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-32 opacity-30">
                    <Code2 className="w-10 h-10 mb-2" />
                    <p className="text-xs font-mono">WAITING FOR INPUT</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default CatDogAIProject;