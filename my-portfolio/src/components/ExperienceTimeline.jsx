import { motion } from "framer-motion";
import { useState } from "react";

const ExperienceTimeline = ({ experiences = [
  {
    id: 1,
    title: "Entry-Level FullStack Freelance Developer",
    company: "Referrals",
    year: "2026 - Present",
    active: true
  },
  {
    id: 2,
    title: "Bachelor of Science in Information Systems",
    company: "Makati Science Technological Institute of the Phillipines",
    year: "2022-2026",
    active: false
  },
  {
    id: 3,
    title: "Florentino Torres National High School",
    company: "Computer Systems Servicing",
    year: "2020-2022",
    active: false
  },
] }) => {
  const [hoveredId, setHoveredId] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="w-full py-0.5">
      <h2 className="text-2xl font-bold text-gray-900 mb-3">Experience</h2>
      
      <motion.div
        className="space-y-0.5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            variants={itemVariants}
            className="flex gap-2 items-start"
            onMouseEnter={() => setHoveredId(exp.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Timeline Marker */}
            <div className="relative flex flex-col items-center pt-1">
              <div
                className={`w-3 h-3 border-1 transition-colors ${
                  hoveredId === exp.id
                    ? "bg-gray-900 border-gray-900"
                    : "bg-white border-gray-300"
                }`}
              />
              {index !== experiences.length - 1 && (
                <div className="w-0.5 h-6 bg-gray-200 mt-1" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-1">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                {exp.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mt-1">
                {exp.company}
              </p>
            </div>

            {/* Year */}
            <div className="text-gray-500 text-xs sm:text-sm font-medium flex-shrink-0 pt-1">
              {exp.year}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ExperienceTimeline;
