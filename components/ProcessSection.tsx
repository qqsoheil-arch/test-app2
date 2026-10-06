import { Icon } from "./Icons";
import Reveal from "./Reveal";
import { benefits, processSteps } from "@/lib/site";

export function WhySection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {benefits.map((benefit, index) => (
        <Reveal key={benefit.title} delay={index * 70} className="h-full">
          <article className="flex h-full flex-col rounded-xl border border-white/8 bg-ink-soft p-7 transition-colors duration-500 hover:border-gold/25">
            <span className="grid size-12 place-items-center rounded-full border border-gold/25 text-gold">
              <Icon name={benefit.icon} className="size-6" />
            </span>
            <h3 className="mt-6 text-[1.05rem] font-medium text-cream">
              {benefit.title}
            </h3>
            <p className="mt-3 text-[0.88rem] leading-[2] text-muted">
              {benefit.text}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function ProcessSection() {
  return (
    <ol className="grid gap-8 lg:grid-cols-4 lg:gap-6">
      {processSteps.map((step, index) => (
        <Reveal key={step.number} delay={index * 80} className="h-full">
          <li className="relative flex h-full flex-col border-t border-white/10 pt-7">
            <span
              className="absolute -top-px right-0 h-px w-10 bg-gold"
              aria-hidden="true"
            />
            <span className="latin tnum text-[1.6rem] text-gold/85 lg:text-[1.9rem]">
              {step.number}
            </span>
            <h3 className="mt-4 text-[1.02rem] font-medium text-cream">
              {step.title}
            </h3>
            <p className="mt-3 text-[0.88rem] leading-[2] text-muted">
              {step.text}
            </p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
