export const profile = {
  name: "Mithil Manchukonda",
  role: "Software Developer",
  location: "Hyderabad, India",
  email: "mithilmanchukonda@gmail.com",
  phone: "+91 8466903113",
  github: "https://github.com/MithilManchukonda",
  linkedin: "https://www.linkedin.com/in/mithil-manchukonda/", // PLACEHOLDER — replace with real URL
  resumeUrl: "/Manchukonda_Mithil_Resume.pdf",
  headline: "B.Tech CS student building practical software with Python, APIs, and the web.",
  tagline:
    "Third-year Computer Science student from Hyderabad. I design small, reliable tools — automation scripts, REST integrations, and clean web interfaces — and I'm looking for an internship where I can ship real work and learn fast.",
};

export const about = {
  paragraphs: [
    "I'm a third-year B.Tech Computer Science student at Vignan Institute of Technology and Science. My focus is software development — writing readable code, debugging carefully, and turning small ideas into working products.",
    "Most of what I build today is in Python: automation utilities, REST API clients, and file/data tools. I'm actively expanding into full-stack web development, databases, and cloud/AI fundamentals, and I document everything on GitHub so my progress is easy to verify.",
  ],
  highlights: [
    { label: "CGPA", value: "8.3 / 10" },
    { label: "Focus", value: "Python · APIs · Web" },
    { label: "Year", value: "3rd Year B.Tech" },
    { label: "Open to", value: "Internships · SDE roles" },
  ],
};

export const projects = [
  {
    name: "News API Email Notifier",
    summary: "Automated digest service that delivers personalized news straight to your inbox.",
    problem:
      "People skim headlines all day but rarely get a curated, on-time summary. I wanted a low-effort way to receive a clean daily brief.",
    stack: ["Python", "REST API", "SMTP", "Cron"],
    features: [
      "Pulls real-time articles from a news REST API",
      "Filters by topic and formats a readable summary",
      "Sends scheduled emails via SMTP with retry handling",
      "Modular layout — API client and dispatcher are independent",
    ],
    outcome:
      "Learned how to design clean module boundaries, handle API failures gracefully, and keep credentials out of source.",
    github: "https://github.com/MithilManchukonda/news-api-email",
    demo: null,
    tag: "Automation",
  },
  {
    name: "PDF Generation Tool",
    summary: "Python utility that turns structured data into clean, repeatable PDF documents.",
    problem:
      "Manually formatting reports is slow and error-prone. I built a programmatic generator to make it a one-command job.",
    stack: ["Python", "ReportLab", "File I/O"],
    features: [
      "Generates multi-page PDFs from JSON/CSV input",
      "Reusable layout components for headers, tables, and footers",
      "Handles missing fields and odd inputs without crashing",
      "Tested against a range of edge cases",
    ],
    outcome:
      "Got comfortable with iterative debugging across file I/O and third-party libraries — and with writing code that another person can pick up quickly.",
    github: "https://github.com/MithilManchukonda/pdf-generation",
    demo: null,
    tag: "Tooling",
  },
  {
    name: "Python Course Projects",
    summary: "A growing collection of small projects covering DSA, OOP, and core Python.",
    problem:
      "I wanted one place where my fundamentals are visible — not just certificates, but working code with history.",
    stack: ["Python", "Git", "GitHub"],
    features: [
      "Hands-on implementations of data structures and algorithms",
      "OOP exercises modeling real-world entities",
      "File handling, parsing, and small CLI utilities",
      "Consistent commit history and per-project READMEs",
    ],
    outcome:
      "Built a habit of shipping small, finished pieces of code — and using Git the way teams actually use it.",
    github: "https://github.com/MithilManchukonda/python_cource_projects",
    demo: null,
    tag: "Learning",
  },
  {
    name: "Personal Portfolio Site",
    summary: "This site — a dark, glass-accented portfolio built for clarity and speed.",
    problem:
      "Resumes are static. I wanted a living portfolio that recruiters can scan in under a minute.",
    stack: ["React", "TanStack Start", "TypeScript", "Tailwind CSS"],
    features: [
      "Sticky navigation with smooth in-page anchors",
      "Glassmorphism surfaces and emerald/cyan accent system",
      "Section reveal animations with no layout shift",
      "Fully responsive from 360px upwards",
    ],
    outcome:
      "Practiced design-system thinking — semantic tokens, reusable variants, and accessible motion.",
    github: "https://github.com/MithilManchukonda", // PLACEHOLDER — add repo link
    demo: null,
    tag: "Web",
  },
];

export const skillGroups = [
  { title: "Languages", items: ["Python", "SQL", "JavaScript (learning)", "TypeScript (learning)"] },
  { title: "Web & Frameworks", items: ["HTML", "CSS", "React (learning)", "REST APIs"] },
  { title: "Databases", items: ["MySQL", "Oracle", "Schema design", "Joins & aggregations"] },
  { title: "Tools & Platforms", items: ["Git", "GitHub", "VS Code", "Command line", "Linux basics"] },
  { title: "Concepts", items: ["Data Structures", "Algorithms", "OOP", "SDLC", "Debugging"] },
  { title: "Currently learning", items: ["Cloud fundamentals (AWS)", "Applied AI / LLM APIs", "System design basics"] },
];

export const education = [
  {
    degree: "B.Tech, Computer Science",
    school: "Vignan Institute of Technology and Science",
    period: "2023 — Present",
    detail: "CGPA: 8.3 / 10",
  },
  {
    degree: "Intermediate (MPC)",
    school: "Sri Chaitanya Junior College",
    period: "2021 — 2023",
    detail: "91.7%",
  },
  {
    degree: "SSC (Class X)",
    school: "Bhashyam High School",
    period: "2021",
    detail: "GPA: 10.0 / 10",
  },
];

export const certifications = [
  { name: "Static Website Development", issuer: "NxtWave CCBP Academy", url: "https://certificates.ccbp.in/academy/static-website?id=NKZBSOTKVQ" },
  { name: "Introduction to Databases", issuer: "NxtWave CCBP Academy", url: "https://certificates.ccbp.in/academy/introduction-to-databases?id=WUKLRSGAXU" },
  { name: "Programming Foundations with Python", issuer: "NxtWave CCBP Academy", url: "https://certificates.ccbp.in/academy/programming-foundations-with-python?id=PQSLIMEMJD" },
];
