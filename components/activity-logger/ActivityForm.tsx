import type { FormEvent } from "react";
import { Sparkles } from "lucide-react";

import type { ActivityType } from "@/data/activities";

type ActivityFormProps = {
  formState: {
    name: string;
    type: ActivityType;
    date: string;
    role: string;
    description: string;
    proof: string;
  };
  onChange: (field: string, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  successMessage: string;
};

const activityTypes: ActivityType[] = [
  "Workshop",
  "Seminar",
  "Project",
  "Competition",
  "Volunteering",
  "Leadership",
  "Cultural",
  "Other",
];

export default function ActivityForm({
  formState,
  onChange,
  onSubmit,
  successMessage,
}: ActivityFormProps) {
  return (
    <section className="rounded-[2rem] border border-black/10 bg-white/30 p-5 md:p-6">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/45">
            Add activity
          </p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#111111]">
            Log your contribution
          </h3>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111111] text-[#f5f4ef]">
          <Sparkles size={18} />
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block text-sm font-medium text-[#111111]">
            <span className="mb-2 block">Activity name</span>
            <input
              type="text"
              value={formState.name}
              onChange={(event) => onChange("name", event.target.value)}
              className="w-full rounded-full border border-black/10 bg-[#f5f4ef] px-4 py-3 text-sm text-[#111111] placeholder:text-black/35 focus:border-[#111111] focus:outline-none focus:ring-2 focus:ring-black/10"
              placeholder="Mock activity title"
              required
            />
          </label>

          <label className="block text-sm font-medium text-[#111111]">
            <span className="mb-2 block">Activity type</span>
            <select
              value={formState.type}
              onChange={(event) => onChange("type", event.target.value)}
              className="w-full rounded-full border border-black/10 bg-[#f5f4ef] px-4 py-3 text-sm text-[#111111] focus:border-[#111111] focus:outline-none focus:ring-2 focus:ring-black/10"
              aria-label="Activity type"
            >
              {activityTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm font-medium text-[#111111]">
            <span className="mb-2 block">Date</span>
            <input
              type="date"
              value={formState.date}
              onChange={(event) => onChange("date", event.target.value)}
              className="w-full rounded-full border border-black/10 bg-[#f5f4ef] px-4 py-3 text-sm text-[#111111] focus:border-[#111111] focus:outline-none focus:ring-2 focus:ring-black/10"
              required
            />
          </label>

          <label className="block text-sm font-medium text-[#111111]">
            <span className="mb-2 block">Role</span>
            <input
              type="text"
              value={formState.role}
              onChange={(event) => onChange("role", event.target.value)}
              className="w-full rounded-full border border-black/10 bg-[#f5f4ef] px-4 py-3 text-sm text-[#111111] placeholder:text-black/35 focus:border-[#111111] focus:outline-none focus:ring-2 focus:ring-black/10"
              placeholder="Participant, Mentor, Organizer"
              required
            />
          </label>
        </div>

        <label className="block text-sm font-medium text-[#111111]">
          <span className="mb-2 block">Description</span>
          <textarea
            value={formState.description}
            onChange={(event) => onChange("description", event.target.value)}
            className="min-h-[120px] w-full rounded-[1.5rem] border border-black/10 bg-[#f5f4ef] px-4 py-3 text-sm text-[#111111] placeholder:text-black/35 focus:border-[#111111] focus:outline-none focus:ring-2 focus:ring-black/10"
            placeholder="Describe what you did and what you learned"
            required
          />
        </label>

        <label className="block text-sm font-medium text-[#111111]">
          <span className="mb-2 block">Proof link / upload placeholder</span>
          <input
            type="url"
            value={formState.proof}
            onChange={(event) => onChange("proof", event.target.value)}
            className="w-full rounded-full border border-black/10 bg-[#f5f4ef] px-4 py-3 text-sm text-[#111111] placeholder:text-black/35 focus:border-[#111111] focus:outline-none focus:ring-2 focus:ring-black/10"
            placeholder="https://example.com/proof"
          />
        </label>

        <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C6A75E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
          >
            Submit Activity
          </button>

          {successMessage ? (
            <p className="rounded-full border border-[#1f7a5b] bg-[#eaf7f1] px-3 py-2 text-sm font-medium text-[#1f7a5b]">
              {successMessage}
            </p>
          ) : null}
        </div>
      </form>
    </section>
  );
}
