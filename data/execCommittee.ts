export type ExecCommitteeMember = {
  id: string;
  name: string;
  role: string;
  year: string;
  photo: string;
  initials: string;
  bio: string;
  socialUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
};

export const execCommittee: ExecCommitteeMember[] = [
  {
    id: "exec-1",
    name: "Aditya V. Nair",
    role: "President, SAIT",
    year: "IT Batch 2023–2027 (S7)",
    photo: "",
    initials: "AN",
    bio: "Passionate about full-stack systems, campus community building, and open-source software.",
    socialUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "exec-2",
    name: "Devika S. Kumar",
    role: "Vice President, SAIT",
    year: "IT Batch 2023–2027 (S7)",
    photo: "",
    initials: "DK",
    bio: "Specializes in AI/ML pipelines and leads academic symposiums across the department.",
    socialUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "exec-3",
    name: "Nithin K. Menon",
    role: "General Secretary",
    year: "IT Batch 2024–2028 (S5)",
    photo: "",
    initials: "NM",
    bio: "Coordinates event logistics, hackathons, and industry mentorship sessions.",
    socialUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "exec-4",
    name: "Anjana R. Pillai",
    role: "Treasurer & Finance Lead",
    year: "IT Batch 2024–2028 (S5)",
    photo: "",
    initials: "AP",
    bio: "Manages association budgets, sponsorship drives, and event resource allocation.",
    socialUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
  },
];
