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
    name: "Mock Alumni: Aisha Nair",
    batch: "2021",
    role: "Senior Product Engineer",
    industry: "Product & Design",
    company: "Demo Company: Pixel Arc",
    achievement: "Demo achievement: led a platform redesign for student-focused tools",
    location: "Kochi, India",
    story:
      "Demo story: Aisha carried her SAIT project mindset into product work, mentoring juniors and helping students bridge classroom work with real product thinking.",
    highlight: "Product leadership with a student-first lens",
    initials: "AN",
    isFeatured: true,
  },
  {
    id: "alumni-2",
    name: "Mock Alumni: Rohan Mathew",
    batch: "2019",
    role: "Data Engineer",
    industry: "Data & AI",
    company: "Demo Company: NeoSignal",
    achievement: "Demo achievement: built analytics pipelines for civic digital services",
    location: "Bengaluru, India",
    story:
      "Demo story: Rohan stayed connected to SAIT through project collaboration, giving feedback on data-driven experiments and helping students understand practical engineering workflows.",
    highlight: "Scaled data systems from student projects to industry execution",
    initials: "RM",
  },
  {
    id: "alumni-3",
    name: "Mock Alumni: Meera Iyer",
    batch: "2020",
    role: "UX Researcher",
    industry: "Product & Design",
    company: "Demo Company: Harbor Studio",
    achievement: "Demo achievement: shaped accessibility-first research frameworks",
    location: "Cochin, India",
    story:
      "Demo story: Meera returned to SAIT as a design mentor, helping members translate user feedback into better digital experiences and collaborative prototypes.",
    highlight: "Bringing research, empathy and product clarity into the student community",
    initials: "MI",
  },
  {
    id: "alumni-4",
    name: "Mock Alumni: Arjun Pillai",
    batch: "2018",
    role: "Security Analyst",
    industry: "Cybersecurity",
    company: "Demo Company: Apex Grid",
    achievement: "Demo achievement: designed campus-safe security awareness workshops",
    location: "Thiruvananthapuram, India",
    story:
      "Demo story: Arjun used his alumni perspective to make technical safety discussions more practical, approachable and useful for students embarking on early careers.",
    highlight: "Turning technical complexity into practical student guidance",
    initials: "AP",
  },
  {
    id: "alumni-5",
    name: "Mock Alumni: Sneha Joseph",
    batch: "2022",
    role: "Growth Strategist",
    industry: "Marketing",
    company: "Demo Company: North Star Labs",
    achievement: "Demo achievement: led community engagement campaigns for a digital-first startup",
    location: "Trivandrum, India",
    story:
      "Demo story: Sneha came back to speak on outreach, storytelling and community-building, showing students how communication can shape real opportunities.",
    highlight: "Helping students learn how ideas travel beyond a classroom",
    initials: "SJ",
  },
  {
    id: "alumni-6",
    name: "Mock Alumni: Daniel George",
    batch: "2017",
    role: "Consulting Engineer",
    industry: "Consulting",
    company: "Demo Company: Nucleus Advisory",
    achievement: "Demo achievement: supported digital transformation research for client teams",
    location: "Bengaluru, India",
    story:
      "Demo story: Daniel often returns as a guest reviewer, helping student teams reflect on problem framing, communication and how technical work connects to business decisions.",
    highlight: "Bridging technical work with real-world advisory thinking",
    initials: "DG",
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
