import type { Articule } from "../types/articule_interface";

export const ArticulesListTotal: Articule[] = [
  {
    id: 1,
    title: "Creatividad e Innovación Digital",
    slug: "creatividad-e-innovacion-digital",
    images_path: [
      "/articule-1/image-1.jpeg",
      "/articule-1/image-2.jpeg",
      "/articule-1/image-3.jpeg",
    ],
    info: `La creatividad e innovación digital son habilidades fundamentales en la sociedad actual, ya que permiten aprovechar la tecnología para desarrollar ideas originales, resolver problemas y generar nuevas oportunidades. La creatividad digital consiste en utilizar herramientas tecnológicas para expresar ideas, diseñar contenidos y explorar diferentes formas de comunicación. Por otro lado, la innovación digital busca transformar esas ideas en soluciones prácticas que aporten valor a las personas y a las organizaciones.
    Estas competencias fomentan el pensamiento crítico, la imaginación y la capacidad de adaptación ante los constantes cambios tecnológicos. Mediante el uso de plataformas digitales, aplicaciones y recursos interactivos, es posible crear proyectos, mejorar procesos y desarrollar propuestas que respondan a las necesidades del entorno.`,
    subthemes: [
      {
        id: 1,
        title: "Pensamiento creativo",
        info: "Capacidad de generar ideas originales y encontrar diferentes soluciones a los problemas mediante la imaginación y la tecnología.",
        image_path: "/articule-1/subtheme-1.jpeg",
      },
      {
        id: 2,
        title: "Innovación tecnológica",
        info: "Uso de herramientas digitales para crear, mejorar y transformar productos, servicios y procesos.",
        image_path: "/articule-1/subtheme-2.jpeg",
      },
    ],
  },
  {
    id: 2,
    title: "Literacidad Digital",
    slug: "literacidad-digital",
    info: `La literacidad digital comprende el conjunto de conocimientos y habilidades necesarios para buscar, comprender, analizar, evaluar y comunicar información mediante herramientas y plataformas digitales. En un entorno donde diariamente se genera una gran cantidad de contenido, no basta con saber utilizar dispositivos tecnológicos, también es importante identificar información confiable y comprender cómo se construye y comparte.
    Desarrollar la literacidad digital permite participar de manera activa y responsable en la sociedad de la información. Incluye el manejo de buscadores, la interpretación de contenidos multimedia, la evaluación de fuentes y la capacidad de comunicar ideas mediante diferentes medios digitales. Estas habilidades son esenciales para el aprendizaje, la investigación y el desarrollo personal y profesional.`,
    images_path: [
      "/articule-2/image-1.jpeg",
      "/articule-2/image-2.jpeg",
      "/articule-2/image-3.jpeg",
    ],
    subthemes: [
      {
        id: 1,
        title: "Búsqueda de información",
        info: "Habilidad para localizar información relevante en internet utilizando buscadores y recursos digitales.",
        image_path: "/articule-2/subtheme-1.jpeg",
      },
      {
        id: 2,
        title: "Pensamiento crítico digital",
        info: "Capacidad para analizar fuentes, verificar información y reconocer contenidos falsos o poco confiables.",
        image_path: "/articule-2/subtheme-2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Desarrollo Digital",
    slug: "desarrollo-digital",
    images_path: [
      "/articule-3/image-1.jpeg",
      "/articule-3/image-2.jpeg",
      "/articule-3/image-3.jpeg",
    ],
    info: `El desarrollo digital hace referencia al proceso de adquisición y fortalecimiento de conocimientos, habilidades y competencias relacionadas con el uso, creación y aprovechamiento de las tecnologías digitales. Su importancia radica en que permite a las personas desenvolverse en entornos tecnológicos, utilizar herramientas especializadas y desarrollar soluciones que faciliten diferentes actividades de la vida cotidiana.
    Este desarrollo implica aprender a utilizar aplicaciones, plataformas, sistemas informáticos y recursos digitales de manera eficiente. También comprende el acercamiento a áreas como la programación, el diseño digital y la gestión de información. A través de la formación continua y la práctica, las personas pueden mejorar sus capacidades tecnológicas y adaptarse a las nuevas exigencias académicas y laborales.`,
    subthemes: [
      {
        id: 1,
        title: "Herramientas digitales",
        info: "Conocimiento y utilización de aplicaciones y plataformas que facilitan el trabajo, el aprendizaje y la comunicación.",
        image_path: "/articule-3/subtheme-1.jpeg",
      },
      {
        id: 2,
        title: "Programación básica",
        info: "Introducción a la creación de instrucciones y algoritmos para desarrollar soluciones mediante código.",
        image_path: "/articule-3/subtheme-2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Certificaciones Digitales",
    slug: "certificaciones-digitales",
    images_path: [
      "/articule-4/image-1.jpeg",
      "/articule-4/image-2.jpeg",
      "/articule-4/image-3.jpeg",
    ],
    info: `Las certificaciones digitales son reconocimientos que permiten demostrar y validar los conocimientos, habilidades y competencias adquiridas en diferentes áreas de la tecnología. Estas acreditaciones pueden obtenerse mediante programas de formación, cursos especializados y evaluaciones que comprueban el dominio de determinadas herramientas, plataformas o conocimientos tecnológicos.
    Su importancia se encuentra en que ofrecen evidencia del aprendizaje y contribuyen al fortalecimiento del perfil académico y profesional. Además, permiten identificar áreas de especialización, establecer objetivos de aprendizaje y mantenerse actualizado frente a los avances tecnológicos. Obtener certificaciones representa una oportunidad para mejorar las posibilidades de desarrollo profesional y demostrar las capacidades adquiridas ante instituciones educativas y organizaciones.`,
    subthemes: [
      {
        id: 1,
        title: "Certificaciones tecnológicas",
        info: "Reconocimientos que validan conocimientos sobre herramientas, plataformas y tecnologías específicas.",
        image_path: "/articule-4/subtheme-1.jpeg",
      },
      {
        id: 2,
        title: "Acreditación de competencias",
        info: "Evaluación y reconocimiento formal de habilidades digitales adquiridas mediante el estudio o la experiencia.",
        image_path: "/articule-4/subtheme-2.png",
      },
    ],
  },
];
