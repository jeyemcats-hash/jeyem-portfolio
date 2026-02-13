import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaTiktok, FaEnvelope, FaFacebook } from "react-icons/fa";

const SocialLinks = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const links = [
    {
      id: 1,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/john-michael-catalan-436290378/",
      icon: FaLinkedin
    },
    {
      id: 2,
      name: "GitHub",
      url: "https://github.com/jeyemcats-hash",
      icon: FaGithub
    },
    {
      id: 3,
      name: "Instagram",
      url: "https://www.instagram.com/johnmichael.chz/",
      icon: FaInstagram
    },
    {
      id: 4,
      name: "TikTok",
      url: "https://www.tiktok.com/@yesimjohn",
      icon: FaTiktok
    },
    {
      id: 5,
      name: "Email",
      url: "mailto:jeyemcats@gmail.com",
      icon: FaEnvelope
    },
    {
      id: 6,
      name: "Facebook",
      url: "https://www.facebook.com/JohnMichaelCatalawn/",
      icon: FaFacebook
    }
  ];

  return (
    <div className="flex-col">
      <h2 className="text-2xl font-bold text-[#1E1E1E] mb-4">Social Links</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {links.map((link) => {
          const IconComponent = link.icon;
          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-3 p-3 rounded-lg overflow-hidden w-full"
              onMouseEnter={() => setHoveredId(link.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-[#1E1E1E] rounded-lg"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredId === link.id ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ originX: 0 }}
              />

              {/* Content */}
              <div className="relative z-10 flex items-center gap-3">
                <IconComponent
                  className={`text-2xl transition-colors duration-300 ${
                    hoveredId === link.id ? "text-white" : "text-[#1E1E1E]"
                  }`}
                />
                <span
                  className={`font-medium transition-colors duration-300 ${
                    hoveredId === link.id ? "text-white" : "text-[#1E1E1E]"
                  }`}
                >
                  {link.name}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
