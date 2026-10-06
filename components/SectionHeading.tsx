import type { ReactNode } from "react";
import Reveal from "./Reveal";

/** Small gold eyebrow label with a hairline rule, used above section titles. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="flex items-center gap-3 text-[0.7rem] text-gold">
      <span className="h-px w-8 bg-gold/50" aria-hidden="true" />
      <span className="label">{children}</span>
    </span>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "start",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "start" | "center";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <Reveal
      className={`flex flex-col gap-5 ${centered ? "items-center text-center" : "items-start"} ${className}`}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="max-w-3xl text-[1.7rem] font-semibold leading-[1.6] text-cream sm:text-[2rem] lg:text-[2.5rem]">
        {title}
      </h2>
      {lead ? (
        <p className="max-w-2xl text-[0.98rem] leading-[2] text-muted lg:text-[1.05rem]">
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
