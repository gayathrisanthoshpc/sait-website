export type AchievementCategory =
  | "Hackathons"
  | "Technical Competitions"
  | "Academics"
  | "Research"
  | "Projects"
  | "Other";

export type AchievementItem = {
  id: string;
  title: string;
  category: AchievementCategory;
  year: string;
  team: string;
  result: string;
  description: string;
  details: string;
  badge: string;
  featured?: boolean;
};

export const achievements: AchievementItem[] = [
  {
    id: "achi-1",
    title: "Mock Demo: Civic Tech Challenge",
    category: "Hackathons",
    year: "2026",
    team: "Student Team Alpha",
    result: "Regional finalist",
    description:
      "Demo outcome: a student-led team built a civic technology prototype that mapped public service access and community challenges.",
    details:
      "Demo detail: the team framed a real civic issue, built a working prototype, and received feedback from mentors on product clarity, usability and stakeholder value.",
    badge: "Regional finalist",
    featured: true,
  },
  {
    id: "achi-2",
    title: "Mock Demo: Research Poster Showcase",
    category: "Research",
    year: "2025",
    team: "Nivedita & team",
    result: "Best poster award",
    description:
      "Demo outcome: a student research group presented a poster on applied analytics and practical problem framing for campus technologies.",
    details:
      "Demo detail: the work combined literature review, collaborative design and presentation planning, showing how research can be communicated in clear, audience-friendly ways.",
    badge: "Best poster",
  },
  {
    id: "achi-3",
    title: "Mock Demo: Systems Design Sprint",
    category: "Technical Competitions",
    year: "2024",
    team: "SAIT Systems Crew",
    result: "Top 5 among teams",
    description:
      "Demo outcome: the team designed a resilient small-scale platform and presented a working solution under time pressure.",
    details:
      "Demo detail: this competition highlighted architecture, communication and iteration, and was used to mentor newer students on design sprint thinking.",
    badge: "Top 5",
  },
  {
    id: "achi-4",
    title: "Mock Demo: Semester Publication Feature",
    category: "Academics",
    year: "2023",
    team: "Student editorial group",
    result: "Featured publication",
    description:
      "Demo outcome: a student-driven publication feature highlighted thoughtful work on digital culture, learning and technology practice.",
    details:
      "Demo detail: this contribution showed how academic work can become public-facing writing that helps the wider student community connect ideas to practice.",
    badge: "Featured",
  },
  {
    id: "achi-5",
    title: "Mock Demo: Community Project Lab",
    category: "Projects",
    year: "2022",
    team: "Design & Development circle",
    result: "Prototype launched",
    description:
      "Demo outcome: a group of students built and presented a prototype for a community resource portal and information workflow.",
    details:
      "Demo detail: the project emphasized user empathy, implementation constraints and feedback loops, demonstrating how collaborative building creates momentum for learning.",
    badge: "Prototype launch",
  },
  {
    id: "achi-6",
    title: "Mock Demo: Learning Impact Award",
    category: "Other",
    year: "2021",
    team: "Peer mentoring cohort",
    result: "Community recognition",
    description:
      "Demo outcome: students were recognized for facilitating peer learning, onboarding and collaborative knowledge sharing across the association.",
    details:
      "Demo detail: this example shows that recognition can come from helping peers learn, communicate clearly and support each other during academic transitions.",
    badge: "Recognition",
  },
];

export const achievementCategories: Array<"All categories" | AchievementCategory> = [
  "All categories",
  "Hackathons",
  "Technical Competitions",
  "Academics",
  "Research",
  "Projects",
  "Other",
];

export const achievementYears = [
  "All years",
  ...Array.from(new Set(achievements.map((item) => item.year))).sort((a, b) => Number(b) - Number(a)),
];
