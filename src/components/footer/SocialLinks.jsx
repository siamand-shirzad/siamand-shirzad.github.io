import { FaInstagram, FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function SocialLinks() {
  const icons = [
    { Icon: FaInstagram, href: "https://www.instagram.com/_sia_sh_?igsh=MWlpc2NsejJoc2EyeQ==", color: "hover:text-pink-500" },
    { Icon: FaGithub, href: "https://github.com/your_username", color: "hover:text-gray-200" },
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/siamand-shirzad-55986a2a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", color: "hover:text-blue-500" },
    { Icon: FaTelegram, href: "https://t.me/Siamandshirzad", color: "hover:text-sky-500" },
    { Icon: FaEnvelope, href: "mailto:your@email.com", color: "hover:text-red-500" },
  ];

  return (
    <div className="flex gap-5 text-2xl">
      {icons.map(({ Icon, href, color }, i) => (
        <motion.a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className={`${color} transition-transform`}
        >
          <Icon />
        </motion.a>
      ))}
    </div>
  );
}

export default SocialLinks;
