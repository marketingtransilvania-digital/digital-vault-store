export type Locale = "en" | "ro" | "de" | "nl";

export interface LocalizedString {
  en: string;
  ro: string;
  de: string;
  nl: string;
}

export interface Product {
  id: string;
  sku: string;
  slug: string;
  title: LocalizedString;
  shortDescription: LocalizedString;
  description: LocalizedString;
  price: number; // base price in EUR
  salePrice?: number;
  category: string;
  tags: string[];
  images: string[];
  fileFormat: string;
  pages: number;
  compatibility: string;
  license: LocalizedString;
  seoTitle: LocalizedString;
  seoDescription: LocalizedString;
  featured: boolean;
  bestSeller: boolean;
  rating: number; // demo rating 1-5
  reviewCount: number; // demo
  downloadFile: string; // placeholder path
  createdAt: string;
}

export const categories = [
  { id: "ebooks", slug: "ebooks-guides" },
  { id: "planners", slug: "planners" },
  { id: "templates", slug: "templates" },
  { id: "business", slug: "business" },
  { id: "productivity", slug: "productivity" },
  { id: "ai-prompts", slug: "ai-prompts" },
  { id: "social-media", slug: "social-media" },
  { id: "printables", slug: "printables" },
];

export const products: Product[] = [
  {
    id: "1",
    sku: "DV-PLAN-001",
    slug: "ultimate-productivity-planner",
    title: {
      en: "Ultimate Productivity Planner",
      ro: "Planificatorul Ultimate de Productivitate",
      de: "Ultimativer Produktivitätsplaner",
      nl: "Ultieme Productiviteitsplanner",
    },
    shortDescription: {
      en: "A complete digital planner to organize goals, tasks and daily focus.",
      ro: "Un planificator digital complet pentru a-ți organiza obiectivele, sarcinile și focusul zilnic.",
      de: "Ein vollständiger digitaler Planer zur Organisation von Zielen, Aufgaben und täglichem Fokus.",
      nl: "Een complete digitale planner om doelen, taken en dagelijkse focus te organiseren.",
    },
    description: {
      en: "Transform the way you work with the Ultimate Productivity Planner. This comprehensive digital tool includes daily, weekly and monthly planning pages, goal trackers, habit trackers, priority matrices and reflection prompts. Designed for professionals who want to stay focused and achieve more without burnout. Compatible with GoodNotes, Notability and PDF readers.",
      ro: "Transformă modul în care lucrezi cu Planificatorul Ultimate de Productivitate. Acest instrument digital cuprinzător include pagini de planificare zilnică, săptămânală și lunară, trackere de obiective, de obiceiuri, matrici de priorități și prompturi de reflecție. Creat pentru profesioniști care vor să rămână concentrați și să obțină mai mult fără epuizare. Compatibil cu GoodNotes, Notability și cititoare PDF.",
      de: "Verändere deine Arbeitsweise mit dem Ultimativen Produktivitätsplaner. Dieses umfassende digitale Tool enthält tägliche, wöchentliche und monatliche Planungsseiten, Ziel-Tracker, Gewohnheitstracker, Prioritätsmatrizen und Reflexionsprompts. Entwickelt für Berufstätige, die fokussiert bleiben und mehr erreichen wollen, ohne auszubrennen. Kompatibel mit GoodNotes, Notability und PDF-Readern.",
      nl: "Transformeer de manier waarop je werkt met de Ultieme Productiviteitsplanner. Deze uitgebreide digitale tool bevat dagelijkse, wekelijkse en maandelijkse planningpagina's, doeltrackers, gewoontetrackers, prioriteitsmatrices en reflectieprompts. Ontworpen voor professionals die gefocust willen blijven en meer willen bereiken zonder burnout. Compatibel met GoodNotes, Notability en PDF-lezers.",
    },
    price: 19.99,
    salePrice: 14.99,
    category: "planners",
    tags: ["planner", "productivity", "goals", "habits", "digital"],
    images: ["/images/products/productivity-planner.jpg"],
    fileFormat: "PDF + GoodNotes",
    pages: 120,
    compatibility: "iPad, Android, Desktop, Print",
    license: {
      en: "Personal use. One user license. No redistribution.",
      ro: "Uz personal. Licență pentru un utilizator. Fără redistribuire.",
      de: "Persönlicher Gebrauch. Einzellizenz. Keine Weitergabe.",
      nl: "Persoonlijk gebruik. Eén gebruikerslicentie. Geen herdistributie.",
    },
    seoTitle: {
      en: "Ultimate Productivity Planner – Digital Download | DIGITAL VAULT",
      ro: "Planificatorul Ultimate de Productivitate – Descărcare Digitală | DIGITAL VAULT",
      de: "Ultimativer Produktivitätsplaner – Digitaler Download | DIGITAL VAULT",
      nl: "Ultieme Productiviteitsplanner – Digitale Download | DIGITAL VAULT",
    },
    seoDescription: {
      en: "Get the Ultimate Productivity Planner. 120 pages of goal tracking, habit building and daily focus tools. Instant digital download.",
      ro: "Obține Planificatorul Ultimate de Productivitate. 120 de pagini de urmărire a obiectivelor, construire a obiceiurilor și unelte de focus zilnic. Descărcare digitală instantanee.",
      de: "Hol dir den Ultimativen Produktivitätsplaner. 120 Seiten Zielverfolgung, Gewohnheitsaufbau und tägliche Fokus-Tools. Sofortiger digitaler Download.",
      nl: "Koop de Ultieme Productiviteitsplanner. 120 pagina's doeltracking, gewoontevorming en dagelijkse focustools. Directe digitale download.",
    },
    featured: true,
    bestSeller: true,
    rating: 4.8,
    reviewCount: 0, // demo – no real reviews claimed
    downloadFile: "/downloads/ultimate-productivity-planner.pdf",
    createdAt: "2025-11-01",
  },
  {
    id: "2",
    sku: "DV-PLAN-002",
    slug: "digital-life-planner",
    title: {
      en: "Digital Life Planner",
      ro: "Planificator Digital de Viață",
      de: "Digitaler Lebensplaner",
      nl: "Digitale Levensplanner",
    },
    shortDescription: {
      en: "All-in-one life planner for goals, finances, health and relationships.",
      ro: "Planificator de viață all-in-one pentru obiective, finanțe, sănătate și relații.",
      de: "All-in-One-Lebensplaner für Ziele, Finanzen, Gesundheit und Beziehungen.",
      nl: "Alles-in-één levensplanner voor doelen, financiën, gezondheid en relaties.",
    },
    description: {
      en: "The Digital Life Planner helps you design a balanced life. Sections for vision boards, yearly goals, monthly reviews, budget tracking, health logs, gratitude and relationship notes. Beautifully designed and fully hyperlinked for seamless navigation on tablets.",
      ro: "Planificatorul Digital de Viață te ajută să proiectezi o viață echilibrată. Secțiuni pentru viziune, obiective anuale, recenzii lunare, urmărire buget, jurnale de sănătate, recunoștință și note de relații. Design frumos și complet hiperlinkat pentru navigare fluidă pe tablete.",
      de: "Der Digitale Lebensplaner hilft dir, ein ausgewogenes Leben zu gestalten. Abschnitte für Vision Boards, Jahresziele, Monatsreviews, Budget-Tracking, Gesundheitsprotokolle, Dankbarkeit und Beziehungsnotizen. Schön gestaltet und vollständig verlinkt für nahtlose Navigation auf Tablets.",
      nl: "De Digitale Levensplanner helpt je een evenwichtig leven te ontwerpen. Secties voor vision boards, jaarlijkse doelen, maandelijkse reviews, budgettracking, gezondheidslogboeken, dankbaarheid en relatienotities. Prachtig ontworpen en volledig hyperlinked voor naadloze navigatie op tablets.",
    },
    price: 24.99,
    salePrice: 17.99,
    category: "planners",
    tags: ["life planner", "goals", "budget", "health", "digital"],
    images: ["/images/products/life-planner.jpg"],
    fileFormat: "PDF + GoodNotes",
    pages: 180,
    compatibility: "iPad, Android, Desktop, Print",
    license: {
      en: "Personal use. One user license. No redistribution.",
      ro: "Uz personal. Licență pentru un utilizator. Fără redistribuire.",
      de: "Persönlicher Gebrauch. Einzellizenz. Keine Weitergabe.",
      nl: "Persoonlijk gebruik. Eén gebruikerslicentie. Geen herdistributie.",
    },
    seoTitle: {
      en: "Digital Life Planner – All-in-One | DIGITAL VAULT",
      ro: "Planificator Digital de Viață – All-in-One | DIGITAL VAULT",
      de: "Digitaler Lebensplaner – All-in-One | DIGITAL VAULT",
      nl: "Digitale Levensplanner – Alles-in-één | DIGITAL VAULT",
    },
    seoDescription: {
      en: "Organize your entire life with this comprehensive digital life planner. Instant download.",
      ro: "Organizează-ți întreaga viață cu acest planificator digital cuprinzător. Descărcare instantanee.",
      de: "Organisiere dein gesamtes Leben mit diesem umfassenden digitalen Lebensplaner. Sofortiger Download.",
      nl: "Organiseer je hele leven met deze uitgebreide digitale levensplanner. Directe download.",
    },
    featured: true,
    bestSeller: true,
    rating: 4.9,
    reviewCount: 0,
    downloadFile: "/downloads/digital-life-planner.pdf",
    createdAt: "2025-10-15",
  },
  {
    id: "3",
    sku: "DV-BIZ-001",
    slug: "small-business-starter-guide",
    title: {
      en: "Small Business Starter Guide",
      ro: "Ghid de Start pentru Afaceri Mici",
      de: "Starter-Guide für Kleinunternehmen",
      nl: "Startergids voor Kleine Bedrijven",
    },
    shortDescription: {
      en: "Step-by-step guide to launch and grow a small business.",
      ro: "Ghid pas cu pas pentru a lansa și a dezvolta o afacere mică.",
      de: "Schritt-für-Schritt-Anleitung zum Start und Wachstum eines Kleinunternehmens.",
      nl: "Stapsgewijze gids om een klein bedrijf te lanceren en te laten groeien.",
    },
    description: {
      en: "Everything you need to start a small business with confidence. Covers idea validation, legal basics, branding, pricing, marketing channels, first customers and simple financial tracking. Written in clear, actionable language with checklists and templates included.",
      ro: "Tot ce ai nevoie pentru a începe o afacere mică cu încredere. Acoperă validarea ideii, aspecte legale de bază, branding, prețuri, canale de marketing, primii clienți și urmărire financiară simplă. Scris într-un limbaj clar, acționabil, cu checklist-uri și template-uri incluse.",
      de: "Alles, was du brauchst, um ein Kleinunternehmen mit Selbstvertrauen zu starten. Behandelt Ideenvalidierung, rechtliche Grundlagen, Branding, Preisgestaltung, Marketingkanäle, erste Kunden und einfache Finanzverfolgung. In klarer, umsetzbarer Sprache geschrieben, mit Checklisten und Vorlagen.",
      nl: "Alles wat je nodig hebt om met vertrouwen een klein bedrijf te starten. Behandelt ideevalidatie, juridische basis, branding, prijsstelling, marketingkanalen, eerste klanten en eenvoudige financiële tracking. Geschreven in duidelijke, actiegerichte taal met checklists en templates.",
    },
    price: 29.99,
    category: "business",
    tags: ["business", "startup", "guide", "checklist", "ebook"],
    images: ["/images/products/business-starter.jpg"],
    fileFormat: "PDF",
    pages: 85,
    compatibility: "All devices",
    license: {
      en: "Personal & commercial use for your own business. No resale of the guide.",
      ro: "Uz personal și comercial pentru propria afacere. Fără revânzarea ghidului.",
      de: "Persönliche & kommerzielle Nutzung für das eigene Unternehmen. Kein Weiterverkauf des Guides.",
      nl: "Persoonlijk & commercieel gebruik voor je eigen bedrijf. Geen doorverkoop van de gids.",
    },
    seoTitle: {
      en: "Small Business Starter Guide – Digital eBook | DIGITAL VAULT",
      ro: "Ghid de Start pentru Afaceri Mici – eBook Digital | DIGITAL VAULT",
      de: "Starter-Guide für Kleinunternehmen – Digitales eBook | DIGITAL VAULT",
      nl: "Startergids voor Kleine Bedrijven – Digitaal eBook | DIGITAL VAULT",
    },
    seoDescription: {
      en: "Launch your small business with this practical step-by-step guide. Instant PDF download.",
      ro: "Lansează-ți afacerea mică cu acest ghid practic pas cu pas. Descărcare PDF instantanee.",
      de: "Starte dein Kleinunternehmen mit diesem praktischen Schritt-für-Schritt-Guide. Sofortiger PDF-Download.",
      nl: "Lanceer je kleine bedrijf met deze praktische stapsgewijze gids. Directe PDF-download.",
    },
    featured: true,
    bestSeller: true,
    rating: 4.7,
    reviewCount: 0,
    downloadFile: "/downloads/small-business-starter-guide.pdf",
    createdAt: "2025-09-20",
  },
  {
    id: "4",
    sku: "DV-SOC-001",
    slug: "social-media-content-planner",
    title: {
      en: "Social Media Content Planner",
      ro: "Planificator de Conținut Social Media",
      de: "Social-Media-Content-Planer",
      nl: "Social Media Contentplanner",
    },
    shortDescription: {
      en: "Plan, schedule and track content for Instagram, TikTok, Pinterest and more.",
      ro: "Planifică, programează și urmărește conținut pentru Instagram, TikTok, Pinterest și altele.",
      de: "Plane, plane und verfolge Inhalte für Instagram, TikTok, Pinterest und mehr.",
      nl: "Plan, scheduleer en volg content voor Instagram, TikTok, Pinterest en meer.",
    },
    description: {
      en: "Stay consistent on social media without the overwhelm. This planner includes content calendars, post idea banks, hashtag trackers, analytics pages and batch-creation worksheets. Perfect for creators and small business owners.",
      ro: "Rămâi consistent pe social media fără a te copleși. Acest planificator include calendare de conținut, bănci de idei de postări, trackere de hashtag-uri, pagini de analiză și fișe de lucru pentru creare în batch. Perfect pentru creatori și proprietari de afaceri mici.",
      de: "Bleibe auf Social Media konsistent, ohne überfordert zu werden. Dieser Planer enthält Content-Kalender, Post-Ideenbanken, Hashtag-Tracker, Analyse-Seiten und Batch-Erstellungs-Arbeitsblätter. Perfekt für Creator und Kleinunternehmer.",
      nl: "Blijf consistent op social media zonder overweldigd te raken. Deze planner bevat contentkalenders, postideeënbanken, hashtagtrackers, analysepagina's en batch-creatie werkbladen. Perfect voor creators en eigenaren van kleine bedrijven.",
    },
    price: 16.99,
    salePrice: 12.99,
    category: "social-media",
    tags: ["social media", "content", "planner", "instagram", "tiktok"],
    images: ["/images/products/social-content-planner.jpg"],
    fileFormat: "PDF + Editable",
    pages: 95,
    compatibility: "All devices + Print",
    license: {
      en: "Personal & commercial use for your own accounts. No resale.",
      ro: "Uz personal și comercial pentru propriile conturi. Fără revânzare.",
      de: "Persönliche & kommerzielle Nutzung für eigene Konten. Kein Weiterverkauf.",
      nl: "Persoonlijk & commercieel gebruik voor je eigen accounts. Geen doorverkoop.",
    },
    seoTitle: {
      en: "Social Media Content Planner – Digital Download | DIGITAL VAULT",
      ro: "Planificator de Conținut Social Media – Descărcare Digitală | DIGITAL VAULT",
      de: "Social-Media-Content-Planer – Digitaler Download | DIGITAL VAULT",
      nl: "Social Media Contentplanner – Digitale Download | DIGITAL VAULT",
    },
    seoDescription: {
      en: "Plan your social media content like a pro. Instant digital download with calendars and trackers.",
      ro: "Planifică-ți conținutul de social media ca un profesionist. Descărcare digitală instantanee cu calendare și trackere.",
      de: "Plane deine Social-Media-Inhalte wie ein Profi. Sofortiger digitaler Download mit Kalendern und Trackern.",
      nl: "Plan je social media content als een pro. Directe digitale download met kalenders en trackers.",
    },
    featured: true,
    bestSeller: true,
    rating: 4.8,
    reviewCount: 0,
    downloadFile: "/downloads/social-media-content-planner.pdf",
    createdAt: "2025-10-01",
  },
  {
    id: "5",
    sku: "DV-AI-001",
    slug: "100-ai-prompts-productivity",
    title: {
      en: "100 AI Prompts for Productivity",
      ro: "100 de Prompturi AI pentru Productivitate",
      de: "100 AI-Prompts für Produktivität",
      nl: "100 AI-prompts voor Productiviteit",
    },
    shortDescription: {
      en: "Ready-to-use prompts for ChatGPT, Claude and other AI tools to boost productivity.",
      ro: "Prompturi gata de folosit pentru ChatGPT, Claude și alte unelte AI pentru a crește productivitatea.",
      de: "Fertige Prompts für ChatGPT, Claude und andere KI-Tools zur Steigerung der Produktivität.",
      nl: "Kant-en-klare prompts voor ChatGPT, Claude en andere AI-tools om productiviteit te verhogen.",
    },
    description: {
      en: "Stop staring at a blank prompt box. This curated collection of 100 productivity prompts covers task prioritization, email drafting, meeting agendas, research summaries, learning plans, decision frameworks and more. Organized by category with usage tips.",
      ro: "Nu te mai uita la o casetă de prompt goală. Această colecție selectată de 100 de prompturi de productivitate acoperă prioritizarea sarcinilor, redactarea email-urilor, agende de întâlniri, rezumate de cercetare, planuri de învățare, cadre de decizie și multe altele. Organizate pe categorii cu sfaturi de utilizare.",
      de: "Hör auf, auf eine leere Prompt-Box zu starren. Diese kuratierte Sammlung von 100 Produktivitäts-Prompts deckt Aufgabenpriorisierung, E-Mail-Entwürfe, Meeting-Agenden, Forschungszusammenfassungen, Lernpläne, Entscheidungsrahmen und mehr ab. Nach Kategorien organisiert mit Nutzungstipps.",
      nl: "Stop met staren naar een lege promptbox. Deze geselecteerde collectie van 100 productiviteitsprompts behandelt taakprioritering, e-mailopstellen, vergaderagenda's, onderzoekssamenvattingen, leerplannen, beslissingskaders en meer. Georganiseerd per categorie met gebruikstips.",
    },
    price: 12.99,
    salePrice: 9.99,
    category: "ai-prompts",
    tags: ["ai", "prompts", "chatgpt", "productivity", "claude"],
    images: ["/images/products/ai-prompts.jpg"],
    fileFormat: "PDF + Markdown",
    pages: 45,
    compatibility: "All devices",
    license: {
      en: "Personal & commercial use. No resale of the prompt pack.",
      ro: "Uz personal și comercial. Fără revânzarea pachetului de prompturi.",
      de: "Persönliche & kommerzielle Nutzung. Kein Weiterverkauf des Prompt-Packs.",
      nl: "Persoonlijk & commercieel gebruik. Geen doorverkoop van het promptpakket.",
    },
    seoTitle: {
      en: "100 AI Prompts for Productivity – Digital Pack | DIGITAL VAULT",
      ro: "100 de Prompturi AI pentru Productivitate – Pachet Digital | DIGITAL VAULT",
      de: "100 AI-Prompts für Produktivität – Digitales Paket | DIGITAL VAULT",
      nl: "100 AI-prompts voor Productiviteit – Digitaal Pakket | DIGITAL VAULT",
    },
    seoDescription: {
      en: "Boost your AI results with 100 ready-to-use productivity prompts. Instant download.",
      ro: "Crește rezultatele AI cu 100 de prompturi de productivitate gata de folosit. Descărcare instantanee.",
      de: "Steigere deine KI-Ergebnisse mit 100 fertigen Produktivitäts-Prompts. Sofortiger Download.",
      nl: "Verhoog je AI-resultaten met 100 kant-en-klare productiviteitsprompts. Directe download.",
    },
    featured: true,
    bestSeller: true,
    rating: 4.9,
    reviewCount: 0,
    downloadFile: "/downloads/100-ai-prompts-productivity.pdf",
    createdAt: "2025-11-10",
  },
  {
    id: "6",
    sku: "DV-FIN-001",
    slug: "personal-finance-planner",
    title: {
      en: "Personal Finance Planner",
      ro: "Planificator de Finanțe Personale",
      de: "Persönlicher Finanzplaner",
      nl: "Persoonlijke Financiële Planner",
    },
    shortDescription: {
      en: "Track income, expenses, savings goals and debt payoff in one place.",
      ro: "Urmărește veniturile, cheltuielile, obiectivele de economii și rambursarea datoriilor într-un singur loc.",
      de: "Verfolge Einkommen, Ausgaben, Sparziele und Schuldenabbau an einem Ort.",
      nl: "Volg inkomsten, uitgaven, spaardoelen en schuldverlaging op één plek.",
    },
    description: {
      en: "Take control of your money with this clean, practical finance planner. Includes monthly budget templates, expense trackers, savings goal sheets, debt snowball/avalanche worksheets, net worth tracker and yearly overview. Designed for clarity, not complexity.",
      ro: "Preia controlul asupra banilor tăi cu acest planificator financiar curat și practic. Include template-uri de buget lunar, trackere de cheltuieli, foi de obiective de economii, fișe de lucru pentru metoda snowball/avalanche, tracker de valoare netă și privire de ansamblu anuală. Proiectat pentru claritate, nu pentru complexitate.",
      de: "Übernimm die Kontrolle über dein Geld mit diesem klaren, praktischen Finanzplaner. Enthält monatliche Budgetvorlagen, Ausgaben-Tracker, Sparziel-Blätter, Schulden-Snowball/Avalanche-Arbeitsblätter, Nettovermögens-Tracker und Jahresübersicht. Für Klarheit, nicht Komplexität gestaltet.",
      nl: "Neem de controle over je geld met deze schone, praktische financiële planner. Bevat maandelijkse budgettemplates, uitgavetrackers, spaardoelbladen, schuld-snowball/avalanche-werkbladen, nettowaarde-tracker en jaaroverzicht. Ontworpen voor duidelijkheid, niet complexiteit.",
    },
    price: 18.99,
    category: "planners",
    tags: ["finance", "budget", "savings", "debt", "planner"],
    images: ["/images/products/finance-planner.jpg"],
    fileFormat: "PDF + Excel",
    pages: 70,
    compatibility: "All devices + Spreadsheet apps",
    license: {
      en: "Personal use. One user license.",
      ro: "Uz personal. Licență pentru un utilizator.",
      de: "Persönlicher Gebrauch. Einzellizenz.",
      nl: "Persoonlijk gebruik. Eén gebruikerslicentie.",
    },
    seoTitle: {
      en: "Personal Finance Planner – Budget & Goals | DIGITAL VAULT",
      ro: "Planificator de Finanțe Personale – Buget & Obiective | DIGITAL VAULT",
      de: "Persönlicher Finanzplaner – Budget & Ziele | DIGITAL VAULT",
      nl: "Persoonlijke Financiële Planner – Budget & Doelen | DIGITAL VAULT",
    },
    seoDescription: {
      en: "Master your money with this practical personal finance planner. Instant digital download.",
      ro: "Stăpânește-ți banii cu acest planificator practic de finanțe personale. Descărcare digitală instantanee.",
      de: "Meistere dein Geld mit diesem praktischen persönlichen Finanzplaner. Sofortiger digitaler Download.",
      nl: "Beheers je geld met deze praktische persoonlijke financiële planner. Directe digitale download.",
    },
    featured: false,
    bestSeller: true,
    rating: 4.7,
    reviewCount: 0,
    downloadFile: "/downloads/personal-finance-planner.pdf",
    createdAt: "2025-08-12",
  },
  {
    id: "7",
    sku: "DV-PLAN-003",
    slug: "weekly-goal-planner",
    title: {
      en: "Weekly Goal Planner",
      ro: "Planificator Săptămânal de Obiective",
      de: "Wöchentlicher Zielplaner",
      nl: "Wekelijkse Doelplanner",
    },
    shortDescription: {
      en: "Simple weekly system to set and review meaningful goals.",
      ro: "Sistem săptămânal simplu pentru a stabili și a revizui obiective semnificative.",
      de: "Einfaches wöchentliches System zum Setzen und Überprüfen sinnvoller Ziele.",
      nl: "Eenvoudig wekelijks systeem om zinvolle doelen te stellen en te evalueren.",
    },
    description: {
      en: "Focus on what matters each week. The Weekly Goal Planner includes intention-setting pages, priority lists, time-blocking grids, weekly review prompts and a progress tracker. Minimal design, maximum clarity.",
      ro: "Concentrează-te pe ce contează în fiecare săptămână. Planificatorul Săptămânal de Obiective include pagini de setare a intențiilor, liste de priorități, grile de time-blocking, prompturi de recenzie săptămânală și un tracker de progres. Design minimal, claritate maximă.",
      de: "Konzentriere dich jede Woche auf das Wesentliche. Der Wöchentliche Zielplaner enthält Intention-Seiten, Prioritätenlisten, Time-Blocking-Raster, wöchentliche Review-Prompts und einen Fortschrittstracker. Minimalistisches Design, maximale Klarheit.",
      nl: "Focus elke week op wat ertoe doet. De Wekelijkse Doelplanner bevat intentiepagina's, prioriteitenlijsten, time-blocking-raster, wekelijkse reviewprompts en een voortgangstracker. Minimaal ontwerp, maximale duidelijkheid.",
    },
    price: 9.99,
    category: "planners",
    tags: ["weekly", "goals", "planner", "focus", "minimal"],
    images: ["/images/products/weekly-goal-planner.jpg"],
    fileFormat: "PDF",
    pages: 52,
    compatibility: "All devices + Print",
    license: {
      en: "Personal use. One user license.",
      ro: "Uz personal. Licență pentru un utilizator.",
      de: "Persönlicher Gebrauch. Einzellizenz.",
      nl: "Persoonlijk gebruik. Eén gebruikerslicentie.",
    },
    seoTitle: {
      en: "Weekly Goal Planner – Simple & Effective | DIGITAL VAULT",
      ro: "Planificator Săptămânal de Obiective – Simplu & Eficient | DIGITAL VAULT",
      de: "Wöchentlicher Zielplaner – Einfach & Effektiv | DIGITAL VAULT",
      nl: "Wekelijkse Doelplanner – Eenvoudig & Effectief | DIGITAL VAULT",
    },
    seoDescription: {
      en: "A clean weekly goal planner to help you stay focused and review progress. Instant download.",
      ro: "Un planificator săptămânal curat de obiective pentru a te ajuta să rămâi concentrat și să revizuiești progresul. Descărcare instantanee.",
      de: "Ein klarer wöchentlicher Zielplaner, der dir hilft, fokussiert zu bleiben und Fortschritte zu überprüfen. Sofortiger Download.",
      nl: "Een schone wekelijkse doelplanner om je te helpen gefocust te blijven en voortgang te evalueren. Directe download.",
    },
    featured: false,
    bestSeller: false,
    rating: 4.6,
    reviewCount: 0,
    downloadFile: "/downloads/weekly-goal-planner.pdf",
    createdAt: "2025-07-05",
  },
  {
    id: "8",
    sku: "DV-BIZ-002",
    slug: "digital-marketing-checklist",
    title: {
      en: "Digital Marketing Checklist",
      ro: "Checklist de Marketing Digital",
      de: "Digital-Marketing-Checkliste",
      nl: "Digitale Marketing Checklist",
    },
    shortDescription: {
      en: "Complete actionable checklists for online marketing campaigns.",
      ro: "Checklist-uri acționabile complete pentru campanii de marketing online.",
      de: "Vollständige umsetzbare Checklisten für Online-Marketing-Kampagnen.",
      nl: "Complete actiegerichte checklists voor online marketingcampagnes.",
    },
    description: {
      en: "Never miss an important step again. This checklist pack covers website audit, SEO basics, content marketing, email sequences, social campaigns, paid ads setup and performance review. Printable and digital-friendly.",
      ro: "Nu mai rata niciodată un pas important. Acest pachet de checklist-uri acoperă auditul site-ului, bazele SEO, marketing de conținut, secvențe de email, campanii sociale, setup de anunțuri plătite și recenzie de performanță. Printabil și prietenos digital.",
      de: "Verpasse nie wieder einen wichtigen Schritt. Dieses Checklisten-Paket deckt Website-Audit, SEO-Grundlagen, Content-Marketing, E-Mail-Sequenzen, Social-Kampagnen, Paid-Ads-Setup und Leistungsüberprüfung ab. Druckbar und digitalfreundlich.",
      nl: "Mis nooit meer een belangrijke stap. Dit checklistpakket behandelt website-audit, SEO-basis, contentmarketing, e-mailreeksen, social campagnes, paid ads setup en prestatiebeoordeling. Printbaar en digitaalvriendelijk.",
    },
    price: 11.99,
    category: "business",
    tags: ["marketing", "checklist", "seo", "email", "ads"],
    images: ["/images/products/marketing-checklist.jpg"],
    fileFormat: "PDF",
    pages: 28,
    compatibility: "All devices + Print",
    license: {
      en: "Personal & commercial use for your own projects. No resale.",
      ro: "Uz personal și comercial pentru propriile proiecte. Fără revânzare.",
      de: "Persönliche & kommerzielle Nutzung für eigene Projekte. Kein Weiterverkauf.",
      nl: "Persoonlijk & commercieel gebruik voor je eigen projecten. Geen doorverkoop.",
    },
    seoTitle: {
      en: "Digital Marketing Checklist Pack | DIGITAL VAULT",
      ro: "Pachet Checklist Marketing Digital | DIGITAL VAULT",
      de: "Digital-Marketing-Checklisten-Paket | DIGITAL VAULT",
      nl: "Digitale Marketing Checklist Pakket | DIGITAL VAULT",
    },
    seoDescription: {
      en: "Actionable digital marketing checklists for websites, SEO, content and ads. Instant download.",
      ro: "Checklist-uri acționabile de marketing digital pentru site-uri, SEO, conținut și anunțuri. Descărcare instantanee.",
      de: "Umsetzbare Digital-Marketing-Checklisten für Websites, SEO, Content und Ads. Sofortiger Download.",
      nl: "Actiegerichte digitale marketingchecklists voor websites, SEO, content en ads. Directe download.",
    },
    featured: false,
    bestSeller: false,
    rating: 4.5,
    reviewCount: 0,
    downloadFile: "/downloads/digital-marketing-checklist.pdf",
    createdAt: "2025-06-18",
  },
  {
    id: "9",
    sku: "DV-BIZ-003",
    slug: "etsy-seller-starter-guide",
    title: {
      en: "Etsy Seller Starter Guide",
      ro: "Ghid de Start pentru Vânzători Etsy",
      de: "Etsy-Verkäufer Starter-Guide",
      nl: "Etsy Verkoper Startergids",
    },
    shortDescription: {
      en: "How to set up, optimize and grow an Etsy shop for digital products.",
      ro: "Cum să configurezi, să optimizezi și să crești un magazin Etsy pentru produse digitale.",
      de: "So richtest du einen Etsy-Shop für digitale Produkte ein, optimierst und wächst.",
      nl: "Hoe je een Etsy-shop voor digitale producten opzet, optimaliseert en laat groeien.",
    },
    description: {
      en: "A practical roadmap for selling digital products on Etsy. Covers shop setup, listing optimization, SEO for Etsy, pricing psychology, customer service templates, and scaling tips. Includes ready-to-use checklists.",
      ro: "O foaie de parcurs practică pentru vânzarea de produse digitale pe Etsy. Acoperă setup-ul magazinului, optimizarea listing-urilor, SEO pentru Etsy, psihologia prețurilor, template-uri de servicii clienți și sfaturi de scalare. Include checklist-uri gata de folosit.",
      de: "Ein praktischer Fahrplan für den Verkauf digitaler Produkte auf Etsy. Behandelt Shop-Einrichtung, Listing-Optimierung, SEO für Etsy, Preispsychologie, Kundenservice-Vorlagen und Skalierungstipps. Enthält fertige Checklisten.",
      nl: "Een praktische roadmap voor het verkopen van digitale producten op Etsy. Behandelt shopsetup, listingoptimalisatie, SEO voor Etsy, prijspsychologie, klantenservicetemplates en schaaltips. Inclusief kant-en-klare checklists.",
    },
    price: 22.99,
    salePrice: 16.99,
    category: "business",
    tags: ["etsy", "digital products", "seller", "guide", "ecommerce"],
    images: ["/images/products/etsy-guide.jpg"],
    fileFormat: "PDF",
    pages: 65,
    compatibility: "All devices",
    license: {
      en: "Personal use. One user license. No resale of the guide.",
      ro: "Uz personal. Licență pentru un utilizator. Fără revânzarea ghidului.",
      de: "Persönlicher Gebrauch. Einzellizenz. Kein Weiterverkauf des Guides.",
      nl: "Persoonlijk gebruik. Eén gebruikerslicentie. Geen doorverkoop van de gids.",
    },
    seoTitle: {
      en: "Etsy Seller Starter Guide for Digital Products | DIGITAL VAULT",
      ro: "Ghid de Start Vânzător Etsy pentru Produse Digitale | DIGITAL VAULT",
      de: "Etsy-Verkäufer Starter-Guide für digitale Produkte | DIGITAL VAULT",
      nl: "Etsy Verkoper Startergids voor Digitale Producten | DIGITAL VAULT",
    },
    seoDescription: {
      en: "Start and grow your Etsy digital product shop with this practical guide. Instant download.",
      ro: "Începe și dezvoltă-ți magazinul Etsy de produse digitale cu acest ghid practic. Descărcare instantanee.",
      de: "Starte und wachse mit deinem Etsy-Shop für digitale Produkte mit diesem praktischen Guide. Sofortiger Download.",
      nl: "Start en groei je Etsy digitale productshop met deze praktische gids. Directe download.",
    },
    featured: true,
    bestSeller: false,
    rating: 4.8,
    reviewCount: 0,
    downloadFile: "/downloads/etsy-seller-starter-guide.pdf",
    createdAt: "2025-09-01",
  },
  {
    id: "10",
    sku: "DV-HOME-001",
    slug: "home-organization-planner",
    title: {
      en: "Home Organization Planner",
      ro: "Planificator de Organizare a Casei",
      de: "Hausorganisationsplaner",
      nl: "Huisorganisatieplanner",
    },
    shortDescription: {
      en: "Declutter room by room and create systems that stick.",
      ro: "Decluterează cameră cu cameră și creează sisteme care rezistă.",
      de: "Entrümple Raum für Raum und schaffe Systeme, die bleiben.",
      nl: "Declutter kamer voor kamer en creëer systemen die blijven hangen.",
    },
    description: {
      en: "Create a calm, organized home with this practical planner. Room-by-room checklists, inventory sheets, cleaning schedules, donation trackers and maintenance calendars. Perfect for seasonal resets and everyday order.",
      ro: "Creează o casă calmă și organizată cu acest planificator practic. Checklist-uri cameră cu cameră, foi de inventar, programe de curățenie, trackere de donații și calendare de întreținere. Perfect pentru resetări sezoniere și ordine de zi cu zi.",
      de: "Schaffe ein ruhiges, organisiertes Zuhause mit diesem praktischen Planer. Raum-für-Raum-Checklisten, Inventarblätter, Reinigungspläne, Spenden-Tracker und Wartungskalender. Perfekt für saisonale Resets und alltägliche Ordnung.",
      nl: "Creëer een kalm, georganiseerd huis met deze praktische planner. Kamer-voor-kamer checklists, inventarisbladen, schoonmaakschema's, donatietrackers en onderhoudskalenders. Perfect voor seizoensresets en alledaagse orde.",
    },
    price: 14.99,
    category: "printables",
    tags: ["home", "organization", "declutter", "cleaning", "printable"],
    images: ["/images/products/home-org-planner.jpg"],
    fileFormat: "PDF",
    pages: 60,
    compatibility: "Print + Digital annotation",
    license: {
      en: "Personal use. One household license.",
      ro: "Uz personal. Licență pentru o gospodărie.",
      de: "Persönlicher Gebrauch. Eine Haushaltslizenz.",
      nl: "Persoonlijk gebruik. Eén huishoudenlicentie.",
    },
    seoTitle: {
      en: "Home Organization Planner – Declutter & Systems | DIGITAL VAULT",
      ro: "Planificator de Organizare a Casei – Declutter & Sisteme | DIGITAL VAULT",
      de: "Hausorganisationsplaner – Entrümpeln & Systeme | DIGITAL VAULT",
      nl: "Huisorganisatieplanner – Declutter & Systemen | DIGITAL VAULT",
    },
    seoDescription: {
      en: "Organize your home room by room with practical checklists and systems. Instant printable download.",
      ro: "Organizează-ți casa cameră cu cameră cu checklist-uri și sisteme practice. Descărcare printabilă instantanee.",
      de: "Organisiere dein Zuhause Raum für Raum mit praktischen Checklisten und Systemen. Sofortiger druckbarer Download.",
      nl: "Organiseer je huis kamer voor kamer met praktische checklists en systemen. Directe printbare download.",
    },
    featured: false,
    bestSeller: false,
    rating: 4.6,
    reviewCount: 0,
    downloadFile: "/downloads/home-organization-planner.pdf",
    createdAt: "2025-05-22",
  },
  {
    id: "11",
    sku: "DV-BIZ-004",
    slug: "business-content-calendar",
    title: {
      en: "Business Content Calendar",
      ro: "Calendar de Conținut pentru Business",
      de: "Business-Content-Kalender",
      nl: "Business Contentkalender",
    },
    shortDescription: {
      en: "12-month content calendar template for blogs, social and email.",
      ro: "Template de calendar de conținut pe 12 luni pentru bloguri, social și email.",
      de: "12-Monats-Content-Kalendervorlage für Blogs, Social und E-Mail.",
      nl: "12-maanden contentkalender template voor blogs, social en e-mail.",
    },
    description: {
      en: "Plan a full year of content in one place. Includes monthly themes, weekly post ideas, email newsletter slots, content batching schedules and performance review pages. Editable and printable versions included.",
      ro: "Planifică un an întreg de conținut într-un singur loc. Include teme lunare, idei de postări săptămânale, sloturi de newsletter, programe de batching de conținut și pagini de recenzie a performanței. Versiuni editabile și printabile incluse.",
      de: "Plane ein ganzes Jahr Content an einem Ort. Enthält monatliche Themen, wöchentliche Post-Ideen, E-Mail-Newsletter-Slots, Content-Batching-Zeitpläne und Leistungsüberprüfungsseiten. Bearbeitbare und druckbare Versionen inklusive.",
      nl: "Plan een heel jaar content op één plek. Bevat maandelijkse thema's, wekelijkse postideeën, e-mailnewsletterslots, contentbatching-schema's en prestatiebeoordelingspagina's. Bewerkbare en printbare versies inbegrepen.",
    },
    price: 15.99,
    category: "templates",
    tags: ["content", "calendar", "marketing", "blog", "email"],
    images: ["/images/products/content-calendar.jpg"],
    fileFormat: "PDF + Google Sheets",
    pages: 40,
    compatibility: "All devices + Spreadsheets",
    license: {
      en: "Personal & commercial use for your own business. No resale.",
      ro: "Uz personal și comercial pentru propria afacere. Fără revânzare.",
      de: "Persönliche & kommerzielle Nutzung für das eigene Unternehmen. Kein Weiterverkauf.",
      nl: "Persoonlijk & commercieel gebruik voor je eigen bedrijf. Geen doorverkoop.",
    },
    seoTitle: {
      en: "Business Content Calendar – 12-Month Template | DIGITAL VAULT",
      ro: "Calendar de Conținut Business – Template 12 Luni | DIGITAL VAULT",
      de: "Business-Content-Kalender – 12-Monats-Vorlage | DIGITAL VAULT",
      nl: "Business Contentkalender – 12-Maanden Template | DIGITAL VAULT",
    },
    seoDescription: {
      en: "Plan a full year of marketing content with this professional calendar template. Instant download.",
      ro: "Planifică un an întreg de conținut de marketing cu acest template profesional de calendar. Descărcare instantanee.",
      de: "Plane ein ganzes Jahr Marketing-Content mit dieser professionellen Kalendervorlage. Sofortiger Download.",
      nl: "Plan een heel jaar marketingcontent met deze professionele kalendertemplate. Directe download.",
    },
    featured: false,
    bestSeller: false,
    rating: 4.7,
    reviewCount: 0,
    downloadFile: "/downloads/business-content-calendar.pdf",
    createdAt: "2025-04-10",
  },
  {
    id: "12",
    sku: "DV-PRINT-001",
    slug: "printable-daily-planner",
    title: {
      en: "Printable Daily Planner",
      ro: "Planificator Zilnic Printabil",
      de: "Druckbarer Tagesplaner",
      nl: "Printbare Dagelijkse Planner",
    },
    shortDescription: {
      en: "Clean daily planning pages designed for print or digital use.",
      ro: "Pagini de planificare zilnică curate, proiectate pentru print sau uz digital.",
      de: "Klare tägliche Planungsseiten für Druck oder digitale Nutzung.",
      nl: "Schone dagelijkse planningpagina's ontworpen voor print of digitaal gebruik.",
    },
    description: {
      en: "A beautifully minimal daily planner page set. Includes time-blocking layouts, priority boxes, habit trackers, gratitude lines and evening reflection. Print as many as you need or use digitally with annotation apps.",
      ro: "Un set de pagini de planificator zilnic frumos minimal. Include layout-uri de time-blocking, casete de priorități, trackere de obiceiuri, linii de recunoștință și reflecție de seară. Printează câte ai nevoie sau folosește digital cu aplicații de adnotare.",
      de: "Ein wunderschön minimalistisches Tagesplaner-Seiten-Set. Enthält Time-Blocking-Layouts, Prioritätsboxen, Gewohnheitstracker, Dankbarkeitszeilen und Abendreflexion. Drucke so viele wie nötig oder nutze digital mit Annotations-Apps.",
      nl: "Een prachtig minimale dagelijkse plannerpagina-set. Bevat time-blocking-layouts, prioriteitsvakken, gewoontetrackers, dankbaarheidsregels en avondreflectie. Print zo veel als je nodig hebt of gebruik digitaal met annotatie-apps.",
    },
    price: 7.99,
    category: "printables",
    tags: ["daily", "planner", "printable", "minimal", "habits"],
    images: ["/images/products/daily-planner.jpg"],
    fileFormat: "PDF",
    pages: 30,
    compatibility: "Print + Digital annotation",
    license: {
      en: "Personal use. Unlimited printing for one user.",
      ro: "Uz personal. Printare nelimitată pentru un utilizator.",
      de: "Persönlicher Gebrauch. Unbegrenztes Drucken für einen Nutzer.",
      nl: "Persoonlijk gebruik. Onbeperkt printen voor één gebruiker.",
    },
    seoTitle: {
      en: "Printable Daily Planner – Minimal Design | DIGITAL VAULT",
      ro: "Planificator Zilnic Printabil – Design Minimal | DIGITAL VAULT",
      de: "Druckbarer Tagesplaner – Minimalistisches Design | DIGITAL VAULT",
      nl: "Printbare Dagelijkse Planner – Minimaal Ontwerp | DIGITAL VAULT",
    },
    seoDescription: {
      en: "Minimal printable daily planner pages with time-blocking and habit tracking. Instant download.",
      ro: "Pagini de planificator zilnic printabil minimal cu time-blocking și urmărire a obiceiurilor. Descărcare instantanee.",
      de: "Minimalistische druckbare Tagesplaner-Seiten mit Time-Blocking und Gewohnheitstracking. Sofortiger Download.",
      nl: "Minimale printbare dagelijkse plannerpagina's met time-blocking en gewoonte-tracking. Directe download.",
    },
    featured: false,
    bestSeller: false,
    rating: 4.5,
    reviewCount: 0,
    downloadFile: "/downloads/printable-daily-planner.pdf",
    createdAt: "2025-03-15",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.category === categoryId);
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.bestSeller);
}

export function getFeatured(): Product[] {
  return products.filter((p) => p.featured);
}

export function searchProducts(query: string, locale: Locale): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return products;
  return products.filter((p) => {
    const title = p.title[locale].toLowerCase();
    const short = p.shortDescription[locale].toLowerCase();
    const tags = p.tags.join(" ").toLowerCase();
    const category = p.category.toLowerCase();
    return (
      title.includes(q) ||
      short.includes(q) ||
      tags.includes(q) ||
      category.includes(q) ||
      p.sku.toLowerCase().includes(q)
    );
  });
}
