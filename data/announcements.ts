export type AnnouncementCategory =
  | "Events"
  | "Opportunities"
  | "Academics"
  | "Placements"
  | "SAIT"
  | "General";

export type AnnouncementItem = {
  id: string;
  title: string;
  category: AnnouncementCategory;
  date: string;
  description: string;
  deadline?: string;
  priority: "High" | "Medium" | "Low";
  read: boolean;
  featured?: boolean;
};

export const announcements: AnnouncementItem[] = [
  {
    id: "ann-1",
    title: "Mock Demo: Registration opens for the SAIT Design Studio",
    category: "Events",
    date: "2026-09-15",
    description:
      "Demo announcement: students can sign up for a design-focused session covering ideas, prototypes and community feedback loops.",
    deadline: "2026-09-20",
    priority: "High",
    read: false,
    featured: true,
  },
  {
    id: "ann-2",
    title: "Mock Demo: Internship interest form for student teams",
    category: "Opportunities",
    date: "2026-09-12",
    description:
      "Demo announcement: a mock internship interest form is now open for students exploring applied product and technical work.",
    deadline: "2026-09-25",
    priority: "Medium",
    read: true,
  },
  {
    id: "ann-3",
    title: "Mock Demo: Academic submission reminder for project review",
    category: "Academics",
    date: "2026-09-10",
    description:
      "Demo announcement: students are reminded to submit a short project review and supporting notes before the timeline closes.",
    deadline: "2026-09-18",
    priority: "High",
    read: false,
  },
  {
    id: "ann-4",
    title: "Mock Demo: Placement networking session schedule",
    category: "Placements",
    date: "2026-09-07",
    description:
      "Demo announcement: a networking session is being organized to help students learn about fields, teams and application expectations.",
    deadline: "2026-09-22",
    priority: "Medium",
    read: true,
  },
  {
    id: "ann-5",
    title: "Mock Demo: Community volunteer call for SAIT events",
    category: "SAIT",
    date: "2026-09-04",
    description:
      "Demo announcement: SAIT members are invited to volunteer for event support, student logistics and welcoming tasks.",
    deadline: "2026-09-16",
    priority: "Low",
    read: false,
  },
  {
    id: "ann-6",
    title: "Mock Demo: Department bulletin board update",
    category: "General",
    date: "2026-08-30",
    description:
      "Demo announcement: a short bulletin review shares updates on upcoming community sessions, internal notices and opportunities.",
    priority: "Low",
    read: true,
  },
];

export const announcementCategories: Array<"All" | AnnouncementCategory> = [
  "All",
  "Events",
  "Opportunities",
  "Academics",
  "Placements",
  "SAIT",
  "General",
];
