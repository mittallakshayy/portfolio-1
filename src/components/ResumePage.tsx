import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Code,
  Database,
  Cloud,
  Settings,
  Globe,
  ChevronDown,
} from "lucide-react";
import { useTheme } from "./ThemeContext";
import { ThemeToggle } from "./ThemeToggle";

const ResumePage = () => {
  const { } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = {
    languages: ["Java", "JavaScript/TypeScript", "Python", "C++", "SQL", "HTML/CSS"],
    cloud: ["AWS", "GCP", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Kafka"],
    frameworks: ["ReactJS", "Redux", "NodeJS", "ExpressJS", "Spring Boot", "Hibernate"],
    tools: ["Docker", "Kubernetes", "Jenkins", "Git", "JIRA", "Figma"],
  };

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Cognizant",
      period: "Jan 2024 - Jan 2026",
      location: "Remote, USA",
      bullets: [
        "Developed a dynamic front-end using React, enhancing user experience and boosting engagement by 10%",
        "Built RESTful APIs using Node.js and Express.js, improving data exchange and reducing load times by 15%",
        "Utilized Java and Spring Boot to create microservices that handle core business logic",
        "Achieved 95% code coverage with comprehensive unit and integration tests using Jest and Mocha",
      ],
    },
    {
      title: "Software Engineer",
      company: "Infosys",
      period: "Sept 2021 - Jun 2022",
      location: "India",
      bullets: [
        "Led migration to AWS Lambda for critical event-driven services, optimizing cost-efficiency",
        "Engineered front-end state management solution using React's Context API and custom hooks",
        "Developed high-performance RESTful APIs using Java and Spring Boot, enhancing performance by 20%",
        "Implemented distributed caching with AWS ElastiCache, improving response times by 15%",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Quadrant Televentures Ltd",
      period: "Jan 2021 - June 2021",
      location: "India",
      bullets: [
        "Designed and developed a dynamic customer data management dashboard improving accessibility by 30%",
        "Led implementation of RESTful APIs using Node.js for efficient back-end CRUD operations",
        "Designed continuous performance monitoring system with AWS CloudWatch",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Science, Computer Science",
      school: "San Francisco State University",
      gpa: "3.74/4.0",
    },
    {
      degree: "Bachelor of Engineering, Computer Science & Engineering",
      school: "Panjab University",
      gpa: "3.58/4.0",
    },
  ];

  const projects: {
    name: string;
    tech: string[];
    description: string;
    githubUrl: string;
    liveUrl?: string;
  }[] = [
      {
        name: "HealthShare",
        tech: ["PostgreSQL", "ReactJS", "Spring Boot", "NodeJS", "ExpressJS", "Llama", "D3JS"],
        description:
          "AI-enhanced pandemic data repository with 120K+ healthcare professional entries. Features serverless Spring Boot functions, Llama LLM integration for NLP, and interactive D3JS visualizations.",
        githubUrl: "https://github.com/mittallakshayy/health-share"

      },
      {
        name: "GatorMart",
        tech: ["MERN", "AWS", "Socket.IO", "OAuth", "WebRTC", "CI/CD"],
        description:
          "University marketplace for SFSU students. Features JWT/OAuth authentication, real-time video chat with WebRTC, messaging via Socket.IO, and automated CI/CD deployment.",
        githubUrl: "https://github.com/mittallakshayy/SFSU-Gatormart",
      },
    ];

  const SkillIcon = ({ category }: { category: string }) => {
    switch (category) {
      case "languages":
        return <Code className="w-5 h-5" />;
      case "cloud":
        return <Cloud className="w-5 h-5" />;
      case "frameworks":
        return <Database className="w-5 h-5" />;
      default:
        return <Settings className="w-5 h-5" />;
    }
  };

  const categoryLabel = (cat: string) => {
    switch (cat) {
      case "languages": return "Languages";
      case "cloud": return "Cloud & Databases";
      case "frameworks": return "Frameworks";
      case "tools": return "Tools";
      default: return cat;
    }
  };

  return (
    <div className="min-h-screen main-bg relative overflow-x-hidden transition-colors duration-300">

      {/* Global Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div
          className="absolute w-96 h-96 hero-orb-1 rounded-full blur-3xl opacity-30"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
            top: "5%",
            left: "5%",
          }}
        />
        <div
          className="absolute w-96 h-96 hero-orb-2 rounded-full blur-3xl opacity-25"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            top: "70%",
            right: "5%",
          }}
        />
        <div
          className="absolute w-96 h-96 hero-orb-3 rounded-full blur-3xl opacity-20"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            top: "40%",
            right: "40%",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl z-50 border-b border-slate-200/60 dark:border-cyan-500/20 transition-colors duration-300 shadow-sm dark:shadow-none">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a
              href="/"
              className="flex items-center gap-2 theme-text-secondary hover:text-accent transition-colors duration-300 text-sm font-medium"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                LM
              </span>
            </a>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <a
                href="/Lakshay Mittal.pdf"
                download
                className="flex items-center gap-2 btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ═══════════ HERO SECTION — Name Left + Artifact Right ═══════════ */}
      <section className="min-h-screen flex items-center px-4 pt-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">

            {/* Left Side — Identity */}
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
                  Software Engineer experienced in MERN stack and Spring Boot, with a focus on scalable web applications, microservices, and agentic AI workflows.
                </p>
              </div>

              {/* Contact & Social Row */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <a href="mailto:mittallakshayy@gmail.com" className="resume-contact-pill">
                  <Mail className="w-4 h-4" />
                  <span>mittallakshayy@gmail.com</span>
                </a>
                <a href="tel:+14244894433" className="resume-contact-pill">
                  <Phone className="w-4 h-4" />
                  <span>+1-424-489-4433</span>
                </a>
                <span className="resume-contact-pill">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </span>
              </div>

              <div className="flex gap-5 justify-center lg:justify-start">
                <a
                  href="https://github.com/mittallakshayy"
                  className="theme-text-muted hover:text-accent transition-all duration-300 hover:scale-110"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Github className="w-7 h-7" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mittallakshayy/"
                  className="theme-text-muted hover:text-accent transition-all duration-300 hover:scale-110"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Linkedin className="w-7 h-7" />
                </a>
              </div>
            </div>

            {/* Right Side — Animated Code Terminal Artifact */}
            <div className="flex justify-center lg:justify-end items-center animate-slide-in-right">
              <div
                className="relative w-[300px] h-[420px] sm:w-[340px] sm:h-[430px] lg:w-[480px] lg:h-[440px]"
                style={{
                  transform: `perspective(1000px) rotateY(${(mousePosition.x - window.innerWidth / 2) * 0.008}deg) rotateX(${(mousePosition.y - window.innerHeight / 2) * -0.005}deg) translate(${mousePosition.x * 0.006}px, ${mousePosition.y * 0.006}px)`,
                  transition: 'transform 0.15s ease-out',
                  overflow: 'visible',
                }}
              >
                {/* Background Glow */}
                <div className="absolute -inset-8 rounded-3xl artifact-terminal-glow blur-2xl opacity-60" />

                {/* Code Terminal Window */}
                <div className="relative artifact-terminal rounded-xl overflow-hidden shadow-2xl w-full h-[240px] sm:h-[280px] lg:h-[320px]">
                  {/* Title Bar */}
                  <div className="artifact-terminal-titlebar flex items-center px-4 py-3 gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <span className="artifact-terminal-title text-xs font-medium ml-3 font-mono">developer.tsx</span>
                  </div>

                  {/* Code Content */}
                  <div className="p-4 lg:p-5 font-mono text-xs lg:text-sm leading-relaxed overflow-hidden">
                    <div className="artifact-code-line" style={{ animationDelay: '0.2s' }}>
                      <span className="code-keyword">const</span>{" "}
                      <span className="code-variable">developer</span>{" "}
                      <span className="code-operator">=</span>{" "}
                      <span className="code-punctuation">{"{"}</span>
                    </div>
                    <div className="artifact-code-line" style={{ animationDelay: '0.5s' }}>
                      <span className="code-indent" />
                      <span className="code-property">name</span>
                      <span className="code-operator">:</span>{" "}
                      <span className="code-string">"Lakshay Mittal"</span>
                      <span className="code-punctuation">,</span>
                    </div>
                    <div className="artifact-code-line" style={{ animationDelay: '0.8s' }}>
                      <span className="code-indent" />
                      <span className="code-property">role</span>
                      <span className="code-operator">:</span>{" "}
                      <span className="code-string">"Full Stack Developer"</span>
                      <span className="code-punctuation">,</span>
                    </div>
                    <div className="artifact-code-line" style={{ animationDelay: '1.1s' }}>
                      <span className="code-indent" />
                      <span className="code-property">stack</span>
                      <span className="code-operator">:</span>{" "}
                      <span className="code-punctuation">[</span>
                      <span className="code-string">"React"</span>
                      <span className="code-punctuation">,</span>{" "}
                      <span className="code-string">"Node"</span>
                      <span className="code-punctuation">,</span>{" "}
                      <span className="code-string">"Spring"</span>
                      <span className="code-punctuation">]</span>
                      <span className="code-punctuation">,</span>
                    </div>
                    <div className="artifact-code-line" style={{ animationDelay: '1.4s' }}>
                      <span className="code-indent" />
                      <span className="code-property">passion</span>
                      <span className="code-operator">:</span>{" "}
                      <span className="code-string">"Building scalable apps"</span>
                      <span className="code-punctuation">,</span>
                    </div>
                    <div className="artifact-code-line" style={{ animationDelay: '1.7s' }}>
                      <span className="code-indent" />
                      <span className="code-property">available</span>
                      <span className="code-operator">:</span>{" "}
                      <span className="code-boolean">true</span>
                    </div>
                    <div className="artifact-code-line" style={{ animationDelay: '2.0s' }}>
                      <span className="code-punctuation">{"}"}</span>
                      <span className="code-punctuation">;</span>
                    </div>
                    <div className="artifact-code-line" style={{ animationDelay: '2.3s' }}>
                      &nbsp;
                    </div>
                    <div className="artifact-code-line" style={{ animationDelay: '2.5s' }}>
                      <span className="code-keyword">export default</span>{" "}
                      <span className="code-variable">developer</span>
                      <span className="code-punctuation">;</span>
                      <span className="artifact-cursor" />
                    </div>
                  </div>
                </div>

                {/* Floating Tech Badges */}
                <div className="absolute -top-4 right-0 sm:-right-3 lg:-right-6 artifact-float-badge artifact-badge-react" style={{ animationDelay: '0s' }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z" /></svg>
                  <span className="text-xs font-semibold">React</span>
                </div>

                <div className="absolute top-8 -left-2 sm:-left-4 lg:-left-8 artifact-float-badge artifact-badge-node" style={{ animationDelay: '0.6s' }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.71.46 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 01-.12-.21V7.71c0-.09.04-.17.12-.21l7.44-4.29c.08-.05.18-.05.26 0l7.44 4.29c.08.04.12.12.12.21v8.58c0 .08-.04.17-.12.21l-7.44 4.29c-.08.04-.17.04-.25 0L10 19.89c-.06-.03-.14-.04-.2-.01-.55.24-1.05.41-1.46.5-.7.2-.82.24.14.74l2.74 1.58c.24.13.5.2.78.2.27 0 .54-.07.78-.2l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2z" /></svg>
                  <span className="text-xs font-semibold">Node.js</span>
                </div>

                <div className="absolute bottom-6 left-2 sm:left-4 sm:bottom-6 lg:-bottom-2 lg:left-2 artifact-float-badge artifact-badge-aws" style={{ animationDelay: '1.2s' }}>
                  <Cloud className="w-4 h-4" />
                  <span className="text-xs font-semibold">AWS</span>
                </div>

                <div className="absolute bottom-12 right-0 sm:-right-2 lg:-right-6 artifact-float-badge artifact-badge-spring" style={{ animationDelay: '1.8s' }}>
                  <span className="text-sm">🍃</span>
                  <span className="text-xs font-semibold">Spring</span>
                </div>

                <div className="absolute bottom-0 right-8 sm:right-12 sm:bottom-0 lg:-bottom-6 lg:right-16 artifact-float-badge artifact-badge-docker" style={{ animationDelay: '2.4s' }}>
                  <Database className="w-4 h-4" />
                  <span className="text-xs font-semibold">Docker</span>
                </div>

                <div className="absolute top-14 right-1 sm:right-4 lg:right-0 artifact-float-badge artifact-badge-ts" style={{ animationDelay: '0.3s' }}>
                  <Code className="w-4 h-4" />
                  <span className="text-xs font-semibold">TypeScript</span>
                </div>

                {/* Animated Connection Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden sm:block" style={{ overflow: 'visible' }}>
                  <line x1="15%" y1="18%" x2="5%" y2="45%" className="artifact-connection-line" strokeDasharray="4 4">
                    <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="85%" y1="8%" x2="92%" y2="28%" className="artifact-connection-line" strokeDasharray="4 4">
                    <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="15%" y1="85%" x2="30%" y2="100%" className="artifact-connection-line" strokeDasharray="4 4">
                    <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1.8s" repeatCount="indefinite" />
                  </line>
                  <line x1="85%" y1="78%" x2="95%" y2="68%" className="artifact-connection-line" strokeDasharray="4 4">
                    <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2.2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none" style={{ overflow: 'visible' }}>
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full artifact-particle"
                      style={{
                        width: `${2 + (i % 3)}px`,
                        height: `${2 + (i % 3)}px`,
                        top: `${5 + i * 12}%`,
                        left: `${-5 + (i % 4) * 30}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: `${3 + (i % 3)}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="w-8 h-8 theme-accent" />
        </div>
      </section>

      {/* ═══════════ CONTENT SECTIONS ═══════════ */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        {/* ─── Skills Section ─── */}
        <section className="py-20 relative">
          <h2 className="text-4xl font-bold text-center theme-text-primary mb-12 animate-fade-in-up">
            Skills & Technologies
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={category}
                className="resume-skill-group hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="resume-skill-icon-wrap">
                    <SkillIcon category={category} />
                  </div>
                  <h3 className="text-base font-bold theme-text-primary">
                    {categoryLabel(category)}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="resume-skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Experience Section ─── */}
        <section className="py-20 relative">
          <h2 className="text-4xl font-bold text-center theme-text-primary mb-12 animate-fade-in-up">
            Experience
          </h2>
          <div className="resume-timeline">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="resume-timeline-item"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="resume-timeline-dot"></div>
                <div className="resume-timeline-content hover:scale-[1.01]">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold resume-exp-title">{exp.title}</h3>
                      <p className="text-lg font-semibold theme-text-primary">{exp.company}</p>
                    </div>
                    <div className="sm:text-right flex-shrink-0">
                      <span className="resume-period-badge">{exp.period}</span>
                      <p className="theme-text-muted text-sm mt-1">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="resume-bullet-item">
                        <span className="resume-bullet-dot"></span>
                        <span className="theme-text-secondary text-sm leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Education Section ─── */}
        <section className="py-20 relative">
          <h2 className="text-4xl font-bold text-center theme-text-primary mb-12 animate-fade-in-up">
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="resume-edu-card hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-bold resume-exp-title mb-1">{edu.degree}</h3>
                <p className="theme-text-primary text-base font-medium mb-3">{edu.school}</p>
                <div className="flex items-center gap-3">
                  <span className="resume-gpa-badge">GPA: {edu.gpa}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Projects Section ─── */}
        <section className="py-20 relative">
          <h2 className="text-4xl font-bold text-center theme-text-primary mb-12 animate-fade-in-up">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="resume-project-card hover:scale-[1.03]"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <h3 className="text-xl font-bold resume-exp-title mb-3">{project.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="resume-tech-tag">{t}</span>
                  ))}
                </div>
                <p className="theme-text-secondary text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex gap-3 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
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
        </section>

      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t backdrop-blur-xl transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center">
          <p className="theme-text-muted">
            © 2026 Lakshay Mittal. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-left { animation: slide-in-left 1s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 1s ease-out; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delay-1 { animation: float 3s ease-in-out infinite 0.5s; }
        .animate-float-delay-2 { animation: float 3s ease-in-out infinite 1s; }
        .animate-float-delay-3 { animation: float 3s ease-in-out infinite 1.5s; }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow { animation: spin-slow 25s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 20s linear infinite; }

        .animate-fade-in-up { animation: resume-fade-up 1s ease-out; }
      `}</style>
    </div>
  );
};

export default ResumePage;
