export const profile = {
  name: "Mithil Manchukonda",
  role: "Full-Stack Developer · AI-Curious",
  location: "Hyderabad, India",
  email: "mithilmanchukonda@gmail.com",
  phone: "+91 8466903113",
  github: "https://github.com/MithilManchukonda",
  linkedin: "https://www.linkedin.com/in/mithil-manchukonda/", // PLACEHOLDER — replace with real URL
  resumeUrl: "/Manchukonda_Mithil_Resume.pdf",
  headline: "B.Tech CS student shipping full-stack products with React, Node, and AI.",
  tagline:
    "Third-year Computer Science student from Hyderabad. I build production-ready web apps — full-stack tools with authentication, databases, and AI features — and I'm looking for an internship where I can ship real work and learn fast.",
};

export const about = {
  paragraphs: [
    "I'm a third-year B.Tech Computer Science student at Vignan Institute of Technology and Science. My focus is full-stack development — designing clean UIs in React, wiring them to real backends, and integrating AI where it actually helps the user.",
    "I've shipped live products this year: a developer cheat-sheet app with Firebase auth and Firestore, and an AI-powered resume builder on the MERN stack with Gemini and Google OAuth. I'm actively expanding into cloud fundamentals and system design, and I document every project on GitHub so my progress is easy to verify.",
  ],
  highlights: [
    { label: "CGPA", value: "8.3 / 10" },
    { label: "Stack", value: "React · Node · Firebase" },
    { label: "Year", value: "3rd Year B.Tech" },
    { label: "Open to", value: "Internships · SDE roles" },
  ],
};

export const projects = [
  {
    name: "DevRef — Developer Cheat Sheet App",
    summary: "A live, searchable cheat-sheet app for 8 languages with auth, Firestore sync, and user-contributed snippets.",
    problem:
      "As a CS student learning multiple languages at once, I kept re-Googling the same syntax. I wanted one fast, personal reference I could search — and extend with my own notes.",
    stack: ["React 18", "Vite", "Tailwind CSS", "Framer Motion", "Firebase Auth", "Firestore"],
    features: [
      "24+ curated snippets across Python, JS, React, Java, HTML, CSS, DevOps, and AWS",
      "Live search + language filter pills that narrow the grid as you type",
      "Google and email/password auth via Firebase, with per-user bookmarks",
      "Logged-in users can add their own snippets — synced in real time via Firestore onSnapshot",
      "Click-to-expand output reveal and one-click copy with toast confirmation",
    ],
    outcome:
      "Shipped end-to-end: designed the data model, handled auth flows, tuned Firestore rules, and deployed on Vercel with a custom dark neon UI.",
    github: "https://github.com/MithilManchukonda/Devref1",
    demo: "https://devref1.vercel.app/",
    tag: "Full-Stack",
  },
  {
    name: "AI Resume Builder",
    summary: "MERN-stack resume builder with Gemini-powered review, ATS scoring, and version history.",
    problem:
      "Most resume tools are static templates. I wanted one that actively coaches the user — rewrites weak bullets, scores against a job description, and keeps every draft.",
    stack: ["React 19", "Vite", "Node.js", "Express", "MongoDB", "JWT", "Google OAuth", "Gemini AI", "LangChain"],
    features: [
      "Full resume editor with live preview and multiple templates",
      "AI review, summary generation, and bullet rewriting via Gemini + LangChain",
      "ATS analysis: keyword coverage and match score against a pasted job description",
      "Email/password + Google OAuth auth with JWT sessions",
      "Version history — save, browse, and restore prior drafts from MongoDB",
      "Structured backend with controllers, services, and Mongoose models",
    ],
    outcome:
      "First end-to-end MERN project — designed the schema, built REST endpoints, wired AI safely on the server, and kept secrets out of the client.",
    github: "https://github.com/MithilManchukonda/resume_builder",
    demo: null, // PLACEHOLDER — add live demo URL after deploying
    tag: "Full-Stack · AI",
  },
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
      "Got comfortable with iterative debugging across file I/O and third-party libraries — and with writing code another person can pick up quickly.",
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
];

export const skillGroups = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "Python", "SQL", "HTML", "CSS"] },
  { title: "Frontend", items: ["React 18/19", "Vite", "Tailwind CSS", "Framer Motion", "Responsive UI"] },
  { title: "Backend & APIs", items: ["Node.js", "Express", "REST APIs", "JWT auth", "Google OAuth"] },
  { title: "Databases", items: ["MongoDB / Mongoose", "Firebase Firestore", "MySQL", "Oracle", "Schema design"] },
  { title: "AI & Cloud", items: ["Gemini API", "LangChain", "Firebase Auth & Hosting", "Vercel", "AWS (learning)"] },
  { title: "Tools & Concepts", items: ["Git & GitHub", "VS Code", "Linux basics", "Data Structures", "OOP", "Debugging"] },
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
