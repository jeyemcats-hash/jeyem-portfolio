import { motion } from "framer-motion";
import { FaReact, FaNode, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiFlutter, SiTailwindcss, SiPostgresql, SiMongodb, SiFirebase } from "react-icons/si";
import { useRef, useEffect } from "react";

const TechStack = () => {
  const techs = [
    { id: 1, name: "React", icon: FaReact, color: "#61DAFB" },
    { id: 2, name: "Node.js", icon: FaNode, color: "#339933" },
    { id: 3, name: "Express", icon: SiExpress, color: "#000000" },
    { id: 4, name: "MongoDB", icon: SiMongodb, color: "#13AA52" },
    { id: 5, name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { id: 6, name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { id: 7, name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { id: 8, name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { id: 9, name: "Git", icon: FaGitAlt, color: "#F1502F" },
  ];

  return (
    <div className="flex-col">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Tech Stack</h2>
      <div className="flex flex-wrap gap-3 mb-4">
        {techs.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
            >
              <IconComponent 
                size={20} 
                style={{ color: tech.color }}
                className="transition-transform duration-300"
              />
              <span className="text-sm font-medium text-gray-700">{tech.name}</span>
            </motion.div>
          );
        })}
      </div>
      <SpotlightButton text="View All" bgColor="bg-[#1e1e1e]" spotlightColor="bg-slate-100" />
    </div>
  );
};

const SpotlightButton = ({
  text = "View All",
  bgColor = "bg-black",
  spotlightColor = "bg-slate-100",
}) => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);
  const lastPositionRef = useRef("50%");

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;
      lastPositionRef.current = left;

      spanRef.current?.animate(
        { left, opacity: 1 },
        { duration: 100, fill: "forwards" }
      );
    };

    const handleMouseLeave = () => {
      spanRef.current?.animate(
        { opacity: 0 },
        { duration: 100, fill: "forwards" }
      );
    };

    const handleTouchMove = (e) => {
      if (e.touches.length === 0) return;
      const touch = e.touches[0];
      const rect = btnRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const offset = touch.clientX - rect.left;
      const left = `${(offset / rect.width) * 100}%`;
      lastPositionRef.current = left;

      spanRef.current?.animate(
        { left, opacity: 1 },
        { duration: 100, fill: "forwards" }
      );
    };

    const handleTouchEnd = () => {
      spanRef.current?.animate(
        { opacity: 0 },
        { duration: 100, fill: "forwards" }
      );
    };

    btnRef.current?.addEventListener("mousemove", handleMouseMove);
    btnRef.current?.addEventListener("mouseleave", handleMouseLeave);
    btnRef.current?.addEventListener("touchmove", handleTouchMove);
    btnRef.current?.addEventListener("touchend", handleTouchEnd);

    return () => {
      btnRef.current?.removeEventListener("mousemove", handleMouseMove);
      btnRef.current?.removeEventListener("mouseleave", handleMouseLeave);
      btnRef.current?.removeEventListener("touchmove", handleTouchMove);
      btnRef.current?.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className={`relative w-full overflow-hidden rounded-sm ${bgColor} px-3 sm:px-4 md:px-4 py-4 text-xs sm:text-sm font-medium text-white`}
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        {text}
      </span>
      <span
        ref={spanRef}
        className={`pointer-events-none absolute left-[50%] top-[50%] h-20 w-20 sm:h-32 sm:w-32 -translate-x-[50%] -translate-y-[50%] rounded-full ${spotlightColor} opacity-0`}
      />
    </motion.button>
  );
};

export default TechStack;
