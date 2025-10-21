import React, { useState, useEffect, useRef } from 'react';

// --- HOOKS ---
const useInView = (options?: IntersectionObserverInit): [React.RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        // Disconnect once the element is visible to prevent re-triggering
        observer.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isInView];
};


// --- DATA & TYPE DEFINITIONS ---
interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  tools: string[];
}

interface Skill {
    name: string;
    level: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Kamalayan Uniform Sample',
    category: 'Sample',
    imageUrl: 'pictures/pro1.png',
    description: 'I',
    tools: ['Photoshop'],
  },
  {
    id: 2,
    title: 'Kamalayan Uniform Sample',
    category: 'Sample 2',
    imageUrl: 'pictures/pro2.jpg',
    description: '',
    tools: ['Photoshop'],
  },
  {
    id: 3,
    title: 'Kamalayan Uniform Sample',
    category: 'Samplen 3',
    imageUrl: 'pictures/pro3.png',
    description: '',
    tools: ['Photoshop'],
  },
  {
    id: 4,
    title: 'Kamalayan Tarpaulin',
    category: 'Tarpaulin',
    imageUrl: 'pictures/pro4.jpg',
    description: '',
    tools: ['Photoshop'],
  },
  {
    id: 5,
    title: 'Tarpaulin',
    category: 'Tarpaulin',
    imageUrl: 'pictures/pro5.png',
    description: '',
    tools: ['Photoshop'],
  },
  {
    id: 6,
    title: 'Tarpaulin',
    category: 'Tarpaulin',
    imageUrl: 'pictures/pro6.png',
    description: '',
    tools: ['Photoshop'],
  },
  {
    id: 7,
    title: 'Tarpaulin',
    category: 'Tarpaulin',
    imageUrl: 'pictures/pro7.png',
    description: '',
    tools: ['Photoshop'],
  },
  {
    id: 8,
    title: 'Tarpaulin',
    category: 'Tarpaulin',
    imageUrl: 'pictures/pro8.png',
    description: '',
    tools: ['Photoshop'],
  },
  {
    id: 7,
    title: 'Tarpaulin',
    category: 'Tarpaulin',
    imageUrl: 'pictures/pro9.png',
    description: '',
    tools: ['Photoshop'],
  },
  {
    id: 8,
    title: 'Tarpaulin',
    category: 'Tarpaulin',
    imageUrl: 'pictures/pro10.png',
    description: '',
    tools: ['Photoshop'],
  },
   {
    id: 9,
    title: 'Tarpaulin',
    category: 'Tarpaulin',
    imageUrl: 'pictures/pro11.png',
    description: '',
    tools: ['Photoshop'],
  },
   {
    id: 10,
    title: 'Tarpaulin',
    category: 'Tarpaulin',
    imageUrl: 'pictures/pro12.png',
    description: '',
    tools: ['Photoshop'],
  },
   {
    id: 11,
    title: 'Tarpaulin',
    category: 'Tarpaulin',
    imageUrl: 'pictures/pro13.png',
    description: '',
    tools: ['Photoshop'],
  },
   {
    id: 9,
    title: 'Tarpaulin',
    category: 'Tarpaulin',
    imageUrl: 'pictures/pro14.png',
    description: '',
    tools: ['Photoshop'],
  },
   {
    id: 10,
    title: 'Tarpaulin',
    category: 'Tarpaulin',
    imageUrl: 'pictures/pro15.png',
    description: '',
    tools: ['Photoshop'],
  },
   {
    id: 11,
    title: 'Tarpaulin',
    category: 'Tarpaulin',
    imageUrl: 'pictures/pro16.png',
    description: '',
    tools: ['Photoshop'],
  },
   {
    id: 12,
    title: 'Tarpaulin',
    category: 'Tarpaulin',
    imageUrl: 'pictures/pro17.png',
    description: '',
    tools: ['Photoshop'],
  },
   {
    id: 13,
    title: 'Tarpaulin',
    category: 'Tarpaulin',
    imageUrl: 'pictures/pro18.png',
    description: '',
    tools: ['Photoshop'],
  },
   {
    id: 14,
    title: 'Tarpaulin',
    category: 'Tarpaulin',
    imageUrl: 'pictures/pro19.png',
    description: '',
    tools: ['Photoshop'],
  },
   {
    id: 15,
    title: 'Tarpaulin',
    category: 'Tarpaulin',
    imageUrl: 'pictures/pro20.png',
    description: '',
    tools: ['Photoshop'],
  },
   {
    id: 16,
    title: 'Tarpaulin',
    category: 'Tarpaulin',
    imageUrl: 'pictures/pro21.png',
    description: '',
    tools: ['Photoshop'],
  },
   {
    id: 17,
    title: 'Tarpaulin',
    category: 'Tarpaulin',
    imageUrl: 'pictures/pro22.png',
    description: '',
    tools: ['Photoshop'],
  },
];

const skills: Skill[] = [
    { name: 'Adobe Photoshop', level: 95 },
    { name: 'Adobe Illustrator', level: 90 },
    { name: 'Typography', level: 85 },
];


// --- COMPONENTS ---

const BackgroundEffects: React.FC<{ scrollY: number }> = ({ scrollY }) => (
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full filter blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-600/10 rounded-full filter blur-3xl animate-[float_9s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}></div>
    <div className="absolute bottom-10 left-5 md:left-20 w-24 h-24 border border-yellow-500/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
    <div className="absolute top-20 right-5 md:right-20 w-32 h-32 border-2 border-amber-500/10 animate-[spin_25s_linear_infinite_reverse]"></div>
    <div 
      className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-yellow-200/5 to-transparent animate-[shine_10s_ease-in-out_infinite]"
      style={{ animationDelay: '1s' }}
    ></div>
    <style>{`
      @keyframes shine {
        0%, 100% { transform: translateX(100%) skewX(-20deg); opacity: 0; }
        50% { transform: translateX(-100%) skewX(-20deg); opacity: 0.2; }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-30px); }
      }
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 30px -5px rgba(252, 211, 77, 0.2); }
        50% { box-shadow: 0 0 50px 5px rgba(252, 211, 77, 0.3); }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideInFromRight {
        from { transform: translateX(50px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      .text-glow-hover:hover {
        text-shadow: 0 0 10px rgba(250, 204, 21, 0.6);
      }
    `}</style>
  </div>
);

const ToolIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    {children}
  </svg>
);

const SkillBar: React.FC<{ skill: string; level: number; isVisible: boolean; delay: number }> = ({ skill, level, isVisible, delay }) => (
    <div className="w-full">
        <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-300">{skill}</span>
            <span className="text-sm font-medium text-yellow-300">{level}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div
                className="bg-gradient-to-r from-yellow-400 to-amber-500 h-2.5 rounded-full"
                style={{
                    width: isVisible ? `${level}%` : '0%',
                    transition: `width 1.5s ease-out ${delay}ms`,
                }}
            ></div>
        </div>
    </div>
);

const ProjectModal: React.FC<{ project: Project | null; onClose: () => void }> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      style={{ animation: 'fadeIn 0.3s ease-out forwards' }}
      onClick={onClose}
    >
      <div
        className="relative bg-gray-800 text-white rounded-lg shadow-2xl w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row"
        style={{ animation: 'slideInFromRight 0.4s ease-out forwards' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Close project details"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div className="md:w-3/5">
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
        </div>
        <div className="md:w-2/5 p-8 flex flex-col">
            <h3 className="text-3xl font-black text-yellow-300">{project.title}</h3>
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">{project.category}</p>
            <p className="text-gray-300 flex-grow">{project.description}</p>
            <div className="mt-6">
                <h4 className="font-bold text-gray-200 mb-2">Tools Used:</h4>
                <div className="flex flex-wrap gap-2">
                    {project.tools.map(tool => (
                        <span key={tool} className="bg-yellow-400/10 text-yellow-300 text-sm font-semibold px-3 py-1 rounded-full">{tool}</span>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const Header: React.FC<{ scrollY: number }> = ({ scrollY }) => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrollY > 50 ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="text-2xl font-black text-white">Maher<span className="text-yellow-400">.</span></a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
              <a href="#work" onClick={(e) => handleSmoothScroll(e, 'work')} className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Work</a>
              <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; 'aria-label': string }> = ({ href, children, 'aria-label': ariaLabel }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300" aria-label={ariaLabel}>
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      {children}
    </svg>
  </a>
);

const Footer: React.FC = () => {
  const [footerRef, isFooterInView] = useInView({ threshold: 0.1 });
    const getTransitionClasses = (delay: string) => `transform transition-all duration-1000 ease-out ${isFooterInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} ${delay}`;


  return (
    <footer ref={footerRef} className="bg-gray-900/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
            <div className={`flex justify-center items-center mb-4 ${getTransitionClasses('delay-200')}`}>
                <span className="text-xl font-black text-white">Maher<span className="text-yellow-400">.</span></span>
            </div>
            <div className={`flex justify-center space-x-6 mb-6 ${getTransitionClasses('delay-300')}`}>
                <SocialIcon href="#" aria-label="LinkedIn">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </SocialIcon>
                <SocialIcon href="#" aria-label="Behance">
                    <path d="M22.5 6.5h-5v-2h5v2zm-2.5 8c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-5.5-6.5c-2.484 0-4.5 2.016-4.5 4.5s2.016 4.5 4.5 4.5 4.5-2.016 4.5-4.5-2.016-4.5-4.5-4.5zm0 7c-1.383 0-2.5-1.117-2.5-2.5s1.117-2.5 2.5-2.5 2.5 1.117 2.5 2.5-1.117 2.5-2.5 2.5zm-4.5-8.5h-5v13h5.25c2.901 0 4.75-1.928 4.75-4.667 0-2.012-1.127-3.484-2.833-4.083.94-.482 1.583-1.48 1.583-2.583 0-1.99-1.391-3.667-3.75-3.667zm-2 2h2c.866 0 1.5.617 1.5 1.333 0 .736-.634 1.334-1.5 1.334h-2v-2.667zm0 4.667h2.167c.974 0 1.833.727 1.833 1.666 0 .963-.859 1.667-1.833 1.667h-2.167v-3.333z"/>
                </SocialIcon>
                <SocialIcon href="#" aria-label="Dribbble">
                    <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zM8.22 6.303c.307-1.171 1.053-2.213 2.072-2.915-2.16.488-4.045 1.884-5.32 3.868.256-.002.513-.002.77-.002 1.393 0 2.72.392 3.83 1.082a9.14 9.14 0 01-1.352-2.033zm8.016 11.233c-1.34 2.011-3.328 3.511-5.613 4.104 2.22-.507 4.14-1.898 5.48-3.79-1.29.355-2.654.551-4.067.551-1.38 0-2.696-.184-3.924-.516.326.39.67.766 1.03 1.127a.5.5 0 00.707 0c1.025-1.025 1.933-2.222 2.66-3.553a15.86 15.86 0 002.727 2.077zM15.938 3.899c1.07.69 1.864 1.705 2.217 2.923-1.282-1.986-3.167-3.38-5.327-3.868.328-.02.658-.033.99-.033.738 0 1.458.113 2.12.311zm-10.45 9.851c-.13-.42-.236-.85-.316-1.288-1.92 1.32-3.14 3.53-3.14 6.027 0 .532.06 1.05.174 1.554 2.072-1.33 3.61-3.415 4.305-5.836a10.82 10.82 0 01-1.023-.457zM12 9.537c-1.42 0-2.766.42-3.91 1.157.962 3.522 3.82 6.138 7.373 6.138.835 0 1.64-.108 2.404-.31-1.12-3.682-4.22-6.42-7.867-6.985zm8.972.846c-.237.472-.5.92-.787 1.342.665 1.815.98 3.76.98 5.764 0 .9-.092 1.77-.267 2.6-1.984-1.39-3.48-3.5-4.14-5.835 2.062-.224 3.99-1.12 5.214-2.871z"/>
                </SocialIcon>
            </div>
            <p className={`text-sm ${getTransitionClasses('delay-500')}`}>&copy; {new Date().getFullYear()} Maher. All Rights Reserved.</p>
        </div>
    </footer>
  )
};

const App: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrollY, setScrollY] = useState(0);

  // Refs and inView states for scroll animations
  const [aboutRef, isAboutInView] = useInView({ threshold: 0.2 });
  const [skillsRef, areSkillsInView] = useInView({ threshold: 0.5 });
  const [workRef, isWorkInView] = useInView({ threshold: 0.1 });
  const [contactRef, isContactInView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getMountedTransition = (delay: string): string => {
    return `transform transition-all duration-1000 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} ${delay}`;
  };

  const getScrollTransition = (inView: boolean, delay: string): string => {
    return `transform transition-all duration-1000 ease-out ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} ${delay}`;
  };


  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    // In a real app, you would handle form submission here (e.g., send data to a server).
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <Header scrollY={scrollY} />
      <main id="home" className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden transition-all duration-300 ${selectedProject ? 'blur-sm brightness-50' : ''}`}>
        <BackgroundEffects scrollY={scrollY} />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full min-h-screen p-4 sm:p-8">
          <div 
            className="flex-1 flex justify-center items-center w-full lg:w-1/2 p-4"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          >
            <div
              className={`transform transition-all duration-1000 ease-out ${isMounted ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="relative rounded-full animate-[pulse-glow_6s_ease-in-out_infinite]" style={{animationDelay: '1s'}}>
                <img 
                  src="sample.png"
                  alt="Maher, a graphic artist, wearing a brown hoodie"
                  className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
          </div>

          <div 
            className="flex-1 flex flex-col justify-center items-start w-full lg:w-1/2 p-4 text-left lg:pl-16"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            <div className={`${getMountedTransition('delay-300')}`}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300 transition-all duration-300 text-glow-hover">Hello!</h2>
            </div>
            <div className={`${getMountedTransition('delay-500')}`}>
              <h1 className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-black uppercase tracking-tighter my-2 text-white transition-all duration-300 text-glow-hover">
                I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-400">Maher</span>
              </h1>
            </div>
            <div className={`w-full h-1 bg-yellow-400/20 my-4 ${getMountedTransition('delay-700')}`}>
              <div className={`h-full bg-yellow-400 transition-all duration-1000 ease-out ${isMounted ? 'w-full' : 'w-0'}`} style={{transitionDelay: '1000ms'}}></div>
            </div>
            <div className={`${getMountedTransition('delay-[900ms]')}`}>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 tracking-[0.2em] uppercase transition-all duration-300 text-glow-hover">
                Graphic Artist
              </p>
            </div>
            <div className="mt-8 w-full">
              <div className={`flex flex-wrap gap-4 ${getMountedTransition('delay-[1100ms]')}`}>
                  <div className="flex items-center space-x-2 bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
                      <ToolIcon><path d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></ToolIcon>
                      <span className="font-semibold text-gray-300">Photoshop</span>
                  </div>
                   <div className="flex items-center space-x-2 bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
                      <ToolIcon><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 01-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 013.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 013.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 01-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM18 15.75l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 18l-1.035.259a3.375 3.375 0 00-2.456 2.456L18 21.75l-.259-1.035a3.375 3.375 0 00-2.456-2.456L14.25 18l1.035-.259a3.375 3.375 0 002.456-2.456z" /></ToolIcon>
                      <span className="font-semibold text-gray-300">Illustrator</span>
                  </div>
                   <div className="flex items-center space-x-2 bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
                      <ToolIcon><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 12l-5.83-3.17M11.42 15.17l-5.83 3.17L11.42 21M11.42 15.17v5.83M11.42 21l5.83-3.17M11.42 21l-5.83-3.17m5.83 3.17L17.25 12m-5.83 3.17L5.59 12m5.83 3.17L11.42 3v5.83" /></ToolIcon>
                      <span className="font-semibold text-gray-300">Canva</span>
                  </div>
              </div>
               <div className={`${getMountedTransition('delay-[1300ms]')}`}>
                   <p className="mt-6 text-amber-300/80 font-semibold tracking-wider">5+ Years of Professional Experience</p>
               </div>
            </div>
          </div>
        </div>
      </main>

      <section id="about" ref={aboutRef} className={`relative z-10 w-full px-4 py-16 sm:px-8 sm:py-24 bg-gray-900/50 transition-all duration-300 ${selectedProject ? 'blur-sm brightness-50' : ''}`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className={getScrollTransition(isAboutInView, 'delay-200')}>
            <h2 className="text-5xl font-black mb-6">
              About <span className="text-yellow-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-12"></div>
          </div>
          <div className={`space-y-6 text-lg text-gray-300 leading-relaxed ${getScrollTransition(isAboutInView, 'delay-300')}`}>
            <p>
              I'm Maher, a passionate and dedicated graphic artist with over five years of experience in turning creative ideas into compelling visual stories. My journey began with a simple love for drawing and has since evolved into a professional pursuit of design excellence.
            </p>
            <p>
              My philosophy is simple: great design is about clear communication. It's about finding the perfect balance between aesthetics and functionality to create something that not only looks beautiful but also serves a purpose and resonates with its audience. I thrive on collaboration and am always eager to tackle new challenges.
            </p>
          </div>
          <div className={`mt-12 ${getScrollTransition(isAboutInView, 'delay-400')}`}>
            <a
              href="/RESUME MAHER .pdf"
              download="RESUME MAHER .pdf"
              className="inline-flex items-center gap-x-3 bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-colors duration-300 shadow-lg hover:shadow-yellow-500/30"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download Resume</span>
            </a>
          </div>
          <div ref={skillsRef} className={`mt-16 w-full max-w-2xl mx-auto ${getScrollTransition(isAboutInView, 'delay-500')}`}>
            <h3 className="text-3xl font-bold text-center mb-8">My Skillset</h3>
            <div className="space-y-6">
                {skills.map((skill, index) => (
                    <SkillBar 
                        key={skill.name} 
                        skill={skill.name} 
                        level={skill.level} 
                        isVisible={areSkillsInView} 
                        delay={index * 150}
                    />
                ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" ref={workRef} className={`relative z-10 w-full px-4 py-16 sm:px-8 sm:py-24 bg-gray-900 transition-all duration-300 ${selectedProject ? 'blur-sm brightness-50' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl font-black text-center mb-12 ${getScrollTransition(isWorkInView, 'delay-200')}`}>
            My <span className="text-yellow-400">Work</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(250,204,21,0.25)] transition-all duration-300 ring-1 ring-white/10 hover:ring-2 hover:ring-yellow-400 ${getScrollTransition(isWorkInView, `delay-${300 + index * 100}`)}`}
                onClick={() => setSelectedProject(project)}
              >
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-yellow-300">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={`relative z-10 transition-all duration-300 ${selectedProject ? 'blur-sm brightness-50' : ''}`}>
        <section id="contact" ref={contactRef} className="w-full px-4 py-16 sm:px-8 sm:py-24 bg-gray-900/50">
          <div className="max-w-5xl mx-auto">
            <h2 className={`text-5xl font-black text-center mb-4 ${getScrollTransition(isContactInView, 'delay-200')}`}>
              Get In <span className="text-yellow-400">Touch</span>
            </h2>
            <p className={`text-center text-gray-400 mb-12 max-w-2xl mx-auto ${getScrollTransition(isContactInView, 'delay-300')}`}>
              Have a project in mind or just want to say hello? I’d love to hear from you. Fill out the form below or send me an email.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className={`space-y-6 ${getScrollTransition(isContactInView, 'delay-400')}`}>
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400/10 p-3 rounded-full"><svg className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">Email</h4>
                    <a href="maherdimalanes1998@gmail.com" className="text-gray-300 hover:text-yellow-400 transition-colors">maherdimalanes1998@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400/10 p-3 rounded-full"><svg className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">Phone</h4>
                    <a href="tel:09975242435" className="text-gray-300 hover:text-yellow-400 transition-colors">09975242435</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400/10 p-3 rounded-full"><svg className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">Location</h4>
                    <p className="text-gray-300">Isulan Sultan Kudarat</p>
                  </div>
                </div>
              </div>
              <form onSubmit={handleFormSubmit} className={`space-y-4 ${getScrollTransition(isContactInView, 'delay-500')}`}>
                <input type="text" placeholder="Your Name" required className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all" />
                <input type="email" placeholder="Your Email" required className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all" />
                <input type="text" placeholder="Subject" required className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all" />
                <textarea placeholder="Your Message" required rows={5} className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"></textarea>
                <button type="submit" className="w-full bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors duration-300">Send Message</button>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default App;