import { useState, useEffect } from "react";

import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  Code,
  Database,
  Cloud,
  Settings,
} from "lucide-react";
import { ThemeToggle } from "./components/ThemeToggle";
import { useTheme } from "./components/ThemeContext";

const Portfolio = () => {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isManualNavigation, setIsManualNavigation] = useState(false);

  const skills = {
    languages: [
      "Java",
      "JavaScript/TypeScript",
      "Python",
      "C/C++",
      "SQL",
      "HTML/CSS",
    ],
    cloud: [
      "AWS (EC2, Lambda, S3)",
      "GCP (Compute Engine, Google Storage)",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Oracle",
      "Firebase",
    ],
    frameworks: [
      "ReactJS",
      "Redux",
      "Bootstrap",
      "ThreeJS",
      "NodeJS",
      "ExpressJS",
      "Spring Boot",
      "Hibernate",
    ],
    tools: [
      "Docker",
      "Nginx",
      "Jenkins",
      "Postman",
      "Git",
      "Github",
      "JIRA",
      "Figma",
      "AdobeXD",
      "Drupal",
    ],
  };

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Cognizant",
      period: "Jan 2024 - Present",
      location: "Remote, USA",
      description: "Developed a dynamic front-end using React, enhancing user experience and boosting engagement by 10%. Built RESTful APIs using Node.js and Express.js, improving data exchange and reducing load times by 15%. Utilized Java and Spring Boot to create microservices that handle core business logic, and achieved 95% code coverage with comprehensive unit and integration tests using Jest and Mocha.",
    },
    {
      title: "Software Engineer",
      company: "Infosys",
      period: "Sept 2021 - Jun 2022",
      location: "India",
      description: "Led migration to AWS Lambda for critical event-driven services, optimizing cost-efficiency. Engineered front-end state management solution using React's Context API and custom hooks. Developed high-performance RESTful APIs using Java and Spring Boot, enhancing performance by 20%, and implemented distributed caching with AWS ElastiCache, improving response times by 15%.",
    },
    {
      title: "Full Stack Developer",
      company: "Quadrant Televentures Ltd",
      period: "Jan 2021 - June 2021",
      location: "India",
      description: "Designed and developed a dynamic customer data management dashboard improving accessibility by 30%. Led implementation of RESTful APIs using Node.js for efficient back-end CRUD operations, and designed continuous performance monitoring system with AWS CloudWatch.",
    },
  ];

  const projects = [
    {
      name: "HealthShare",
      tech: "PostgreSQL, ReactJS, Spring Boot, NodeJS, ExpressJS, Llama, D3JS",
      description: "Analytics platform with 120K+ healthcare professional entries from COVID-19. Features serverless Spring Boot functions, Llama language model integration for NLP, and interactive D3JS visualizations for data exploration.",
      githubUrl: "https://github.com/mittallakshayy/health-share",
      liveUrl: "http://18.218.238.186/",
    },
    {
      name: "GatorMart: A University Marketplace",
      tech: "MERN, AWS, Socket.IO, OAuth, WebRTC, CI/CD",
      description: "University marketplace platform for SFSU students to buy and sell products. Features JWT/OAuth authentication, real-time video chat with WebRTC, messaging via Socket.IO, and automated CI/CD deployment.",
      githubUrl: "https://github.com/mittallakshayy/SFSU-Gatormart",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Skip automatic detection during manual navigation
      if (isManualNavigation) {
        return;
      }
      
      const sections = [
        "hero",
        "about",
        "experience",
        "projects",
        "skills",
        "contact",
      ];
      
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // If we're near the bottom of the page (within 100px), activate contact
      if (scrollTop + windowHeight >= documentHeight - 100) {
        setActiveSection("contact");
        return;
      }
      
      // Find which section is most in view
      const viewportCenter = scrollTop + windowHeight / 2;
      let currentSection = "hero";
      let minDistance = Infinity;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const sectionCenter = offsetTop + offsetHeight / 2;
          const distance = Math.abs(viewportCenter - sectionCenter);
          
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isManualNavigation]);

  const scrollToSection = (sectionId: string) => {
    // Disable automatic scroll detection during manual navigation
    setIsManualNavigation(true);
    
    // Set active section immediately
    setActiveSection(sectionId);
    
    // Scroll to section
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
    
    // Re-enable scroll detection after smooth scroll completes
    setTimeout(() => {
      setIsManualNavigation(false);
    }, 1500);
  };


  const SkillIcon = ({ category }: { category: string }) => {
    switch (category) {
      case "languages":
        return <Code className="w-6 h-6" />;
      case "cloud":
        return <Cloud className="w-6 h-6" />;
      case "frameworks":
        return <Database className="w-6 h-6" />;
      default:
        return <Settings className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen main-bg relative overflow-x-hidden transition-colors duration-300">
      {/* Global Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div
          className="absolute w-96 h-96 hero-orb-1 rounded-full blur-3xl opacity-30"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${
              mousePosition.y * 0.015
            }px)`,
            top: "5%",
            left: "5%",
          }}
        />
        <div
          className="absolute w-96 h-96 hero-orb-2 rounded-full blur-3xl opacity-25"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${
              mousePosition.y * -0.015
            }px)`,
            top: "70%",
            right: "5%",
          }}
        />
        <div
          className="absolute w-96 h-96 hero-orb-3 rounded-full blur-3xl opacity-20"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${
              mousePosition.y * 0.01
            }px)`,
            top: "40%",
            right: "40%",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl z-50 border-b border-slate-200/60 dark:border-cyan-500/20 transition-colors duration-300 shadow-sm dark:shadow-none">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-pulse">
              LM
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["About", "Experience", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`nav-link-hover text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      activeSection === item.toLowerCase()
                        ? "theme-accent scale-105"
                        : "text-gray-900 dark:text-gray-300"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              <ThemeToggle />
              <button
                className="nav-link-hover text-gray-900 dark:text-gray-300 transition-colors duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden backdrop-blur-xl border-t border-slate-200/60 dark:border-cyan-500/20 transition-all duration-300 ${
            isMenuOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
          style={{
            background: theme === 'light' 
              ? 'rgba(255, 255, 255, 0.95)' 
              : 'rgba(30, 41, 59, 0.9)'
          }}
        >
          <div className="px-4 py-2 space-y-2">
            {["About", "Experience", "Projects", "Skills", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="nav-link-hover block w-full text-left px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-cyan-400/10 rounded-lg transition-all duration-300"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section
        id="hero"
        className="min-h-screen flex items-center px-4 pt-20 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
            
            {/* Left Side - Text Content */}
            <div className="space-y-8 animate-slide-in-left text-center lg:text-left">
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold theme-text-primary mb-4 leading-tight">
                  Lakshay{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    Mittal
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Full Stack Developer
                </p>
                
                <p className="text-lg theme-text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
                  Building scalable web applications with the MERN stack and
                  Spring Boot. Passionate about creating efficient, maintainable
                  solutions with modern technologies.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="mailto:mittallakshayy@gmail.com"
                  className="flex items-center gap-3 btn-primary px-6 py-3 rounded-lg text-base"
                >
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </a>
                <a
                  href="/Lakshay_Mittal.pdf"
                  download
                  className="flex items-center gap-3 btn-secondary px-6 py-3 rounded-lg text-base"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Resume
                </a>
              </div>

              <div className="flex gap-6 justify-center lg:justify-start">
                <a
                  href="https://github.com/mittallakshayy"
                  className="theme-text-muted hover:text-accent transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-7 h-7" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mittallakshayy/"
                  className="theme-text-muted hover:text-accent transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-7 h-7" />
                </a>
              </div>
            </div>

            {/* Right Side - Modern Geometric Artifact */}
            <div className="flex justify-center lg:justify-end items-center animate-slide-in-right">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 lg:mr-8">
                
                {/* Central Diamond Shape */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 rotate-45 shadow-2xl animate-pulse"></div>
                </div>

                {/* Layered Squares */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-40 h-40 border-2 border-blue-500/30 dark:border-cyan-400/30 rotate-12 animate-spin-slow"></div>
                  <div className="absolute inset-4 border-2 border-purple-500/40 dark:border-blue-400/40 rotate-45 animate-spin-reverse"></div>
                  <div className="absolute inset-8 border-2 border-cyan-500/50 dark:border-purple-400/50 rotate-12"></div>
                </div>

                {/* Corner Elements */}
                <div className="absolute inset-0">
                  {/* Top Right */}
                  <div className="absolute top-8 right-8 w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-blue-500 rounded-lg animate-float shadow-lg"></div>
                  
                  {/* Top Left */}
                  <div className="absolute top-16 left-12 w-6 h-6 bg-gradient-to-br from-purple-600 to-cyan-600 dark:from-blue-500 dark:to-purple-500 rounded-full animate-float-delay-1 shadow-lg"></div>
                  
                  {/* Bottom Left */}
                  <div className="absolute bottom-12 left-8 w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-600 dark:from-purple-500 dark:to-cyan-500 rounded-xl animate-float-delay-2 shadow-lg"></div>
                  
                  {/* Bottom Right */}
                  <div className="absolute bottom-16 right-12 w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-cyan-400 dark:to-blue-400 rounded-lg animate-float-delay-3 shadow-lg"></div>
                </div>

                {/* Animated Lines */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent dark:via-cyan-400/50 animate-pulse"></div>
                  <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent dark:via-blue-400/50 animate-pulse"></div>
                </div>

                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent dark:from-cyan-400/20 dark:via-blue-400/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="w-8 h-8 theme-accent" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center theme-text-primary mb-12 animate-fade-in-up">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-lg theme-text-secondary leading-relaxed">
                I'm a Software Engineer with 2+ years of experience developing
                scalable and maintainable web applications. I specialize in
                full-stack development with expertise in the MERN stack and
                Spring Boot.
              </p>
              <p className="text-lg theme-text-secondary leading-relaxed">
                I have a strong foundation in algorithms and data structures,
                with experience in collaborative development workflows,
                comprehensive code reviews, and Git-based version control.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="nav-link-hover flex items-center gap-2 theme-text-secondary transition-colors duration-300">
                  <MapPin className="w-5 h-5 theme-accent" />
                  San Francisco, CA
                </div>
                <div className="nav-link-hover flex items-center gap-2 theme-text-secondary transition-colors duration-300">
                  <Phone className="w-5 h-5 theme-accent" />
                  +1-424-489-4433
                </div>
              </div>
            </div>
            <div className="theme-card backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:shadow-xl animate-slide-in-right">
              <h3 className="text-xl font-semibold theme-text-primary mb-4">
                Education
              </h3>
              <div className="space-y-4">
                <div className="hover:bg-blue-50 dark:hover:bg-cyan-400/5 p-3 rounded-lg transition-colors duration-300">
                  <h4 className="font-medium theme-accent">
                    Master of Science, Computer Science
                  </h4>
                  <p className="theme-text-secondary">
                    San Francisco State University
                  </p>
                  <p className="theme-text-muted text-sm">
                    Aug 2022 - Dec 2024 | GPA: 3.74/4.0
                  </p>
                </div>
                <div className="hover:bg-blue-50 dark:hover:bg-cyan-400/5 p-3 rounded-lg transition-colors duration-300">
                  <h4 className="font-medium theme-accent">
                    Bachelor of Engineering, Computer Science & Engineering
                  </h4>
                  <p className="theme-text-secondary">Panjab University</p>
                  <p className="theme-text-muted text-sm">
                    Aug 2017 - June 2021 | GPA: 3.58/4.0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-4 section-bg-alt relative transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center theme-text-primary mb-12 animate-fade-in-up">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="experience-card theme-card backdrop-blur-sm rounded-xl p-6 border transition-all duration-500 hover:shadow-xl hover:scale-105 animate-slide-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold theme-accent hover:opacity-80 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-lg theme-text-primary">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="theme-text-secondary font-medium">
                      {exp.period}
                    </p>
                    <p className="theme-text-muted text-sm">{exp.location}</p>
                  </div>
                </div>
                <p className="theme-text-secondary leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center theme-text-primary mb-12 animate-fade-in-up">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card theme-card backdrop-blur-sm rounded-xl p-6 border transition-all duration-500 hover:shadow-xl hover:scale-105 group animate-slide-in-up"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <h3 className="text-xl project-title mb-3">{project.name}</h3>
                <div className="project-tech-stack text-xs mb-4 font-mono px-3 py-2 rounded-lg border inline-block">
                  {project.tech}
                </div>
                <p className="project-description mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 btn-secondary px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 btn-primary px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 section-bg-alt relative transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center theme-text-primary mb-12 animate-fade-in-up">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={category}
                className="skill-card theme-card backdrop-blur-sm rounded-xl p-6 border transition-all duration-500 hover:shadow-xl hover:scale-105 animate-slide-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="skill-icon hover:scale-110 transition-transform duration-300">
                    <SkillIcon category={category} />
                  </div>
                  <h3 className="text-lg font-semibold theme-text-primary">
                    {category === "languages"
                      ? "Programming Languages"
                      : category === "cloud"
                      ? "Cloud & Databases"
                      : category === "frameworks"
                      ? "Libraries & Frameworks"
                      : "Tools & Technologies"}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="skill-tag px-3 py-1 rounded-full text-sm hover:scale-105 transition-all duration-300 animate-slide-in-up"
                      style={{
                        animationDelay: `${index * 150 + skillIndex * 50}ms`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold theme-text-primary mb-8 animate-fade-in-up">
            Let's Work Together
          </h2>
          <p
            className="text-xl theme-text-secondary mb-12 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            I'm always interested in new opportunities and exciting projects.
            Let's connect and discuss how we can create something amazing
            together.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:mittallakshayy@gmail.com"
              className="flex flex-col items-center gap-3 p-6 contact-card theme-card backdrop-blur-sm rounded-xl border transition-all duration-500 hover:shadow-xl hover:scale-105 group animate-slide-in-up"
            >
              <Mail className="w-8 h-8 contact-icon group-hover:scale-110 transition-transform duration-300" />
              <span className="theme-text-primary font-medium">Email</span>
              <span className="theme-text-muted text-sm">
                mittallakshayy@gmail.com
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/mittallakshayy/"
              className="flex flex-col items-center gap-3 p-6 contact-card theme-card backdrop-blur-sm rounded-xl border transition-all duration-500 hover:shadow-xl hover:scale-105 group animate-slide-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <Linkedin className="w-8 h-8 contact-icon group-hover:scale-110 transition-transform duration-300" />
              <span className="theme-text-primary font-medium">LinkedIn</span>
              <span className="theme-text-muted text-sm">Connect with me</span>
            </a>

            <a
              href="https://github.com/mittallakshayy"
              className="flex flex-col items-center gap-3 p-6 contact-card theme-card backdrop-blur-sm rounded-xl border transition-all duration-500 hover:shadow-xl hover:scale-105 group animate-slide-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <Github className="w-8 h-8 contact-icon group-hover:scale-110 transition-transform duration-300" />
              <span className="theme-text-primary font-medium">GitHub</span>
              <span className="theme-text-muted text-sm">View my code</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t backdrop-blur-xl transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center">
          <p className="theme-text-muted">
            © 2025 Lakshay Mittal. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }

        .animate-slide-up-delay-1 {
          animation: slide-up 1s ease-out 0.2s both;
        }

        .animate-slide-up-delay-2 {
          animation: slide-up 1s ease-out 0.4s both;
        }

        .animate-slide-up-delay-3 {
          animation: slide-up 1s ease-out 0.6s both;
        }

        .animate-slide-up-delay-4 {
          animation: slide-up 1s ease-out 0.8s both;
        }

        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out both;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delay-1 {
          animation: float 3s ease-in-out infinite 0.5s;
        }

        .animate-float-delay-2 {
          animation: float 3s ease-in-out infinite 1s;
        }

        .animate-float-delay-3 {
          animation: float 3s ease-in-out infinite 1.5s;
        }

        .animate-float-delay-4 {
          animation: float 3s ease-in-out infinite 2s;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes orbit-1 {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(160px)
              rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(160px)
              rotate(-360deg);
          }
        }

        @keyframes orbit-2 {
          0% {
            transform: translate(-50%, -50%) rotate(120deg) translateX(140px)
              rotate(-120deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(480deg) translateX(140px)
              rotate(-480deg);
          }
        }

        @keyframes orbit-3 {
          0% {
            transform: translate(-50%, -50%) rotate(240deg) translateX(180px)
              rotate(-240deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(600deg) translateX(180px)
              rotate(-600deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 30s linear infinite;
        }

        .animate-orbit-1 {
          animation: orbit-1 10s linear infinite;
        }

        .animate-orbit-2 {
          animation: orbit-2 15s linear infinite reverse;
        }

        .animate-orbit-3 {
          animation: orbit-3 12s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
