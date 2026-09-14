import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="saint-eyebrow">{eyebrow}</p>
      <h2
        className={`mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-[#111111] md:text-6xl ${className}`.trim()}
      >
        {title}
      </h2>
    </div>
  );
}
