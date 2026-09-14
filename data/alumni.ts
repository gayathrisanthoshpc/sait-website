export type AlumniRecord = {
  id: string;
  name: string;
  batch: string;
  role: string;
  industry: string;
  company: string;
  achievement: string;
  location: string;
  story: string;
  highlight: string;
  initials: string;
  isFeatured?: boolean;
};

export const alumni: AlumniRecord[] = [
  {
    id: "alumni-1",
    name: "Aisha Nair",
    batch: "2021",
    role: "Senior Software Engineer",
    industry: "Product & Cloud",
    company: "Google India",
    achievement: "Led core infrastructure migration handling millions of queries per second",
    location: "Bengaluru, India",
    story:
      "Aisha carried her SAIT project mindset into scalable cloud engineering. She frequently conducts virtual mentoring sessions for CUSAT IT juniors preparing for campus interviews.",
    highlight: "Distributed systems engineering with a community-first lens",
    initials: "AN",
    isFeatured: true,
  },
  {
    id: "alumni-2",
    name: "Siddharth V.",
    batch: "2022",
    role: "Senior Backend Engineer",
    industry: "Developer Tooling",
    company: "Postman",
    achievement: "Built API runtime ecosystem tools used by over 20 million developers",
    location: "Bengaluru, India",
    story:
      "Siddharth stayed deeply connected to SAIT through project feedback, running hands-on workshops on GraphQL microservices for CUSAT students.",
    highlight: "Scaled developer tools from SAIT lab prototypes to global execution",
    initials: "SV",
    isFeatured: true,
  },
  {
    id: "alumni-3",
    name: "Rohan Mathew",
    batch: "2019",
    role: "Lead Data Engineer",
    industry: "Data & AI",
    company: "Amazon Web Services",
    achievement: "Architected real-time telemetry pipelines processing petabytes of data daily",
    location: "Hyderabad, India",
    story:
      "Rohan credits his problem-solving foundation to SAIT hackathons. He sponsors annual awards for CUSAT IT final-year project teams.",
    highlight: "Big data pipeline architecture & industry mentorship",
    initials: "RM",
  },
  {
    id: "alumni-4",
    name: "Meera Iyer",
    batch: "2020",
    role: "Staff UX Researcher",
    industry: "Product & Design",
    company: "Atlassian",
    achievement: "Shaped accessibility-first design systems across developer productivity suites",
    location: "Bengaluru, India",
    story:
      "Meera regularly visits SOE CUSAT as a guest mentor, teaching students how user empathy transforms technical code into loved products.",
    highlight: "Accessibility-first design systems and UX leadership",
    initials: "MI",
  },
  {
    id: "alumni-5",
    name: "Arjun Pillai",
    batch: "2018",
    role: "Cybersecurity Architect",
    industry: "Cybersecurity",
    company: "Ernst & Young (EY)",
    achievement: "Designed threat modeling frameworks for Fortune 500 financial platforms",
    location: "Kochi, India",
    story:
      "Arjun actively mentors the SAIT Security Guild, conducting ethical hacking demonstrations and CTF walkthroughs.",
    highlight: "Enterprise cybersecurity defense & threat modeling",
    initials: "AP",
  },
  {
    id: "alumni-6",
    name: "Sneha Joseph",
    batch: "2022",
    role: "Product Manager",
    industry: "Fintech",
    company: "Razorpay",
    achievement: "Led growth initiatives for developer checkout APIs across South Asia",
    location: "Bengaluru, India",
    story:
      "Sneha returns to SAIT to speak on product management, technical storytelling, and turning college projects into startup opportunities.",
    highlight: "Bridging engineering rigor with product strategy",
    initials: "SJ",
  },
];

export const alumniIndustries = [
  "All industries",
  ...Array.from(new Set(alumni.map((person) => person.industry))),
];

export const alumniBatches = [
  "All batches",
  ...Array.from(new Set(alumni.map((person) => person.batch))),
];
