import type { Locale } from "@/types";

const es = {
  common: {
    pending: "Contenido pendiente de confirmación",
    learnMore: "Ver más",
  },
  nav: {
    home: "Inicio",
    about: "Nosotros",
    exports: "Exportaciones",
    imports: "Importaciones",
    consulting: "Consultoría en comercio internacional",
    operations: "Gestión integral de operaciones",
    catalog: "Catálogo",
    contact: "Contacto",
    quote: "Cotizar",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
  },
  hero: {
    eyebrow: "Comercio internacional y logística",
    titleMain: "Conectamos su producción",
    titleAccent: "con el mundo.",
    description:
      "Facilitamos el intercambio entre mercados nacionales e internacionales con un enfoque integral y multimodal en logística, comercio exterior y cadena de suministro.",
    primary: "Explora el catálogo",
    secondary: "Solicita una cotización",
    features: [
      { title: "Comercio", text: "Importación y exportación" },
      { title: "Logística", text: "Enfoque multimodal" },
      { title: "Asesoría", text: "Acompañamiento estratégico" },
    ],
    modes: { sea: "Marítimo", air: "Aéreo", land: "Terrestre" },
    visualCaption: "Del territorio a los mercados del mundo",
  },
  homeServices: {
    eyebrow: "Lo que hacemos",
    title: "Soluciones para el comercio internacional",
    cta: "Conoce nuestros servicios",
    items: [
      {
        title: "Exportaciones",
        text: "Llevamos la oferta productiva colombiana a mercados internacionales.",
      },
      {
        title: "Importaciones",
        text: "Gestión de proveedores, análisis comercial y coordinación logística para traer lo que su empresa necesita.",
      },
      {
        title: "Consultoría en comercio internacional",
        text: "Asesoría estratégica y transferencia de conocimiento para fortalecer sus capacidades.",
      },
      {
        title: "Gestión integral de operaciones",
        text: "Acompañamiento transversal que conecta proveedores, análisis, logística y cliente.",
      },
    ],
  },
  homeAbout: {
    eyebrow: "Quiénes somos",
    title: "Más que un proveedor, un aliado estratégico",
    cta: "Conoce más sobre nosotros",
  },
  homeCatalog: {
    eyebrow: "Oferta exportable",
    title: "Productos colombianos para el mundo",
    text: "Explore nuestro catálogo organizado por categorías, desde productos agropecuarios hasta materiales industriales.",
    cta: "Explora el catálogo",
  },
  ctaBand: {
    title: "¿Listo para llevar su operación al siguiente nivel?",
    text: "Cuéntenos qué necesita importar o exportar y le acompañamos en cada paso del proceso.",
    button: "Solicita una cotización",
  },
  about: {
    eyebrow: "Nosotros",
    title: "Conectamos oportunidades, integramos mercados",
    whoWeAre: "Quiénes somos",
    history: "Nuestra historia",
    mission: "Nuestra misión",
    vision: "Nuestra visión",
    values: "Nuestros valores corporativos",
    philosophy: "Nuestra filosofía",
    valueProposition: "Nuestra propuesta de valor",
  },
  exportsPage: {
    eyebrow: "Exportaciones",
    title: "Llevamos la riqueza productiva de Colombia al mundo",
    intro:
      "Presentamos la oferta de productos colombianos disponibles para mercados internacionales, organizada en un catálogo que se amplía y actualiza constantemente.",
    catalogCta: "Ver catálogo completo",
    quoteCta: "Solicitar cotización de exportación",
    howTitle: "Cómo le acompañamos",
    how: [
      {
        title: "Identificación de oportunidades",
        text: "Conectamos capacidades productivas con oportunidades comerciales alrededor del mundo.",
      },
      {
        title: "Representación comercial",
        text: "Acompañamos y representamos a productores y empresas ante nuevos mercados.",
      },
      {
        title: "Coordinación logística",
        text: "Integramos soluciones logísticas con un enfoque multimodal.",
      },
    ],
    offerTitle: "Nuestra oferta exportable",
    offerText: "Explore las categorías de nuestro catálogo y solicite información sobre cualquier producto.",
  },
  importsPage: {
    eyebrow: "Importaciones",
    title: "Traemos lo que su empresa necesita",
    intro:
      "Acompañamos al cliente durante el proceso de importación, desde la búsqueda de proveedores hasta la coordinación logística de la operación.",
    quoteCta: "Solicitar cotización de importación",
    servicesTitle: "Servicios de importación",
    services: [
      {
        title: "Gestión de proveedores",
        text: "Identificación, contacto y relación con proveedores internacionales.",
      },
      {
        title: "Análisis comercial",
        text: "Evaluación de oportunidades, condiciones y alternativas para cada operación.",
      },
      {
        title: "Coordinación logística",
        text: "Planeación y seguimiento del movimiento de la mercancía.",
      },
      {
        title: "Asesorías y mejora continua",
        text: "Acompañamiento para optimizar sus procesos de importación.",
      },
    ],
  },
  consultingPage: {
    eyebrow: "Consultoría en comercio internacional",
    title: "Conocimiento y experiencia al servicio de su empresa",
    intro:
      "Compartimos conocimiento, transferimos experiencia y brindamos asesoría estratégica para que su organización fortalezca sus capacidades, optimice sus procesos y alcance nuevos niveles de competitividad.",
    cta: "Solicitar una consultoría",
    areasTitle: "Cómo le ayudamos",
    areas: [
      {
        title: "Asesoría estratégica",
        text: "Orientación para tomar decisiones informadas en comercio internacional y logística.",
      },
      {
        title: "Optimización de procesos",
        text: "Análisis y mejora continua de sus operaciones comerciales y logísticas.",
      },
      {
        title: "Transferencia de conocimiento",
        text: "Compartimos la experiencia adquirida en los sectores logístico, marítimo, portuario y multimodal.",
      },
      {
        title: "Acceso a nuevos mercados",
        text: "Acompañamiento para identificar oportunidades y desarrollar relaciones comerciales.",
      },
    ],
  },
  operationsPage: {
    eyebrow: "Gestión integral de operaciones",
    title: "Una visión coordinada de cada operación",
    intro:
      "Una línea de servicio transversal que conecta la gestión de proveedores, el análisis comercial, la coordinación logística y el acompañamiento al cliente.",
    cta: "Solicitar cotización",
    stepsTitle: "Integramos cada etapa",
    steps: [
      { title: "Proveedores", text: "Gestión y relación con productores, fabricantes y proveedores." },
      { title: "Análisis comercial", text: "Evaluación de oportunidades y condiciones de cada operación." },
      { title: "Coordinación logística", text: "Soluciones multimodales: marítimo, aéreo y terrestre." },
      { title: "Acompañamiento", text: "Seguimiento cercano desde el inicio hasta el cierre de la operación." },
    ],
    multimodalTitle: "Enfoque integral y multimodal",
    multimodalText:
      "Nuestra perspectiva integra la logística, el comercio internacional y la gestión de la cadena de suministro, entendiendo que cada operación requiere una visión coordinada de procesos, recursos y soluciones.",
  },
  catalog: {
    eyebrow: "Catálogo / Exportaciones",
    title: "Catálogo de productos exportables",
    text: "Productos colombianos organizados por categorías. Seleccione una categoría o busque un producto específico.",
    search: "Buscar producto…",
    all: "Todas",
    loading: "Cargando catálogo…",
    error: "No se pudo cargar el catálogo.",
    retry: "Reintentar",
    empty: "No se encontraron productos con ese criterio.",
    products: "productos",
    requestQuote: "Solicitar cotización",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hablemos de su próxima operación",
    text: "Complete el formulario y nuestro equipo le responderá a la brevedad.",
    tabs: { quote: "Solicitud de cotización", contact: "Contacto general" },
    channels: "Canales de contacto",
    email: "Correo electrónico",
    whatsapp: "WhatsApp",
    fields: {
      fullName: "Nombre y apellido",
      name: "Nombre",
      company: "Empresa",
      companyOptional: "Empresa (opcional)",
      email: "Correo electrónico",
      phone: "Teléfono / WhatsApp",
      country: "País",
      operation: "Tipo de operación",
      operationPlaceholder: "Seleccione una opción",
      import: "Importación",
      export: "Exportación",
      product: "Producto o servicio de interés",
      volume: "Cantidad o volumen estimado (opcional)",
      message: "Mensaje / requisitos adicionales",
      subject: "Asunto",
      messageGeneral: "Mensaje",
    },
    submit: "Enviar solicitud",
    sending: "Enviando…",
    successTitle: "¡Solicitud enviada!",
    successText: "Gracias por escribirnos. Nuestro equipo se pondrá en contacto con usted pronto.",
    reference: "Referencia",
    another: "Enviar otra solicitud",
    errors: {
      required: "Este campo es obligatorio",
      email: "Ingrese un correo válido",
      phone: "Ingrese un teléfono válido",
      generic: "No pudimos enviar su solicitud. Intente nuevamente.",
    },
  },
  footer: {
    tagline: "Conectamos la riqueza productiva de nuestro territorio con los mercados del mundo.",
    navigation: "Navegación",
    contact: "Contacto",
    rights: "Todos los derechos reservados.",
  },
  whatsapp: {
    label: "Escríbenos por WhatsApp",
    message: "Hola, quiero información sobre sus servicios.",
  },
  images: {
    heroPort: "Puerto de contenedores al atardecer con un buque de carga y grúas",
    exports: "Operarias empacando frutas colombianas para exportación",
    imports: "Coordinadora logística revisando mercancía importada en una bodega",
    consulting: "Consultor en comercio internacional asesorando a clientes",
    operations: "Transporte multimodal: camión, buque de carga y avión",
    history: "Profesional de logística observando un puerto de contenedores al amanecer",
    philosophy: "Familia campesina colombiana cosechando frutas",
    cta: "Apretón de manos frente a un puerto de contenedores",
  },
};

export type Dictionary = typeof es;

const en: Dictionary = {
  common: {
    pending: "Content pending confirmation",
    learnMore: "Learn more",
  },
  nav: {
    home: "Home",
    about: "About Us",
    exports: "Exports",
    imports: "Imports",
    consulting: "International trade consulting",
    operations: "Integrated operations management",
    catalog: "Catalog",
    contact: "Contact",
    quote: "Get a quote",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },
  hero: {
    eyebrow: "International trade & logistics",
    titleMain: "We connect your production",
    titleAccent: "with the world.",
    description:
      "We facilitate trade between domestic and international markets through an integral, multimodal approach to logistics, foreign trade and supply chain management.",
    primary: "Explore the catalog",
    secondary: "Request a quote",
    features: [
      { title: "Trade", text: "Import & export" },
      { title: "Logistics", text: "Multimodal approach" },
      { title: "Advisory", text: "Strategic support" },
    ],
    modes: { sea: "Sea", air: "Air", land: "Land" },
    visualCaption: "Beyond Logistics, Beyond Borders!",
  },
  homeServices: {
    eyebrow: "What we do",
    title: "Solutions for international trade",
    cta: "Discover our services",
    items: [
      {
        title: "Exports",
        text: "We take Colombia's productive offer to international markets.",
      },
      {
        title: "Imports",
        text: "Supplier management, commercial analysis and logistics coordination to bring in what your company needs.",
      },
      {
        title: "International trade consulting",
        text: "Strategic advice and knowledge transfer to strengthen your capabilities.",
      },
      {
        title: "Integrated operations management",
        text: "Cross-cutting support connecting suppliers, analysis, logistics and the client.",
      },
    ],
  },
  homeAbout: {
    eyebrow: "Who we are",
    title: "More than a provider, a strategic ally",
    cta: "Learn more about us",
  },
  homeCatalog: {
    eyebrow: "Export offer",
    title: "Colombian products for the world",
    text: "Explore our catalog organized by category, from agricultural products to industrial materials.",
    cta: "Explore the catalog",
  },
  ctaBand: {
    title: "Ready to take your operation to the next level?",
    text: "Tell us what you need to import or export and we will support you every step of the way.",
    button: "Request a quote",
  },
  about: {
    eyebrow: "About Us",
    title: "We connect opportunities and integrate markets",
    whoWeAre: "Who we are",
    history: "Our story",
    mission: "Our mission",
    vision: "Our vision",
    values: "Our corporate values",
    philosophy: "Our philosophy",
    valueProposition: "Our value proposition",
  },
  exportsPage: {
    eyebrow: "Exports",
    title: "We take Colombia's productive wealth to the world",
    intro:
      "We present the Colombian products available for international markets, organized in a catalog that is constantly expanded and updated.",
    catalogCta: "View full catalog",
    quoteCta: "Request an export quote",
    howTitle: "How we support you",
    how: [
      {
        title: "Identifying opportunities",
        text: "We connect productive capabilities with business opportunities around the world.",
      },
      {
        title: "Commercial representation",
        text: "We support and represent producers and companies before new markets.",
      },
      {
        title: "Logistics coordination",
        text: "We integrate logistics solutions with a multimodal approach.",
      },
    ],
    offerTitle: "Our export offer",
    offerText: "Explore the categories of our catalog and request information about any product.",
  },
  importsPage: {
    eyebrow: "Imports",
    title: "We bring in what your company needs",
    intro:
      "We support our clients throughout the import process, from sourcing suppliers to coordinating the logistics of the operation.",
    quoteCta: "Request an import quote",
    servicesTitle: "Import services",
    services: [
      {
        title: "Supplier management",
        text: "Identifying, contacting and managing relationships with international suppliers.",
      },
      {
        title: "Commercial analysis",
        text: "Evaluating opportunities, conditions and alternatives for each operation.",
      },
      {
        title: "Logistics coordination",
        text: "Planning and tracking the movement of goods.",
      },
      {
        title: "Advisory & continuous improvement",
        text: "Support to optimize your import processes.",
      },
    ],
  },
  consultingPage: {
    eyebrow: "International trade consulting",
    title: "Knowledge and experience at your company's service",
    intro:
      "We share knowledge, transfer experience and provide strategic advice so your organization can strengthen its capabilities, optimize its processes and reach new levels of competitiveness.",
    cta: "Request a consultation",
    areasTitle: "How we help",
    areas: [
      {
        title: "Strategic advice",
        text: "Guidance to make informed decisions in international trade and logistics.",
      },
      {
        title: "Process optimization",
        text: "Analysis and continuous improvement of your commercial and logistics operations.",
      },
      {
        title: "Knowledge transfer",
        text: "We share the experience gained in the logistics, maritime, port and multimodal sectors.",
      },
      {
        title: "Access to new markets",
        text: "Support to identify opportunities and develop business relationships.",
      },
    ],
  },
  operationsPage: {
    eyebrow: "Integrated operations management",
    title: "A coordinated vision of every operation",
    intro:
      "A cross-cutting service line connecting supplier management, commercial analysis, logistics coordination and client support.",
    cta: "Request a quote",
    stepsTitle: "We integrate every stage",
    steps: [
      { title: "Suppliers", text: "Managing relationships with producers, manufacturers and suppliers." },
      { title: "Commercial analysis", text: "Evaluating the opportunities and conditions of each operation." },
      { title: "Logistics coordination", text: "Multimodal solutions: sea, air and land." },
      { title: "Support", text: "Close follow-up from the start to the close of the operation." },
    ],
    multimodalTitle: "Integral and multimodal approach",
    multimodalText:
      "Our perspective integrates logistics, international trade and supply chain management, understanding that every operation requires a coordinated vision of processes, resources and solutions.",
  },
  catalog: {
    eyebrow: "Catalog / Exports",
    title: "Export product catalog",
    text: "Colombian products organized by category. Select a category or search for a specific product.",
    search: "Search product…",
    all: "All",
    loading: "Loading catalog…",
    error: "The catalog could not be loaded.",
    retry: "Retry",
    empty: "No products match your search.",
    products: "products",
    requestQuote: "Request a quote",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your next operation",
    text: "Fill out the form and our team will get back to you shortly.",
    tabs: { quote: "Quote request", contact: "General contact" },
    channels: "Contact channels",
    email: "Email",
    whatsapp: "WhatsApp",
    fields: {
      fullName: "Full name",
      name: "Name",
      company: "Company",
      companyOptional: "Company (optional)",
      email: "Email",
      phone: "Phone / WhatsApp",
      country: "Country",
      operation: "Operation type",
      operationPlaceholder: "Select an option",
      import: "Import",
      export: "Export",
      product: "Product or service of interest",
      volume: "Estimated quantity or volume (optional)",
      message: "Message / additional requirements",
      subject: "Subject",
      messageGeneral: "Message",
    },
    submit: "Send request",
    sending: "Sending…",
    successTitle: "Request sent!",
    successText: "Thank you for reaching out. Our team will contact you soon.",
    reference: "Reference",
    another: "Send another request",
    errors: {
      required: "This field is required",
      email: "Enter a valid email",
      phone: "Enter a valid phone number",
      generic: "We could not send your request. Please try again.",
    },
  },
  footer: {
    tagline: "We connect the productive wealth of our territory with the markets of the world.",
    navigation: "Navigation",
    contact: "Contact",
    rights: "All rights reserved.",
  },
  whatsapp: {
    label: "Chat with us on WhatsApp",
    message: "Hello, I would like information about your services.",
  },
  images: {
    heroPort: "Container port at sunset with a cargo ship and cranes",
    exports: "Workers packing Colombian fruit for export",
    imports: "Logistics coordinator checking imported goods in a warehouse",
    consulting: "International trade consultant advising clients",
    operations: "Multimodal transport: truck, cargo ship and airplane",
    history: "Logistics professional looking over a container port at sunrise",
    philosophy: "Colombian farming family harvesting fruit",
    cta: "Handshake in front of a container port",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { es, en };
