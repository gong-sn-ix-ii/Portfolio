import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import AIDetectScamSpam from './pages/AI_detect_scam_spam_sms'; // ดึงหน้า Terminal เข้ามา
import CybersecuriseProject from './pages/Cybersecurise_Projects';
import BoundlessProject from './pages/Boundless_Projects';
import FoodForYouProject from './pages/FoodForYou_Projects';
import ScifareAdventureProject from './pages/ScifareAdventure_Projects';
import HackathonCredential from './pages/Hackathon_Credential';
import ICPCCredential from './pages/ICPC_Credential';
import CTFCredential from './pages/CTF_Credential';
import SciRmuttoCredential from './pages/SciRmutto';

function App() {
  return (
    <Router>
      <Routes>
        {/* หน้าหลักของ Portfolio */}
        <Route path="/" element={<Home />} />
        
        {/* หน้าใหม่สำหรับทดสอบ AI (ตรงกับ demoUrl ที่เราตั้งไว้) */}
        <Route path="/ai-sms-detect" element={<AIDetectScamSpam />} />
        <Route path="/cybersecurise" element={<CybersecuriseProject />}/>
        <Route path="/boundless" element={<BoundlessProject />}/>
        <Route path="/foodforyou" element={<FoodForYouProject />}/>
        <Route path="/scifare" element={<ScifareAdventureProject />}/>




      <Route path="/hackathon" element={<HackathonCredential />}/>
      <Route path="/icpc2024" element={<ICPCCredential />}/>
      <Route path="/ctf2024" element={<CTFCredential />}/>
      <Route path="/scirmutto" element={<SciRmuttoCredential/>}/>
      </Routes>
    </Router>
  );
}

export default App;
