import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ScheduleCallModal from "../components/ScheduleCallModal";

const CtaButton = () => {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  const handleScheduleClick = () => {
    setIsScheduleModalOpen(true);
  };

  return (
    <>
      <div className="flex min-h-[35px] items-center w-full">
        <SpotlightButton 
          text="Schedule a Call" 
          bgColor="bg-[#1e1e1e]" 
          spotlightColor="bg-slate-100" 
          onClick={handleScheduleClick}
        />
      </div>
      <ScheduleCallModal 
        isOpen={isScheduleModalOpen} 
        onClose={() => setIsScheduleModalOpen(false)} 
      />
    </>
  );
};

const SpotlightButton = ({
  text = "Schedule a Call",
  bgColor = "bg-black",
  spotlightColor = "bg-slate-100",
  spotlightSize = "h-32 w-32",
  onClick = () => {}
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

      spanRef.current.animate(
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
      onClick={onClick}
      className={`relative w-full sm:w-80 overflow-hidden rounded-sm ${bgColor} px-3 sm:px-4 md:px-4 py-4 text-xs sm:text-sm font-medium text-white`}
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

export default CtaButton;