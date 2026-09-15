"use client";

import { useMemo, useState, type FormEvent } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

import ActivityForm from "@/components/activity-logger/ActivityForm";
import ActivityHistory from "@/components/activity-logger/ActivityHistory";
import DashboardFeed from "@/components/activity-logger/DashboardFeed";
import Leaderboard from "@/components/activity-logger/Leaderboard";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { demoActivities, demoBadges, type ActivityItem, type ActivityType } from "@/data/activities";

const summaryCards = [
  { label: "Activities completed", value: "11" },
  { label: "Hours contributed", value: "42h" },
  { label: "Achievements", value: "06" },
  { label: "Current streak", value: "4 weeks" },
];

const initialFormState = {
  name: "",
  type: "Workshop" as ActivityType,
  date: "",
  role: "",
  description: "",
  proof: "",
};

export default function ActivityLoggerPage() {
  const [activities, setActivities] = useState<ActivityItem[]>(demoActivities);
  const [selectedType, setSelectedType] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [successMessage, setSuccessMessage] = useState("");
  const [formState, setFormState] = useState(initialFormState);

  const filteredActivities = useMemo(() => {
    return activities.filter((activity) => {
      const matchesType = selectedType === "All" || activity.type === selectedType;
      const matchesStatus = selectedStatus === "All" || activity.status === selectedStatus;
      return matchesType && matchesStatus;
    });
  }, [activities, selectedType, selectedStatus]);

  const handleChange = (field: string, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextActivity: ActivityItem = {
      id: `activity-${Date.now()}`,
      name: formState.name,
      type: formState.type,
      date: formState.date,
      role: formState.role,
      description: formState.description,
      proof: formState.proof || "https://example.com/demo-proof",
      status: "Verified",
      points: 50,
      badge: "First Step",
      year: new Date(formState.date).getFullYear().toString(),
      month: new Date(formState.date).toLocaleString("en-US", { month: "long" }),
    };

    setActivities((current) => [nextActivity, ...current]);
    setFormState(initialFormState);
    setSuccessMessage("Activity added to your SAIT journey.");
  };

  const clearFilters = () => {
    setSelectedType("All");
    setSelectedStatus("All");
  };

  return (
    <main className="min-h-screen bg-[#f5f4ef] text-[#111111]">
      <Navbar />

      <PageWrapper className="border-b border-black/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr] md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/45">
                08 — My SAIT Journey
              </p>

              <h1 className="mt-4 max-w-4xl text-[clamp(3rem,6vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-[#111111]">
                Everything you do here adds up.
              </h1>
            </div>

            <div className="md:justify-self-end">
              <p className="max-w-md text-lg leading-relaxed text-black/65">
                Track workshops, projects, competitions, volunteering, leadership and
                other contributions as part of your student journey with SAIT.
              </p>
            </div>
          </div>
        </div>
      </PageWrapper>

      <section className="border-b border-black/10 bg-[#f5f4ef] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-4 md:grid-cols-4">
            {summaryCards.map((card) => (
              <div
                key={card.label}
                className="rounded-[1.8rem] border border-black/10 bg-white/30 p-5"
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/45">
                  {card.label}
                </p>
                <p className="mt-4 text-4xl font-semibold tracking-tight text-[#111111]">
                  {card.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-black/10 bg-[#111111] p-6 text-white md:p-8">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/55">
                Participation
              </p>
              <span className="text-sm text-white/75">68% goal</span>
            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[68%] rounded-full bg-[#C6A75E]" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f5f4ef] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <ActivityForm
              formState={formState}
              onChange={handleChange}
              onSubmit={handleSubmit}
              successMessage={successMessage}
            />

            <div className="space-y-6">
              <Leaderboard />
              <DashboardFeed />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f5f4ef] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="Milestones"
            title="Badges that reflect your SAIT journey."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {demoBadges.map((badge) => (
              <div
                key={badge.id}
                className={`rounded-[2rem] border p-5 ${
                  badge.unlocked
                    ? "border-black/10 bg-white/30"
                    : "border-dashed border-black/15 bg-[#f5f4ef] opacity-70"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111111] text-[#f5f4ef]">
                    <Sparkles size={18} />
                  </div>

                  <span className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-black/60">
                    {badge.unlocked ? "Unlocked" : "Locked"}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-medium tracking-tight text-[#111111]">
                  {badge.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-black/65">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f5f4ef] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <ActivityHistory
            activities={filteredActivities}
            selectedType={selectedType}
            selectedStatus={selectedStatus}
            onTypeChange={setSelectedType}
            onStatusChange={setSelectedStatus}
            onClearFilters={clearFilters}
          />
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-[2rem] border border-black/10 bg-white/30 p-8 md:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/45">
              Keep going
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              Keep building your SAIT story.
            </h2>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/events"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C6A75E]"
              >
                Explore Events
                <ArrowRight size={16} />
              </a>

              <a
                href="/achievements"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-black/15 bg-transparent px-6 py-3 text-sm font-medium text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:border-black/25 hover:bg-white"
              >
                View Achievements
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
