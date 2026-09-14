export type PlacementStat = {
  label: string;
  value: string;
  note: string;
};

export type Recruiter = {
  name: string;
  sector: string;
  roles: string[];
  status: "Active" | "Pipeline" | "Demo";
};

export type CareerResource = {
  title: string;
  description: string;
  cta: string;
};

export type AlumniCareerProfile = {
  name: string;
  role: string;
  field: string;
  message: string;
};

export const placementStats: PlacementStat[] = [
  { label: "Highest package", value: "₹24 LPA", note: "Demo" },
  { label: "Average package", value: "₹8.5 LPA", note: "Demo" },
  { label: "Students placed", value: "120+", note: "Demo" },
  { label: "Companies / recruiters", value: "40+", note: "Demo" },
];

export const recruiters: Recruiter[] = [
  {
    name: "Northstar Labs",
    sector: "Software",
    roles: ["Frontend Engineer", "Product Analyst"],
    status: "Active",
  },
  {
    name: "Vector Grid",
    sector: "Data & Analytics",
    roles: ["Data Analyst", "Business Intelligence Intern"],
    status: "Pipeline",
  },
  {
    name: "Nova Systems",
    sector: "Product",
    roles: ["QA Engineer", "Product Intern"],
    status: "Demo",
  },
  {
    name: "Aster Digital",
    sector: "Consulting",
    roles: ["Consultant", "Operations Analyst"],
    status: "Active",
  },
  {
    name: "Fjord Core",
    sector: "Core Tech",
    roles: ["Platform Engineer", "Support Engineer"],
    status: "Pipeline",
  },
  {
    name: "Signal One",
    sector: "IT Services",
    roles: ["Associate Engineer", "Technical Analyst"],
    status: "Demo",
  },
];

export const careerResources: CareerResource[] = [
  {
    title: "Resume & portfolio",
    description: "Build a clean, clear profile that highlights projects, skills, and outcomes.",
    cta: "Review template",
  },
  {
    title: "Interview preparation",
    description: "Practice communication, storytelling, and confidence-building for interviews.",
    cta: "View guide",
  },
  {
    title: "Technical preparation",
    description: "Strengthen coding, problem solving, and project-based readiness for technical roles.",
    cta: "Open checklist",
  },
  {
    title: "Aptitude preparation",
    description: "Sharpen quantitative, logical, and reasoning readiness for assessment rounds.",
    cta: "Explore drills",
  },
  {
    title: "Alumni guidance",
    description: "Learn from seniors and alumni about pathways, preparation, and real career choices.",
    cta: "Connect",
  },
  {
    title: "Internship search",
    description: "Track internship leads, practical opportunities, and project-driven experience building.",
    cta: "Find openings",
  },
];

export const alumniProfiles: AlumniCareerProfile[] = [
  {
    name: "Alumni — Name to be added",
    role: "Role to be added",
    field: "Field to be added",
    message: "Demo profile: alumni guidance around projects, preparation, and building career confidence.",
  },
  {
    name: "Senior — Name to be added",
    role: "Role to be added",
    field: "Field to be added",
    message: "Demo profile: student-to-student support for internships, interview readiness, and career direction.",
  },
  {
    name: "Alumni — Name to be added",
    role: "Role to be added",
    field: "Field to be added",
    message: "Demo profile: mentorship around technical growth, communication, and career transitions.",
  },
];
