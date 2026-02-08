import { useState, useRef } from 'react'
import './App.css'
import { CiLocationOn } from "react-icons/ci";
import { MdVerified } from "react-icons/md";
import NeuButton from './Buttons/Buttons.jsx';
import CtaButton from './Buttons/CTAbuttons.jsx';
import ExperienceTimeline from './components/ExperienceTimeline.jsx';
import ProjectsCarousel from './components/ProjectsCarousel.jsx';
import SocialLinks from './components/SocialLinks.jsx';
import TechStack from './components/TechStack.jsx';


function App() {
  const [isHovered, setIsHovered] = useState(false);
  const projectsRef = useRef(null);

  const handleScrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-10 max-w-5xl w-full">
        <div className="flex gap-6 sm:gap-8 items-start">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img 
              src={ isHovered? "src/assets/Jeyemshy.png" : "src/assets/Jeyempic.png" } 
              alt="Profile" 
              className="w-44 h-50 rounded-lg object-cover hover:scale-101 transition-transform duration-300 cursor-pointer shadow-md hover:shadow-lg" 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>


          {/* Info Section */}
          <div className="w-full">
            <div className="flex-row sm:ml-5">
              {/* Name */}
              <div className="mb-3">
                <h1 className="text-3xl sm:text-4xl font-'SF Pro Display' font-bold text-black flex items-center gap-1">
                  Jeyem <span className=''><MdVerified className="text-blue-600 text-lg sm:text-xl" /></span>
                </h1>
              </div>

              {/* Location */}
              <p className="text-gray-700 text-xs sm:text-sm mb-3 mt-2 leading-relaxed flex items-center"><CiLocationOn className="inline-block mr-2 text-lg flex-shrink-0" /> Metro Manila, Manila, Philippines</p>

              {/* Title */}
              <p className="text-neutral-900 text-xs sm:text-sm font-medium mb-4 leading-relaxed">
                Software Engineer \ Content Creator
              </p>
              {/* Achievement Badge */}
              <NeuButton onClick={handleScrollToProjects}></NeuButton>
            </div>
            {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 mt-4 ml-1">
                <CtaButton></CtaButton>
              </div>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-8 mt-8'>
          {/* About Me */}
          <div className="w-full sm:w-1/2">
            <h2 className="text-lg font-bold text-gray-800 mb-2">About Me</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Entry-level full-stack developer with hands-on experience in building web and mobile applications,
              specializing in backend <b className='text-gray-700 hover:text-[#1e1e1e] transition h-10 cursor-pointer'>CRUD</b> operations,<br /><b className='text-gray-700 hover:text-[#1e1e1e] transition h-10 cursor-pointer'>API routing</b>, and <b className='text-gray-700 hover:text-[#1e1e1e] transition h-10 cursor-pointer'>Front-end/Back-end integration</b> using modern
              technologies such as <b className='text-gray-700 hover:text-[#1e1e1e] transition h-10 cursor-pointer'>MongoDB</b>, <b className='text-gray-700 hover:text-[#1e1e1e] transition h-10 cursor-pointer'>Express</b>, <b className='text-gray-700 hover:text-[#1e1e1e] transition h-10 cursor-pointer'>Flutter (Dart)</b>, and <b className='text-gray-700 hover:text-[#1e1e1e] transition h-10 cursor-pointer'>Firebase</b>, with a strong foundation in system
              development, database design, and scalable application architecture.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="w-full sm:w-1/2">
            <ExperienceTimeline />
          </div>
        </div>
        
        <div className='flex flex-col sm:flex-row gap-8 mt-8' ref={projectsRef}>
          <div className="w-full sm:w-1/2">
            <ProjectsCarousel />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col gap-8">
            <SocialLinks />
            <TechStack />
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
