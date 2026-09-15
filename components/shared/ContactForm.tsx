"use client";

import { FormEvent, useState } from "react";
import { ChevronDown } from "lucide-react";

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formState, setFormState] = useState(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof typeof initialFormState, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (field: keyof typeof initialFormState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validateForm = () => {
    const nextErrors: Partial<Record<keyof typeof initialFormState, string>> = {};

    if (!formState.name.trim()) nextErrors.name = "Please share your name.";
    if (!formState.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formState.subject.trim()) nextErrors.subject = "Please add a subject.";
    if (!formState.message.trim()) nextErrors.message = "Message cannot be empty.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      setIsSubmitted(false);
      return;
    }

    setIsSubmitted(true);
    setFormState(initialFormState);
    setErrors({});
  };

  return (
    <div className="border border-[#F7F3EB]/15 bg-[#111827]/45 p-3 text-white sm:p-4">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls="sait-contact-form"
        className="flex w-full items-center justify-between gap-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A75E]"
      >
        <span>
          <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">Contact SAIT</span>
          <span className="mt-1 block text-sm text-white/80">Questions, ideas, or collaboration?</span>
        </span>
        <ChevronDown size={18} className={`shrink-0 text-[#C6A75E] transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen ? <form id="sait-contact-form" onSubmit={handleSubmit} className="mt-4 grid gap-3 border-t border-white/10 pt-4 md:grid-cols-2" noValidate>
        <label className="block text-sm text-white/80 md:col-span-1">
          <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
            Name
          </span>
          <input
            type="text"
            value={formState.name}
            onChange={(event) => handleChange("name", event.target.value)}
            placeholder="Your full name"
            aria-invalid={Boolean(errors.name)}
            className="w-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/35 focus:border-[#C6A75E] focus:outline-none"
          />
          {errors.name ? <span className="mt-2 block text-xs text-[#ffb199]">{errors.name}</span> : null}
        </label>

        <label className="block text-sm text-white/80 md:col-span-1">
          <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
            Email
          </span>
          <input
            type="email"
            value={formState.email}
            onChange={(event) => handleChange("email", event.target.value)}
            placeholder="name@email.com"
            aria-invalid={Boolean(errors.email)}
            className="w-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/35 focus:border-[#C6A75E] focus:outline-none"
          />
          {errors.email ? <span className="mt-2 block text-xs text-[#ffb199]">{errors.email}</span> : null}
        </label>

        <label className="block text-sm text-white/80 md:col-span-2">
          <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
            Subject
          </span>
          <input
            type="text"
            value={formState.subject}
            onChange={(event) => handleChange("subject", event.target.value)}
            placeholder="What would you like to talk about?"
            aria-invalid={Boolean(errors.subject)}
            className="w-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/35 focus:border-[#C6A75E] focus:outline-none"
          />
          {errors.subject ? <span className="mt-2 block text-xs text-[#ffb199]">{errors.subject}</span> : null}
        </label>

        <label className="block text-sm text-white/80 md:col-span-2">
          <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
            Message
          </span>
          <textarea
            value={formState.message}
            onChange={(event) => handleChange("message", event.target.value)}
            placeholder="Tell us a little about your query or idea."
            rows={3}
            aria-invalid={Boolean(errors.message)}
            className="w-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/35 focus:border-[#C6A75E] focus:outline-none"
          />
          {errors.message ? <span className="mt-2 block text-xs text-[#ffb199]">{errors.message}</span> : null}
        </label>

        <div className="md:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            className="inline-flex items-center justify-center bg-[#1F2A44] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#C6A75E] hover:text-[#1F2A44] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A75E]"
          >
            Send message
          </button>

          {isSubmitted ? (
            <p className="text-sm text-[#d9f7d7]">Thanks! Your message has been queued for the SAIT team.</p>
          ) : null}
        </div>
      </form> : null}
    </div>
  );
}
