import React, { useState } from 'react';
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Github,
  MessageSquare,
  ArrowUpRight,
  Cpu,
  Code,
  Sparkles,
  Database,
  Globe,
  Menu,
  X,
  Mail,
  CheckCircle,
  ExternalLink,
  TrendingUp,
  Award,
  Zap,
  Layers,
  Settings,
  ShieldAlert
} from 'lucide-react';
import patrikImg from "./assets/patrik.jpeg";
import describvideo from "./assets/describ.mp4";
import psicologabVideo from "./assets/psicologa.mp4";
interface HighlightItem {
  id: string;
  name: string;
  category: string;
  desc: string;
}

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeToast, setActiveToast] = useState<string | null>(null);
  const [selectedHighlight, setSelectedHighlight] = useState<HighlightItem | null>(null);
  const [activeProjectTab, setActiveProjectTab] = useState<'all' | 'fullstack' | 'freelancer'>('all');

  // Highlights Data
  const highlightsList: HighlightItem[] = [
    {
      id: 'react-ts',
      name: 'React & TypeScript',
      category: 'Front-End',
      desc: 'Interfaces dinâmicas com tipagem estática forte, prevenindo bugs e assegurando altíssima escalabilidade.'
    },
    {
      id: 'fullstack',
      name: 'Full Stack Development',
      category: 'Estrutura',
      desc: 'Desenvolvimento unificado que conecta o front-end ao back-end de forma fluida e resiliente.'
    },
    {
      id: 'ia',
      name: 'IA Generativa',
      category: 'Inovação',
      desc: 'Integração inteligente com LLMs e autômatos cognitivos para enriquecer e automatizar a jornada do usuário.'
    },
    {
      id: 'rest-api',
      name: 'APIs REST',
      category: 'Comunicação',
      desc: 'Arquiteturas de integração robustas, seguras, bem modeladas e documentadas com ótimo throughput.'
    },
    {
      id: 'performance',
      name: 'Performance Web',
      category: 'Métricas',
      desc: 'Otimização profunda de carregamento, renderização e menor consumo de banda focados no sucesso do produto.'
    },
    {
      id: 'seo-ux',
      name: 'SEO & UX/UI',
      category: 'Design',
      desc: 'Alinhamento visual estratégico e indexação otimizada para impulsionar conversões e engajamento orgânico.'
    }
  ];

  const triggerToast = (message: string) => {
    setActiveToast(message);
    setTimeout(() => {
      setActiveToast((current) => (current === message ? null : current));
    }, 4500);
  };

  const scrollToSection = (id: string, event?: React.MouseEvent) => {
    if (event) event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -72; // Height of fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleExternalLink = (platform: string, url: string, event: React.MouseEvent) => {
    event.preventDefault();
    triggerToast(`Redirecionando para o perfil no ${platform}...`);
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 800);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#030303' }}>


      <header className="navbar-header" id="nav-header">
        <div className="container navbar-container">
          {/* Logo */}
          <a href="#" className="logo-link" onClick={(e) => scrollToSection('home', e)}>

            <span>Patrik<span style={{ color: 'var(--brand-primary)' }}>.</span>Magalhães</span>
          </a>

          {/* Nav Navigation Links */}
          <nav>
            <ul className="nav-links">
              <li>
                <a href="#home" className="nav-item-link" onClick={(e) => scrollToSection('home', e)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre" className="nav-item-link" onClick={(e) => scrollToSection('sobre', e)}>
                  Sobre
                </a>
              </li>
              <li>
                <a href="#projetos" className="nav-item-link" onClick={(e) => scrollToSection('projetos', e)}>
                  Projetos
                </a>
              </li>
              <li>
                <a href="#experiencia" className="nav-item-link" onClick={(e) => scrollToSection('experiencia', e)}>
                  Experiência
                </a>
              </li>
              <li>
                <a href="#tecnologias" className="nav-item-link" onClick={(e) => scrollToSection('tecnologias', e)}>
                  Tecnologias
                </a>
              </li>
              <li>
                <a href="#contato" className="nav-item-link" onClick={(e) => scrollToSection('contato', e)}>
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          {/* CTA Group */}
          <div className="nav-ctas">
            <a
              href="https://github.com/Patrikmagalhaes"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-dark btn-desktop"
              style={{ padding: '0.5rem 1rem' }}
              onClick={(e) => handleExternalLink('GitHub', 'https://github.com/Patrikmagalhaes', e)}
              id="nav-cta-github"
            >
              <Github size={16} />
              <span>Ver GitHub</span>
            </a>

            <button
              className="btn btn-primary btn-desktop"
              style={{ padding: '0.5rem 1.15rem' }}
              onClick={() => setIsContactModalOpen(true)}
              id="nav-cta-conversar"
            >
              <MessageSquare size={16} />
              <span>Vamos Conversar</span>
            </button>

            {/* Mobile Nav Menu Toggle */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Alternar menu"
              id="mobile-nav-toggle"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-overlay-menu" id="mobile-drawer">
            <ul className="mobile-menu-links">
              <li>
                <a
                  href="#home"
                  className="mobile-menu-link"
                  onClick={(e) => scrollToSection('home', e)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="mobile-menu-link"
                  onClick={(e) => scrollToSection('sobre', e)}
                >
                  Sobre Mim
                </a>
              </li>
              <li>
                <a
                  href="#projetos"
                  className="mobile-menu-link"
                  onClick={(e) => scrollToSection('projetos', e)}
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#experiencia"
                  className="mobile-menu-link"
                  onClick={(e) => scrollToSection('experiencia', e)}
                >
                  Experiência
                </a>
              </li>
              <li>
                <a
                  href="#tecnologias"
                  className="mobile-menu-link"
                  onClick={(e) => scrollToSection('tecnologias', e)}
                >
                  Tecnologias
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="mobile-menu-link"
                  onClick={(e) => scrollToSection('contato', e)}
                >
                  Contato
                </a>
              </li>
            </ul>

            <div className="mobile-menu-ctas">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsContactModalOpen(true);
                }}
              >
                <MessageSquare size={16} />
                <span>Vamos Conversar</span>
              </button>

              <a
                href="https://github.com/Patrikmagalhaes"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark"
                style={{ justifyContent: 'center' }}
                onClick={(e) => handleExternalLink('GitHub', 'https://github.com/Patrikmagalhaes', e)}
              >
                <Github size={16} />
                <span>Ver GitHub</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Container */}
      <main style={{ flex: '1 0 auto' }}>

        {/* 2. Hero Section */}
        <section className="hero-wrapper" id="home">
          {/* Background Gradient & Blobs */}
          <div className="hero-grid-bg"></div>
          <div className="hero-glow-blob"></div>
          <div className="hero-glow-blob-2"></div>

          <div className="container hero-container">
            <div className="hero-layout">

              {/* Left Side Content Column */}
              <div className="hero-content">
                {/* Active Focus Capsule */}
                <div className="status-capsule">
                  <span className="pulse-dot" style={{ backgroundColor: '#10b981', boxShadow: '0 0 8px #10b981' }}></span>
                  <span>Disponível para estágio em desenvolvimento</span>
                </div>

                {/* Primary Headline */}
                <h1 className="title-main">
                  Desenvolvedor Front-End construindo aplicações modernas com React, TypeScript e Node.js
                </h1>

                {/* Subheadline Copy */}
                <p className="title-subline">
                  Experiência prática em projetos full stack, integrações com APIs e automações, com foco em performance, arquitetura frontend e experiência do usuário.
                </p>

                {/* Main Hero Call To Action Buttons */}
                <div className="hero-actions-container">
                  <button
                    className="btn btn-primary btn-large"
                    onClick={(e) => scrollToSection('projetos', e)}
                    id="hero-cta-projects"
                  >
                    <span>Ver Projetos</span>
                    <ArrowUpRight size={18} />
                  </button>

                  <a
                    href="https://github.com/Patrikmagalhaes"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-dark btn-large"
                    style={{ textDecoration: 'none' }}
                    onClick={(e) => handleExternalLink('GitHub', 'https://github.com/Patrikmagalhaes', e)}
                    id="hero-cta-github"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                </div>

                {/* Left Side Mini Stack */}
                <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.725rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#a1a1aa' }}>Mini Stack</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', rowGap: '0.4rem', columnGap: '0.75rem', alignItems: 'center' }}>
                    {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'APIs REST'].map((tech, i) => (
                      <React.Fragment key={tech}>
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ffffff' }}>{tech}</span>
                        {i < 4 && <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.75rem' }}>•</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side Visual Information Card */}
              <div className="hero-visual">
                <div id="hero-info-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%' }}>

                  {/* Layout de Arquitetura de Software */}
                  <div style={{
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '1.25rem',
                    overflow: 'hidden',
                    background: '#09090b',
                    boxShadow: '0 20px 45px rgba(0, 0, 0, 0.65)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                    padding: '1.85rem'
                  }}>
                    {/* Barra de Janela Estilo Dev */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingBottom: '0.85rem',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
                    }}>
                      <div style={{ display: 'flex', gap: '0.35rem' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444' }}></span>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#eab308' }}></span>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e' }}></span>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: '#71717a', letterSpacing: '0.05em' }}>arquitetura_fullstack.json</span>
                      <div style={{ width: '32px' }}></div>
                    </div>

                    {/* Bloco 1: Frontend */}
                    <div style={{
                      background: 'rgba(59, 130, 246, 0.02)',
                      border: '1px solid rgba(59, 130, 246, 0.12)',
                      borderRadius: '0.75rem',
                      padding: '0.85rem 1.15rem',
                      position: 'relative'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: 'rgba(59, 130, 246, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#3b82f6'
                        }}>
                          <Code size={16} />
                        </div>
                        <div style={{ flexGrow: 1 }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#3b82f6', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>CAMADA CLIENTE</span>
                          <h4 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>Frontend (SPA / Web Responsiva)</h4>
                          <span style={{ fontSize: '0.725rem', color: '#a1a1aa' }}>React • TypeScript • Tailwind CSS</span>
                        </div>
                      </div>
                    </div>

                    {/* Pipeline de Comunicação (Front -> Back) */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.25rem',
                      margin: '-0.25rem 0'
                    }}>
                      <div style={{ height: '20px', width: '2px', background: 'linear-gradient(180deg, #3b82f6, #a855f7)', position: 'relative' }}>
                        <span style={{
                          position: 'absolute',
                          top: '55%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: '#a855f7',
                          boxShadow: '0 0 8px #a855f7',
                          animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite'
                        }}></span>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#71717a', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                        REQUISIÇÕES REST API / HTTP / JSON
                      </span>
                    </div>

                    {/* Bloco 2: Backend */}
                    <div style={{
                      background: 'rgba(168, 85, 247, 0.02)',
                      border: '1px solid rgba(168, 85, 247, 0.12)',
                      borderRadius: '0.75rem',
                      padding: '0.85rem 1.15rem',
                      position: 'relative'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: 'rgba(168, 85, 247, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#a855f7'
                        }}>
                          <Cpu size={16} />
                        </div>
                        <div style={{ flexGrow: 1 }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#a855f7', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>PROCESSAMENTO / NEGÓCIO</span>
                          <h4 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>Backend Server (API RESTful)</h4>
                          <span style={{ fontSize: '0.725rem', color: '#a1a1aa' }}>Node.js • Express • Autenticação / Segurança</span>
                        </div>
                      </div>
                    </div>

                    {/* Pipeline de Persistência (Back -> DB) */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.25rem',
                      margin: '-0.25rem 0'
                    }}>
                      <div style={{ height: '20px', width: '2px', background: 'linear-gradient(180deg, #a855f7, #10b981)', position: 'relative' }}>
                        <span style={{
                          position: 'absolute',
                          top: '55%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: '#10b981',
                          boxShadow: '0 0 8px #10b981',
                          animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite'
                        }}></span>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#71717a', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                        PRISMA ORM / MAPEAMENTO DE DADOS
                      </span>
                    </div>

                    {/* Bloco 3: Banco de dados */}
                    <div style={{
                      background: 'rgba(16, 185, 129, 0.02)',
                      border: '1px solid rgba(16, 185, 129, 0.12)',
                      borderRadius: '0.75rem',
                      padding: '0.85rem 1.15rem',
                      position: 'relative'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: 'rgba(16, 185, 129, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#10b981'
                        }}>
                          <Database size={16} />
                        </div>
                        <div style={{ flexGrow: 1 }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#10b981', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>PERSISTÊNCIA RELACIONAL</span>
                          <h4 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>Banco de Dados</h4>
                          <span style={{ fontSize: '0.725rem', color: '#a1a1aa' }}>PostgreSQL • Estruturação • Relacionamentos</span>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 3. Seção — Sobre Mim */}
        <section className="section-padding" id="sobre">
          <div className="container">
            <div className="sobre-grid">

              <div className="sobre-info">
                <span className="section-badge">Biografia</span>
                <h2 className="section-title">Sobre Mim</h2>

                <p className="sobre-text" style={{ marginTop: '1rem' }}>
                  Sou desenvolvedor Front-End com experiência na construção de aplicações modernas utilizando React, TypeScript e Node.js.
                </p>
                <p className="sobre-text">
                  Tenho interesse em arquitetura de software, performance web, integrações com APIs e desenvolvimento de interfaces bem estruturadas e escaláveis.
                </p>
                <p className="sobre-text">
                  Atualmente curso Ciência da Computação e desenvolvo projetos full stack envolvendo automações, IA generativa e aplicações voltadas para otimização de processos e experiência do usuário.
                </p>
                <p className="sobre-text">
                  Busco constantemente evoluir minhas habilidades técnicas através de projetos práticos, aplicando boas práticas de desenvolvimento, organização de código e resolução de problemas.
                </p>
              </div>

              <div className="sobre-visual" style={{
                position: 'relative', maxWidth: '550px',
                width: '100%'
              }}>
                <div style={{
                  position: 'relative',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  border: '1px solid var(--border-color)',
                  background: 'rgba(255, 255, 255, 0.01)',
                  aspectRatio: '4/3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                  aspectRatio: '3/4',
                }}>
                  {/* Decorative modern grid overlays & glows */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), transparent 70%)',
                    zIndex: 1
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--brand-primary)',
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    zIndex: 2
                  }}>
                    Foto de Perfil
                  </div>

                  {/* Placeholder developer image with great lighting */}
                  <img
                    src={patrikImg}
                    alt="Espaço da foto profissional de Patrik Magalhães"
                    referrerPolicy="no-referrer"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.82,
                      filter: 'grayscale(35%) contrast(110%) brightness(85%)'
                    }}
                  />

                  {/* Code frame status bar at bottom */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(180deg, transparent, rgba(3, 3, 3, 0.95))',
                    padding: '1.25rem',
                    zIndex: 2,
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block', boxShadow: '0 0 8px #10b981' }}></span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#a1a1aa' }}>
                        patrikmagalhaes_profile.jpg
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>



        {/* 6. Seção — Projetos em Destaque */}
        <section className="section-padding" id="projetos">
          <div className="container">

            <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div>
                <span className="section-badge font-mono">Destaques</span>
                <h2 className="section-title">Projetos em Destaque</h2>
                <p className="section-subtitle">Casos reais e aplicações concebidas de ponta a ponta.</p>
              </div>

              {/* Filtering Controls */}
              <div style={{ display: 'flex', gap: '0.5rem', backgroundColor: 'rgba(255,255,255,0.02)', padding: '0.35rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }}>
                <button
                  className="btn"
                  style={{
                    padding: '0.35rem 0.85rem',
                    borderRadius: '0.375rem',
                    fontSize: '0.75rem',
                    textTransform: 'none',
                    backgroundColor: activeProjectTab === 'all' ? 'var(--brand-primary)' : 'transparent',
                    color: activeProjectTab === 'all' ? '#ffffff' : '#a1a1aa'
                  }}
                  onClick={() => setActiveProjectTab('all')}
                >
                  Todos
                </button>
                <button
                  className="btn"
                  style={{
                    padding: '0.35rem 0.85rem',
                    borderRadius: '0.375rem',
                    fontSize: '0.75rem',
                    textTransform: 'none',
                    backgroundColor: activeProjectTab === 'fullstack' ? 'var(--brand-primary)' : 'transparent',
                    color: activeProjectTab === 'fullstack' ? '#ffffff' : '#a1a1aa'
                  }}
                  onClick={() => setActiveProjectTab('fullstack')}
                >
                  Full Stack / IA
                </button>
                <button
                  className="btn"
                  style={{
                    padding: '0.35rem 0.85rem',
                    borderRadius: '0.375rem',
                    fontSize: '0.75rem',
                    textTransform: 'none',
                    backgroundColor: activeProjectTab === 'freelancer' ? 'var(--brand-primary)' : 'transparent',
                    color: activeProjectTab === 'freelancer' ? '#ffffff' : '#a1a1aa'
                  }}
                  onClick={() => setActiveProjectTab('freelancer')}
                >
                  Web Design / SEO
                </button>
              </div>
            </div>

            <div className="projects-vertical-list">
              {/* Project 1 — DescribAi */}
              {(activeProjectTab === 'all' || activeProjectTab === 'fullstack') && (
                <div style={{ maxHeight: '700px' }} className="project-row-card">
                  {/* LEFT: Image / Simulation Area (44%) */}
                  <div style={{
                    maxHeight: '700px',
                    overflow: 'hidden'
                  }} className="project-row-media">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '1rem'
                      }}
                    >
                      <source src={describvideo} type="video/mp4" />
                      Seu navegador não suporta vídeo.
                    </video>
                  </div>

                  {/* RIGHT: Content (56%) */}
                  <div className="project-row-info">
                    {/* 1. Category */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="project-category" style={{ letterSpacing: '0.08em', fontSize: '0.65rem', fontWeight: 700 }}>
                        Full Stack • IA Generativa
                      </span>
                    </div>

                    {/* 2. Title */}
                    <h3 className="project-title" style={{ margin: 0, fontSize: '1.85rem' }}>DescribAi</h3>

                    {/* 3. Descrição Curta */}
                    <p className="project-desc-short" style={{ margin: 0 }}>
                      Aplicação full stack desenvolvida para automatizar a geração inteligente de descrições de imagens utilizando IA generativa.
                    </p>

                    {/* 4. Highlights */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {[
                        'Integração com Gemini API para processamento inteligente de imagens',
                        'Arquitetura frontend + backend desacoplada',
                        'Upload e geração dinâmica de conteúdo automatizada',
                        'Persistência de dados com Prisma ORM e PostgreSQL',
                        'Deploy cloud utilizando Vercel e Render'
                      ].map((hl) => (
                        <div key={hl} style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', fontSize: '0.875rem', color: '#a1a1aa', lineHeight: 1.4 }}>
                          <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* 5. Resultados */}
                    <div className="result-badge-display">
                      <div className="result-badge-value">70% ↓</div>
                      <div className="result-badge-desc">redução em etapas manuais de processamento</div>
                    </div>

                    {/* 6. Stack */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.25rem' }}>
                      {[
                        'React', 'TypeScript', 'Node.js', 'Prisma ORM', 'PostgreSQL', 'Gemini API', 'Vercel', 'Render'
                      ].map((st) => (
                        <span key={st} style={{
                          fontSize: '0.725rem',
                          fontFamily: 'var(--font-mono)',
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.05)',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '4px',
                          color: '#d4d4d8'
                        }}>{st}</span>
                      ))}
                    </div>

                    {/* 7. CTA / Micro-info Row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.25rem', marginTop: 'auto' }}>
                      <div className="project-actions">
                        <a
                          href="https://describai-frontend.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                          style={{ fontSize: '0.75rem', padding: '0.5rem 1rem' }}
                        >
                          <Globe size={14} />
                          <span>Ver Projeto</span>
                        </a>
                        <a
                          href="https://github.com/Patrikmagalhaes"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-dark"
                          style={{ fontSize: '0.75rem', padding: '0.5rem 1rem' }}
                          onClick={() => triggerToast('Redirecionando para o repositório do código fonte...')}
                        >
                          <Github size={14} />
                          <span>Ver Código</span>
                        </a>
                      </div>

                      {/* Micro info */}
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }}></span>
                          <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-mono)', color: '#71717a' }}>API • ONLINE</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'inline-block' }}></span>
                          <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-mono)', color: '#71717a' }}>IA • ACTIVE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Project 2 — Landing Page Psicóloga */}
              {(activeProjectTab === 'all' || activeProjectTab === 'freelancer') && (
                <div className="project-row-card">
                  {/* LEFT: Image / Simulation Area (44%) */}
                  <div style={{
                    maxHeight: '700px',
                    overflow: 'hidden'
                  }} className="project-row-media">



                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '1rem'
                      }}
                    >
                      <source src={psicologabVideo} type="video/mp4" />
                      Seu navegador não suporta vídeo.
                    </video>


                    {/* Extra SEO/Performance Tech Score Overlay */}
                    <div style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      right: '0.75rem',
                      background: '#18181b',
                      border: '1px solid #27272a',
                      borderRadius: '0.5rem',
                      padding: '0.4rem 0.65rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      boxShadow: '0 10px 15px rgba(0,0,0,0.3)',
                      zIndex: 10
                    }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.55rem', color: '#71717a', fontWeight: 'bold' }}>LIGHTHOUSE</span>
                        <span style={{ fontSize: '0.8rem', color: '#22c55e', fontWeight: '800' }}>100/100</span>
                      </div>
                    </div>

                  </div>

                  {/* RIGHT: Content (56%) */}
                  <div className="project-row-info">
                    {/* 1. Category */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="project-category" style={{ letterSpacing: '0.08em', fontSize: '0.65rem', fontWeight: 700 }}>
                        Web Design • SEO • Responsividade
                      </span>
                    </div>

                    {/* 2. Title */}
                    <h3 className="project-title" style={{ margin: 0, fontSize: '1.85rem' }}>Landing Page para Psicóloga</h3>

                    {/* 3. Descrição Curta */}
                    <p className="project-desc-short" style={{ margin: 0 }}>
                      Landing page responsiva desenvolvida para fortalecer presença digital, melhorar experiência do usuário e otimizar posicionamento orgânico.
                    </p>

                    {/* 4. Highlights */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {[
                        'Estrutura otimizada para SEO técnico',
                        'Layout responsivo para dispositivos móveis',
                        'Melhor experiência de navegação e usabilidade',
                        'Arquitetura visual focada em clareza e performance',
                        'Desenvolvimento personalizado em WordPress'
                      ].map((hl) => (
                        <div key={hl} style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', fontSize: '0.875rem', color: '#a1a1aa', lineHeight: 1.4 }}>
                          <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* 5. Resultados */}
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <div className="result-badge-display" style={{ flex: '1 1 200px' }}>
                        <div className="result-badge-value">SEO ↑</div>
                        <div className="result-badge-desc">estrutura otimizada para mecanismos de busca</div>
                      </div>
                      <div className="result-badge-display" style={{ flex: '1 1 200px' }}>
                        <div className="result-badge-value">UX ↑</div>
                        <div className="result-badge-desc">experiência fluida em desktop e mobile</div>
                      </div>
                    </div>

                    {/* 6. Stack */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.25rem' }}>
                      {[
                        'WordPress', 'SEO', 'UX/UI', 'Responsive Design'
                      ].map((st) => (
                        <span key={st} style={{
                          fontSize: '0.725rem',
                          fontFamily: 'var(--font-mono)',
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.05)',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '4px',
                          color: '#d4d4d8'
                        }}>{st}</span>
                      ))}
                    </div>

                    {/* 7. CTA / Micro-info Row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.25rem', marginTop: 'auto' }}>
                      <div className="project-actions">
                        <a
                          href="https://milenativeron.com.br/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                          style={{ fontSize: '0.75rem', padding: '0.5rem 1rem' }}
                        >
                          <Globe size={14} />
                          <span>Ver Projeto</span>
                        </a>
                      </div>

                      {/* Micro info */}
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }}></span>
                          <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-mono)', color: '#71717a' }}>LIGHTHOUSE • OPTIMIZED</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'inline-block' }}></span>
                          <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-mono)', color: '#71717a' }}>SEO • ACTIVE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* 5. Seção — Stack Tecnológica */}
        <section className="section-padding" id="tecnologias">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Arquiteturas e Stacks</span>
              <h2 className="section-title">Tecnologias & Ferramentas</h2>
              <p className="section-subtitle">Tecnologias e fundamentos que utilizo para construir aplicações modernas com foco em performance, escalabilidade e experiência do usuário.</p>
            </div>

            <div className="stacks-grid">
              {/* Row 1 - Frontend */}
              <div className="stack-category-row">
                <div className="stack-cat-title">
                  <Code size={18} style={{ color: 'var(--brand-primary)' }} />
                  <span>Frontend</span>
                </div>
                <div className="stack-badges-container">
                  {['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Styled-Components', 'Vite'].map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Row 2 - Backend */}
              <div className="stack-category-row">
                <div className="stack-cat-title">
                  <Settings size={18} style={{ color: 'var(--brand-primary)' }} />
                  <span>Backend</span>
                </div>
                <div className="stack-badges-container">
                  {['Node.js', 'Express'].map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Row 3 - Banco de Dados */}
              <div className="stack-category-row">
                <div className="stack-cat-title">
                  <Database size={18} style={{ color: 'var(--brand-primary)' }} />
                  <span>Banco de Dados</span>
                </div>
                <div className="stack-badges-container">
                  {['PostgreSQL', 'MongoDB', 'Prisma ORM'].map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Row 4 - IA & Automação */}
              <div className="stack-category-row">
                <div className="stack-cat-title">
                  <Sparkles size={18} style={{ color: 'var(--brand-primary)' }} />
                  <span>IA & Automação</span>
                </div>
                <div className="stack-badges-container">
                  {['Gemini API', 'Python', 'n8n', 'APIs REST'].map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Row 5 - Ferramentas */}
              <div className="stack-category-row">
                <div className="stack-cat-title">
                  <Globe size={18} style={{ color: 'var(--brand-primary)' }} />
                  <span>Ferramentas</span>
                </div>
                <div className="stack-badges-container">
                  {['Git', 'GitHub', 'Vercel', 'Render', 'WordPress'].map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Row 6 - Conceitos */}
              <div className="stack-category-row">
                <div className="stack-cat-title">
                  <Cpu size={18} style={{ color: 'var(--brand-primary)' }} />
                  <span>Conceitos</span>
                </div>
                <div className="stack-badges-container">
                  {['SEO', 'Performance Web', 'UX/UI', 'Responsividade', 'Clean Code', 'Componentização'].map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Seção — Experiência Profissional */}
        <section className="section-padding" id="experiencia">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Jornada & Experiência</span>
              <h2 className="section-title">Experiência Profissional</h2>
              <p className="section-subtitle">
                Experiência prática em desenvolvimento de aplicações, automações e construção de soluções voltadas à eficiência operacional e experiência do usuário.
              </p>
            </div>

            <div className="timeline-container">
              {/* Item 1 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <div className="timeline-header">
                    <div className="timeline-title-group">
                      <h3 className="timeline-role">Desenvolvedor Full Stack</h3>
                      <span className="timeline-company">DescribAi — Plataforma Full Stack com IA Generativa</span>
                    </div>
                    <span className="timeline-date">05/2026 — Atual</span>
                  </div>
                  <ul className="timeline-bullets">
                    <li className="timeline-bullet">
                      Desenvolvimento completo de aplicação full stack utilizando React, TypeScript e Node.js
                    </li>
                    <li className="timeline-bullet">
                      Integração com Gemini API para processamento inteligente de imagens e geração dinâmica de conteúdo
                    </li>
                    <li className="timeline-bullet">
                      Estruturação de arquitetura frontend + backend com foco em escalabilidade e organização de código
                    </li>
                    <li className="timeline-bullet">
                      Modelagem e persistência de dados utilizando Prisma ORM e banco de dados relacional
                    </li>
                    <li className="timeline-bullet font-medium">
                      Implementação de deploy e infraestrutura cloud utilizando Vercel e Render
                    </li>
                    <li className="timeline-bullet">
                      Otimização do fluxo de upload e processamento de imagens, reduzindo etapas manuais em aproximadamente 70%
                    </li>
                    <li className="timeline-bullet">
                      Desenvolvimento de interfaces responsivas focadas em usabilidade, performance e experiência do usuário
                    </li>
                  </ul>
                </div>
              </div>

              {/* Item 4 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <div className="timeline-header">
                    <div className="timeline-title-group">
                      <h3 className="timeline-role">Auxiliar Administrativo</h3>
                      <span className="timeline-company">Núcleo Colaborativo de Arquitetura e Design — São José, SC</span>
                    </div>
                    <span className="timeline-date">2025 — 2026</span>
                  </div>
                  <ul className="timeline-bullets">
                    <li className="timeline-bullet">
                      Suporte às rotinas administrativas e operacionais da organização
                    </li>
                    <li className="timeline-bullet">
                      Organização de documentos, planilhas e informações internas para melhoria de fluxo operacional
                    </li>
                    <li className="timeline-bullet">
                      Participação em reuniões de alinhamento e acompanhamento de demandas
                    </li>
                    <li className="timeline-bullet">
                      Atendimento e suporte a associados na resolução de solicitações internas
                    </li>
                    <li className="timeline-bullet">
                      Controle de arquivos, organização de informações e gestão de estoque de insumos
                    </li>
                  </ul>
                </div>
              </div>

              {/* Item 2 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <div className="timeline-header">
                    <div className="timeline-title-group">
                      <h3 className="timeline-role">Desenvolvedor Web Freelancer</h3>
                      <span className="timeline-company">Landing Pages & Projetos Web</span>
                    </div>
                    <span className="timeline-date">2025</span>
                  </div>
                  <ul className="timeline-bullets">
                    <li className="timeline-bullet">
                      Desenvolvimento de landing pages responsivas com foco em performance e experiência do usuário
                    </li>
                    <li className="timeline-bullet">
                      Estruturação de interfaces otimizadas para SEO e melhor posicionamento orgânico
                    </li>
                    <li className="timeline-bullet">
                      Implementação de layouts modernos adaptados para desktop e dispositivos móveis
                    </li>
                    <li className="timeline-bullet">
                      Personalização visual alinhada à identidade e necessidade de cada projeto
                    </li>
                    <li className="timeline-bullet font-medium">
                      Aplicação de boas práticas de usabilidade, responsividade e organização visual
                    </li>
                  </ul>
                </div>
              </div>





              {/* Item 3 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <div className="timeline-header">
                    <div className="timeline-title-group">
                      <h3 className="timeline-role">Auxiliar Administrativo</h3>
                      <span className="timeline-company">Sterilab — São José, SC</span>
                    </div>
                    <span className="timeline-date">2023 — 2025</span>
                  </div>
                  <ul className="timeline-bullets">
                    <li className="timeline-bullet">
                      Desenvolvimento de automações internas utilizando Python para otimização de processos operacionais
                    </li>
                    <li className="timeline-bullet font-medium">
                      Automação de fluxo de agendamentos, reduzindo tempo operacional e aumentando eficiência da equipe
                    </li>
                    <li className="timeline-bullet">
                      Implementação de automação para programação de impressora utilizada nos processos internos
                    </li>
                    <li className="timeline-bullet">
                      Participação na melhoria e organização de fluxos administrativos e operacionais
                    </li>
                    <li className="timeline-bullet">
                      Suporte às demandas administrativas da área e acompanhamento de processos internos
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 8. Seção — Formação Acadêmica */}
        <section className="section-padding" id="formacao">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Educação</span>
              <h2 className="section-title">Formação Acadêmica</h2>
              <p className="section-subtitle">Minhas bases metodológicas de aprendizado regular e especializações práticas.</p>
            </div>

            <div className="education-grid">
              {/* Item 1 */}
              <div className="edu-card">
                <h3 className="edu-title">Bacharelado em Ciência da Computação</h3>
                <p className="edu-institution">Cruzeiro do Sul</p>
                <p className="edu-period">2025 — 2029</p>
                <p className="edu-desc">
                  Formação teórica e analítica pesada com foco no desenvolvimento conceitual de software, arquitetura robusta de sistemas modernos de computação, banco de dados complexos, estruturas lógicas e princípios rigorosos de engenharia de software aplicados a negócios.
                </p>
              </div>

              {/* Item 2 */}
              <div className="edu-card">
                <h3 className="edu-title">Técnico em Desenvolvimento de Sistemas</h3>
                <p className="edu-institution">SENAI São José</p>
                <p className="edu-period">2022 — 2024</p>
                <p className="edu-desc">
                  Capacitação imersiva e prática focada em lógica avançada de programação estruturada, desenvolvimento de websites altamente interológicos, bancos de dados dinâmicos relacional, usabilidades modernas, e metodologias ágeis utilizadas pelo mercado corporativo tecnológico.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Seção — Diferenciais (O que me diferencia) */}
        <section className="section-padding" id="diferenciais">
          <div className="container">
            <div className="section-header" style={{ textAlign: 'center' }}>
              <span className="section-badge">PRINCÍPIOS DE DESENVOLVIMENTO</span>
              <h2 className="section-title">Diferenciais Técnicos & Profissionais</h2>
              <p className="section-subtitle" style={{ margin: '0.5rem auto 0 auto' }}>Práticas e características que direcionam minha atuação no desenvolvimento de aplicações modernas, organizadas e focadas em resolver problemas reais.</p>
            </div>

            <div className="diferenciais-grid">
              {/* Card 1 */}
              <div className="dif-card">
                <div className="dif-icon-container">
                  <Cpu size={22} />
                </div>
                <h3 className="dif-title">Capacidade de transformar requisitos em soluções funcionais e escaláveis</h3>
              </div>

              {/* Card 2 */}
              <div className="dif-card">
                <div className="dif-icon-container">
                  <Sparkles size={22} />
                </div>
                <h3 className="dif-title">Experiência prática com integrações de IA e automação de processos</h3>
              </div>

              {/* Card 3 */}
              <div className="dif-card">
                <div className="dif-icon-container">
                  <TrendingUp size={22} />
                </div>
                <h3 className="dif-title">Desenvolvimento focado em performance, organização e usabilidade</h3>
              </div>

              {/* Card 4 */}
              <div className="dif-card">
                <div className="dif-icon-container">
                  <MessageSquare size={22} />
                </div>
                <h3 className="dif-title">Boa comunicação e facilidade para trabalho em equipe</h3>
              </div>

              {/* Card 5 */}
              <div className="dif-card">
                <div className="dif-icon-container">
                  <Layers size={22} />
                </div>
                <h3 className="dif-title">Aplicação de boas práticas de desenvolvimento e Clean Code</h3>
              </div>

              {/* Card 6 */}
              <div className="dif-card">
                <div className="dif-icon-container">
                  <Code size={22} />
                </div>
                <h3 className="dif-title">Construção de interfaces modernas com foco em experiência do usuário</h3>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Seção — Objetivo Profissional */}
        <section className="section-padding" style={{ borderBottom: 'none', paddingBottom: '3rem' }} id="contato">
          <div className="container">
            <div className="cta-final-box">
              <h2 className="cta-final-heading">Objetivo Profissional</h2>

              <p className="cta-final-text">
                Busco uma oportunidade de estágio em desenvolvimento de software para evoluir tecnicamente, contribuir em projetos reais e aprofundar meus conhecimentos em desenvolvimento web, arquitetura de sistemas e engenharia de software.
              </p>

              <div className="cta-final-actions">
                <button
                  className="btn btn-primary"
                  style={{ padding: '0.875rem 1.75rem', fontSize: '0.875rem' }}
                  onClick={() => setIsContactModalOpen(true)}
                  id="final-cta-contact"
                >
                  <MessageSquare size={16} />
                  <span>Entrar em Contato</span>
                </button>

                <a
                  href="https://github.com/Patrikmagalhaes"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark"
                  style={{ padding: '0.875rem 1.75rem', fontSize: '0.875rem' }}
                  onClick={(e) => handleExternalLink('GitHub', 'https://github.com/Patrikmagalhaes', e)}
                >
                  <Github size={16} />
                  <span>Ver GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/patrikmagalhaes/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark"
                  style={{ padding: '0.875rem 1.75rem', fontSize: '0.875rem' }}
                  onClick={(e) => handleExternalLink('LinkedIn', 'https://www.linkedin.com/in/patrikmagalhaes/', e)}
                >
                  <ExternalLink size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Styled Interactive Highlight Info Modal */}
      {selectedHighlight && (
        <div className="modal-backdrop" onClick={() => setSelectedHighlight(null)} style={{ padding: '1rem' }} id="highlight-info-modal">
          <div
            className="modal-content-card"
            onClick={(e) => e.stopPropagation()}
            style={{ Widtmaxh: '420px', borderTop: '4px solid var(--brand-primary)' }}
          >
            <div className="modal-header-section" style={{ padding: '1.25rem 1.5rem', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={16} style={{ color: 'var(--brand-primary)' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-primary)' }}>
                  {selectedHighlight.category}
                </span>
              </div>
              <button className="modal-close-btn" onClick={() => setSelectedHighlight(null)}>
                <X size={18} />
              </button>
            </div>

            <div className="modal-body-section" style={{ padding: '1.5rem' }}>
              <h4 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '0.75rem' }}>
                {selectedHighlight.name}
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {selectedHighlight.desc}
              </p>

              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  className="btn btn-primary"
                  style={{ fontSize: '0.8125rem', padding: '0.5rem 1rem' }}
                  onClick={() => setSelectedHighlight(null)}
                >
                  Fechar detalhe
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Conversar / Contato Modal Form/Dialogue */}
      {isContactModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsContactModalOpen(false)} id="contact-dialog">
          <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-section">
              <h3 className="modal-title">Vamos Conversar!</h3>
              <button
                className="modal-close-btn"
                onClick={() => setIsContactModalOpen(false)}
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body-section">
              <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Escolha a forma mais conveniente para falar sobre o seu projeto, tirar dúvidas ou discutir oportunidades de parceria.
              </p>

              <div className="conversation-options">
                {/* Whatsapp Link trigger */}
                <a
                  href="https://wa.me/5569999523234"
                  target="_blank"
                  rel="noreferrer"
                  className="option-card-anchor"
                  onClick={() => triggerToast('Redirecionando para o WhatsApp...')}
                >
                  <div className="option-card-icon">
                    <MessageSquare size={20} />
                  </div>
                  <div className="option-details">
                    <span className="option-title">WhatsApp</span>
                    <span className="option-desc">Mensagem instantânea para conversar agora</span>
                  </div>
                </a>

                {/* Email Option Card */}
                <a
                  href="mailto:patrikmagalhaes@icloud.com"
                  className="option-card-anchor"
                  onClick={() => triggerToast('Abrindo aplicativo de e-mail...')}
                >
                  <div className="option-card-icon">
                    <Mail size={20} />
                  </div>
                  <div className="option-details">
                    <span className="option-title">E-mail Corporativo</span>
                    <span className="option-desc">patrikmagalhaes@icloud.com</span>
                  </div>
                </a>

                {/* LinkedIn Option Card */}
                <a
                  href="https://www.linkedin.com/in/patrikmagalhaes/"
                  target="_blank"
                  rel="noreferrer"
                  className="option-card-anchor"
                  onClick={(e) => {
                    e.preventDefault();
                    triggerToast('Redirecionando para o perfil do LinkedIn...');
                    setTimeout(() => {
                      window.open('https://www.linkedin.com/in/patrikmagalhaes/', '_blank');
                    }, 800);
                  }}
                >
                  <div className="option-card-icon">
                    <ExternalLink size={20} />
                  </div>
                  <div className="option-details">
                    <span className="option-title">LinkedIn Profissional</span>
                    <span className="option-desc">Conecte-se e veja publicações e histórico</span>
                  </div>
                </a>

                {/* Github Direct Card */}
                <a
                  href="https://github.com/Patrikmagalhaes"
                  target="_blank"
                  rel="noreferrer"
                  className="option-card-anchor"
                  onClick={(e) => handleExternalLink('GitHub', 'https://github.com/Patrikmagalhaes', e)}
                >
                  <div className="option-card-icon">
                    <Github size={20} />
                  </div>
                  <div className="option-details">
                    <span className="option-title">GitHub Perfil</span>
                    <span className="option-desc">Veja meus repositórios ativos e contribuições</span>
                  </div>
                </a>
              </div>

              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <button
                  className="btn btn-ghost"
                  style={{ fontSize: '0.825rem' }}
                  onClick={() => setIsContactModalOpen(false)}
                >
                  Voltar ao portfólio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modern Feedback Toast Notification */}
      {activeToast && (
        <div
          id="toast-notification"
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 1200,
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            backgroundColor: '#0f172a',
            color: '#ffffff',
            padding: '1rem 1.25rem',
            borderRadius: '0.75rem',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.5)',
            maxWidth: '350px',
            animation: 'slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }}
        >
          <CheckCircle size={18} style={{ color: '#34d399', flexShrink: 0 }} />
          <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>{activeToast}</span>
        </div>
      )}

      {/* 11. Immersive Professional Footer */}
      <footer className="footer-credits">
        <div className="container">
          <div className="footer-container-grid">
            {/* Col 1 - Personal Branding */}
            <div className="footer-column">
              <span className="developer-signature">Patrik Magalhães</span>
              <span className="developer-sub">Front-End & Full Stack Developer</span>
              <div className="footer-contact-info-list" style={{ marginTop: '0.5rem' }}>
                <div className="footer-contact-item">
                  <MapPin size={14} style={{ color: 'var(--brand-primary)' }} />
                  <span>São José — SC</span>
                </div>
                <div className="footer-contact-item">
                  <Mail size={14} style={{ color: 'var(--brand-primary)' }} />
                  <span>patrikmagalhaes@icloud.com</span>
                </div>
              </div>
            </div>

            {/* Col 2 - Quick Navigation */}
            <div className="footer-column">
              <span className="footer-col-title">Atalhos</span>
              <ul className="footer-nav-list">
                <li><a href="#home" className="footer-nav-link" onClick={(e) => scrollToSection('home', e)}>Início / Home</a></li>
                <li><a href="#sobre" className="footer-nav-link" onClick={(e) => scrollToSection('sobre', e)}>Sobre Mim</a></li>
                <li><a href="#projetos" className="footer-nav-link" onClick={(e) => scrollToSection('projetos', e)}>Projetos</a></li>
                <li><a href="#experiencia" className="footer-nav-link" onClick={(e) => scrollToSection('experiencia', e)}>Experiência</a></li>
                <li><a href="#tecnologias" className="footer-nav-link" onClick={(e) => scrollToSection('tecnologias', e)}>Tecnologias</a></li>
              </ul>
            </div>

            {/* Col 3 - Short Descriptive */}
            <div className="footer-column">
              <span className="footer-col-title">Destaques Profissionais</span>
              <p className="footer-desc-text">
                Desenvolvedor especializado em soluções web utilizando React, TypeScript e Node.js. Foco na automação operacional inteligente, integrações robustas com modelos Generativos (Gemini API) e refatoração de performance orgânica.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <a
                  href="https://github.com/Patrikmagalhaes"
                  aria-label="GitHub Link"
                  style={{ color: '#a1a1aa', transition: 'color 0.2s' }}
                  onClick={(e) => handleExternalLink('GitHub', 'https://github.com/Patrikmagalhaes', e)}
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/patrikmagalhaes/"
                  aria-label="LinkedIn Link"
                  style={{ color: '#a1a1aa', transition: 'color 0.2s' }}
                  onClick={(e) => handleExternalLink('LinkedIn', 'https://www.linkedin.com/in/patrikmagalhaes/', e)}
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', paddingTop: '1rem' }}>
            <p style={{ color: '#52525b', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              © {new Date().getFullYear()} PORTFOLIO CORE • TODOS OS DIREITOS RESERVADOS
            </p>
            <p style={{ color: '#52525b', fontSize: '0.75rem' }}>
              Etapa 2 finalizada com excelência estética e operacional.
            </p>
          </div>

          <div className="seo-footer-block">
            <p>
              Desenvolvedor React, TypeScript e Node.js especializado em aplicações modernas, IA generativa, automações, performance web e experiência do usuário.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

