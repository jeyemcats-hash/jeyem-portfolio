import { motion } from "framer-motion";

const SkillsLine = ({ skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "UI/UX Design"
] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
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
    <div className="w-full py-6">
      <motion.div
        className="flex flex-wrap gap-3 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={skillVariants}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-md cursor-default"
          >
            <p className="text-sm font-medium text-gray-700">{skill}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsLine;
