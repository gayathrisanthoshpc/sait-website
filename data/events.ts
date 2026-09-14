export type EventCategory =
  | "Workshop"
  | "Seminar"
  | "Technical"
  | "Cultural"
  | "Competition"
  | "Community";

export type EventItem = {
  id: string;
  name: string;
  category: EventCategory;
  date: string;
  time: string;
  venue: string;
  description: string;
  featured?: boolean;
  registrationLabel?: string;
  isPast?: boolean;
  outcome?: string;
  year?: string;
  isDemo?: boolean;
};

export const eventCategories: EventCategory[] = [
  "Workshop",
  "Seminar",
  "Technical",
  "Cultural",
  "Competition",
  "Community",
];

export const events: EventItem[] = [
  {
    id: "demo-1",
    name: "Mock Event: Design Thinking Workshop",
    category: "Workshop",
    date: "September 18, 2026",
    time: "4:00 PM – 6:00 PM",
    venue: "Department Seminar Hall",
    description:
      "Demo/mock workshop designed to explore problem framing, creativity, and early-stage prototyping for student projects.",
    featured: true,
    registrationLabel: "Register – demo",
    isDemo: true,
  },
  {
    id: "demo-2",
    name: "Mock Event: Industry & Career Seminar",
    category: "Seminar",
    date: "September 22, 2026",
    time: "2:00 PM – 4:00 PM",
    venue: "IT Auditorium",
    description:
      "Demo/mock seminar focused on career outlook, student preparation, and understanding how IT pathways connect with broader industry learning.",
    featured: false,
    registrationLabel: "Details – demo",
    isDemo: true,
  },
  {
    id: "demo-3",
    name: "Mock Event: Build-a-Bot Challenge",
    category: "Competition",
    date: "October 05, 2026",
    time: "10:00 AM – 2:00 PM",
    venue: "Innovation Lab",
    description:
      "Demo/mock competition encouraging technical creativity, teamwork, and rapid prototyping in a collaborative student setting.",
    registrationLabel: "Join – demo",
    featured: true,
    isDemo: true,
  },
  {
    id: "demo-4",
    name: "Mock Event: Web Culture Night",
    category: "Cultural",
    date: "October 12, 2026",
    time: "6:00 PM – 8:00 PM",
    venue: "College Open Stage",
    description:
      "Demo/mock cultural gathering bringing together creativity, expression, and community-building through performances and student participation.",
    registrationLabel: "Reserve – demo",
    isDemo: true,
  },
  {
    id: "demo-5",
    name: "Mock Event: Community Tech Meet",
    category: "Community",
    date: "October 20, 2026",
    time: "5:30 PM – 7:30 PM",
    venue: "Main Building Lobby",
    description:
      "Demo/mock community event focused on information sharing, student interaction, and hands-on conversations around projects and learning.",
    registrationLabel: "Attend – demo",
    isDemo: true,
  },
  {
    id: "demo-6",
    name: "Mock Event: Open Source Lab Session",
    category: "Technical",
    date: "November 02, 2026",
    time: "3:00 PM – 5:00 PM",
    venue: "Computer Lab",
    description:
      "Demo/mock technical session on collaborative coding practices, open projects, and learning through experimentation.",
    registrationLabel: "Register – demo",
    isDemo: true,
  },
  {
    id: "past-demo-1",
    name: "SAIT Creative Writing Circle",
    category: "Community",
    date: "April 2026",
    time: "Evening session",
    venue: "Department space",
    description:
      "A student-led session encouraging reflection, writing, and community storytelling across the department.",
    isPast: true,
    year: "2026",
    outcome: "Encouraged stronger student participation and creative expression.",
    isDemo: true,
  },
  {
    id: "past-demo-2",
    name: "Department Project Showcase",
    category: "Technical",
    date: "March 2026",
    time: "Afternoon showcase",
    venue: "Department venue",
    description:
      "A collaborative project display highlighting student work, technical exploration, and practical learning outcomes.",
    isPast: true,
    year: "2026",
    outcome: "Showcased student work and strengthened peer learning.",
    isDemo: true,
  },
  {
    id: "past-demo-3",
    name: "Magazine Release Session",
    category: "Cultural",
    date: "February 2026",
    time: "Afternoon session",
    venue: "Department hall",
    description:
      "A reading and display session featuring student writing, poems, drawings, and technical contributions.",
    isPast: true,
    year: "2026",
    outcome: "Created a visible record of student creativity and department culture.",
    isDemo: true,
  },
];
