import { FaInstagram, FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

/**
 * props:
 *  - size: tailwind size class for icon e.g. "text-2xl"
 *  - intensity: "subtle" | "medium" | "strong"
 */
function SocialLinks({ className = "", size = "text-2xl", intensity = "medium" }) {
  const icons = [
    { Icon: FaInstagram, href: "https://www.instagram.com/_sia_sh_?igsh=MWlpc2NsejJoc2EyeQ==", colorClass: "hover:text-pink-400", glow: "rgba(236,72,153,0.85)" },
    { Icon: FaGithub, href: "https://github.com/siamand-shirzad", colorClass: "hover:text-gray-300", glow: "rgba(148,163,184,0.75)" },
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/siamand-shirzad-55986a2a4", colorClass: "hover:text-blue-400", glow: "rgba(59,130,246,0.85)" },
    { Icon: FaTelegram, href: "https://t.me/Siamandshirzad", colorClass: "hover:text-sky-400", glow: "rgba(56,189,248,0.85)" },
    { Icon: FaEnvelope, href: "mailto:siamand1381@gmail.com", colorClass: "hover:text-red-400", glow: "rgba(239,68,68,0.85)" },
  ];

  // تنظیمات براساس intensity
  const intensityConfig = {
    subtle: {
      scale: 1.08,
      shadowSize: "6px",
      duration: 0.14
    },
    medium: {
      scale: 1.18,
      shadowSize: "10px",
      duration: 0.18
    },
    strong: {
      scale: 1.32,
      shadowSize: "16px",
      duration: 0.22
    }
  };

  const cfg = intensityConfig[intensity] || intensityConfig.medium;

  return (
    <div className={`flex gap-5 justify-center flex-wrap ${className}`}>
      {icons.map(({ Icon, href, colorClass, glow }, i) => (
        <motion.a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          // کینماتیک ساده: scale + کوچک rotation نکشیدم تا تمیز بمونه
          whileHover={{ scale: cfg.scale }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: cfg.duration, ease: "circOut" }}
          className={`relative ${colorClass} transition-transform outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 rounded-full`}
          // دسترسی: هر آیکون aria-label داشته باشه
          aria-label={Icon.name.replace("Fa", "")}
          // style برای drop-shadow داینامیک (رنگ بر اساس glow)
          style={{
            // وقتی hover نیست، سایه کم باشه (یا none)
            filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
          }}
          // onMouseEnter/Leave می‌تونن برای اضافه کردن کلاس CSS استفاده شن ولی ما از Tailwind + inline style نمی‌تونیم :hover dynamic رنگی بزنیم،
          // بنابراین از یک small inline style برای boxShadow در onHover استفاده می‌کنیم
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = `drop-shadow(0 0 ${cfg.shadowSize} ${glow})`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = `drop-shadow(0 0 0 rgba(0,0,0,0))`;
          }}
        >
          <Icon className={`${size}`} />
        </motion.a>
      ))}
    </div>
  );
}

export default SocialLinks;
