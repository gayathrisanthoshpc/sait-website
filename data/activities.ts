export type ActivityType =
  | "Workshop"
  | "Seminar"
  | "Project"
  | "Competition"
  | "Volunteering"
  | "Leadership"
  | "Cultural"
  | "Other";

export type ActivityStatus = "Verified" | "Pending" | "Needs Review";

export type ActivityItem = {
  id: string;
  name: string;
  type: ActivityType;
  date: string;
  role: string;
  description: string;
  proof: string;
  status: ActivityStatus;
  points: number;
  badge: string;
  year: string;
  month: string;
};

export type BadgeItem = {
  id: string;
  name: string;
  unlocked: boolean;
  description: string;
};

export const activityTypes: ActivityType[] = [
  "Workshop",
  "Seminar",
  "Project",
  "Competition",
  "Volunteering",
  "Leadership",
  "Cultural",
  "Other",
];

export const activityStatuses: Array<ActivityStatus | "All"> = [
  "All",
  "Verified",
  "Pending",
  "Needs Review",
];

export const demoActivities: ActivityItem[] = [
  {
    id: "activity-1",
    name: "Mock Workshop: Design Thinking Sprint",
    type: "Workshop",
    date: "2026-02-12",
    role: "Participant",
    description:
      "Demo description: attended a design thinking workshop focused on rapid problem framing and collaborative problem solving.",
    proof: "https://example.com/demo-proof/1",
    status: "Verified",
    points: 60,
    badge: "First Step",
    year: "2026",
    month: "February",
  },
  {
    id: "activity-2",
    name: "Mock Project: Community Info Portal",
    type: "Project",
    date: "2026-03-08",
    role: "Frontend contributor",
    description:
      "Demo description: helped build a student-facing portal prototype to organize event and project information.",
    proof: "https://example.com/demo-proof/2",
    status: "Verified",
    points: 90,
    badge: "Builder",
    year: "2026",
    month: "March",
  },
  {
    id: "activity-3",
    name: "Mock Seminar: Careers in Tech",
    type: "Seminar",
    date: "2025-11-17",
    role: "Audience lead",
    description:
      "Demo description: attended a seminar on career paths, industry expectations and practical exploration of emerging technology roles.",
    proof: "https://example.com/demo-proof/3",
    status: "Pending",
    points: 45,
    badge: "Tech Explorer",
    year: "2025",
    month: "November",
  },
  {
    id: "activity-4",
    name: "Mock Volunteering: Event Support Team",
    type: "Volunteering",
    date: "2025-09-27",
    role: "Volunteer",
    description:
      "Demo description: supported logistics and guest coordination during a department-level student event.",
    proof: "https://example.com/demo-proof/4",
    status: "Needs Review",
    points: 70,
    badge: "Community Contributor",
    year: "2025",
    month: "September",
  },
  {
    id: "activity-5",
    name: "Mock Competition: Systems Design Challenge",
    type: "Competition",
    date: "2025-06-19",
    role: "Team member",
    description:
      "Demo description: worked on a rapid design challenge to build a robust short-form system and present solutions under time pressure.",
    proof: "https://example.com/demo-proof/5",
    status: "Verified",
    points: 120,
    badge: "Builder",
    year: "2025",
    month: "June",
  },
  {
    id: "activity-6",
    name: "Mock Leadership: Peer Mentor Circle",
    type: "Leadership",
    date: "2024-08-03",
    role: "Mentor",
    description:
      "Demo description: guided new students through onboarding, peer support and practical information sharing within the community.",
    proof: "https://example.com/demo-proof/6",
    status: "Verified",
    points: 95,
    badge: "Collaborator",
    year: "2024",
    month: "August",
  },
];

export const demoBadges: BadgeItem[] = [
  { id: "badge-1", name: "First Step", unlocked: true, description: "For your first completed activity." },
  { id: "badge-2", name: "Builder", unlocked: true, description: "For project and technical participation." },
  { id: "badge-3", name: "Collaborator", unlocked: true, description: "For team-based contributions and mentoring." },
  { id: "badge-4", name: "Community Contributor", unlocked: false, description: "For volunteering and community support." },
  { id: "badge-5", name: "Tech Explorer", unlocked: false, description: "For seminars, workshops and learning exploration." },
  { id: "badge-6", name: "SAIT Veteran", unlocked: false, description: "For sustained participation over time." },
];

export const demoLeaderboard = [
  { id: "leader-1", name: "Aisha Nair", activities: 18, points: 1280 },
  { id: "leader-2", name: "Rohit Menon", activities: 15, points: 1160 },
  { id: "leader-3", name: "Meera Iyer", activities: 14, points: 1095 },
  { id: "leader-4", name: "You", activities: 11, points: 960 },
];

export const demoFeed = [
  { id: "feed-1", title: "Activity verified", detail: "Workshop: Design Thinking Sprint was verified." },
  { id: "feed-2", title: "New badge unlocked", detail: "Builder badge unlocked for project participation." },
  { id: "feed-3", title: "Event attended", detail: "Careers in Tech seminar recorded to your journey." },
  { id: "feed-4", title: "Achievement recorded", detail: "Community contribution milestone added to your profile." },
];
