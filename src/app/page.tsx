"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'publications', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              HS Liu
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'publications', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    if (section === 'publications') {
                      window.location.href = '/publications';
                    } else if (section === 'projects') {
                      window.location.href = '/projects';
                    } else {
                      scrollToSection(section);
                    }
                  }}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block w-full h-0.5 bg-gray-700 dark:bg-gray-300 transition-transform ${
                  isMenuOpen ? 'rotate-45 translate-y-1' : ''
                }`} />
                <span className={`block w-full h-0.5 bg-gray-700 dark:bg-gray-300 transition-opacity ${
                  isMenuOpen ? 'opacity-0' : ''
                }`} />
                <span className={`block w-full h-0.5 bg-gray-700 dark:bg-gray-300 transition-transform ${
                  isMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`} />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {['home', 'about', 'experience', 'publications', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    if (section === 'publications') {
                      window.location.href = '/publications';
                    } else if (section === 'projects') {
                      window.location.href = '/projects';
                    } else {
                      scrollToSection(section);
                    }
                  }}
                  className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              HL
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Hongsheng Liu</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Research Scientist • LLM Serving Expert • AI4Science Researcher
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Research Scientist at Huawei 2012 Lab and maintainer of MindScience repository. 
            Specialized expertise in LLM Serving (vLLM & Dynamo) and leading AI4Science 
            initiatives for scientific computing and discovery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://scholar.google.com/citations?user=M7ag7rIAAAAJ&hl=zh-CN"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 100 14 7 7 0 000-14z"/>
              </svg>
              Google Scholar
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors font-medium"
            >
              View My Work
            </button>
          </div>
          
          <div className="flex justify-center space-x-6 mt-12">
            <a href="https://github.com/hsliuustc0106" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://scholar.google.com/citations?user=M7ag7rIAAAAJ&hl=zh-CN" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
               title="Google Scholar - View Publications">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 100 14 7 7 0 000-14z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/hsliu" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:liuhongsheng4@huawei.com"
               className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I&apos;m a Research Scientist at Huawei 2012 Lab with extensive experience in 
                large language model serving and AI4Science. As a maintainer of the MindScience 
                repository, I lead AI4Science initiatives and optimize LLM inference systems 
                like vLLM and Dynamo for high-performance deployment.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                With enormous experience in LLM serving technologies and deep expertise as 
                a MindScience maintainer, I bridge cutting-edge AI4Science research with practical 
                implementations for scientific computing and model optimization.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {['LLM Serving', 'vLLM', 'Dynamo', 'MindScience', 'AI4Science', 'Python', 'C++', 'PyTorch', 'CUDA'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                HL
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Experience
          </h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Research Scientist
              </h3>
              <p className="text-indigo-600 dark:text-indigo-400 mb-2">Huawei 2012 Lab • Present</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Leading research in LLM Serving optimization with specialized expertise in vLLM 
                and Dynamo systems. Serving as maintainer of the MindScience repository, driving 
                AI4Science initiatives and conducting cutting-edge research in large language model 
                deployment and inference optimization for scientific computing applications.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm">
                  MindScience Maintainer
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm">
                  LLM Serving
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm">
                  vLLM Expert
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm">
                  Dynamo
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm">
                  AI4Science
                </span>
              </div>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Ph.D. in Statistics and Operations Research
              </h3>
              <p className="text-purple-600 dark:text-purple-400 mb-2">University of North Carolina at Chapel Hill • 2015-2020</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Doctoral research in Statistics and Operations Research, focusing on optimization theory 
                and computational methods. Developed expertise in convergence analysis for decomposition 
                algorithms and large-scale optimization problems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm">
                  Statistics
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm">
                  Operations Research
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm">
                  Optimization Theory
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm">
                  Mathematical Analysis
                </span>
              </div>
            </div>
            
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Bachelor&apos;s Degree
              </h3>
              <p className="text-green-600 dark:text-green-400 mb-2">School for the Gifted Young, USTC • 2011-2015</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Undergraduate education at the prestigious School for the Gifted Young at the University 
                of Science and Technology of China, providing accelerated academic training and 
                comprehensive foundation in mathematics, science, and engineering.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm">
                  Gifted Education
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm">
                  Mathematics
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm">
                  Science Foundation
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm">
                  USTC
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Preview Section */}
      <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Featured Publications
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
            Showcasing cutting-edge research in AI4Science and ML optimization
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Featured Publication Cards */}
            {[
              {
                title: "Conservation-informed Graph Learning for Spatiotemporal Dynamics",
                venue: "KDD 2025",
                type: "AI4Science",
                tags: ["Graph Learning", "Spatiotemporal", "Conservation Laws"]
              },
              {
                title: "SlotPi: Physics-informed Object-centric Reasoning Models",
                venue: "KDD 2025",
                type: "AI4Science",
                tags: ["Physics-informed ML", "Object-centric", "Slot Attention"]
              },
              {
                title: "PhyMPGN: Physics-encoded Message Passing Graph Network",
                venue: "ICLR 2025",
                type: "AI4Science",
                tags: ["Graph Neural Networks", "Message Passing", "Physics-encoded"]
              }
            ].map((publication, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
                <div className="mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    publication.type === 'AI4Science' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300' :
                    'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                  }`}>
                    {publication.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 leading-tight">
                  {publication.title}
                </h3>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                  {publication.venue}
                </p>
                <div className="flex flex-wrap gap-1">
                  {publication.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Publications Link */}
          <div className="text-center">
            <a 
              href="/publications"
              className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium text-lg mr-4"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              View All Publications
            </a>
            <a 
              href="https://scholar.google.com/citations?user=M7ag7rIAAAAJ&hl=zh-CN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 100 14 7 7 0 000-14z"/>
              </svg>
              Google Scholar
            </a>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Featured Projects
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
            Leading initiatives in AI4Science and ML infrastructure
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Featured Project Cards */}
            {[
              { 
                title: 'MindScience Platform', 
                desc: 'Lead maintainer of Huawei\'s flagship AI4Science platform with 6 specialized suites and 60+ AI models.',
                category: 'AI4Science',
                icon: 'mindscience'
              },
              { 
                title: 'LLM Serving Research', 
                desc: 'Specialized research in large language model serving optimization with vLLM and Dynamo systems.',
                category: 'ML Infrastructure',
                icon: 'llm'
              },
              { 
                title: 'MindFlow - CFD Suite', 
                desc: 'Computational fluid dynamics solver with physics-informed AI and differentiable programming.',
                category: 'AI4Science',
                icon: 'flow'
              }
            ].map((project, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
                {index === 0 ? (
                  // MindScience project with custom logo
                  <div className="w-full h-32 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-lg mb-4 flex items-center justify-center p-4">
                    <img 
                      src="/hsliu-website/mindscience-icon.svg" 
                      alt="MindScience Logo" 
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                ) : (
                  // Other projects with icons
                  <div className="w-full h-32 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-white">
                      <svg className="w-12 h-12 mx-auto opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {project.icon === 'llm' ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        )}
                      </svg>
                    </div>
                  </div>
                )}
                
                <div className="mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.category === 'AI4Science' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300' :
                    'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                  }`}>
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
          
          {/* View All Projects Link */}
          <div className="text-center">
            <a 
              href="/projects"
              className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium text-lg mr-4"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View All Projects
            </a>
            <a 
              href="https://github.com/hsliuustc0106"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Get In Touch
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I&apos;m always interested in hearing about new opportunities and interesting projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:liuhongsheng4@huawei.com"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </a>
            
            <a 
              href="https://linkedin.com/in/hsliu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 Hongsheng Liu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
