import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'

/* ── SVG Icon Components ── */
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

/* ── i18n Copy ── */
const copy = {
  en: {
    languageLabel: 'Language',
    navAbout: 'About',
    navProjects: 'Projects',
    navServices: 'Services',
    navContact: 'Contact',
    heroRole: 'Developer · AI & Automation',
    heroIntro:
      'AI automations that scale your production for long-term growth.',
    heroLine2: 'Smart workflows for complex systems.',
    heroLine3:
      'Coding aligned with your business reality creates real impact.',
    aboutTitle: 'About Me',
    aboutText:
      'Experienced Project Management specialist transitioning strongly into software development. I help businesses automate repetitive tasks, integrate systems, and build scalable solutions using platforms such as OpenAI, n8n, and custom APIs.',
    projectsTitle: 'Projects',
    project1Name: 'OdontoBot AI',
    project1Desc:
      'AI-powered WhatsApp assistant for odontologic clinics: handles appointment booking, FAQs, sends reminders, integrated with Google Calendar and scheduling spreadsheets.',
    project1Status: 'In Development',
    servicesTitle: 'Services',
    servicesIntro: 'Core services I offer for businesses and teams.',
    service1Title: 'AI Automation Strategy',
    service1Desc: 'Custom automation pipelines powered by LLMs, n8n, and intelligent workflows that eliminate repetitive work.',
    service2Title: 'System Integration',
    service2Desc: 'Seamless API integrations connecting your tools: CRMs, calendars, spreadsheets, and messaging platforms.',
    service3Title: 'Scalable Web Solutions',
    service3Desc: 'Full-stack web applications built with modern architecture, from MVP to production-ready systems.',
    contactTitle: 'Contact',
    contactIntro:
      'Share your project details and I will prepare the best approach for your business.',
    contactEmailLabel: 'Email',
    contactWhatsAppLabel: 'WhatsApp',
    contactLinkedInLabel: 'LinkedIn',
    contactLocationLabel: 'Location',
    contactLocationValue: 'Maringá, Paraná, Brazil',
    ctaPrimary: 'View Projects',
    ctaSecondary: 'Contact Me',
    footer: 'Building practical technology for real business impact.',
  },
  'pt-BR': {
    languageLabel: 'Idioma',
    navAbout: 'Sobre',
    navProjects: 'Projetos',
    navServices: 'Serviços',
    navContact: 'Contato',
    heroRole: 'Desenvolvedor · IA & Automação',
    heroIntro: 'Automações com IA que escalam sua produção no longo prazo.',
    heroLine2: 'Fluxos inteligentes para sistemas complexos.',
    heroLine3:
      'Código com interpretação da realidade do seu negócio gera impacto real.',
    aboutTitle: 'Sobre Mim',
    aboutText:
      'Especialista em Gestão de Projetos com experiência sólida, em transição avançada para desenvolvimento. Ajudo empresas a automatizar tarefas repetitivas, integrar sistemas e construir soluções escaláveis usando plataformas como OpenAI, n8n e APIs customizadas.',
    projectsTitle: 'Projetos',
    project1Name: 'OdontoBot AI',
    project1Desc:
      'Assistente WhatsApp com IA para clínicas odontológicas: agendamento de consultas, FAQs, envio de lembretes, integrado com Google Calendar e planilhas de agendamento.',
    project1Status: 'Em Desenvolvimento',
    servicesTitle: 'Serviços',
    servicesIntro: 'Serviços principais que ofereço para empresas e equipes.',
    service1Title: 'Estratégia de Automação com IA',
    service1Desc: 'Pipelines de automação customizados com LLMs, n8n e workflows inteligentes que eliminam trabalho repetitivo.',
    service2Title: 'Integração de Sistemas',
    service2Desc: 'Integrações de APIs conectando suas ferramentas: CRMs, calendários, planilhas e plataformas de mensagens.',
    service3Title: 'Soluções Web Escaláveis',
    service3Desc: 'Aplicações web full-stack construídas com arquitetura moderna, do MVP ao sistema pronto para produção.',
    contactTitle: 'Contato',
    contactIntro:
      'Compartilhe os detalhes do seu projeto e eu preparo a melhor abordagem para o seu negócio.',
    contactEmailLabel: 'Email',
    contactWhatsAppLabel: 'WhatsApp',
    contactLinkedInLabel: 'LinkedIn',
    contactLocationLabel: 'Localização',
    contactLocationValue: 'Maringá, Paraná, Brasil',
    ctaPrimary: 'Ver Projetos',
    ctaSecondary: 'Falar Comigo',
    footer: 'Construindo tecnologia prática para impacto real nos negócios.',
  },
}

const TECH_STACK = [
  'React', 'Node.js', 'Python', 'TypeScript',
  'n8n', 'OpenAI', 'REST APIs', 'JavaScript', 'Django', 'HTML', 'CSS',
]

const LINKEDIN_URL = 'https://www.linkedin.com/in/andr%C3%A9-augusto-sabadine-domingues-72222b3b7/'
const LINKEDIN_DISPLAY = '/in/André'

/* ── Scroll-reveal hook ── */
function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}

function RevealCard({ children, className = '', id }) {
  const ref = useReveal()
  return (
    <section ref={ref} id={id} className={`card reveal ${className}`}>
      {children}
    </section>
  )
}

/* ── App ── */
function App() {
  const [language, setLanguage] = useState(() => {
    const saved = window.localStorage.getItem('portfolio-language')
    return saved === 'pt-BR' || saved === 'en' ? saved : 'en'
  })

  useEffect(() => {
    window.localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language
  }, [language])

  const t = useMemo(() => copy[language], [language])

  return (
    <div className="portfolio-shell">
      {/* ── Header ── */}
      <header className="portfolio-header">
        <p className="brand">André Sabadine</p>

        <nav className="header-nav" aria-label="Main navigation">
          <a href="#about">{t.navAbout}</a>
          <a href="#projects">{t.navProjects}</a>
          <a href="#services">{t.navServices}</a>
          <a href="#contact">{t.navContact}</a>
        </nav>

        <div className="language-toggle" role="group" aria-label={t.languageLabel}>
          <button
            type="button"
            id="lang-en"
            className={language === 'en' ? 'active' : ''}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button
            type="button"
            id="lang-pt"
            className={language === 'pt-BR' ? 'active' : ''}
            onClick={() => setLanguage('pt-BR')}
          >
            PT-BR
          </button>
        </div>
      </header>

      {/* ── Main ── */}
      <main className="content">
        {/* Hero */}
        <section className="card start-card">
          <p className="eyebrow">Start</p>
          <h1>André Sabadine</h1>
          <h2>{t.heroRole}</h2>
          <div className="hero-lines">
            <p>{t.heroIntro}</p>
            <p>{t.heroLine2}</p>
            <p>{t.heroLine3}</p>
          </div>
          <div className="actions">
            <a href="#projects" className="btn-primary">{t.ctaPrimary}</a>
            <a href="#contact" className="btn-secondary">{t.ctaSecondary}</a>
          </div>
        </section>

        {/* About */}
        <RevealCard id="about" className="about-card">
          <p className="eyebrow">{t.aboutTitle}</p>
          <p>{t.aboutText}</p>
          <div className="tech-stack">
            {TECH_STACK.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </RevealCard>

        {/* Projects */}
        <RevealCard id="projects" className="projects-card">
          <p className="eyebrow">{t.projectsTitle}</p>
          <div className="projects-grid">
            <div className="project-item">
              <div className="project-header">
                <h3 className="project-name">{t.project1Name}</h3>
                <span className="project-status status-dev">{t.project1Status}</span>
              </div>
              <p className="project-desc">{t.project1Desc}</p>
              <div className="project-tags">
                <span>WhatsApp API</span>
                <span>OpenAI</span>
                <span>Google Calendar</span>
                <span>Node.js</span>
                <span>n8n</span>
              </div>
            </div>
          </div>
        </RevealCard>

        {/* Services */}
        <RevealCard id="services" className="services-card">
          <p className="eyebrow">{t.servicesTitle}</p>
          <p style={{ color: '#888', margin: '0 0 0.5rem' }}>{t.servicesIntro}</p>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">🤖</div>
              <div className="service-text">
                <h3>{t.service1Title}</h3>
                <p>{t.service1Desc}</p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">🔗</div>
              <div className="service-text">
                <h3>{t.service2Title}</h3>
                <p>{t.service2Desc}</p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">⚡</div>
              <div className="service-text">
                <h3>{t.service3Title}</h3>
                <p>{t.service3Desc}</p>
              </div>
            </div>
          </div>
        </RevealCard>

        {/* Contact */}
        <RevealCard id="contact" className="contact-card">
          <p className="eyebrow">{t.contactTitle}</p>
          <p>{t.contactIntro}</p>
          <div className="contact-grid">
            <a
              href="mailto:andresabadine@gmail.com"
              className="contact-item"
              id="contact-email"
            >
              <div className="contact-icon contact-icon-email">
                <EmailIcon />
              </div>
              <div className="contact-info">
                <span className="contact-label">{t.contactEmailLabel}</span>
                <span className="contact-value">andresabadine@gmail.com</span>
              </div>
            </a>

            <a
              href="https://wa.me/5544999266053"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
              id="contact-whatsapp"
            >
              <div className="contact-icon contact-icon-whatsapp">
                <WhatsAppIcon />
              </div>
              <div className="contact-info">
                <span className="contact-label">{t.contactWhatsAppLabel}</span>
                <span className="contact-value">+55 (44) 99926-6053</span>
              </div>
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
              id="contact-linkedin"
            >
              <div className="contact-icon contact-icon-linkedin">
                <LinkedInIcon />
              </div>
              <div className="contact-info">
                <span className="contact-label">{t.contactLinkedInLabel}</span>
                <span className="contact-value">{LINKEDIN_DISPLAY}</span>
              </div>
            </a>
          </div>
        </RevealCard>
      </main>

      {/* ── Footer ── */}
      <footer className="portfolio-footer">
        <div className="footer-location">
          <LocationIcon />
          <span>{t.contactLocationValue}</span>
        </div>
        <div className="footer-text">
          <span className="footer-line">{'< '}</span>
          {t.footer}
          <span className="footer-line">{' />'}</span>
        </div>
      </footer>
    </div>
  )
}

export default App
