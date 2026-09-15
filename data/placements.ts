export type PlacementStat = {
  label: string;
  value: string;
  note: string;
};

export type Recruiter = {
  name: string;
  sector: string;
  roles: string[];
  status: "Active Recruiter" | "Placement Partner" | "Regular Recruiter";
};

export type CareerResource = {
  title: string;
  description: string;
  cta: string;
};

export type AlumniCareerProfile = {
  name: string;
  role: string;
  company: string;
  batch: string;
  field: string;
  message: string;
};

export const placementStats: PlacementStat[] = [
  { label: "Highest Package Offered", value: "₹28.5 LPA", note: "Product / Core IT" },
  { label: "Average CTC (IT Division)", value: "₹9.2 LPA", note: "Batch 2025–2026" },
  { label: "Eligible Students Placed", value: "94%", note: "Division of IT CUSAT" },
  { label: "Recruiting Companies", value: "45+", note: "On-campus & Off-campus Drives" },
];

export const recruiters: Recruiter[] = [
  {
    name: "Google",
    sector: "Product & Cloud",
    roles: ["Software Engineer", "Systems Analyst"],
    status: "Active Recruiter",
  },
  {
    name: "Amazon Web Services",
    sector: "Cloud Infrastructure",
    roles: ["Cloud Support Engineer", "DevOps Intern"],
    status: "Placement Partner",
  },
  {
    name: "Postman",
    sector: "Developer Tooling & API",
    roles: ["Backend Software Engineer", "Product Specialist"],
    status: "Active Recruiter",
  },
  {
    name: "Ernst & Young (EY)",
    sector: "Tech Consulting & Security",
    roles: ["Cybersecurity Consultant", "IT Risk Analyst"],
    status: "Regular Recruiter",
  },
  {
    name: "Tech Mahindra",
    sector: "IT Enterprise Systems",
    roles: ["Software Development Associate", "System Engineer"],
    status: "Regular Recruiter",
  },
  {
    name: "TCS Digital",
    sector: "IT & Software Services",
    roles: ["Digital Software Engineer", "Systems Architect"],
    status: "Regular Recruiter",
  },
];

export const careerResources: CareerResource[] = [
  {
    title: "Resume & Portfolio Review",
    description: "Build a clean, high-impact technical resume highlighting open-source PRs, hackathons, and published projects.",
    cta: "Download SAIT Resume Template",
  },
  {
    title: "System Design & DS/Algo Preparation",
    description: "Curated problem sets and architecture guides designed specifically for CUSAT IT placement campus drives.",
    cta: "View Preparation Roadmap",
  },
  {
    title: "Interview Practice & Technical Drills",
    description: "Schedule 1-on-1 practice interviews with senior alumni working in product companies.",
    cta: "Book Practice Interview Slot",
  },
  {
    title: "Quantitative & Aptitude Practice",
    description: "Sharpen logical reasoning, mathematical aptitude, and verbal rounds required for tier-1 IT drives.",
    cta: "Practice Aptitude Sets",
  },
];

export const alumniProfiles: AlumniCareerProfile[] = [
  {
    name: "Siddharth V.",
    role: "Senior Backend Engineer",
    company: "Postman",
    batch: "Batch 2022",
    field: "API Infrastructure & Microservices",
    message: "Building strong foundational projects in SAIT workshops directly translated into technical confidence during product interview rounds.",
  },
  {
    name: "Anjali Menon",
    role: "Software Engineer II",
    company: "Google India",
    batch: "Batch 2021",
    field: "Distributed Systems & Cloud",
    message: "Focus on understanding data structures and contributing to open-source codebases. The SAIT hackathons were my favorite learning memory.",
  },
  {
    name: "Rahul Nair",
    role: "Cybersecurity Analyst",
    company: "EY",
    batch: "Batch 2023",
    field: "Security Operations & Pentesting",
    message: "Participating in CTF competitions organized by the IT department gave me hands-on practical skills that employers actively seek.",
  },
];
