import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  Check,
  X,
  Hammer,
  Building2,
  Factory,
  Wrench,
  ClipboardList,
  CalendarCheck,
  Ruler,
  ShieldCheck,
  Handshake,
  MapPin,
  Mail,
  Clock,
  ChevronDown,
  Menu,
} from "lucide-react";
import { useEffect, useState } from "react";

import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import logoAsset from "@/assets/signature-framing-logo-v2.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Signature Framing — Expert Wood Framers in Hudson Valley, NY" },
      {
        name: "description",
        content:
          "Residential, commercial, and industrial wood framing across Hudson Valley. On time, on budget, built to last. Call 845-655-2556.",
      },
      {
        property: "og:title",
        content: "Signature Framing — Expert Wood Framers in Hudson Valley",
      },
      {
        property: "og:description",
        content:
          "Precision wood framing for residential, commercial, and industrial projects. Serving builders and homeowners across Hudson Valley, NY.",
      },
    ],
  }),
  component: Index,
});

const PHONE = "845-655-2556";
const TEL = "tel:8456552556";

/**
 * "Call this header" button — the button the user asked to sit on top of
 * every section header. Uses gold-on-dark primary with a subtle pulse ring.
 */
function CallHeaderButton({ label = "Call about this" }: { label?: string }) {
  return (
    <a
      href={TEL}
      aria-label={`${label} — call ${PHONE}`}
      className="group relative inline-flex items-center gap-3 rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-primary shadow-[0_0_0_1px_transparent] backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--shadow-gold)]"
    >
      <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-110">
        <Phone className="h-4 w-4" strokeWidth={2.5} />
        <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-40 group-hover:opacity-0" />
      </span>
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[10px] font-medium tracking-[0.24em] opacity-70">
          {label}
        </span>
        <span className="text-sm font-bold tracking-wider">{PHONE}</span>
      </span>
    </a>
  );
}

function SectionHeader({
  eyebrow,
  title,
  callLabel,
  description,
  align = "left",
  darkBg = false,
}: {
  eyebrow: string;
  title: string;
  callLabel: string;
  description?: string;
  align?: "left" | "center";
  darkBg?: boolean;
}) {
  const alignCls =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col ${alignCls} gap-6`}>
      <CallHeaderButton label={callLabel} />
      <div className={`flex flex-col ${alignCls} gap-3 max-w-3xl`}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="text-4xl md:text-5xl font-bold leading-[1.05]">
          {title}
        </h2>
        <span className="h-1 w-16 rounded-full bg-primary" />
        {description ? (
          <p
            className={`text-base md:text-lg ${
              darkBg ? "text-muted-foreground" : "text-muted-foreground"
            } max-w-2xl`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

const NAV_LINKS = [
  { href: "#about", label: "Who We Are" },
  { href: "#why", label: "Why Us" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Our Work" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b border-primary/30 bg-header text-header-foreground transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a href="#top" className="flex items-center">
          <img
            src={logoAsset.url}
            alt="Signature Framing – residential & commercial framing"
            className="h-12 w-auto md:h-16"
          />
        </a>



        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 text-sm font-semibold uppercase tracking-wider text-header-foreground/80 transition-colors hover:bg-primary/20 hover:text-header-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={TEL}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-bold tracking-wider text-primary transition-transform hover:scale-[1.03] hover:shadow-[var(--shadow-gold)]"
          >
            <Phone className="h-4 w-4" />
            {PHONE}
          </a>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-header-foreground/20 bg-header text-header-foreground lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-header-foreground/15 bg-header lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-semibold uppercase tracking-wider text-header-foreground/85 transition-colors hover:bg-primary/20 hover:text-header-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={TEL}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-bold tracking-wider text-primary-foreground sm:hidden"
            >
              <Phone className="h-4 w-4" />
              {PHONE}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}


function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Wood framing construction with roof trusses"
        className="absolute inset-0 h-full w-full object-cover"
        width={1600}
        height={1200}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pt-32 pb-20 md:px-8">
        <div className="max-w-2xl">
          <div className="mb-8">
            <CallHeaderButton label="Talk to a framer now" />
          </div>
          <span className="eyebrow">Hudson Valley Wood Framing</span>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[0.95] md:text-7xl">
            Build Strong with{" "}
            <span className="text-primary">Expert Framers</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Residential, commercial, and industrial wood framing — built on
            time, on budget, and built to last.
          </p>

          <ul className="mt-8 space-y-3 text-base">
            {[
              "No delays, no excuses — we meet deadlines",
              "Precise craftsmanship on every project",
              "Trusted by builders and homeowners across Hudson Valley",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02] hover:shadow-[var(--shadow-gold)]"
            >
              Get a Free Quote
            </a>
            <a
              href={TEL}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-7 py-3.5 font-semibold uppercase tracking-wider text-foreground backdrop-blur transition-colors hover:border-primary/60"
            >
              <Phone className="h-4 w-4" />
              {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { n: "3+", l: "Years in Business" },
    { n: "100+", l: "Projects Completed" },
    { n: "100%", l: "On-Time Delivery Goal" },
    { n: "3", l: "Project Types Served" },
  ];
  return (
    <section className="border-y border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-primary md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.l}
            className="flex flex-col items-center justify-center gap-1 bg-primary px-6 py-10 text-center"
          >
            <div className="font-display text-5xl font-bold md:text-6xl">
              {s.n}
            </div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em]">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:px-8 lg:gap-20">
        <div className="relative">
          <img
            src={aboutImg}
            alt="Craftsman working on wood framing"
            className="h-full max-h-[600px] w-full rounded-lg object-cover"
            loading="lazy"
            width={1200}
            height={1400}
          />
          <div className="absolute -bottom-6 -right-6 hidden h-24 w-24 border-4 border-primary md:block" />
        </div>
        <div className="flex flex-col justify-center">
          <SectionHeader
            eyebrow="Who We Are"
            title="Precision Framing, Built on Trust"
            callLabel="Ask about our crew"
          />
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Signature Framing is a professional wood framing contractor based in
            Harriman, NY. We specialize in new construction, additions,
            renovations, and commercial builds across the Hudson Valley. Our
            experienced crews show up prepared, work with precision, and deliver
            structurally sound framing that every project depends on.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02] hover:shadow-[var(--shadow-gold)]"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Why() {
  const problems = [
    "Delays from crews that don't show up or miss deadlines",
    "Sloppy framing that causes costly rework for other trades",
    "Contractors who don't communicate until something goes wrong",
  ];
  const wins = [
    {
      t: "We show up",
      d: "Reliable scheduling and consistent crew presence on every job site.",
    },
    {
      t: "We frame precisely",
      d: "Accurate, square, and plumb framing that makes every downstream trade's job easier.",
    },
    {
      t: "We communicate",
      d: "You're updated throughout the project — no surprises, no guesswork.",
    },
  ];
  return (
    <section id="why" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          eyebrow="Why Signature Framing?"
          title="The right framing crew makes all the difference"
          callLabel="Get a straight answer"
          description="A bad frame causes problems for every trade that follows. Signature Framing gets it right the first time — so your project stays on schedule and your building stands strong for decades."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Common problems with other crews
            </h3>
            <ul className="space-y-3">
              {problems.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-md border border-border bg-background px-5 py-4"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-destructive/40 text-destructive">
                    <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              The Signature Framing difference
            </h3>
            <ul className="space-y-3">
              {wins.map((w) => (
                <li
                  key={w.t}
                  className="flex items-start gap-3 rounded-md border border-primary/30 bg-primary/5 px-5 py-4"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <div>
                    <div className="font-semibold">{w.t}</div>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {w.d}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      icon: Hammer,
      t: "Residential Framing",
      d: "From single-family homes to multi-unit developments, we frame new construction with precision — walls, floors, roofs, and everything in between.",
    },
    {
      icon: Building2,
      t: "Commercial Framing",
      d: "Retail spaces, office buildings, mixed-use developments — our crews handle large-scale projects with the same care as residential work.",
    },
    {
      icon: Factory,
      t: "Industrial Framing",
      d: "Warehouses, manufacturing facilities, and industrial structures demand heavy-duty framing. We have the experience and equipment to get it done safely.",
    },
    {
      icon: Wrench,
      t: "Renovations & Additions",
      d: "Expanding your home or reconfiguring a commercial space? We handle structural framing for additions, room conversions, and full gut renovations.",
    },
  ];
  return (
    <section id="services" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          eyebrow="What We Do"
          title="Framing for Every Project Type"
          callLabel="Discuss your project"
          description="Whether you're building new or renovating, our experienced crews deliver quality framing on time and on budget."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {items.map(({ icon: Icon, t, d }) => (
            <div
              key={t}
              className="group relative overflow-hidden rounded-lg border-l-4 border-primary bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-gold)]"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-primary/15 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      icon: ClipboardList,
      t: "Consultation",
      d: "We review your plans, walk the site if needed, and give you a clear, honest quote with no surprises.",
    },
    {
      icon: CalendarCheck,
      t: "Scheduling",
      d: "We lock in your start date and coordinate with your GC or project timeline so framing fits seamlessly into the build.",
    },
    {
      icon: Hammer,
      t: "Framing",
      d: "Our crew arrives on time and works efficiently — walls, floors, roofs, and structural elements framed with precision.",
    },
    {
      icon: Ruler,
      t: "Inspection",
      d: "We walk the completed frame with you, address any adjustments, and make sure everything is square, plumb, and ready.",
    },
    {
      icon: Handshake,
      t: "Handoff",
      d: "You get a clean, complete frame — on schedule and ready for mechanical, electrical, plumbing, and insulation.",
    },
  ];
  return (
    <section id="process" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          eyebrow="How It Works"
          title="From first call to final frame"
          callLabel="Start the process"
        />

        <ol className="mt-16 space-y-4">
          {steps.map((s, i) => (
            <li
              key={s.t}
              className="grid grid-cols-[auto_1fr] items-start gap-5 rounded-lg border border-border bg-background p-6 md:grid-cols-[auto_auto_1fr] md:gap-8 md:p-8"
            >
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-md bg-primary font-display text-2xl font-bold text-primary-foreground">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="hidden h-16 w-16 place-items-center rounded-md border border-primary/30 text-primary md:grid">
                <s.icon className="h-7 w-7" />
              </div>
              <div className="min-w-0">
                <h3 className="text-2xl font-bold">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02] hover:shadow-[var(--shadow-gold)]"
          >
            Start with a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [
    { src: g1, alt: "Residential house wood framing walls" },
    { src: g2, alt: "Interior framing with staircase" },
    { src: g3, alt: "Wood roof trusses against blue sky" },
    { src: g4, alt: "Multi-story wood frame apartment building" },
    { src: aboutImg, alt: "Wood framer at work" },
    { src: heroImg, alt: "Aerial framing site with crane" },
  ];
  return (
    <section id="work" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          eyebrow="Our Work"
          title="Projects done to perfection"
          callLabel="Book a walkthrough"
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {imgs.map((im, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-lg ${
                i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <img
                src={im.src}
                alt={im.alt}
                loading="lazy"
                className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  i === 0 ? "aspect-[4/3] lg:aspect-auto" : "aspect-[4/3]"
                }`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const items = [
    {
      q: "What areas do you serve?",
      a: "We serve the entire Hudson Valley region, including Orange, Rockland, Sullivan, Ulster, and Dutchess counties.",
    },
    {
      q: "Do you work with general contractors?",
      a: "Yes — we partner regularly with GCs and builders. We keep tight schedules and communicate proactively so your other trades stay on track.",
    },
    {
      q: "How do I get a quote?",
      a: "Send us your plans or call us directly. We'll review the scope, walk the site if needed, and give you a clear, honest quote with no surprises.",
    },
    {
      q: "How far in advance should I book?",
      a: "The earlier the better, especially in peak season. We typically recommend booking 4–8 weeks out to lock in your ideal start date.",
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes. Signature Framing is fully licensed and carries general liability and workers' comp insurance for every job.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-[1fr_1.3fr] md:px-8 lg:gap-20">
        <div>
          <SectionHeader
            eyebrow="Common Questions"
            title="Answers before you call"
            callLabel="Ask us directly"
            description="Don't see your question? Call us directly and we'll answer it on the spot."
          />
          <div className="mt-8">
            <a
              href={TEL}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold tracking-wider text-primary-foreground transition-transform hover:scale-[1.02] hover:shadow-[var(--shadow-gold)]"
            >
              <Phone className="h-4 w-4" />
              {PHONE}
            </a>
          </div>
        </div>

        <div className="space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={it.q}
                className="overflow-hidden rounded-md border border-border bg-background"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-secondary/50"
                >
                  <span className="font-semibold">{it.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen ? (
                  <div className="border-t border-border px-5 py-4 text-muted-foreground">
                    {it.a}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:px-8 lg:gap-20">
        <div>
          <SectionHeader
            eyebrow="Get in Touch"
            title="Get a Free Quote"
            callLabel="Prefer to call?"
            description="We stay in constant communication with our customers until the job is done. Drop us a line — we'll get back the same day."
          />

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 grid gap-4"
          >
            <input
              placeholder="Name"
              className="rounded-md border border-border bg-secondary/60 px-4 py-3 text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
            />
            <input
              type="email"
              placeholder="Email*"
              required
              className="rounded-md border border-border bg-secondary/60 px-4 py-3 text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
            />
            <input
              placeholder="Phone"
              className="rounded-md border border-border bg-secondary/60 px-4 py-3 text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
            />
            <input
              placeholder="Address (Street, City, Zip Code)"
              className="rounded-md border border-border bg-secondary/60 px-4 py-3 text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="rounded-md border border-border bg-secondary/60 px-4 py-3 text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
            />
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.01] hover:shadow-[var(--shadow-gold)]"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="rounded-lg border border-border bg-card p-8 md:p-10">
          <h3 className="text-3xl font-bold">Let's talk about your project</h3>
          <p className="mt-3 text-muted-foreground">
            Signature Framing — Harriman, NY
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/15 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Address
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=200+NY-17M,+Harriman,+NY"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block hover:text-primary"
                >
                  200 NY-17M, Harriman, NY, USA
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/15 text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Phone
                </div>
                <a href={TEL} className="mt-1 block hover:text-primary">
                  {PHONE}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/15 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </div>
                <a
                  href="mailto:office@signatureframer.com"
                  className="mt-1 block hover:text-primary"
                >
                  office@signatureframer.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/15 text-primary">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Hours
                </div>
                <div className="mt-1">Mon–Fri: 9:00 AM – 5:00 PM</div>
                <div className="text-muted-foreground">Sat–Sun: Closed</div>
              </div>
            </li>
          </ul>

          <div className="mt-8 flex items-center gap-2 rounded-md border border-primary/30 bg-primary/5 p-4 text-sm text-muted-foreground">
            <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
            <span>Licensed & insured. Serving Hudson Valley since 2022.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-sm text-muted-foreground md:flex-row md:px-8">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground">
            <Hammer className="h-4 w-4" />
          </span>
          <span className="font-display text-base font-bold tracking-wider text-foreground">
            SIGNATURE FRAMING
          </span>
        </div>
        <div>© {new Date().getFullYear()} Signature Framing. All rights reserved.</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Why />
      <Services />
      <Process />
      <Gallery />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
