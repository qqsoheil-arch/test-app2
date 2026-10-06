import { Icon } from "./Icons";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

const channels = [
  {
    icon: "phone",
    label: "شماره تماس",
    value: site.contact.phoneDisplay,
    href: site.contact.phoneHref,
    external: false,
  },
  {
    icon: "whatsapp",
    label: "واتساپ",
    value: site.contact.mobileDisplay,
    href: site.contact.whatsappHref,
    external: true,
  },
  {
    icon: "instagram",
    label: "اینستاگرام",
    value: `@${site.contact.instagramHandle}`,
    href: site.contact.instagramHref,
    external: true,
  },
  {
    icon: "pin",
    label: "آدرس کارگاه",
    value: site.contact.address,
    href: null,
    external: false,
  },
];

export default function ContactSection({
  eyebrow = "تماس با وستادور",
  title = "با وستادور در ارتباط باشید",
  lead = "برای انتخاب مدل، استعلام قیمت یا طراحی اختصاصی، فرم زیر را تکمیل کنید یا مستقیم تماس بگیرید.",
}: {
  eyebrow?: string;
  title?: string;
  lead?: string;
}) {
  return (
    <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
      <div>
        <span className="flex items-center gap-3 text-[0.7rem] text-gold">
          <span className="h-px w-8 bg-gold/50" aria-hidden="true" />
          <span className="label">{eyebrow}</span>
        </span>

        <h2 className="mt-5 text-[1.6rem] font-semibold leading-[1.7] text-cream sm:text-[1.85rem] lg:text-[2.25rem]">
          {title}
        </h2>

        <p className="mt-5 max-w-xl text-[0.95rem] leading-[2.1] text-muted">
          {lead}
        </p>

        <ul className="mt-9 flex flex-col divide-y divide-white/5 border-y border-white/5">
          {channels.map((channel) => (
            <li key={channel.label} className="flex items-center gap-4 py-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/10 text-gold">
                <Icon name={channel.icon} className="size-5" />
              </span>
              <div className="min-w-0">
                <span className="block text-[0.78rem] text-muted">
                  {channel.label}
                </span>
                {channel.href ? (
                  <a
                    href={channel.href}
                    {...(channel.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="tnum block truncate text-[0.95rem] text-cream transition-colors hover:text-gold"
                  >
                    {channel.value}
                  </a>
                ) : (
                  <span className="block text-[0.95rem] text-cream">
                    {channel.value}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-6 flex items-center gap-2 text-[0.82rem] text-muted">
          <Icon name="clock" className="size-4 text-gold/70" />
          {site.contact.hours}
        </p>
      </div>

      <Reveal>
        <ContactForm />
      </Reveal>
    </div>
  );
}
