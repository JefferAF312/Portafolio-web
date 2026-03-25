const translations = {
  es: {
    page: {
      title: 'Portafolio | Jefferson Antelo Flores',
      description: 'Portafolio de Jefferson Antelo Flores con experiencia en Java, Spring Boot, Angular, React, Node.js y C#, enfocado en productos web claros y bien estructurados.',
      keywords: 'portafolio, desarrollador full stack, java, spring boot, angular, react, node.js, csharp, bases de datos'
    },
    access: {
      skip: 'Saltar al contenido principal',
      languageSwitcher: 'Cambiar idioma',
      scrollTop: 'Volver arriba',
      themeSwitcher: 'Cambiar tema'
    },
    nav: {
      about: 'Sobre mi',
      skills: 'Habilidades',
      projects: 'Proyectos',
      certificates: 'Certificados',
      contact: 'Contacto'
    },
    hero: {
      name: 'Jefferson Antelo Flores',
      summary: 'Trabajo en productos web claros, utiles y bien estructurados, cuidando tanto la experiencia visual como la logica que los sostiene.',
      primaryAction: 'Ver proyectos',
      secondaryAction: 'Contacto',
      role: 'Ingeniero en Sistemas',
      consoleLabel: 'Resumen rapido',
      introLines: [
        'Java, Angular, React y .NET.',
        'Interfaces claras, utiles y responsivas.',
        'Soluciones digitales ordenadas y funcionales.'
      ]
    },
    sections: {
      about: {
        kicker: 'Perfil',
        title: 'Sobre mi',
        intro: 'Combino formacion tecnica, enfoque en producto y atencion al detalle para crear experiencias digitales solidas.'
      },
      skills: {
        kicker: 'Stack',
        title: 'Habilidades tecnologicas',
        intro: 'Tecnologias principales con las que construyo soluciones claras, mantenibles y bien estructuradas.',
        metaTitle: 'Bases de datos, herramientas y otros'
      },
      projects: {
        kicker: 'Trabajo',
        title: 'Proyectos destacados',
        intro: 'Una seleccion breve de trabajos donde priorice claridad visual, estructura limpia y buena adaptacion en distintos dispositivos.'
      },
      certificates: {
        kicker: 'Formacion',
        title: 'Certificados',
        intro: 'Cursos y certificaciones que complementan mi trabajo tecnico y refuerzan mi aprendizaje continuo.'
      },
      contact: {
        kicker: 'Contacto',
        title: 'Construyamos algo util',
        intro: 'Estoy disponible para colaborar en proyectos web, mejoras de interfaces y nuevas ideas digitales.'
      }
    },
    about: {
      photoAlt: 'Retrato de Jefferson Antelo Flores',
      toggleOpen: 'Hazme click',
      toggleClose: 'Hazme click',
      toggleAriaOpen: 'Abrir postal Sobre mi',
      toggleAriaClose: 'Cerrar postal Sobre mi',
      paragraphs: [
        'Soy Jefferson Antelo Flores. Cuento con una base tecnica solida y una motivacion constante por construir soluciones que realmente aporten valor.',
        'A lo largo de mi recorrido he trabajado en proyectos web y de escritorio, fortaleciendo habilidades en interfaces, arquitectura y organizacion de productos digitales.',
        'Me interesa crear aplicaciones funcionales, eficientes y escalables, siempre cuidando la experiencia de uso, la claridad visual y la calidad del resultado final.'
      ]
    },
    theme: {
      system: 'Tema del sistema',
      light: 'Modo claro',
      dark: 'Modo oscuro',
      switchToSystem: 'Usar tema del sistema',
      switchToLight: 'Activar modo claro',
      switchToDark: 'Activar modo oscuro',
      current: 'Tema actual',
      next: 'Siguiente tema'
    },
    skillsMeta: [
      {
        title: 'Bases de datos',
        items: ['PostgreSQL', 'MySQL', 'SQL Server']
      },
      {
        title: 'Herramientas',
        items: ['Docker', 'Git / GitHub', 'ngrok', 'Android Studio', 'Visual Studio', 'VS Code', 'XAMPP']
      },
      {
        title: 'Metodologias',
        items: ['Scrum', 'QA funcional', 'Documentacion tecnica', 'APIs REST']
      },
      {
        title: 'Idiomas',
        items: ['Espanol - Nativo', 'Ingles - B2 certificado']
      }
    ],
    skills: [
      {
        tag: 'Frontend',
        title: 'HTML5',
        description: 'Estructuro interfaces claras y semanticas con HTML5, cuidando accesibilidad, orden del contenido y una base solida para cada proyecto.',
        image: 'assets/img/habilidades/html5.svg',
        alt: 'Logo de HTML5'
      },
      {
        tag: 'Frontend',
        title: 'CSS3',
        description: 'Trabajo estilos responsivos con CSS3 para construir interfaces limpias, bien alineadas y visualmente consistentes en distintos dispositivos.',
        image: 'assets/img/habilidades/css3.svg',
        alt: 'Logo de CSS3'
      },
      {
        tag: 'Backend',
        title: 'Java',
        description: 'Desarrollo soluciones solidas sobre Java para aplicaciones mantenibles, con buena estructura y una base lista para escalar.',
        image: 'assets/img/habilidades/java.svg',
        alt: 'Logo de Java'
      },
      {
        tag: 'Backend',
        title: 'Spring Boot',
        description: 'Construyo APIs y servicios con Spring Boot priorizando orden, integracion limpia y una arquitectura clara para nuevos modulos.',
        image: 'assets/img/habilidades/spring.svg',
        alt: 'Logo de Spring Boot'
      },
      {
        tag: 'Frontend',
        title: 'Angular',
        description: 'Trabajo aplicaciones en Angular con componentes bien organizados, flujos claros y una experiencia consistente para el usuario.',
        image: 'assets/img/habilidades/angular.svg',
        alt: 'Logo de Angular'
      },
      {
        tag: 'Frontend',
        title: 'React',
        description: 'Desarrollo interfaces modernas en React enfocadas en reutilizacion de componentes, claridad visual y comportamiento fluido.',
        image: 'assets/img/habilidades/react.svg',
        alt: 'Logo de React'
      },
      {
        tag: 'Frontend',
        title: 'Tailwind CSS',
        description: 'Uso Tailwind CSS para construir interfaces agiles con una base utilitaria clara, consistente y facil de escalar visualmente.',
        image: 'assets/img/habilidades/tailwind.svg',
        alt: 'Logo de Tailwind CSS'
      },
      {
        tag: 'Frontend',
        title: 'Bootstrap',
        description: 'Aplico Bootstrap cuando el proyecto necesita una base rapida, ordenada y responsive para avanzar con componentes listos y consistentes.',
        image: 'assets/img/habilidades/bootstrap.svg',
        alt: 'Logo de Bootstrap'
      },
      {
        tag: 'Full Stack',
        title: 'Node.js',
        description: 'Uso Node.js para servicios, integraciones y flujos de trabajo agiles cuando el proyecto necesita velocidad y flexibilidad.',
        image: 'assets/img/habilidades/nodejs.svg',
        alt: 'Logo de Node.js'
      },
      {
        tag: 'Backend',
        title: 'C# / ASP.NET',
        description: 'Implemento soluciones en C# y ASP.NET con enfoque profesional, estructura limpia y buen soporte para logica de negocio.',
        image: 'assets/img/habilidades/dotnet.svg',
        alt: 'Logo de .NET'
      }
    ],
    projects: [
      {
        tag: 'Servicio web',
        title: 'RosterGo',
        description: 'Servicio web para restaurante orientado a delivery, con una experiencia clara para gestionar pedidos y una interfaz consistente para el flujo de atencion.',
        techLabel: 'Tecnologias utilizadas',
        techs: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        image: 'assets/img/proyectos/rostergo.svg',
        alt: 'Portada del servicio web RosterGo',
        link: 'https://jefferaf312.github.io/pagina-web-go/',
        linkLabel: 'Ver demo'
      },
      {
        tag: 'Landing page',
        title: 'blumcode.com',
        description: 'Landing page para Blumcode con una presentacion clara de servicios, identidad visual cuidada y una experiencia consistente en distintos dispositivos.',
        techLabel: 'Aspectos del proyecto',
        techs: ['Responsive', 'Identidad visual', 'Presentacion de servicios'],
        image: 'assets/img/proyectos/blumcode.svg',
        alt: 'Portada de la landing page blumcode.com',
        link: 'https://blumcode.com/',
        linkLabel: 'Ver sitio'
      }
    ],
    certificates: [
      {
        title: 'Inteligencia Artificial',
        image: 'assets/img/certificados/C_InteligenciaArtificial.jpg',
        alt: 'Certificado de Inteligencia Artificial',
        linkLabel: 'Abrir certificado'
      },
      {
        title: 'Tendencias Tecnologicas',
        image: 'assets/img/certificados/C_TendenciasTecnologicas.jpg',
        alt: 'Certificado de Tendencias Tecnologicas',
        linkLabel: 'Abrir certificado'
      },
      {
        title: 'Observabilidad',
        image: 'assets/img/certificados/C_Observabilidad.jpg',
        alt: 'Certificado de Observabilidad',
        linkLabel: 'Abrir certificado'
      },
      {
        title: 'Computacion',
        image: 'assets/img/certificados/C_Computacion.jpg',
        alt: 'Certificado de Computacion',
        linkLabel: 'Abrir certificado'
      },
      {
        title: 'Ingles',
        image: 'assets/img/certificados/C_Ingles.jpg',
        alt: 'Certificado de Ingles',
        linkLabel: 'Abrir certificado'
      }
    ],
    contact: {
      text: 'Si quieres conversar sobre una oportunidad, una colaboracion o una mejora para tu producto, sera un gusto hablar contigo.',
      emailLabel: 'Correo:',
      phone: 'Celular: +591 71611000',
      linkedin: 'LinkedIn',
      github: 'GitHub'
    },
    footer: {
      copy: '2026 portafolio por Jefferson Antelo Flores'
    }
  },
  en: {
    page: {
      title: 'Portfolio | Jefferson Antelo Flores',
      description: 'Portfolio of Jefferson Antelo Flores with experience in Java, Spring Boot, Angular, React, Node.js and C#, focused on clear and well-structured web products.',
      keywords: 'portfolio, full stack developer, java, spring boot, angular, react, node.js, csharp, databases'
    },
    access: {
      skip: 'Skip to main content',
      languageSwitcher: 'Change language',
      scrollTop: 'Back to top',
      themeSwitcher: 'Change theme'
    },
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      certificates: 'Certificates',
      contact: 'Contact'
    },
    hero: {
      name: 'Jefferson Antelo Flores',
      summary: 'I build web products that feel clear, useful and well-structured, taking care of both the visual experience and the logic behind them.',
      primaryAction: 'View projects',
      secondaryAction: 'Contact',
      role: 'Systems Engineer',
      consoleLabel: 'Quick profile',
      introLines: [
        'Java, Angular, React and .NET.',
        'Clear, useful and responsive interfaces.',
        'Organized and functional digital solutions.'
      ]
    },
    sections: {
      about: {
        kicker: 'Profile',
        title: 'About me',
        intro: 'I combine technical training, product thinking and attention to detail to create solid digital experiences.'
      },
      skills: {
        kicker: 'Stack',
        title: 'Technology skills',
        intro: 'Main technologies I use to build clear, maintainable and well-structured solutions.',
        metaTitle: 'Databases, tools and more'
      },
      projects: {
        kicker: 'Work',
        title: 'Featured projects',
        intro: 'A short selection of work where I focused on visual clarity, clean structure and strong adaptation across devices.'
      },
      certificates: {
        kicker: 'Learning',
        title: 'Certificates',
        intro: 'Courses and certifications that complement my technical work and reinforce continuous learning.'
      },
      contact: {
        kicker: 'Contact',
        title: 'Let us build something useful',
        intro: 'I am available to collaborate on web projects, interface improvements and new digital ideas.'
      }
    },
    about: {
      photoAlt: 'Portrait of Jefferson Antelo Flores',
      toggleOpen: 'Click me',
      toggleClose: 'Click me',
      toggleAriaOpen: 'Open About me postcard',
      toggleAriaClose: 'Close About me postcard',
      paragraphs: [
        'I am Jefferson Antelo Flores. I have a strong technical foundation and a constant drive to build solutions that create real value.',
        'Throughout my path I have worked on web and desktop projects, strengthening skills in interfaces, architecture and digital product organization.',
        'I enjoy creating applications that are functional, efficient and scalable while always taking care of usability, visual clarity and overall quality.'
      ]
    },
    theme: {
      system: 'System theme',
      light: 'Light mode',
      dark: 'Dark mode',
      switchToSystem: 'Use system theme',
      switchToLight: 'Switch to light mode',
      switchToDark: 'Switch to dark mode',
      current: 'Current theme',
      next: 'Next theme'
    },
    skillsMeta: [
      {
        title: 'Databases',
        items: ['PostgreSQL', 'MySQL', 'SQL Server']
      },
      {
        title: 'Tools',
        items: ['Docker', 'Git / GitHub', 'ngrok', 'Android Studio', 'Visual Studio', 'VS Code', 'XAMPP']
      },
      {
        title: 'Methodologies',
        items: ['Scrum', 'Functional QA', 'Technical documentation', 'REST APIs']
      },
      {
        title: 'Languages',
        items: ['Spanish - Native', 'English - B2 certified']
      }
    ],
    skills: [
      {
        tag: 'Frontend',
        title: 'HTML5',
        description: 'I structure clear and semantic interfaces with HTML5, taking care of accessibility, content hierarchy and a solid foundation for each project.',
        image: 'assets/img/habilidades/html5.svg',
        alt: 'HTML5 logo'
      },
      {
        tag: 'Frontend',
        title: 'CSS3',
        description: 'I build responsive styles with CSS3 to create clean interfaces, strong alignment and visual consistency across devices.',
        image: 'assets/img/habilidades/css3.svg',
        alt: 'CSS3 logo'
      },
      {
        tag: 'Backend',
        title: 'Java',
        description: 'I build solid Java-based solutions for maintainable applications with strong structure and room to scale.',
        image: 'assets/img/habilidades/java.svg',
        alt: 'Java logo'
      },
      {
        tag: 'Backend',
        title: 'Spring Boot',
        description: 'I create APIs and services with Spring Boot, focusing on clean integration, organized modules and clear architecture.',
        image: 'assets/img/habilidades/spring.svg',
        alt: 'Spring Boot logo'
      },
      {
        tag: 'Frontend',
        title: 'Angular',
        description: 'I work on Angular applications with well-structured components, clear flows and a consistent user experience.',
        image: 'assets/img/habilidades/angular.svg',
        alt: 'Angular logo'
      },
      {
        tag: 'Frontend',
        title: 'React',
        description: 'I build modern React interfaces focused on reusable components, visual clarity and smooth behavior.',
        image: 'assets/img/habilidades/react.svg',
        alt: 'React logo'
      },
      {
        tag: 'Frontend',
        title: 'Tailwind CSS',
        description: 'I use Tailwind CSS to build agile interfaces with a clear utility-first foundation that stays consistent and easy to scale visually.',
        image: 'assets/img/habilidades/tailwind.svg',
        alt: 'Tailwind CSS logo'
      },
      {
        tag: 'Frontend',
        title: 'Bootstrap',
        description: 'I apply Bootstrap when a project needs a fast, organized and responsive base to move quickly with ready-made and consistent components.',
        image: 'assets/img/habilidades/bootstrap.svg',
        alt: 'Bootstrap logo'
      },
      {
        tag: 'Full Stack',
        title: 'Node.js',
        description: 'I use Node.js for services, integrations and agile workflows when a project needs speed and flexibility.',
        image: 'assets/img/habilidades/nodejs.svg',
        alt: 'Node.js logo'
      },
      {
        tag: 'Backend',
        title: 'C# / ASP.NET',
        description: 'I implement C# and ASP.NET solutions with a professional approach, clean structure and strong support for business logic.',
        image: 'assets/img/habilidades/dotnet.svg',
        alt: '.NET logo'
      }
    ],
    projects: [
      {
        tag: 'Web service',
        title: 'RosterGo',
        description: 'Web service for a restaurant delivery workflow, with a clear experience for managing orders and a consistent interface across the service flow.',
        techLabel: 'Technologies used',
        techs: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        image: 'assets/img/proyectos/rostergo.svg',
        alt: 'Cover of the RosterGo web service',
        link: 'https://jefferaf312.github.io/pagina-web-go/',
        linkLabel: 'View demo'
      },
      {
        tag: 'Landing page',
        title: 'blumcode.com',
        description: 'Landing page for Blumcode with a clear services presentation, polished visual identity and a consistent experience across devices.',
        techLabel: 'Project highlights',
        techs: ['Responsive', 'Visual identity', 'Service presentation'],
        image: 'assets/img/proyectos/blumcode.svg',
        alt: 'Cover of the blumcode.com landing page',
        link: 'https://blumcode.com/',
        linkLabel: 'Visit site'
      }
    ],
    certificates: [
      {
        title: 'Artificial Intelligence',
        image: 'assets/img/certificados/C_InteligenciaArtificial.jpg',
        alt: 'Artificial Intelligence certificate',
        linkLabel: 'Open certificate'
      },
      {
        title: 'Technology Trends',
        image: 'assets/img/certificados/C_TendenciasTecnologicas.jpg',
        alt: 'Technology Trends certificate',
        linkLabel: 'Open certificate'
      },
      {
        title: 'Observability',
        image: 'assets/img/certificados/C_Observabilidad.jpg',
        alt: 'Observability certificate',
        linkLabel: 'Open certificate'
      },
      {
        title: 'Computing',
        image: 'assets/img/certificados/C_Computacion.jpg',
        alt: 'Computing certificate',
        linkLabel: 'Open certificate'
      },
      {
        title: 'English',
        image: 'assets/img/certificados/C_Ingles.jpg',
        alt: 'English certificate',
        linkLabel: 'Open certificate'
      }
    ],
    contact: {
      text: 'If you want to talk about an opportunity, a collaboration or an improvement for your product, I would be glad to connect.',
      emailLabel: 'Email:',
      phone: 'Phone: +591 71611000',
      linkedin: 'LinkedIn',
      github: 'GitHub'
    },
    footer: {
      copy: '2026 portafolio por Jefferson Antelo Flores'
    }
  }
};

const validLanguages = Object.keys(translations);
const validThemes = ['system', 'dark', 'light'];
const systemThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const compactViewportQuery = window.matchMedia('(max-width: 47.99rem)');
const legacyHashes = {
  '#sobre-mi': '#about',
  '#conocimientos': '#skills',
  '#proyectos': '#projects',
  '#certificados': '#certificates',
  '#contacto': '#contact',
  '#about-me': '#about'
};

let heroTypingTimeout = null;
let currentLanguage = 'es';
let currentTheme = 'system';
let currentResolvedTheme = 'light';
let aboutPostcardOpen = false;
let themeTransitionMidTimeout = null;
let themeTransitionEndTimeout = null;
const floatingNavState = {
  lastScrollY: 0,
  scrollRafId: 0,
  resizeRafId: 0,
  resizeObserver: null,
  sectionPairs: []
};
const starFieldState = {
  rafId: 0,
  x: window.innerWidth * 0.5,
  y: window.innerHeight * 0.24,
  visible: false
};
const skillsCarouselState = {
  initialized: false,
  rafId: 0,
  refreshRafId: 0,
  lastFrameTime: 0,
  pointerId: null,
  isPointerDown: false,
  dragDistance: 0,
  lastPointerX: 0,
  lastMoveTime: 0,
  pressedCard: null,
  suppressClickUntil: 0,
  momentum: 0,
  scrollCarry: 0,
  baseSpeed: 60,
  setWidth: 0,
  itemsPerSet: 0,
  pauseReasons: new Set()
};

const elements = {
  aboutContent: document.getElementById('aboutContent'),
  aboutPanel: document.getElementById('aboutPanel'),
  aboutPostcard: document.getElementById('aboutPostcard'),
  aboutToggle: document.getElementById('aboutToggle'),
  aboutToggleText: document.getElementById('aboutToggleText'),
  altNodes: document.querySelectorAll('[data-i18n-alt]'),
  certificatesGrid: document.getElementById('certificatesGrid'),
  clickFxLayer: document.getElementById('clickFxLayer'),
  descriptionMeta: document.querySelector('meta[name="description"]'),
  heroName: document.querySelector('.hero-name'),
  heroTyped: document.getElementById('heroTyped'),
  keywordsMeta: document.querySelector('meta[name="keywords"]'),
  languageSwitcher: document.querySelector('.language-switcher'),
  links: document.querySelectorAll('[data-set-lang]'),
  nav: document.querySelector('.nav'),
  navLinks: document.querySelectorAll('.nav-links a[href^="#"]'),
  pageStarsGlow: document.getElementById('pageStarsGlow'),
  projectsGrid: document.getElementById('projectsGrid'),
  scrollTop: document.getElementById('scrollTop'),
  skillsCarousel: document.getElementById('skillsCarousel'),
  skillsMetaGrid: document.getElementById('skillsMetaGrid'),
  skillsGrid: document.getElementById('skillsGrid'),
  themeToggle: document.getElementById('themeToggle'),
  themeToggleIcon: document.getElementById('themeToggleIcon'),
  themeToggleText: document.getElementById('themeToggleText'),
  themeTransition: document.getElementById('themeTransition'),
  textNodes: document.querySelectorAll('[data-i18n]')
};

document.addEventListener('DOMContentLoaded', () => {
  normalizeLegacyHash();
  bindAboutPostcard();
  bindClickEffects();
  bindLanguageSwitcher();
  bindSectionNavigation();
  bindStarFieldGlow();
  bindThemeToggle();
  bindFloatingNav();
  bindSkillsCarousel();
  bindResponsiveEffects();
  bindScrollTop();
  applyTheme(getInitialTheme());
  setLanguage(getInitialLanguage());

  if (window.location.hash && window.location.hash !== '#hero') {
    const initialSection = document.querySelector(window.location.hash);
    if (initialSection) {
      window.requestAnimationFrame(() => {
        scrollToSection(initialSection, { updateHash: false, focusTarget: false });
      });
    }
  }
});

function bindAboutPostcard() {
  if (!elements.aboutToggle) {
    return;
  }

  elements.aboutToggle.addEventListener('click', () => {
    aboutPostcardOpen = !aboutPostcardOpen;
    syncAboutPostcardState();
  });
}

function bindLanguageSwitcher() {
  elements.links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      setLanguage(link.dataset.setLang);
    });
  });
}

function bindSectionNavigation() {
  if (!elements.navLinks.length) {
    return;
  }

  elements.navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetSelector = link.getAttribute('href');
      if (!targetSelector || !targetSelector.startsWith('#')) {
        return;
      }

      const section = document.querySelector(targetSelector);
      if (!section) {
        return;
      }

      event.preventDefault();
      scrollToSection(section, { updateHash: true, focusTarget: true });
    });
  });
}

function bindThemeToggle() {
  if (!elements.themeToggle) {
    return;
  }

  initializeThemeToggleMarkup();

  elements.themeToggle.addEventListener('click', () => {
    const nextTheme = getNextThemeSelection(currentTheme);
    runThemeTransition(nextTheme, translations[currentLanguage]);
  });

  const handleSystemThemeChange = () => {
    if (currentTheme === 'system') {
      applyTheme('system', translations[currentLanguage], { persist: false });
    }
  };

  if (!elements.themeToggle.dataset.systemBound) {
    if (typeof systemThemeQuery.addEventListener === 'function') {
      systemThemeQuery.addEventListener('change', handleSystemThemeChange);
    } else if (typeof systemThemeQuery.addListener === 'function') {
      systemThemeQuery.addListener(handleSystemThemeChange);
    }

    elements.themeToggle.dataset.systemBound = 'true';
  }
}

function bindClickEffects() {
  if (!elements.clickFxLayer) {
    return;
  }

  document.addEventListener(
    'click',
    (event) => {
      if (shouldReduceVisualEffects()) {
        return;
      }

      if (!(event.target instanceof Element)) {
        return;
      }

      const point = resolveClickEffectPoint(event);
      const size = resolveClickEffectSize(event.target);
      spawnClickEffect(point.x, point.y, size);
    },
    true
  );
}

function bindStarFieldGlow() {
  if (!elements.pageStarsGlow) {
    return;
  }

  const scheduleRender = () => {
    if (starFieldState.rafId) {
      return;
    }

    starFieldState.rafId = window.requestAnimationFrame(() => {
      elements.pageStarsGlow.style.setProperty('--star-glow-x', `${starFieldState.x}px`);
      elements.pageStarsGlow.style.setProperty('--star-glow-y', `${starFieldState.y}px`);
      elements.pageStarsGlow.classList.toggle('is-visible', starFieldState.visible);
      starFieldState.rafId = 0;
    });
  };

  const handlePointerMove = (event) => {
    if (shouldReduceVisualEffects()) {
      hideGlow();
      return;
    }

    if (event.pointerType && event.pointerType !== 'mouse' && event.pointerType !== 'pen') {
      return;
    }

    starFieldState.x = event.clientX;
    starFieldState.y = event.clientY;
    starFieldState.visible = true;
    scheduleRender();
  };

  const hideGlow = () => {
    starFieldState.visible = false;
    scheduleRender();
  };

  window.addEventListener('pointermove', handlePointerMove, { passive: true });
  window.addEventListener('pointerdown', handlePointerMove, { passive: true });
  document.documentElement.addEventListener('mouseleave', hideGlow);
  window.addEventListener('blur', hideGlow);
  window.addEventListener(
    'resize',
    () => {
      if (starFieldState.visible) {
        return;
      }

      starFieldState.x = window.innerWidth * 0.5;
      starFieldState.y = window.innerHeight * 0.24;
      scheduleRender();
    },
    { passive: true }
  );

  scheduleRender();
}

function bindResponsiveEffects() {
  const syncResponsiveEffects = () => {
    const reduceEffects = shouldReduceVisualEffects();
    skillsCarouselState.baseSpeed = compactViewportQuery.matches ? 0 : 60;
    setSkillsCarouselPause('mobile-autoscroll', compactViewportQuery.matches);

    if (reduceEffects && elements.pageStarsGlow) {
      starFieldState.visible = false;
      elements.pageStarsGlow.classList.remove('is-visible');
    }
  };

  syncResponsiveEffects();

  const handleChange = () => {
    syncResponsiveEffects();
    startHeroNameAnimation(translations[currentLanguage].hero.name);
    startHeroTyping(translations[currentLanguage].hero.introLines);
    scheduleFloatingNavRefresh(true);
    scheduleSkillsCarouselLayout(true);
  };

  if (typeof compactViewportQuery.addEventListener === 'function') {
    compactViewportQuery.addEventListener('change', handleChange);
    reducedMotionQuery.addEventListener('change', handleChange);
  } else if (typeof compactViewportQuery.addListener === 'function') {
    compactViewportQuery.addListener(handleChange);
    reducedMotionQuery.addListener(handleChange);
  }
}

function bindScrollTop() {
  const toggleVisibility = () => {
    elements.scrollTop.classList.toggle('is-visible', window.scrollY > 280);
  };

  elements.scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', toggleVisibility, { passive: true });
  toggleVisibility();
}

function bindFloatingNav() {
  if (!elements.nav) {
    return;
  }

  floatingNavState.sectionPairs = Array.from(elements.navLinks)
    .map((link) => {
      const target = link.getAttribute('href');
      if (!target || !target.startsWith('#')) {
        return null;
      }

      const section = document.querySelector(target);
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  scheduleFloatingNavRefresh(true);

  const handleScroll = () => {
    if (floatingNavState.scrollRafId) {
      return;
    }

    floatingNavState.scrollRafId = window.requestAnimationFrame(() => {
      syncFloatingNavState();
      floatingNavState.scrollRafId = 0;
    });
  };

  const handleResize = () => {
    scheduleFloatingNavRefresh(true);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleResize);

  if (typeof ResizeObserver === 'function') {
    floatingNavState.resizeObserver = new ResizeObserver(() => {
      scheduleFloatingNavRefresh(true);
    });
    floatingNavState.resizeObserver.observe(elements.nav);
  }

  if (document.fonts && typeof document.fonts.ready?.then === 'function') {
    document.fonts.ready.then(() => {
      scheduleFloatingNavRefresh(true);
    }).catch(() => {});
  }
}

function scheduleFloatingNavRefresh(force = false) {
  if (!elements.nav) {
    return;
  }

  if (floatingNavState.resizeRafId) {
    window.cancelAnimationFrame(floatingNavState.resizeRafId);
  }

  floatingNavState.resizeRafId = window.requestAnimationFrame(() => {
    syncFloatingNavMetrics();
    syncFloatingNavState(force);
    floatingNavState.resizeRafId = 0;
  });
}

function syncFloatingNavMetrics() {
  if (!elements.nav) {
    return;
  }

  const navHeight = Math.ceil(elements.nav.getBoundingClientRect().height);
  document.documentElement.style.setProperty('--nav-height', `${navHeight}px`);
}

function syncFloatingNavState(force = false) {
  if (!elements.nav) {
    return;
  }

  const currentScrollY = Math.max(window.scrollY || window.pageYOffset || 0, 0);
  const isCondensed = currentScrollY > 30;

  elements.nav.classList.toggle('is-condensed', isCondensed);
  syncActiveNavLink(currentScrollY);

  if (force || Math.abs(currentScrollY - floatingNavState.lastScrollY) > 1) {
    floatingNavState.lastScrollY = currentScrollY;
  }
}

function syncActiveNavLink(scrollY = window.scrollY) {
  if (!floatingNavState.sectionPairs.length) {
    return;
  }

  const navHeight = elements.nav ? elements.nav.getBoundingClientRect().height : 0;
  const probe = scrollY + navHeight + 56;
  let activeSectionId = '';

  floatingNavState.sectionPairs.forEach(({ section }) => {
    if (probe >= section.offsetTop) {
      activeSectionId = section.id;
    }
  });

  floatingNavState.sectionPairs.forEach(({ link, section }) => {
    const isCurrent = activeSectionId === section.id;
    link.classList.toggle('is-current', isCurrent);

    if (isCurrent) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

function getInitialLanguage() {
  const url = new URL(window.location.href);
  const urlLanguage = url.searchParams.get('lang');

  if (isValidLanguage(urlLanguage)) {
    return urlLanguage;
  }

  const storedLanguage = getStoredLanguage();
  if (isValidLanguage(storedLanguage)) {
    return storedLanguage;
  }

  return document.documentElement.lang === 'en' ? 'en' : 'es';
}

function getInitialTheme() {
  const storedTheme = getStoredTheme();

  if (isValidTheme(storedTheme)) {
    return storedTheme;
  }

  return 'system';
}

function shouldReduceVisualEffects() {
  return reducedMotionQuery.matches || compactViewportQuery.matches;
}

function getStoredLanguage() {
  try {
    return window.localStorage.getItem('portfolio-language');
  } catch (error) {
    return null;
  }
}

function setStoredLanguage(language) {
  try {
    window.localStorage.setItem('portfolio-language', language);
  } catch (error) {
    return;
  }
}

function getStoredTheme() {
  try {
    return window.localStorage.getItem('portfolio-theme');
  } catch (error) {
    return null;
  }
}

function setStoredTheme(theme) {
  try {
    window.localStorage.setItem('portfolio-theme', theme);
  } catch (error) {
    return;
  }
}

function isValidLanguage(language) {
  return validLanguages.includes(language);
}

function isValidTheme(theme) {
  return validThemes.includes(theme);
}

function getNextThemeSelection(theme) {
  if (theme === 'system') {
    return 'dark';
  }

  if (theme === 'dark') {
    return 'light';
  }

  return 'system';
}

function getResolvedTheme(theme) {
  if (theme === 'system') {
    return systemThemeQuery.matches ? 'dark' : 'light';
  }

  return theme === 'dark' ? 'dark' : 'light';
}

function setLanguage(language) {
  const nextLanguage = isValidLanguage(language) ? language : 'es';
  const dictionary = translations[nextLanguage];
  currentLanguage = nextLanguage;

  document.documentElement.lang = nextLanguage;
  document.title = dictionary.page.title;
  elements.descriptionMeta.setAttribute('content', dictionary.page.description);
  elements.keywordsMeta.setAttribute('content', dictionary.page.keywords);
  elements.languageSwitcher.setAttribute('aria-label', dictionary.access.languageSwitcher);
  elements.scrollTop.setAttribute('aria-label', dictionary.access.scrollTop);
  syncThemeToggle(dictionary);

  elements.textNodes.forEach((node) => {
    const value = getValue(dictionary, node.dataset.i18n);
    if (typeof value === 'string') {
      node.textContent = value;
    }
  });

  elements.altNodes.forEach((node) => {
    const value = getValue(dictionary, node.dataset.i18nAlt);
    if (typeof value === 'string') {
      node.setAttribute('alt', value);
    }
  });

  startHeroNameAnimation(dictionary.hero.name);
  startHeroTyping(dictionary.hero.introLines);
  renderParagraphs(elements.aboutContent, dictionary.about.paragraphs);
  syncAboutPostcardState(dictionary.about);
  renderSkills(dictionary.skills);
  renderSkillsMeta(dictionary.skillsMeta);
  renderProjects(dictionary.projects);
  renderCertificates(dictionary.certificates);
  updateLanguageLinks(nextLanguage);
  updateLanguageUrl(nextLanguage);
  setStoredLanguage(nextLanguage);
  scheduleFloatingNavRefresh(true);
}

function applyTheme(theme, dictionary = translations[currentLanguage], options = {}) {
  const { persist = true } = options;
  const nextTheme = isValidTheme(theme) ? theme : 'system';
  currentTheme = nextTheme;
  currentResolvedTheme = getResolvedTheme(nextTheme);
  document.documentElement.dataset.theme = currentResolvedTheme;
  document.documentElement.dataset.themeSelection = nextTheme;
  syncThemeToggle(dictionary);

  if (persist) {
    setStoredTheme(nextTheme);
  }
}

function clearThemeTransitionTimers() {
  if (themeTransitionMidTimeout) {
    window.clearTimeout(themeTransitionMidTimeout);
    themeTransitionMidTimeout = null;
  }

  if (themeTransitionEndTimeout) {
    window.clearTimeout(themeTransitionEndTimeout);
    themeTransitionEndTimeout = null;
  }
}

function cleanupThemeTransitionState() {
  if (!elements.themeTransition) {
    return;
  }

  elements.themeTransition.classList.remove('is-active', 'is-view-active');
  document.documentElement.classList.remove('is-theme-transitioning');
  delete elements.themeTransition.dataset.targetTheme;
}

function runThemeTransition(theme, dictionary = translations[currentLanguage]) {
  const nextTheme = isValidTheme(theme) ? theme : 'system';
  const nextResolvedTheme = getResolvedTheme(nextTheme);

  if (!elements.themeTransition || nextResolvedTheme === currentResolvedTheme || shouldReduceVisualEffects()) {
    applyTheme(nextTheme, dictionary);
    return;
  }

  clearThemeTransitionTimers();
  cleanupThemeTransitionState();

  if (typeof document.startViewTransition === 'function') {
    document.documentElement.classList.add('is-theme-transitioning');
    elements.themeTransition.dataset.targetTheme = nextResolvedTheme;
    void elements.themeTransition.offsetWidth;
    elements.themeTransition.classList.add('is-view-active');

    try {
      const transition = document.startViewTransition(() => {
        applyTheme(nextTheme, dictionary);
      });

      transition.finished.finally(() => {
        cleanupThemeTransitionState();
      });

      return;
    } catch (error) {
      cleanupThemeTransitionState();
    }
  }

  document.documentElement.classList.add('is-theme-transitioning');
  elements.themeTransition.dataset.targetTheme = nextResolvedTheme;
  void elements.themeTransition.offsetWidth;
  elements.themeTransition.classList.add('is-active');

  themeTransitionMidTimeout = window.setTimeout(() => {
    applyTheme(nextTheme, dictionary);
    themeTransitionMidTimeout = null;
  }, 280);

  themeTransitionEndTimeout = window.setTimeout(() => {
    cleanupThemeTransitionState();
    themeTransitionEndTimeout = null;
  }, 760);
}

function updateLanguageLinks(activeLanguage) {
  elements.links.forEach((link) => {
    const isActive = link.dataset.setLang === activeLanguage;
    link.classList.toggle('is-active', isActive);

    if (isActive) {
      link.setAttribute('aria-current', 'true');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

function getSectionScrollOffset() {
  const navHeight = elements.nav ? elements.nav.getBoundingClientRect().height : 0;
  const rootStyles = window.getComputedStyle(document.documentElement);
  const navOffset = Number.parseFloat(rootStyles.getPropertyValue('--nav-offset')) || 0;
  return Math.ceil(navHeight + navOffset + 18);
}

function scrollToSection(section, options = {}) {
  const { updateHash = false, focusTarget = false } = options;
  const targetTop = Math.max(section.getBoundingClientRect().top + window.scrollY - getSectionScrollOffset(), 0);
  const behavior = shouldReduceVisualEffects() ? 'auto' : 'smooth';

  window.scrollTo({ top: targetTop, behavior });

  if (focusTarget) {
    if (!section.hasAttribute('tabindex')) {
      section.setAttribute('tabindex', '-1');
    }

    const focusDelay = behavior === 'smooth' ? 380 : 0;
    window.setTimeout(() => {
      section.focus({ preventScroll: true });
    }, focusDelay);
  }

  if (updateHash) {
    try {
      const url = new URL(window.location.href);
      url.hash = `#${section.id}`;
      window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
    } catch (error) {
      return;
    }
  }
}

function updateLanguageUrl(language) {
  try {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', language);
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  } catch (error) {
    return;
  }
}

function normalizeLegacyHash() {
  const currentHash = window.location.hash;
  const normalizedHash = legacyHashes[currentHash];

  if (!normalizedHash) {
    return;
  }

  try {
    const url = new URL(window.location.href);
    url.hash = normalizedHash;
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  } catch (error) {
    return;
  }
}

function syncAboutPostcardState(aboutDictionary = translations[currentLanguage].about) {
  if (!elements.aboutPostcard || !elements.aboutToggle || !elements.aboutPanel || !elements.aboutToggleText) {
    return;
  }

  elements.aboutPostcard.classList.toggle('is-open', aboutPostcardOpen);
  elements.aboutToggle.setAttribute('aria-expanded', String(aboutPostcardOpen));
  elements.aboutPanel.setAttribute('aria-hidden', String(!aboutPostcardOpen));
  elements.aboutToggleText.textContent = aboutPostcardOpen ? aboutDictionary.toggleClose : aboutDictionary.toggleOpen;
  elements.aboutToggle.setAttribute(
    'aria-label',
    aboutPostcardOpen ? aboutDictionary.toggleAriaClose : aboutDictionary.toggleAriaOpen
  );
}

function syncThemeToggle(dictionary = translations[currentLanguage]) {
  if (!elements.themeToggle || !elements.themeToggleText || !elements.themeToggleIcon) {
    return;
  }

  const nextTheme = getNextThemeSelection(currentTheme);
  const currentThemeLabel = dictionary.theme[currentTheme];
  const nextThemeLabel = dictionary.theme[nextTheme];
  const nextThemeAria =
    nextTheme === 'system'
      ? dictionary.theme.switchToSystem
      : nextTheme === 'dark'
        ? dictionary.theme.switchToDark
        : dictionary.theme.switchToLight;

  elements.themeToggleText.textContent = currentThemeLabel;
  elements.themeToggle.dataset.themeSelection = currentTheme;
  elements.themeToggle.dataset.resolvedTheme = currentResolvedTheme;
  elements.themeToggle.setAttribute(
    'aria-label',
    `${dictionary.theme.current}: ${currentThemeLabel}. ${dictionary.theme.next}: ${nextThemeLabel}`
  );
  elements.themeToggle.setAttribute('title', nextThemeAria);
}

function initializeThemeToggleMarkup() {
  if (!elements.themeToggle || !elements.themeToggleIcon || !elements.themeToggleText) {
    return;
  }

  if (elements.themeToggle.dataset.enhanced === 'true') {
    return;
  }

  elements.themeToggleIcon.innerHTML = `
    <span class="theme-toggle-track">
      <span class="theme-toggle-glyph theme-toggle-glyph-system">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4.5" y="5.5" width="15" height="10.5" rx="2"></rect>
          <path d="M9 19h6"></path>
          <path d="M12 16v3"></path>
        </svg>
      </span>
      <span class="theme-toggle-glyph theme-toggle-glyph-dark">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 14.4A8.5 8.5 0 1 1 9.6 4 6.8 6.8 0 0 0 20 14.4Z"></path>
        </svg>
      </span>
      <span class="theme-toggle-glyph theme-toggle-glyph-light">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2"></circle>
          <path d="M12 2.8v2.3"></path>
          <path d="M12 18.9v2.3"></path>
          <path d="m5.5 5.5 1.6 1.6"></path>
          <path d="m16.9 16.9 1.6 1.6"></path>
          <path d="M2.8 12h2.3"></path>
          <path d="M18.9 12h2.3"></path>
          <path d="m5.5 18.5 1.6-1.6"></path>
          <path d="m16.9 7.1 1.6-1.6"></path>
        </svg>
      </span>
    </span>
  `;

  elements.themeToggleText.classList.add('sr-only');
  elements.themeToggle.dataset.enhanced = 'true';
}

function bindSkillsCarousel() {
  if (!elements.skillsCarousel || skillsCarouselState.initialized) {
    return;
  }

  const endPointerDrag = (event = null) => {
    if (!skillsCarouselState.isPointerDown) {
      return;
    }

    if (event && event.pointerId !== undefined && skillsCarouselState.pointerId !== event.pointerId) {
      return;
    }

    const releasedCard =
      event && event.target instanceof Element ? event.target.closest('.skill-card') : null;
    const shouldToggleCard =
      skillsCarouselState.dragDistance <= 8 &&
      skillsCarouselState.pressedCard &&
      releasedCard === skillsCarouselState.pressedCard;

    if (skillsCarouselState.dragDistance > 8) {
      skillsCarouselState.suppressClickUntil = performance.now() + 220;
    } else if (shouldToggleCard) {
      toggleSkillCard(skillsCarouselState.pressedCard);
      skillsCarouselState.suppressClickUntil = performance.now() + 220;
    }

    elements.skillsCarousel.classList.remove('is-dragging');
    skillsCarouselState.pointerId = null;
    skillsCarouselState.isPointerDown = false;
    skillsCarouselState.dragDistance = 0;
    skillsCarouselState.pressedCard = null;
    setSkillsCarouselPause('pointer', false);
  };

  elements.skillsCarousel.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) {
      return;
    }

    skillsCarouselState.pointerId = event.pointerId;
    skillsCarouselState.isPointerDown = true;
    skillsCarouselState.dragDistance = 0;
    skillsCarouselState.lastPointerX = event.clientX;
    skillsCarouselState.lastMoveTime = performance.now();
    skillsCarouselState.pressedCard = event.target instanceof Element ? event.target.closest('.skill-card') : null;
    skillsCarouselState.momentum = 0;
    skillsCarouselState.scrollCarry = 0;
    elements.skillsCarousel.classList.add('is-dragging');
    setSkillsCarouselPause('pointer', true);

    if (event.cancelable) {
      event.preventDefault();
    }
  });

  window.addEventListener('pointermove', (event) => {
    if (!skillsCarouselState.isPointerDown || skillsCarouselState.pointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - skillsCarouselState.lastPointerX;
    if (!deltaX) {
      return;
    }

    if (event.cancelable) {
      event.preventDefault();
    }

    elements.skillsCarousel.scrollLeft -= deltaX;
    wrapSkillsCarouselScroll();

    const now = performance.now();
    const elapsed = Math.max(now - skillsCarouselState.lastMoveTime, 1);
    skillsCarouselState.momentum = ((-deltaX) / elapsed) * 1000;
    skillsCarouselState.dragDistance += Math.abs(deltaX);
    skillsCarouselState.lastPointerX = event.clientX;
    skillsCarouselState.lastMoveTime = now;
  });

  window.addEventListener('pointerup', (event) => {
    endPointerDrag(event);
  });

  window.addEventListener('pointercancel', (event) => {
    endPointerDrag(event);
  });

  elements.skillsCarousel.addEventListener('dragstart', (event) => {
    event.preventDefault();
  });

  elements.skillsCarousel.addEventListener('focusin', () => {
    setSkillsCarouselPause('focus', true);
  });

  elements.skillsCarousel.addEventListener('focusout', () => {
    requestAnimationFrame(() => {
      setSkillsCarouselPause('focus', elements.skillsCarousel.contains(document.activeElement));
    });
  });

  window.addEventListener(
    'resize',
    () => {
      scheduleSkillsCarouselLayout(true);
    },
    { passive: true }
  );

  skillsCarouselState.initialized = true;
  startSkillsCarouselLoop();
}

function resolveClickEffectPoint(event) {
  if (event.clientX || event.clientY) {
    return {
      x: event.clientX,
      y: event.clientY
    };
  }

  if (event.target instanceof Element) {
    const bounds = event.target.getBoundingClientRect();
    return {
      x: bounds.left + bounds.width / 2,
      y: bounds.top + bounds.height / 2
    };
  }

  return {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  };
}

function resolveClickEffectSize(target) {
  if (target.closest('.hero-name, .section-title')) {
    return 196;
  }

  if (target.closest('.button, .theme-toggle, .language-link, .skill-card, .project-card, .certificate-card, .about-postcard-toggle')) {
    return 164;
  }

  return 132;
}

function spawnClickEffect(x, y, size = 132) {
  if (!elements.clickFxLayer) {
    return;
  }

  const burst = document.createElement('span');
  burst.className = 'click-burst';
  burst.style.left = `${x}px`;
  burst.style.top = `${y}px`;
  burst.style.setProperty('--click-size', `${size}px`);

  for (let index = 0; index < 8; index += 1) {
    const spark = document.createElement('span');
    spark.className = 'click-spark';
    spark.style.setProperty('--spark-angle', `${index * 45}deg`);
    spark.style.setProperty('--spark-distance', `${Math.round(size * (0.32 + (index % 3) * 0.08))}px`);
    spark.style.setProperty('--spark-delay', `${index * 16}ms`);
    burst.appendChild(spark);
  }

  burst.addEventListener('animationend', (event) => {
    if (event.target === burst) {
      burst.remove();
    }
  });

  elements.clickFxLayer.appendChild(burst);
}

function setSkillsCarouselPause(reason, shouldPause) {
  if (shouldPause) {
    skillsCarouselState.pauseReasons.add(reason);
  } else {
    skillsCarouselState.pauseReasons.delete(reason);
  }
}

function isSkillsCarouselPaused() {
  return skillsCarouselState.pauseReasons.size > 0;
}

function scheduleSkillsCarouselLayout(resetPosition = false) {
  if (!elements.skillsCarousel || !elements.skillsGrid) {
    return;
  }

  if (skillsCarouselState.refreshRafId) {
    cancelAnimationFrame(skillsCarouselState.refreshRafId);
  }

  skillsCarouselState.refreshRafId = requestAnimationFrame(() => {
    skillsCarouselState.refreshRafId = 0;
    refreshSkillsCarouselLayout(resetPosition);
  });
}

function refreshSkillsCarouselLayout(resetPosition = false) {
  if (!elements.skillsCarousel || !elements.skillsGrid || !skillsCarouselState.itemsPerSet) {
    return;
  }

  const cards = elements.skillsGrid.children;
  const firstOriginal = cards[skillsCarouselState.itemsPerSet];
  const firstTrailingSet = cards[skillsCarouselState.itemsPerSet * 2];

  if (!firstOriginal || !firstTrailingSet) {
    return;
  }

  const setWidth = firstTrailingSet.offsetLeft - firstOriginal.offsetLeft;
  if (setWidth <= 0) {
    return;
  }

  skillsCarouselState.setWidth = setWidth;

  if (resetPosition || elements.skillsCarousel.scrollLeft === 0) {
    elements.skillsCarousel.scrollLeft = setWidth;
    return;
  }

  wrapSkillsCarouselScroll();
}

function wrapSkillsCarouselScroll() {
  if (!elements.skillsCarousel || !skillsCarouselState.setWidth) {
    return;
  }

  if (elements.skillsCarousel.scrollLeft <= 0) {
    elements.skillsCarousel.scrollLeft += skillsCarouselState.setWidth;
  } else if (elements.skillsCarousel.scrollLeft >= skillsCarouselState.setWidth * 2) {
    elements.skillsCarousel.scrollLeft -= skillsCarouselState.setWidth;
  }
}

function startSkillsCarouselLoop() {
  if (skillsCarouselState.rafId) {
    return;
  }

  const tick = (time) => {
    const elapsed = skillsCarouselState.lastFrameTime ? Math.min(time - skillsCarouselState.lastFrameTime, 40) : 16;
    skillsCarouselState.lastFrameTime = time;

    if (
      elements.skillsCarousel &&
      skillsCarouselState.setWidth > 0 &&
      !skillsCarouselState.isPointerDown &&
      !isSkillsCarouselPaused()
    ) {
      let velocity = skillsCarouselState.baseSpeed;

      if (Math.abs(skillsCarouselState.momentum) > 1) {
        velocity += skillsCarouselState.momentum;
        skillsCarouselState.momentum *= Math.pow(0.92, elapsed / 16);
      } else {
        skillsCarouselState.momentum = 0;
      }

      const nextDelta = velocity * (elapsed / 1000) + skillsCarouselState.scrollCarry;
      const appliedDelta = nextDelta > 0 ? Math.floor(nextDelta) : Math.ceil(nextDelta);
      skillsCarouselState.scrollCarry = nextDelta - appliedDelta;

      if (appliedDelta !== 0) {
        elements.skillsCarousel.scrollLeft += appliedDelta;
        wrapSkillsCarouselScroll();
      }
    } else if (!skillsCarouselState.isPointerDown && Math.abs(skillsCarouselState.momentum) > 1) {
      skillsCarouselState.momentum *= Math.pow(0.84, elapsed / 16);

      if (Math.abs(skillsCarouselState.momentum) < 1) {
        skillsCarouselState.momentum = 0;
      }
    }

    skillsCarouselState.rafId = requestAnimationFrame(tick);
  };

  skillsCarouselState.rafId = requestAnimationFrame(tick);
}

function setSkillCardFlipped(card, isFlipped) {
  card.classList.toggle('is-flipped', isFlipped);

  if (card.getAttribute('aria-hidden') !== 'true') {
    card.setAttribute('aria-pressed', String(isFlipped));
  }
}

function toggleSkillCard(card) {
  if (!card) {
    return;
  }

  const nextState = !card.classList.contains('is-flipped');
  closeOpenSkillCards(nextState ? card : null);
  setSkillCardFlipped(card, nextState);
  syncSkillsCarouselPauseState();
}

function closeOpenSkillCards(exceptCard = null) {
  if (!elements.skillsGrid) {
    return;
  }

  elements.skillsGrid.querySelectorAll('.skill-card.is-flipped').forEach((card) => {
    if (card !== exceptCard) {
      setSkillCardFlipped(card, false);
    }
  });
}

function syncSkillsCarouselPauseState() {
  if (!elements.skillsGrid) {
    return;
  }

  setSkillsCarouselPause('flipped', Boolean(elements.skillsGrid.querySelector('.skill-card.is-flipped')));
}

function shouldIgnoreSkillCardClick() {
  return performance.now() < skillsCarouselState.suppressClickUntil;
}

function buildSkillCard(skill, { clone = false } = {}) {
  const article = document.createElement('article');
  article.className = 'skill-card';

  if (clone) {
    article.tabIndex = -1;
    article.setAttribute('aria-hidden', 'true');
  } else {
    article.tabIndex = 0;
    article.setAttribute('role', 'button');
    article.setAttribute('aria-pressed', 'false');
    article.setAttribute('aria-label', `${skill.title}. ${skill.description}`);
  }

  const flip = document.createElement('div');
  flip.className = 'skill-card-flip';

  const front = document.createElement('div');
  front.className = 'skill-card-face skill-card-front';

  const frontTag = document.createElement('span');
  frontTag.className = 'skill-card-tag';
  frontTag.textContent = skill.tag;

  const media = document.createElement('div');
  media.className = 'skill-card-media';

  const image = document.createElement('img');
  image.src = skill.image;
  image.alt = skill.alt;
  image.loading = 'lazy';
  image.draggable = false;
  media.appendChild(image);

  const frontTitle = document.createElement('h3');
  frontTitle.className = 'skill-card-front-title';
  frontTitle.textContent = skill.title;

  const tag = document.createElement('span');
  tag.className = 'skill-card-tag';
  tag.textContent = skill.tag;

  const body = document.createElement('div');
  body.className = 'skill-card-face skill-card-back';

  const title = document.createElement('h3');
  title.textContent = skill.title;

  const description = document.createElement('p');
  description.textContent = skill.description;

  front.append(frontTag, media, frontTitle);
  body.append(tag, title, description);
  flip.append(front, body);
  article.appendChild(flip);

  article.addEventListener('click', (event) => {
    if (shouldIgnoreSkillCardClick()) {
      event.preventDefault();
      return;
    }

    toggleSkillCard(article);
  });

  if (!clone) {
    article.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleSkillCard(article);
      }
    });
  }

  return article;
}

function renderParagraphs(container, paragraphs) {
  const nodes = paragraphs.map((paragraph) => {
    const text = document.createElement('p');
    text.textContent = paragraph;
    return text;
  });

  container.replaceChildren(...nodes);
}

function renderSkills(skills) {
  if (!elements.skillsGrid) {
    return;
  }

  const cards = [
    ...skills.map((skill) => buildSkillCard(skill, { clone: true })),
    ...skills.map((skill) => buildSkillCard(skill)),
    ...skills.map((skill) => buildSkillCard(skill, { clone: true }))
  ];

  elements.skillsGrid.replaceChildren(...cards);
  skillsCarouselState.itemsPerSet = skills.length;
  skillsCarouselState.momentum = 0;
  skillsCarouselState.scrollCarry = 0;
  syncSkillsCarouselPauseState();
  elements.skillsGrid.querySelectorAll('img').forEach((image) => {
    if (!image.complete) {
      image.addEventListener(
        'load',
        () => {
          scheduleSkillsCarouselLayout(true);
        },
        { once: true }
      );
    }
  });
  scheduleSkillsCarouselLayout(true);
}

function renderSkillsMeta(groups) {
  const cards = groups.map((group) => {
    const article = document.createElement('article');
    article.className = 'skills-meta-card';

    const title = document.createElement('h3');
    title.className = 'skills-meta-card-title';
    title.textContent = group.title;

    const list = document.createElement('div');
    list.className = 'skills-meta-list';

    group.items.forEach((item) => {
      const chip = document.createElement('span');
      chip.className = 'skills-meta-chip';
      chip.textContent = item;
      list.appendChild(chip);
    });

    article.append(title, list);
    return article;
  });

  elements.skillsMetaGrid.replaceChildren(...cards);
}

function renderProjects(projects) {
  const cards = projects.map((project) => {
    const article = document.createElement('article');
    article.className = 'project-card';
    article.tabIndex = 0;
    article.setAttribute('aria-label', `${project.title}. ${project.description}`);

    const media = document.createElement('div');
    media.className = 'project-card-media';

    const image = document.createElement('img');
    image.src = project.image;
    image.alt = project.alt;
    image.loading = 'lazy';
    media.appendChild(image);

    const body = document.createElement('div');
    body.className = 'project-card-body';

    if (project.tag) {
      const tag = document.createElement('span');
      tag.className = 'project-card-tag';
      tag.textContent = project.tag;
      body.appendChild(tag);
    }

    const title = document.createElement('h3');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.className = 'project-description';
    description.textContent = project.description;

    const techLabel = document.createElement('p');
    techLabel.className = 'project-tech-label';
    techLabel.textContent = project.techLabel;

    const techList = document.createElement('div');
    techList.className = 'tech-list';
    project.techs.forEach((tech) => {
      const chip = document.createElement('span');
      chip.className = 'tech-chip';
      chip.textContent = tech;
      techList.appendChild(chip);
    });

    const link = document.createElement('a');
    link.className = 'button button-primary project-link';
    link.href = project.link;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = project.linkLabel;
    link.setAttribute('aria-label', `${project.linkLabel}: ${project.title}`);

    body.append(title, description, techLabel, techList, link);
    article.append(media, body);
    return article;
  });

  elements.projectsGrid.replaceChildren(...cards);
}

function renderCertificates(certificates) {
  const cards = certificates.map((certificate) => {
    const article = document.createElement('article');
    article.className = 'certificate-card';

    const link = document.createElement('a');
    link.href = certificate.image;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `${certificate.linkLabel}: ${certificate.title}`);

    const image = document.createElement('img');
    image.src = certificate.image;
    image.alt = certificate.alt;
    image.loading = 'lazy';

    const body = document.createElement('div');
    body.className = 'certificate-card-body';

    const title = document.createElement('h3');
    title.textContent = certificate.title;

    const description = document.createElement('p');
    description.textContent = certificate.linkLabel;

    body.append(title, description);
    link.append(image, body);
    article.appendChild(link);
    return article;
  });

  elements.certificatesGrid.replaceChildren(...cards);
}

function startHeroNameAnimation(finalText) {
  const prefersReducedMotion = shouldReduceVisualEffects();

  if (prefersReducedMotion) {
    elements.heroName.textContent = finalText;
    elements.heroName.setAttribute('aria-label', finalText);
    return;
  }

  elements.heroName.replaceChildren(...buildHeroNameParticles(finalText));
  elements.heroName.setAttribute('aria-label', finalText);
}

function startHeroTyping(lines) {
  if (heroTypingTimeout) {
    window.clearTimeout(heroTypingTimeout);
    heroTypingTimeout = null;
  }

  const content = lines.map((line) => `> ${line}`).join('\n');

  if (shouldReduceVisualEffects()) {
    elements.heroTyped.textContent = content;
    return;
  }

  let index = 0;

  elements.heroTyped.textContent = '';

  function typeNextCharacter() {
    elements.heroTyped.textContent = content.slice(0, index);
    index += 1;

    if (index <= content.length) {
      const lastCharacter = content[index - 1];
      const delay = lastCharacter === '\n' ? 220 : 24;
      heroTypingTimeout = window.setTimeout(typeNextCharacter, delay);
    } else {
      heroTypingTimeout = null;
    }
  }

  typeNextCharacter();
}

function getValue(source, path) {
  return path.split('.').reduce((value, key) => {
    if (value && Object.prototype.hasOwnProperty.call(value, key)) {
      return value[key];
    }
    return null;
  }, source);
}

function buildHeroNameParticles(text) {
  return text.split('').map((character, index) => {
    const charElement = document.createElement('span');
    charElement.className = 'name-char';
    charElement.style.setProperty('--char-index', String(index));
    charElement.setAttribute('aria-hidden', 'true');

    if (character === ' ') {
      charElement.classList.add('is-space');
      charElement.innerHTML = '&nbsp;';
      return charElement;
    }

    charElement.style.setProperty('--drift-x', `${randomBetween(-42, 42)}px`);
    charElement.style.setProperty('--drift-y', `${randomBetween(-28, 28)}px`);
    charElement.style.setProperty('--drift-rotate', `${randomBetween(-28, 28)}deg`);

    const glyph = document.createElement('span');
    glyph.className = 'name-glyph';
    glyph.textContent = character;
    charElement.appendChild(glyph);

    const dustPalette = ['dust-warm', 'dust-cool', ''];
    Array.from({ length: 5 }).forEach((_, particleIndex) => {
      const particle = document.createElement('span');
      const palette = dustPalette[particleIndex % dustPalette.length];

      particle.className = `dust-particle${palette ? ` ${palette}` : ''}`;
      particle.style.setProperty('--dust-delay', `${particleIndex * 34}ms`);
      particle.style.setProperty('--dust-x-start', `${randomBetween(-54, 54)}px`);
      particle.style.setProperty('--dust-y-start', `${randomBetween(-40, 40)}px`);
      particle.style.setProperty('--dust-x-end', `${randomBetween(-4, 4)}px`);
      particle.style.setProperty('--dust-y-end', `${randomBetween(-4, 4)}px`);
      charElement.appendChild(particle);
    });

    return charElement;
  });
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
