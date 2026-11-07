import type { LocalizedText } from "@/types";

type Paragraphs = Record<"es" | "en", string[]>;

export interface CorporateValue {
  title: LocalizedText;
  text: LocalizedText;
}

export const whoWeAre: Paragraphs = {
  es: [
    "NEXUS TRADE & LOGISTICS es una compañía concebida para conectar oportunidades comerciales y facilitar el intercambio entre mercados nacionales e internacionales.",
    "Nuestra perspectiva integra la logística, el comercio internacional y la gestión de la cadena de suministro, entendiendo que cada operación requiere una visión coordinada de procesos, recursos y soluciones.",
    "A través de un enfoque integral y multimodal, buscamos facilitar las conexiones entre productores, fabricantes, proveedores y empresas, promoviendo el acceso a nuevos mercados y el desarrollo de relaciones comerciales.",
    "Entendemos la logística como un componente estratégico de la economía global y como una herramienta fundamental para impulsar la competitividad, integrar mercados y generar valor.",
  ],
  en: [
    "NEXUS TRADE & LOGISTICS is a company conceived to connect business opportunities and facilitate trade between domestic and international markets.",
    "Our perspective integrates logistics, international trade and supply chain management, understanding that every operation requires a coordinated vision of processes, resources and solutions.",
    "Through an integral and multimodal approach, we seek to facilitate connections between producers, manufacturers, suppliers and companies, promoting access to new markets and the development of business relationships.",
    "We understand logistics as a strategic component of the global economy and as a fundamental tool to boost competitiveness, integrate markets and create value.",
  ],
};

export const history: Paragraphs = {
  es: [
    "NEXUS TRADE & LOGISTICS nace de una pasión que se fue construyendo a lo largo de los años: el interés por la logística, el comercio internacional y el fascinante mundo que conecta países, empresas y mercados.",
    "Lo que comenzó como un camino de aprendizaje y experiencia en el sector logístico, marítimo, portuario y multimodal, se convirtió en una visión respaldada por la formación académica, el conocimiento de los procesos del comercio y la convicción de que siempre es posible ir más allá.",
    "Después de años de conocer, aprender y comprender la dinámica de esta industria, surgió la decisión de transformar esa experiencia y conocimiento en un proyecto empresarial propio, con una visión global y el propósito de conectar capacidades productivas con oportunidades comerciales alrededor del mundo.",
    "Así nace Nexus: de la pasión convertida en propósito, del conocimiento transformado en iniciativa y de la convicción de que los grandes proyectos comienzan cuando existe la determinación de hacerlos realidad.",
  ],
  en: [
    "NEXUS TRADE & LOGISTICS was born from a passion built over the years: an interest in logistics, international trade and the fascinating world that connects countries, companies and markets.",
    "What began as a path of learning and experience in the logistics, maritime, port and multimodal sectors became a vision backed by academic training, knowledge of trade processes and the conviction that it is always possible to go further.",
    "After years of getting to know, learning and understanding the dynamics of this industry, the decision arose to transform that experience and knowledge into our own business project, with a global vision and the purpose of connecting productive capabilities with business opportunities around the world.",
    "That is how Nexus was born: from passion turned into purpose, from knowledge transformed into initiative, and from the conviction that great projects begin when there is the determination to make them happen.",
  ],
};

export const mission: Paragraphs = {
  es: [
    "Conectar la riqueza productiva de nuestro territorio con los mercados del mundo, mediante soluciones integrales de logística y comercio internacional que transformen oportunidades en valor, impulsen el crecimiento empresarial y contribuyan al desarrollo económico y social de nuestra región.",
  ],
  en: [
    "To connect the productive wealth of our territory with the markets of the world, through integral logistics and international trade solutions that turn opportunities into value, drive business growth and contribute to the economic and social development of our region.",
  ],
};

export const vision: Paragraphs = {
  es: [
    "Ser una compañía de reconocimiento nacional e internacional, referente en la integración del comercio internacional y la logística, reconocida por conectar la riqueza productiva de nuestro territorio con los mercados globales.",
    "Aspiramos a trascender fronteras, no solo participando en el desarrollo de operaciones comerciales y logísticas, sino también compartiendo conocimiento, transfiriendo experiencia y brindando asesoría estratégica que permita a otras organizaciones fortalecer sus capacidades, optimizar sus procesos y alcanzar nuevos niveles de competitividad.",
  ],
  en: [
    "To be a nationally and internationally recognized company, a benchmark in the integration of international trade and logistics, known for connecting the productive wealth of our territory with global markets.",
    "We aspire to transcend borders, not only by taking part in commercial and logistics operations, but also by sharing knowledge, transferring experience and providing strategic advice that enables other organizations to strengthen their capabilities, optimize their processes and reach new levels of competitiveness.",
  ],
};

export const values: CorporateValue[] = [
  {
    title: { es: "Integridad y transparencia", en: "Integrity and transparency" },
    text: {
      es: "Actuamos con honestidad, ética y responsabilidad, construyendo relaciones comerciales basadas en la confianza, la transparencia y el cumplimiento de nuestros compromisos.",
      en: "We act with honesty, ethics and responsibility, building business relationships based on trust, transparency and the fulfillment of our commitments.",
    },
  },
  {
    title: { es: "Compromiso", en: "Commitment" },
    text: {
      es: "Asumimos cada proyecto y operación con dedicación, responsabilidad y sentido de pertenencia, procurando ofrecer soluciones que respondan a las necesidades de nuestros clientes.",
      en: "We take on every project and operation with dedication, responsibility and a sense of belonging, striving to offer solutions that meet our clients' needs.",
    },
  },
  {
    title: { es: "Excelencia", en: "Excellence" },
    text: {
      es: "Buscamos la mejora continua en nuestros procesos, servicios y operaciones, promoviendo la calidad, la eficiencia y las buenas prácticas empresariales.",
      en: "We pursue continuous improvement in our processes, services and operations, promoting quality, efficiency and sound business practices.",
    },
  },
  {
    title: { es: "Innovación", en: "Innovation" },
    text: {
      es: "Promovemos nuevas ideas, tecnologías y estrategias que permitan optimizar procesos, desarrollar soluciones y responder a las dinámicas cambiantes del comercio y la logística global.",
      en: "We promote new ideas, technologies and strategies to optimize processes, develop solutions and respond to the changing dynamics of global trade and logistics.",
    },
  },
  {
    title: { es: "Cooperación y conexión", en: "Cooperation and connection" },
    text: {
      es: "Creemos en el valor de las relaciones estratégicas, el trabajo colaborativo y la integración de capacidades para construir oportunidades y alcanzar objetivos comunes.",
      en: "We believe in the value of strategic relationships, collaborative work and the integration of capabilities to build opportunities and achieve common goals.",
    },
  },
  {
    title: { es: "Conocimiento y desarrollo", en: "Knowledge and development" },
    text: {
      es: "Valoramos el aprendizaje continuo, la experiencia y la transferencia de conocimiento como herramientas para fortalecer las capacidades empresariales y contribuir al crecimiento del sector.",
      en: "We value continuous learning, experience and knowledge transfer as tools to strengthen business capabilities and contribute to the growth of the sector.",
    },
  },
];

export const philosophy: Paragraphs = {
  es: [
    "En NEXUS TRADE & LOGISTICS creemos que detrás de cada operación hay mucho más que una carga: hay familias, sueños, esfuerzo y el trabajo de quienes hacen posible que la riqueza de nuestra tierra llegue al mundo.",
    "Entendemos el comercio y la logística como actividades que van más allá del movimiento de mercancías. Por eso, los desarrollamos con pasión, compromiso y sentido humano, convencidos de que nuestra esencia está en llevar el alma de nuestra tierra y la riqueza productiva de nuestro país hacia los grandes mercados internacionales, convirtiendo cada oportunidad en una posibilidad de crecimiento y desarrollo.",
  ],
  en: [
    "At NEXUS TRADE & LOGISTICS we believe that behind every operation there is much more than cargo: there are families, dreams, effort and the work of those who make it possible for the wealth of our land to reach the world.",
    "We understand trade and logistics as activities that go beyond the movement of goods. That is why we carry them out with passion, commitment and a human touch, convinced that our essence lies in taking the soul of our land and the productive wealth of our country to the great international markets, turning every opportunity into a chance for growth and development.",
  ],
};

export const valueProposition: Paragraphs = {
  es: [
    "En NEXUS TRADE & LOGISTICS vamos más allá de enviar y recibir mercancías. Somos una compañía que acompaña, representa y participa activamente en el comercio internacional, tanto en la gestión de operaciones para nuestros clientes como en el desarrollo de actividades comerciales propias de importación y exportación.",
    "Integramos conocimiento, gestión comercial y soluciones logísticas para identificar oportunidades, facilitar operaciones y acercar empresas y mercados. Nuestra participación comprende desde el acompañamiento y la representación comercial hasta la coordinación de procesos logísticos y operativos.",
    "Nos distingue la pasión por la logística, las operaciones y el comercio mundial, entendiendo que cada movimiento representa una oportunidad, cada operación implica un compromiso y cada producto lleva consigo el esfuerzo de quienes lo hacen posible.",
    "Nuestro propósito es ser más que un proveedor de servicios: convertirnos en un aliado estratégico que aporte conocimiento, genere confianza y contribuya al crecimiento de nuestros clientes y al desarrollo del comercio internacional.",
  ],
  en: [
    "At NEXUS TRADE & LOGISTICS we go beyond shipping and receiving goods. We are a company that supports, represents and actively participates in international trade, both in managing operations for our clients and in carrying out our own import and export activities.",
    "We integrate knowledge, commercial management and logistics solutions to identify opportunities, facilitate operations and bring companies and markets closer. Our involvement ranges from support and commercial representation to the coordination of logistics and operational processes.",
    "We are distinguished by our passion for logistics, operations and global trade, understanding that every movement represents an opportunity, every operation implies a commitment and every product carries the effort of those who make it possible.",
    "Our purpose is to be more than a service provider: to become a strategic ally that brings knowledge, builds trust and contributes to our clients' growth and to the development of international trade.",
  ],
};
