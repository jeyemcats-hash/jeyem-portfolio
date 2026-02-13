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
import JeyempicImg from './assets/Jeyempic.png';
import JeyemshyImg from './assets/Jeyemshy.png';


function App() {
  const [isHovered, setIsHovered] = useState(false);
  const projectsRef = useRef(null);

  const handleScrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-10 max-w-5xl w-full">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-start">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img 
              src={ isHovered? JeyemshyImg : JeyempicImg } 
              alt="Profile" 
              className="w-40 sm:w-44 h-48 sm:h-50 rounded-lg object-cover hover:scale-101 transition-transform duration-300 cursor-pointer shadow-md hover:shadow-lg" 
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
                Entry Level Full Stack Developer \ Content Creator
              </p>
              {/* Achievement Badge */}
              <NeuButton onClick={handleScrollToProjects}></NeuButton>
            </div>
            {/* Action Buttons */}
              <div className="flex flex-col gap-2 mt-4 sm:ml-5">
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

        <div className='mt-8 w-full flex flex-col sm:flex-row gap-6'>
          <div className="w-full sm:w-1/2 flex flex-col">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Previous Collaborations and Testimonies</h2>
            <div>
              <div className="flex flex-col gap-3">
                <div className="bg-white rounded-lg p-3 shadow-sm border-l-4 border-[#1e1e1e]">
                  <p className="text-gray-800 text-sm leading-relaxed italic">
                    "Jeyem is a highly skilled and dedicated software engineer. He consistently delivers high-quality work and is a pleasure to collaborate with. His problem-solving abilities and attention to detail are exceptional, making him an invaluable asset to any team."
                  </p>
                  <p className="text-gray-600 text-xs font-semibold mt-2">— Jayr Agamata</p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact section */}
          <div className="w-full sm:w-1/2">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Get In Touch</h2>
            <div>
              <div className="space-y-2">
                <p className="text-gray-700 text-sm leading-relaxed">
                  Have a project in mind or want to collaborate? Feel free to reach out! I'm always open to discussing new opportunities.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600 font-semibold text-sm">Email:</span>
                    <a href="mailto:jeyemcats@gmail.com" className="text-[#1e1e1e] hover:text-[#1e1e1e] text-sm">jeyemcats@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600 font-semibold text-sm">Phone:</span>
                    <span className="text-gray-700 text-sm">+63 961 606 0087</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-300">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <p className="text-gray-800 font-semibold">Jeyem</p>
              <p className="text-gray-600 text-xs">Software Engineer & Content Creator</p>
            </div>
            <div className="text-center text-gray-600 text-xs">
              <p>© 2026 Jeyem. All rights reserved.</p>
            </div>
            <div className="text-center sm:text-right mt-4 sm:mt-0">
              <p className="text-gray-600 text-xs">
                Made with <span className="text-[#1e1e1e]">❤</span> using React & Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
