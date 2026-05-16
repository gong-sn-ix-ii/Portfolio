import React, { type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Mail, Phone, MessageSquare, Link2, MapPin, Send } from 'lucide-react';
import { GMAIL_COMPOSE_URL } from '../utils/gmail';

interface ContactItem {
  name: string;
  value: string;
  href: string;
  logo?: string;
  icon?: ReactNode;
  invert?: boolean;
}

interface ContactCategory {
  category: string;
  icon: ReactNode;
  gradient: string;
  borderColor: string;
  items: ContactItem[];
}

const contactData: ContactCategory[] = [
  {
    category: "Direct Contact",
    icon: <MessageSquare className="w-6 h-6 text-[#22D3EE]" />,
    gradient: "from-[#22D3EE]/20 to-transparent",
    borderColor: "group-hover:border-[#22D3EE]/50",
    items: [
      {
        name: "gong.sn.ix.ii.dev@gmail.com",
        value: "Email",
        href: GMAIL_COMPOSE_URL,
        icon: <Mail className="w-5 h-5 text-[#F472B6]" />,
      },
      {
        name: "+66 96-196-9105",
        value: "Phone",
        href: "tel:+66961969105",
        icon: <Phone className="w-5 h-5 text-[#27C93F]" />,
      },
    ],
  },
  {
    category: "Online Profiles",
    icon: <Link2 className="w-6 h-6 text-[#A855F7]" />,
    gradient: "from-[#A855F7]/20 to-transparent",
    borderColor: "group-hover:border-[#A855F7]/50",
    items: [
      {
        name: "LinkedIn",
        value: "Kitsada Khamnuan",
        href: "https://www.linkedin.com/in/kitsada-khamnuan-2a6729407/",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
      },
      {
        name: "GitHub",
        value: "@gong-sn-ix-ii",
        href: "https://github.com/gong-sn-ix-ii",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        invert: true,
      },
      {
        name: "Portfolio",
        value: "gong-ix-ii-dev.com",
        href: "https://gong-ix-ii-dev.com",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
      },
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 lg:px-24 w-full min-h-screen relative flex flex-col justify-center"
    >
      {/* Background Effects */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#A855F7] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-[#22D3EE] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 pointer-events-none"></div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Get In{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#A855F7]">
            Touch
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          สนใจร่วมงาน หรืออยากพูดคุยเรื่องเทคโนโลยี? ติดต่อผมได้ตามช่องทางด้านล่าง ตอบกลับภายใน 24 ชั่วโมง
        </p>
      </div>

      {/* Contact Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto w-full relative z-10"
      >
        {contactData.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`group relative bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 md:p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] ${category.borderColor}`}
          >
            {/* แสง Glow ตอน Hover ด้านหลังการ์ด */}
            <div
              className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
            />

            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-white tracking-wide">
                {category.category}
              </h3>
            </div>

            {/* Contact Items */}
            <div className="flex flex-wrap gap-3 relative z-10">
              {category.items.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 bg-[#111113] border border-gray-800 rounded-xl hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={item.name}
                      className={`w-5 h-5 object-contain ${item.invert ? 'filter invert opacity-90' : ''}`}
                    />
                  ) : (
                    item.icon
                  )}
                  <span className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Status & CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="flex flex-col items-center gap-6 mt-12 relative z-10"
      >
        {/* Location & Availability */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">
            <MapPin className="w-4 h-4 text-[#A855F7]" />
            ชลบุรี / กรุงเทพฯ · On-site or Hybrid
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#27C93F]/10 border border-[#27C93F]/30 text-[#27C93F]">
            <span className="w-2 h-2 rounded-full bg-[#27C93F] animate-pulse" />
            พร้อมเริ่มงาน · มิถุนายน 2026
          </div>
        </div>

        {/* CTA */}
        <a
          href={GMAIL_COMPOSE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#22D3EE] to-[#A855F7] text-white font-bold shadow-lg hover:shadow-[#A855F7]/40 hover:-translate-y-1 transition-all duration-300"
        >
          <Send className="w-5 h-5" />
          ส่งอีเมลหาผม
        </a>
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-center text-gray-500 text-sm mt-16 font-mono relative z-10"
      >
        © {new Date().getFullYear()} Kitsada Khamnuan · Made with 💜
      </motion.p>
    </section>
  );
};

export default Contact;
