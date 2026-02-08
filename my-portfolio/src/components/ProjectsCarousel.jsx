import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      images: [
        "src/assets/LOGINPAGE.png",
        "src/assets/VIEWITEM.png",
        "src/assets/ORDERS.png",
        "src/assets/ADMINPANEL.png",
        "src/assets/ADMINLOGIN.png"
      ],
      description: "Full-stack web application"
    },
    {
      id: 2,
      title: "Web-based A.I Business Assistant",
      images: ["src/assets/loading.png"],
      description: "Web-based A.I business assistant designed to streamline operations and enhance customer engagement for small businesses"
    },
    {
      id: 3,
      title: "Proximity Dating App",
      images: ["src/assets/Proximity.png"],
      description: <>UI/UX design and Wireframing for<br />a proximity-based dating app</>
    },
    {
      id: 4,
      title: "Project Four",
      images: ["https://images.unsplash.com/photo-1551512163-8e0e1ff6d1dd?w=500&h=300&fit=crop"],
      description: "UI/UX implementation"
    }
  ];

  // Auto-play images within current project
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        (prev === projects[currentIndex].images.length - 1) ? 0 : prev + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [autoPlay, currentIndex, projects]);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setAutoPlay(false);
    setCurrentImageIndex((prev) =>
      prev === 0 ? projects[currentIndex].images.length - 1 : prev - 1
    );
    setAutoPlay(true);
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setAutoPlay(false);
    setCurrentImageIndex((prev) =>
      prev === projects[currentIndex].images.length - 1 ? 0 : prev + 1
    );
    setAutoPlay(true);
  };

  const projectVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const imageVariants = {
    enter: {
      opacity: 0
    },
    center: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  };

  return (
    <div className="flex-col ">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Projects</h2>
      <div className="relative w-full h-80 bg-gray-100 rounded-sm overflow-hidden shadow-lg">
        <AnimatePresence initial={false} custom={currentIndex} mode="wait">
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            variants={projectVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.2, ease: "easeInOut" },
              opacity: { duration: 0.15 }
            }}
            className="absolute w-full h-full"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={projects[currentIndex].images[currentImageIndex]}
                alt={`${projects[currentIndex].title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 mb-5">
              <h3 className="text-white text-lg sm:text-xl font-bold">
                {projects[currentIndex].title}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                {projects[currentIndex].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons - Projects */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 text-white p-2 transition-colors"
          aria-label="Previous project"
        >
          <MdArrowBackIos size={20} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 text-white p-2 transition-colors"
          aria-label="Next project"
        >
          <MdArrowForwardIos size={20} />
        </button>



        {/* Dots Indicator - Projects and Images */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white w-6"
                  : "bg-white/50 w-2 hover:bg-white/75"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
