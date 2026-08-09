// 📧 Gmail Compose URL Builder
// ใช้ร่วมกันทั้ง Contact.tsx และ Home.tsx เพื่อให้ทุกปุ่ม Email
// เปิด Gmail Compose tab ใหม่พร้อมเทมเพลตข้อความ — ไม่พึ่ง `mailto:`
// ที่อาจเปิดเป็นหน้าว่างใน browser ที่ไม่มี email client default

const buildGmailComposeURL = () => {
  const to = 'kitsada.developer@gmail.com';
  const subject = 'สนใจติดต่อจาก Portfolio Website';
  const body = `สวัสดีครับคุณกฤษฎา คำนวน,

ผมชื่อ _______________ ตำแหน่ง _______________
จากบริษัท / องค์กร: _______________

เรื่องที่ติดต่อ:
☐ สนใจจ้างงานตำแหน่ง Full Stack / Software Developer
☐ ขอข้อมูลเพิ่มเติมเกี่ยวกับโปรเจกต์ผม
☐ ร่วมงานในโปรเจกต์
☐ อื่น ๆ: _______________

รายละเอียด:
_______________


ติดต่อกลับได้ที่:
- เบอร์โทร: _______________
- LinkedIn: _______________

ขอบคุณครับ/ค่ะ,
_______________`;

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
};

export const GMAIL_COMPOSE_URL = buildGmailComposeURL();
