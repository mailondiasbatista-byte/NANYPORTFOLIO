export type Language = 'pt' | 'fr';

export type ProjectCategory = 'all' | 'diplomacy' | 'tech' | 'leadership';

export interface ProjectItem {
  id: string;
  category: Exclude<ProjectCategory, 'all'>;
  featured?: boolean;
  kicker: Record<Language, string>;
  title: Record<Language, string>;
  year: string;
  institution: Record<Language, string>;
  summary: Record<Language, string>;
  details: Record<Language, string[]>;
  competencies: Record<Language, string[]>;
  externalUrl?: string;
  externalLabel?: Record<Language, string>;
}

export interface SkillGroup {
  id: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  items: {
    name: Record<Language, string>;
    meta: Record<Language, string>;
  }[];
}

export interface LeadershipRole {
  period: string;
  role: Record<Language, string>;
  organization: string;
}

export interface EducationItem {
  year: string;
  degree: Record<Language, string>;
  institution: Record<Language, string>;
  note?: Record<Language, string>;
}

export interface CertificationItem {
  year: string;
  title: Record<Language, string>;
  focus: Record<Language, string>;
}

export const PROFILE = {
  fullName: 'Gomes Isnane Waldires Ntcholba',
  wordmark: 'Gomes Ntcholba',
  portraitPath: '/assets/gomes-portrait.jpg',
  cvPdfPath: '/assets/aistudio/CV_Gomes_Isnane_Waldires_Ntcholba_716c5afd.pdf',
  phone: '+212 771 016 214',
  email: 'heltongomes728@gmail.com',
  age: 23,
  origin: {
    pt: 'Guiné-Bissau',
    fr: 'Guinée-Bissau',
  },
  nationality: {
    pt: 'Bissau-guineense',
    fr: 'Bissau-Guinéen',
  },
  location: {
    pt: 'Marrocos',
    fr: 'Maroc',
  },
};

export const UI_COPY = {
  nav: {
    projects: { pt: 'Projetos', fr: 'Projets' },
    experience: { pt: 'Experiência', fr: 'Expérience' },
    skills: { pt: 'Competências', fr: 'Compétences' },
    education: { pt: 'Formação', fr: 'Formation' },
    contact: { pt: 'Contacto', fr: 'Contact' },
    downloadCv: { pt: 'Descarregar CV', fr: 'Télécharger CV' },
  },
  hero: {
    kicker: {
      pt: 'Jurista · Relações Internacionais · Marrocos',
      fr: 'Juriste · Relations Internationales · Maroc',
    },
    subtitle: {
      pt: 'Direito Público, Diplomacia & Soluções Digitais',
      fr: 'Droit Public, Diplomatie & Développement Web',
    },
    bio: {
      pt: 'Bissau-guineense de 23 anos, licenciado em Direito Público pela Universidade Hassan II de Casablanca, com foco em Relações Internacionais, Diplomacia e Direito Internacional. Experiência prática adquirida em representação diplomática, aliada a uma trajetória sólida de liderança associativa e formação técnica em Desenvolvimento Web.',
      fr: 'Bissau-Guinéen de 23 ans, licencié en Droit Public à l’Université Hassan II de Casablanca, tourné vers les Relations Internationales, la Diplomatie et le Droit International. Expérience acquise au sein d’une représentation diplomatique, enrichie par un engagement associatif de premier plan et une certification en Développement Web.',
    },
    primaryCta: { pt: 'Explorar Projetos', fr: 'Explorer les Projets' },
    secondaryCta: { pt: 'Entrar em Contacto', fr: 'Prendre Contact' },
    portraitCaption: {
      pt: 'Licenciatura em Direito Público · Universidade Hassan II',
      fr: 'Licence en Droit Public · Université Hassan II',
    },
  },
  metrics: [
    {
      label: { pt: 'Formação Jurídica', fr: 'Formation Juridique' },
      value: '12,4 / 20',
      detail: { pt: 'Direito Público · Menção Assez Bien (2026)', fr: 'Droit Public · Mention Assez Bien (2026)' },
    },
    {
      label: { pt: 'Missão Diplomática', fr: 'Mission Diplomatique' },
      value: { pt: '3 meses', fr: '3 mois' },
      detail: { pt: 'Embaixada da Guiné-Bissau em Marrocos', fr: 'Ambassade de Guinée-Bissau au Maroc' },
    },
    {
      label: { pt: 'Liderança Associativa', fr: 'Leadership Associatif' },
      value: { pt: '4 mandatos', fr: '4 mandats' },
      detail: { pt: 'ASSEBGUIM & Comissão dos Finalistas (2020–2026)', fr: 'ASSEBGUIM & Commission des Finalistes (2020–2026)' },
    },
    {
      label: { pt: 'Habilidades Técnicas', fr: 'Compétences Techniques' },
      value: { pt: 'Web & RH', fr: 'Web & RH' },
      detail: { pt: 'Desenvolvedor Web & Liderança (2023)', fr: 'Développeur Web & Leadership (2023)' },
    },
  ],
  sections: {
    projectsTitle: {
      pt: 'Projetos, Publicação & Realizações',
      fr: 'Projets, Publication & Réalisations',
    },
    projectsSubtitle: {
      pt: 'Investigação jurídica, prática consular, liderança institucional e competências digitais aplicadas.',
      fr: 'Recherche juridique, pratique consulaire, leadership institutionnel et compétences numériques appliquées.',
    },
    filters: {
      all: { pt: 'Todos', fr: 'Tous' },
      diplomacy: { pt: 'Direito & Diplomacia', fr: 'Droit & Diplomatie' },
      tech: { pt: 'Tecnologia & Web', fr: 'Technologie & Web' },
      leadership: { pt: 'Liderança', fr: 'Leadership' },
    },
    skillsTitle: {
      pt: 'Habilidades Técnicas & Domínios de Atuação',
      fr: 'Compétences Techniques & Domaines d’Expertise',
    },
    skillsSubtitle: {
      pt: 'Convergência entre rigor jurídico-diplomático, domínio tecnológico e gestão de equipas.',
      fr: 'Convergence entre rigueur juridico-diplomatique, maîtrise numérique et gestion d’équipes.',
    },
    languagesTitle: { pt: 'Idiomas', fr: 'Langues' },
    interestsTitle: { pt: 'Áreas de Interesse', fr: 'Centres d’Intérêt' },
    experienceTitle: {
      pt: 'Experiência Profissional & Liderança',
      fr: 'Expérience Professionnelle & Leadership',
    },
    experienceCol: { pt: 'Experiência Diplomática', fr: 'Expérience Diplomatique' },
    leadershipCol: { pt: 'Liderança & Envolvimento Associativo', fr: 'Leadership & Engagement Associatif' },
    educationCol: { pt: 'Formação Académica', fr: 'Formation Académique' },
    certificationsCol: { pt: 'Formações Complementares', fr: 'Formations Complémentaires' },
    contactTitle: {
      pt: 'Disponível para Colaboração Diplomática, Jurídica ou Digital',
      fr: 'Disponible pour une Collaboration Diplomatique, Juridique ou Numérique',
    },
    contactSubtitle: {
      pt: 'Entre em contacto direto por correio eletrónico, telefone ou descarregue o curriculum vitae completo em formato PDF.',
      fr: 'Contactez-moi directement par e-mail, téléphone ou téléchargez le curriculum vitae complet au format PDF.',
    },
  },
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'academic-publication-2026',
    category: 'diplomacy',
    featured: true,
    kicker: {
      pt: 'Publicação Académica · Academia.edu',
      fr: 'Publication Académique · Academia.edu',
    },
    title: {
      pt: '« O papel das embaixadas na promoção da cooperação internacional: uma análise jurídico-institucional e prática »',
      fr: '« O papel das embaixadas na promoção da cooperação internacional: uma análise jurídico-institucional e prática »',
    },
    year: '2026',
    institution: {
      pt: 'Academia.edu · Investigação em Direito Internacional',
      fr: 'Academia.edu · Recherche en Droit International',
    },
    summary: {
      pt: 'Artigo científico que analisa o enquadramento jurídico-institucional das missões diplomáticas permanentes e o seu papel prático no fomento da cooperação bilateral entre Estados.',
      fr: 'Article scientifique analysant le cadre juridico-institutionnel des missions diplomatiques permanentes et leur rôle pratique dans la promotion de la coopération bilatérale entre États.',
    },
    details: {
      pt: [
        'Exame dos instrumentos jurídicos que regem as funções diplomáticas e a representação estadual no Direito Internacional Público.',
        'Articulação entre o quadro teórico-normativo e a prática consular observada em representação diplomática acreditada.',
        'Contributo para a compreensão das dinâmicas de cooperação Sul-Sul e fortalecimento institucional.',
      ],
      fr: [
        'Examen des instruments juridiques régissant les fonctions diplomatiques et la représentation étatique en Droit International Public.',
        'Articulation entre le cadre théorique normatif et la pratique consulaire observée en représentation diplomatique.',
        'Contribution à la compréhension des dynamiques de coopération Sud-Sud et du renforcement institutionnel.',
      ],
    },
    competencies: {
      pt: ['Direito Internacional', 'Direito Público', 'Pesquisa Académica', 'Análise Diplomática'],
      fr: ['Droit International', 'Droit Public', 'Recherche Académique', 'Analyse Diplomatique'],
    },
    externalUrl: 'https://www.academia.edu/',
    externalLabel: {
      pt: 'Consultar Referência Academia.edu',
      fr: 'Consulter la référence Academia.edu',
    },
  },
  {
    id: 'embassy-consular-cooperation',
    category: 'diplomacy',
    kicker: {
      pt: 'Prática Diplomática · 3 meses',
      fr: 'Pratique Diplomatique · 3 mois',
    },
    title: {
      pt: 'Apoio Consular, Redação Oficial & Cooperação Bilateral',
      fr: 'Suivi Consulaire, Rédaction Officielle & Coopération Bilatérale',
    },
    year: '2025',
    institution: {
      pt: 'Embaixada da República da Guiné-Bissau em Marrocos',
      fr: 'Ambassade de la République de Guinée-Bissau au Maroc',
    },
    summary: {
      pt: 'Atuação direta no tratamento de processos consulares e diplomáticos, apoio operacional a agendas de cooperação bilateral e elaboração de correspondências institucionais.',
      fr: 'Contribution directe au suivi des dossiers consulaires et diplomatiques, soutien aux activités de coopération bilatérale et rédaction de correspondances officielles.',
    },
    details: {
      pt: [
        'Acompanhamento rigoroso e organização administrativa de processos consulares e dossiês diplomáticos.',
        'Apoio logístico e documental às iniciativas de cooperação bilateral entre a Guiné-Bissau e o Reino de Marrocos.',
        'Redação de notas diplomáticas, ofícios e correspondências protocolares segundo as normas institucionais.',
      ],
      fr: [
        'Suivi rigoureux et organisation administrative des dossiers consulaires et diplomatiques.',
        'Soutien logistique et documentaire aux initiatives de coopération bilatérale entre la Guinée-Bissau et le Royaume du Maroc.',
        'Rédaction de notes diplomatiques et correspondances officielles conformes aux usages protocolaires.',
      ],
    },
    competencies: {
      pt: ['Diplomacia', 'Relações Internacionais', 'Redação Oficial', 'Comunicação Institucional'],
      fr: ['Diplomatie', 'Relations Internationales', 'Rédaction Officielle', 'Communication Institutionnelle'],
    },
  },
  {
    id: 'web-development-initiatives',
    category: 'tech',
    kicker: {
      pt: 'Tecnologia & Web · Certificação 2023',
      fr: 'Technologie & Web · Certification 2023',
    },
    title: {
      pt: 'Desenvolvimento Web & Modernização Digital Institucional',
      fr: 'Développement Web & Digitalisation Institutionnelle',
    },
    year: '2023',
    institution: {
      pt: 'Certificado de Desenvolvedor Web & Informática de Base',
      fr: 'Certificat de Développeur Web & Informatique de Base',
    },
    summary: {
      pt: 'Conceção de interfaces web modernas, estruturação de informação institucional e aplicação de ferramentas digitais para otimizar a comunicação e gestão documental.',
      fr: 'Conception d’interfaces web modernes, structuration d’informations institutionnelles et déploiement d’outils numériques pour optimiser la gestion documentaire.',
    },
    details: {
      pt: [
        'Construção de páginas web responsivas, acessíveis e orientadas para clareza editorial e apresentação institucional.',
        'Domínio dos fundamentos de arquitetura web (HTML, CSS, JavaScript moderno) e produtividade informática.',
        'Ponte entre a área jurídica/administrativa e a transformação digital de fluxos de trabalho.',
      ],
      fr: [
        'Création de pages web responsives, accessibles et orientées vers la clarté éditoriale et institutionnelle.',
        'Maîtrise des fondamentaux de l’architecture web (HTML, CSS, JavaScript moderne) et de la bureautique avancée.',
        'Passerelle entre le secteur juridique/administratif et la transformation numérique des processus.',
      ],
    },
    competencies: {
      pt: ['Desenvolvimento Web', 'Informática de Base', 'Arquitetura de Informação', 'Design Funcional'],
      fr: ['Développement Web', 'Informatique de Base', 'Architecture de l’Information', 'Design Fonctionnel'],
    },
  },
  {
    id: 'assebguim-governance',
    category: 'leadership',
    kicker: {
      pt: 'Governação Associativa · 2020–2026',
      fr: 'Gouvernance Associative · 2020–2026',
    },
    title: {
      pt: 'Coordenação Associativa & Representação Estudantil (ASSEBGUIM)',
      fr: 'Coordination Associative & Représentation Étudiante (ASSEBGUIM)',
    },
    year: '2020 – 2026',
    institution: {
      pt: 'ASSEBGUIM-Mohammedia, ASSEBGUIM-Fès & Comissão dos Finalistas',
      fr: 'ASSEBGUIM-Mohammedia, ASSEBGUIM-Fès & Commission des Finalistes',
    },
    summary: {
      pt: 'Percurso contínuo de liderança executiva e porta-voz comunitário em Marrocos e na Guiné-Bissau, coordenando equipas, eventos académicos e mediação institucional.',
      fr: 'Parcours continu de leadership exécutif et de porte-parole communautaire au Maroc et en Guinée-Bissau, coordonnant équipes, événements et médiation institutionnelle.',
    },
    details: {
      pt: [
        'Dois mandatos consecutivos como Vice-presidente da ASSEBGUIM-Mohammedia (2024–2026), apoiando a integração e o acompanhamento académico dos estudantes.',
        'Atuação como Porta-voz da ASSEBGUIM-Fès (2023–2024), assegurando comunicação estratégica e diálogo com parceiros.',
        'Presidência da Comissão dos Finalistas (2020–2021) na conclusão do ensino secundário na Guiné-Bissau.',
      ],
      fr: [
        'Deux mandats consécutifs en tant que Vice-président de l’ASSEBGUIM-Mohammedia (2024–2026), accompagnant l’intégration académique des étudiants.',
        'Mandat de Porte-parole de l’ASSEBGUIM-Fès (2023–2024), assurant la communication stratégique et le dialogue institutionnel.',
        'Présidence de la Commission des Finalistes (2020–2021) en Guinée-Bissau.',
      ],
    },
    competencies: {
      pt: ['Liderança', 'Gestão de Recursos Humanos', 'Comunicação', 'Mediação Institucional'],
      fr: ['Leadership', 'Gestion des Ressources Humaines', 'Communication', 'Médiation Institutionnelle'],
    },
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'legal-diplomatic',
    title: {
      pt: 'Direito & Relações Internacionais',
      fr: 'Droit & Relations Internationales',
    },
    subtitle: {
      pt: 'Base jurídica sólida orientada para o serviço público e ação diplomática.',
      fr: 'Socle juridique solide orienté vers le service public et l’action diplomatique.',
    },
    items: [
      {
        name: { pt: 'Direito Público', fr: 'Droit Public' },
        meta: { pt: 'Licenciatura · Univ. Hassan II (2026)', fr: 'Licence · Univ. Hassan II (2026)' },
      },
      {
        name: { pt: 'Direito Internacional', fr: 'Droit International' },
        meta: { pt: 'Publicação Académica · Academia.edu', fr: 'Publication Académique · Academia.edu' },
      },
      {
        name: { pt: 'Relações Internacionais', fr: 'Relations Internationales' },
        meta: { pt: 'Cooperação bilateral & geopolítica', fr: 'Coopération bilatérale & géopolitique' },
      },
      {
        name: { pt: 'Diplomacia & Protocolo', fr: 'Diplomatie & Protocole' },
        meta: { pt: 'Prática consular em Embaixada', fr: 'Pratique consulaire en Ambassade' },
      },
      {
        name: { pt: 'Pesquisa Académica', fr: 'Recherche Académique' },
        meta: { pt: 'Análise jurídico-institucional', fr: 'Analyse juridico-institutionnelle' },
      },
    ],
  },
  {
    id: 'technical-digital',
    title: {
      pt: 'Habilidades Técnicas & Digitais',
      fr: 'Compétences Techniques & Numériques',
    },
    subtitle: {
      pt: 'Capacidade técnica para conceber interfaces web e gerir sistemas de informação.',
      fr: 'Maîtrise technique pour concevoir des interfaces web et structurer l’information.',
    },
    items: [
      {
        name: { pt: 'Desenvolvimento Web', fr: 'Développement Web' },
        meta: { pt: 'Certificado · 2023', fr: 'Certificat · 2023' },
      },
      {
        name: { pt: 'Informática de Base', fr: 'Informatique de Base' },
        meta: { pt: 'Certificado · 2022', fr: 'Certificat · 2022' },
      },
      {
        name: { pt: 'Gestão Documental Digital', fr: 'Gestion Documentaire Numérique' },
        meta: { pt: 'Organização de dossiers & arquivo', fr: 'Organisation de dossiers & archivage' },
      },
      {
        name: { pt: 'Redação Institucional', fr: 'Rédaction Institutionnelle' },
        meta: { pt: 'Correspondência oficial & notas', fr: 'Correspondances officielles & notes' },
      },
    ],
  },
  {
    id: 'leadership-management',
    title: {
      pt: 'Liderança, RH & Comunicação',
      fr: 'Leadership, RH & Communication',
    },
    subtitle: {
      pt: 'Experiência comprovada em direção executiva associativa e representação.',
      fr: 'Expérience avérée en direction associative et représentation institutionnelle.',
    },
    items: [
      {
        name: { pt: 'Liderança Executiva', fr: 'Leadership Exécutif' },
        meta: { pt: '4 mandatos associativos (2020–2026)', fr: '4 mandats associatifs (2020–2026)' },
      },
      {
        name: { pt: 'Gestão de Recursos Humanos', fr: 'Gestion des Ressources Humaines' },
        meta: { pt: 'Certificado · 2023', fr: 'Certificat · 2023' },
      },
      {
        name: { pt: 'Comunicação Estratégica', fr: 'Communication Stratégique' },
        meta: { pt: 'Porta-voz ASSEBGUIM-Fès', fr: 'Porte-parole ASSEBGUIM-Fès' },
      },
      {
        name: { pt: 'Mediação & Coordenação', fr: 'Médiation & Coordination' },
        meta: { pt: 'Acompanhamento de equipas e membros', fr: 'Encadrement d’équipes et de membres' },
      },
    ],
  },
];

export const LANGUAGES_SPOKEN = [
  {
    name: { pt: 'Português', fr: 'Portugais' },
    level: { pt: 'Língua materna', fr: 'Langue maternelle' },
  },
  {
    name: { pt: 'Francês', fr: 'Français' },
    level: { pt: 'Avançado', fr: 'Avancé' },
  },
];

export const INTERESTS = {
  pt: [
    'Geopolítica & atualidade internacional',
    'Cooperação internacional',
    'Diplomacia',
  ],
  fr: [
    'Géopolitique & actualité internationale',
    'Coopération internationale',
    'Diplomatie',
  ],
};

export const PROFESSIONAL_EXPERIENCE = {
  role: { pt: 'Estagiário', fr: 'Stagiaire' },
  duration: { pt: '3 meses', fr: '3 mois' },
  organization: {
    pt: 'Embaixada da República da Guiné-Bissau em Marrocos',
    fr: 'Ambassade de la République de Guinée-Bissau au Maroc',
  },
  responsibilities: {
    pt: [
      'Acompanhamento de processos consulares e diplomáticos',
      'Apoio às atividades de cooperação bilateral',
      'Redação de correspondências oficiais',
    ],
    fr: [
      'Suivi des dossiers consulaires et diplomatiques',
      'Soutien aux activités de coopération bilatérale',
      'Rédaction de correspondances officielles',
    ],
  },
};

export const LEADERSHIP_ROLES: LeadershipRole[] = [
  {
    period: '2025 – 2026',
    role: { pt: 'Vice-presidente', fr: 'Vice-président' },
    organization: 'ASSEBGUIM-Mohammedia',
  },
  {
    period: '2024 – 2025',
    role: { pt: 'Vice-presidente', fr: 'Vice-président' },
    organization: 'ASSEBGUIM-Mohammedia',
  },
  {
    period: '2023 – 2024',
    role: { pt: 'Porta-voz', fr: 'Porte-parole' },
    organization: 'ASSEBGUIM-Fès',
  },
  {
    period: '2020 – 2021',
    role: { pt: 'Presidente', fr: 'Président' },
    organization: 'Commission des Finalistes',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    year: '2026',
    degree: {
      pt: 'Licenciatura em Direito Público',
      fr: 'Licence en Droit Public',
    },
    institution: {
      pt: 'Faculdade das Ciências Jurídicas, Económicas e Sociais de Mohammedia — Universidade Hassan II de Casablanca',
      fr: 'Faculté des Sciences Juridiques, Économiques et Sociales de Mohammedia — Université Hassan II de Casablanca',
    },
    note: {
      pt: 'Nota: 12,4/20 — Menção Assez Bien',
      fr: 'Note : 12,4/20 — Mention Assez Bien',
    },
  },
  {
    year: '2021',
    degree: {
      pt: 'Bacharelato',
      fr: 'Baccalauréat',
    },
    institution: {
      pt: 'São Francisco de Assis — Guiné-Bissau',
      fr: 'São Francisco de Assis — Guinée-Bissau',
    },
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    year: '2023',
    title: {
      pt: 'Certificado de Desenvolvedor Web',
      fr: 'Certificat de Développeur Web',
    },
    focus: {
      pt: 'Desenvolvimento front-end, estruturação semântica e interfaces digitais',
      fr: 'Développement front-end, structuration sémantique et interfaces numériques',
    },
  },
  {
    year: '2023',
    title: {
      pt: 'Certificado em Liderança e Gestão de Recursos Humanos',
      fr: 'Certificat en Leadership et Gestion des Ressources Humaines',
    },
    focus: {
      pt: 'Coordenação de equipas, governação organizacional e gestão de talento',
      fr: 'Coordination d’équipes, gouvernance organisationnelle et gestion des talents',
    },
  },
  {
    year: '2022',
    title: {
      pt: 'Certificado em Informática de Base',
      fr: 'Certificat en Informatique de Base',
    },
    focus: {
      pt: 'Ferramentas informáticas, tratamento documental e sistemas operacionais',
      fr: 'Outils bureautiques, traitement documentaire et systèmes d’exploitation',
    },
  },
];
