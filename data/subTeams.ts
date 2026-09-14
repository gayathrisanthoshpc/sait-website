export type SubTeamKey = "Tech" | "Media" | "Events" | "PR" | "Content";

export type SubTeamMember = {
  id: string;
  name: string;
  role: string;
  team: SubTeamKey;
  photo: string;
  socialUrl?: string;
};

export const subTeamLabels: SubTeamKey[] = ["Tech", "Media", "Events", "PR", "Content"];

export const subTeams: Record<SubTeamKey, SubTeamMember[]> = {
  Tech: [
    { id: "tech-1", name: "Name to be added", role: "Tech member", team: "Tech", photo: "Photo to be added", socialUrl: "#" },
    { id: "tech-2", name: "Name to be added", role: "Tech member", team: "Tech", photo: "Photo to be added", socialUrl: "#" },
    { id: "tech-3", name: "Name to be added", role: "Tech member", team: "Tech", photo: "Photo to be added", socialUrl: "#" },
  ],
  Media: [
    { id: "media-1", name: "Name to be added", role: "Media member", team: "Media", photo: "Photo to be added", socialUrl: "#" },
    { id: "media-2", name: "Name to be added", role: "Media member", team: "Media", photo: "Photo to be added", socialUrl: "#" },
    { id: "media-3", name: "Name to be added", role: "Media member", team: "Media", photo: "Photo to be added", socialUrl: "#" },
  ],
  Events: [
    { id: "events-1", name: "Name to be added", role: "Events member", team: "Events", photo: "Photo to be added", socialUrl: "#" },
    { id: "events-2", name: "Name to be added", role: "Events member", team: "Events", photo: "Photo to be added", socialUrl: "#" },
    { id: "events-3", name: "Name to be added", role: "Events member", team: "Events", photo: "Photo to be added", socialUrl: "#" },
  ],
  PR: [
    { id: "pr-1", name: "Name to be added", role: "PR member", team: "PR", photo: "Photo to be added", socialUrl: "#" },
    { id: "pr-2", name: "Name to be added", role: "PR member", team: "PR", photo: "Photo to be added", socialUrl: "#" },
    { id: "pr-3", name: "Name to be added", role: "PR member", team: "PR", photo: "Photo to be added", socialUrl: "#" },
  ],
  Content: [
    { id: "content-1", name: "Name to be added", role: "Content member", team: "Content", photo: "Photo to be added", socialUrl: "#" },
    { id: "content-2", name: "Name to be added", role: "Content member", team: "Content", photo: "Photo to be added", socialUrl: "#" },
    { id: "content-3", name: "Name to be added", role: "Content member", team: "Content", photo: "Photo to be added", socialUrl: "#" },
  ],
};
