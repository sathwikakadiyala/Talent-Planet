import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, Users, Building2, Shield, Cpu, FileCheck,
  Workflow, MapPin, Mail, Linkedin, Check, Briefcase, Award, Landmark, Star, Menu, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Toaster, toast } from "sonner";
import { z } from "zod";
import navLogo from "@/assets/top-nav-logo.png";
import heroBanner from "@/assets/hsb2.webp";

export const Route = createFileRoute("/")({ component: Page });

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const NAV_LINKS = [
  { href: "#positioning",    label: "Expertise", active: false },
  { href: "#what-we-support", label: "Services",  active: false },
  { href: "#why",             label: "Approach",  active: false },
  { href: "#about",           label: "About",     active: false },
  { href: "#contact",         label: "Contact",   active: false },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full border-b border-border/50 bg-white sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo only */}
        <a href="#top" className="flex items-center gap-2 shrink-0">
  <img
    src={navLogo}
    alt="Talent Planet"
    style={{
      height: "42px",
      width: "42px",
      objectFit: "contain",
      display: "block",
      background: "transparent"
    }}
  />

  <span
    style={{
      fontSize: "16px",
      fontWeight: 600,
      color: "#0f172a",
      letterSpacing: "-0.01em",
      whiteSpace: "nowrap",
      lineHeight: 1
    }}
  >
    Talent Planet
  </span>
</a>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-[var(--brand)] ${
                l.active ? "text-[var(--brand)]" : "text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-md bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Schedule a Conversation
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(v => !v)}
            className="md:hidden h-9 w-9 grid place-items-center rounded-md border border-border"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 animate-fade-in">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-secondary ${
                  l.active ? "text-[var(--brand)]" : "text-foreground"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-md bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-white"
            >
              Schedule a Conversation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.52)" }} />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="reveal max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-sm">
            <MapPin className="h-4 w-4 text-[var(--brand)]" />
            <span className="font-semibold text-[var(--brand)]">Edison, New Jersey</span>
            <span className="text-muted-foreground">• Serving clients across the US</span>
          </div>

          <h1 className="mt-8 text-4xl font-bold leading-[1.15] tracking-tight text-[var(--ink)] md:text-5xl lg:text-[3.25rem]">
            Recruiting Operations &amp;{" "}
            <span className="text-[var(--brand)]">Hiring Support</span>{" "}
            for Growing Teams
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Talent Planet helps startups and staffing firms streamline hiring through recruiting support, onboarding coordination, ATS workflow management, and operational hiring support.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--ink)] px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Schedule a Conversation <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border-2 border-[var(--brand)] bg-white px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition-colors hover:bg-[var(--brand-soft)]"
            >
              Contact Us <ArrowRight className="h-4 w-4 text-[var(--brand)]" />
            </a>
          </div>
        </div>
      </div>

      {/* TRUST METRICS */}
      <div className="mx-auto max-w-7xl px-6 pb-16">
        <div className="reveal grid gap-6 rounded-2xl bg-white p-8 shadow-sm md:grid-cols-3 md:divide-x md:divide-border">
          {[
            { icon: Award,    title: "Staffing Operations",  sub: "Experience",          desc: "Hands-on staffing ops & recruiting support" },
            { icon: Landmark, title: "US Hiring Workflow",    sub: "Support",             desc: "Built for US staffing environments" },
            { icon: Workflow, title: "Recruiting Coordination", sub: "& Onboarding",       desc: "From sourcing to day-one readiness" },
          ].map(({ icon: Icon, title, sub, desc }) => (
            <div key={title} className="flex items-start gap-4 px-2 md:px-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--brand-soft)]">
                <Icon className="h-6 w-6 text-[var(--brand)]" />
              </div>
              <div>
                <div className="text-lg font-bold leading-tight text-[var(--ink)]">{title}</div>
                <div className="text-lg font-bold leading-tight text-[var(--ink)]">{sub}</div>
                <div className="mt-1 text-sm text-muted-foreground">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const positioningFeatures = [
  {
    icon: Workflow,
    title: "ATS Workflow Support",
    desc: "Administration and management of applicant tracking systems to keep hiring pipelines organized and moving.",
  },
  {
    icon: Users,
    title: "Hiring Coordination",
    desc: "End-to-end coordination between candidates, hiring managers, and recruiting teams throughout the process.",
  },
  {
    icon: Briefcase,
    title: "Onboarding Operations",
    desc: "Structured onboarding support including I-9 administration, record management, and day-one readiness.",
  },
  {
    icon: FileCheck,
    title: "Candidate Tracking",
    desc: "Systematic tracking of candidate status, pipeline health, and hiring progress across open roles.",
  },
];

function Positioning() {
  return (
    <section id="positioning" className="py-16 md:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT — heading + copy */}
          <div className="reveal">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
              Our Expertise
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--ink)] text-balance">
              Operational Hiring{" "}
              <span className="text-[var(--brand)]">Expertise</span>
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Talent Planet brings hands-on experience supporting staffing operations, recruiting coordination, onboarding workflows, and hiring infrastructure for growing teams.
              </p>
              <p>
                Our experience includes managing recruiting operations, ATS workflows, onboarding coordination, candidate tracking, payroll coordination support, and operational hiring processes for US-focused staffing environments.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Staffing Operations", "Recruiting Coordination", "ATS Management", "Onboarding Workflows"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-[var(--ink)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — feature blocks */}
          <div className="reveal grid sm:grid-cols-2 gap-4">
            {positioningFeatures.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-card p-5 shadow-soft hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-soft)] mb-4">
                  <Icon className="h-5 w-5 text-[var(--brand)]" />
                </div>
                <h3 className="font-semibold text-sm text-[var(--ink)] leading-snug">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

const supportCategories = [
  {
    icon: Users,
    title: "Recruiting Support",
    items: [
      "Candidate sourcing",
      "Resume screening",
      "Shortlisting coordination",
      "Interview scheduling support",
    ],
  },
  {
    icon: Workflow,
    title: "Recruiting Operations",
    items: [
      "ATS workflow administration",
      "Candidate tracking management",
      "Hiring coordination",
      "Recruiting process support",
    ],
  },
  {
    icon: Briefcase,
    title: "Onboarding & HR Operations",
    items: [
      "Onboarding coordination",
      "I-9 process administration support",
      "Employee record management",
      "Payroll coordination support",
    ],
  },
  {
    icon: Building2,
    title: "Flexible Engagement Models",
    items: [
      "Startup hiring support",
      "Project-based recruiting assistance",
      "Ongoing operational support",
      "Staffing workflow support",
    ],
  },
];

function WhatWeSupport() {
  return (
    <section id="what-we-support" className="py-16 md:py-20 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
            What We Support
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--ink)] text-balance">
            Services &amp;{" "}
            <span className="text-[var(--brand)]">Operational Support</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Talent Planet supports startups and staffing firms with operational hiring support, recruiting coordination, onboarding workflows, and recruiting process administration designed for fast-moving teams.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {supportCategories.map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="reveal rounded-2xl border border-border bg-card p-7 shadow-soft hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-soft)]">
                  <Icon className="h-5 w-5 text-[var(--brand)]" />
                </div>
                <h3 className="font-display font-semibold text-base text-[var(--ink)]">{title}</h3>
              </div>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Credibility() {
  return (
    <section id="about" className="py-16 md:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — copy */}
          <div className="reveal">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
              Our Background
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--ink)] text-balance">
              Built on Real Staffing{" "}
              <span className="text-[var(--brand)]">Operations Experience</span>
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Talent Planet was built from over a decade of hands-on experience managing staffing operations, recruiting workflows, onboarding coordination, ATS implementations, and hiring support for US-focused staffing environments.
              </p>
              <p>
                This operational experience helps us support growing teams with practical, scalable hiring processes and responsive communication.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {[
                { icon: Workflow,   label: "ATS Implementation & Workflow Management" },
                { icon: Users,      label: "Recruiting Operations & Hiring Coordination" },
                { icon: Briefcase,  label: "Onboarding Coordination & HR Process Support" },
                { icon: Shield,     label: "US-Focused Staffing Environments" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm text-[var(--ink)]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-soft)]">
                    <Icon className="h-4 w-4 text-[var(--brand)]" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — operational workflow graphic */}
          <div className="reveal">
            <div className="rounded-2xl border border-border bg-secondary/60 p-8 shadow-soft">
              {/* Workflow diagram */}
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Recruiting Operations Workflow
              </div>
              <div className="space-y-3">
                {[
                  { step: "01", label: "Intake & Role Scoping",        detail: "Job requirements, hiring criteria, timeline" },
                  { step: "02", label: "Sourcing & Screening",          detail: "Candidate pipeline, resume review, shortlisting" },
                  { step: "03", label: "ATS Management",                detail: "Workflow setup, candidate tracking, status updates" },
                  { step: "04", label: "Interview Coordination",        detail: "Scheduling, logistics, hiring manager alignment" },
                  { step: "05", label: "Onboarding & Documentation",    detail: "I-9 support, records, day-one readiness" },
                ].map(({ step, label, detail }, i, arr) => (
                  <div key={step} className="relative">
                    <div className="flex items-start gap-4 rounded-xl border border-border bg-card px-4 py-3.5 shadow-soft">
                      <span className="font-display text-xs font-bold text-[var(--brand)] w-5 shrink-0 mt-0.5">{step}</span>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-[var(--ink)] leading-snug">{label}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{detail}</div>
                      </div>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="ml-[1.85rem] h-3 w-px bg-border" />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 rounded-lg bg-[var(--brand-soft)] px-4 py-3">
                <Check className="h-4 w-4 text-[var(--brand)] shrink-0" />
                <span className="text-xs font-medium text-[var(--ink)]">
                  End-to-end operational support for US staffing environments
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Users, tag: "Area 01",
    title: "Recruiting Support & Coordination",
    desc: "Hands-on recruiting support including candidate sourcing, resume screening, shortlisting, and interview scheduling — designed to keep your hiring pipeline moving.",
    best: ["Startups scaling their first hires", "Staffing firms with overflow volume", "Teams without a dedicated recruiter"],
  },
  {
    icon: Workflow, tag: "Area 02",
    title: "Recruiting Operations & ATS Management",
    desc: "Operational support for your recruiting infrastructure — ATS workflow setup, candidate tracking, hiring coordination, and process administration for consistent, organized hiring.",
    best: ["Teams implementing or optimizing an ATS", "High-volume hiring environments", "Distributed recruiting teams"],
  },
  {
    icon: Building2, tag: "Area 03",
    title: "TA Process & Workflow Design",
    desc: "We help build and document recruiting workflows, intake frameworks, hiring manager alignment processes, and operational hiring infrastructure that scales with your team.",
    best: ["Early-stage companies building TA from scratch", "Teams with inconsistent hiring processes", "Organizations restructuring recruiting operations"],
  },
  {
    icon: Briefcase, tag: "Area 04", featured: true,
    title: "Onboarding & HR Operations Support",
    desc: "Structured onboarding coordination, I-9 process administration, employee record management, and payroll coordination support — practical operational support from offer to day one.",
    best: ["Companies hiring first US employees", "Staffing firms managing onboarding at scale", "HR teams needing operational bandwidth"],
  },
  {
    icon: Shield, tag: "Area 05",
    title: "HR Compliance & Workforce Documentation",
    desc: "Practical HR compliance support across the employee lifecycle — covering documentation, policy frameworks, and process administration from hire through offboarding.",
    includes: [
      "I-9 Compliance — eligibility verification, audit-readiness, E-Verify guidance",
      "Employee Handbooks — US-compliant, conduct, PTO, at-will, harassment policies",
      "Offer Letters & Employment Agreements — contractor and employment documentation",
      "Onboarding Frameworks — pre-boarding, Day 1, 30/60/90-day plans",
      "HR Policy Development — remote work, expense reimbursement, disciplinary procedures",
    ],
    best: ["Startups hiring first US employees", "Companies flagged in I-9 audits", "Teams without a dedicated HR function"],
  },
  {
    icon: Cpu, tag: "Area 06",
    title: "Flexible Engagement & Staffing Workflow Support",
    desc: "Project-based or ongoing operational support for staffing workflows — designed for fast-moving teams that need reliable recruiting operations assistance without a full-time hire.",
    best: ["Project-based hiring needs", "Staffing agencies with US delivery", "Teams needing ongoing operational support"],
  },
];

function Services() {
  return (
    <section id="services" className="py-16 md:py-20 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Full Service Detail</div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-[1.05] text-balance">
            Operational hiring support,{" "}
            <span className="text-accent">built around how your team works.</span>
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article key={s.title} className={`reveal group relative rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 ${s.featured ? "bg-gradient-navy text-primary-foreground shadow-elevated" : "bg-card border border-border shadow-soft hover:shadow-elevated"}`}>
              <div className="flex items-center justify-between mb-7">
                <div className={`h-11 w-11 rounded-xl grid place-items-center ${s.featured ? "bg-white/10 text-gold" : "bg-secondary text-primary"}`}>
                  <s.icon className="h-5 w-5" />
                </div>
                <span className={`text-[10px] uppercase tracking-[0.18em] ${s.featured ? "text-white/60" : "text-muted-foreground"}`}>{s.tag}</span>
              </div>
              <h3 className={`font-display text-xl font-semibold leading-snug ${s.featured ? "text-white" : ""}`}>{s.title}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${s.featured ? "text-white/75" : "text-muted-foreground"}`}>{s.desc}</p>

              {s.includes && (
                <ul className="mt-5 space-y-2.5">
                  {s.includes.map((i) => (
                    <li key={i} className="flex gap-2.5 text-xs text-muted-foreground leading-relaxed">
                      <Check className="h-3.5 w-3.5 mt-0.5 text-gold shrink-0" /> <span>{i}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className={`mt-6 pt-5 border-t ${s.featured ? "border-white/15" : "border-border"}`}>
                <div className={`text-[10px] uppercase tracking-[0.18em] mb-2 ${s.featured ? "text-gold" : "text-gold"}`}>Best for</div>
                <ul className="space-y-1.5">
                  {s.best.map((b) => (
                    <li key={b} className={`text-xs flex items-center gap-2 ${s.featured ? "text-white/80" : "text-muted-foreground"}`}>
                      <span className={`h-1 w-1 rounded-full ${s.featured ? "bg-gold" : "bg-gold"}`} /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MidCTA() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal relative overflow-hidden rounded-[2rem] bg-gradient-navy text-primary-foreground p-10 md:p-14 shadow-elevated">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-teal/15 blur-3xl" />
          <div className="relative grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <div className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Work With Us</div>
              <h3 className="font-display text-3xl md:text-5xl font-semibold leading-tight text-balance">
                Operational recruiting support built for fast-moving teams.
              </h3>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                Practical hiring coordination, ATS support, onboarding workflows, and recruiting operations assistance.
              </p>
            </div>
            <div className="md:col-span-2 md:text-right">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-4 font-medium shadow-glow hover:translate-y-[-1px] transition">
                Let's Streamline Your Hiring Process <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { t: "Hands-on operational experience", d: "Over a decade managing staffing operations, ATS workflows, and recruiting coordination for US-focused environments — not theoretical, practical." },
  { t: "Process-first approach", d: "We build and document repeatable hiring workflows so your recruiting operations stay consistent, organized, and scalable as your team grows." },
  { t: "Responsive and execution-focused", d: "We work as an extension of your team — responsive communication, clear deliverables, and operational support that keeps hiring moving." },
  { t: "US staffing environment expertise", d: "Deep familiarity with US hiring compliance, onboarding requirements, I-9 administration, and staffing workflow standards." },
  { t: "Flexible engagement models", d: "Project-based, ongoing, or as-needed — our support adapts to your hiring volume and operational requirements without long-term overhead." },
];

function Why() {
  return (
    <section id="why" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal max-w-3xl mb-10">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Why Talent Planet</div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-[1.05] text-balance">
            Why growing teams work with{" "}
            <span className="text-accent">Talent Planet</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {reasons.map((r, i) => (
            <div key={r.t} className="reveal group flex gap-5 rounded-2xl border border-border bg-card p-7 shadow-soft hover:shadow-elevated transition-all">
              <div className="shrink-0 font-display text-3xl text-gold/80">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3 className="font-display text-lg font-semibold">{r.t}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{r.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const contactSchema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  company: z.string().trim().min(1, "Required").max(120),
  email: z.string().trim().email("Invalid email").max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  service: z.string().min(1, "Please select"),
  message: z.string().trim().min(10, "Tell us a bit more").max(2000),
});

const dropdown = [
  "Recruiting Support & Coordination",
  "Recruiting Operations & ATS Management",
  "TA Process & Workflow Design",
  "Onboarding & HR Operations Support",
  "HR Compliance & Workforce Documentation",
  "Flexible / Project-Based Engagement",
  "Not Sure Yet",
];

function Contact() {
  const [service, setService] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = contactSchema.safeParse({
      name: fd.get("name"), company: fd.get("company"), email: fd.get("email"),
      phone: fd.get("phone") || "", service, message: fd.get("message"),
    });
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please review the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks — we'll be in touch within one business day.");
      (e.target as HTMLFormElement).reset();
      setService("");
    }, 700);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 reveal">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Contact</div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight text-balance">
            Let's Discuss Your <span className="text-accent">Hiring Needs</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Whether you need recruiting support, operational hiring assistance, onboarding coordination, or help streamlining recruiting workflows, Talent Planet is ready to support your team.
          </p>
          <div className="mt-10 space-y-5">
            <div className="flex gap-4 items-start">
              <div className="h-10 w-10 rounded-xl bg-card border border-border grid place-items-center"><MapPin className="h-4 w-4 text-gold" /></div>
              <div>
                <div className="font-medium">Talent Planet Inc.</div>
                <div className="text-sm text-muted-foreground">Edison, New Jersey · Delaware Registered Corporation</div>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="h-10 w-10 rounded-xl bg-card border border-border grid place-items-center"><Mail className="h-4 w-4 text-gold" /></div>
              <div>
                <div className="font-medium">Email</div>
                <a href="mailto:nagesh@talentplanetco.com" className="text-sm text-muted-foreground hover:text-foreground">nagesh@talentplanetco.com</a>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="h-10 w-10 rounded-xl bg-card border border-border grid place-items-center"><Linkedin className="h-4 w-4 text-gold" /></div>
              <div>
                <div className="font-medium">Phone</div>
                <a href="tel:+16460000000" className="text-sm text-muted-foreground hover:text-foreground">+1 (646) XXX-XXXX</a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-2 text-xs text-muted-foreground">
            <Star className="h-3.5 w-3.5 text-gold" /> Typical response within one business day
          </div>
        </div>

        <div className="lg:col-span-7 reveal">
          <form onSubmit={onSubmit} className="glass-strong rounded-3xl p-7 md:p-10 shadow-elevated space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2"><Label htmlFor="name">Full Name *</Label><Input id="name" name="name" required maxLength={100} /></div>
              <div className="space-y-2"><Label htmlFor="company">Company *</Label><Input id="company" name="company" required maxLength={120} /></div>
              <div className="space-y-2"><Label htmlFor="email">Email *</Label><Input id="email" name="email" type="email" required maxLength={200} /></div>
              <div className="space-y-2"><Label htmlFor="phone">Phone</Label><Input id="phone" name="phone" type="tel" maxLength={40} /></div>
            </div>
            <div className="space-y-2">
              <Label>How can we support your hiring operations? *</Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                <SelectContent>
                  {dropdown.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Tell us about your recruiting workflow needs *</Label>
              <Textarea id="message" name="message" rows={5} required maxLength={2000} />
            </div>
            <Button type="submit" disabled={submitting} className="w-full sm:w-auto rounded-full px-7 py-6 text-sm bg-primary hover:opacity-90">
              {submitting ? "Sending…" : "Discuss Your Hiring Needs"} <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-background to-secondary/40">
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-10">
        <div className="grid md:grid-cols-12 gap-12 mb-10">
          <div className="md:col-span-5">
            <div className="mb-3">
              <img src={navLogo} alt="Talent Planet Inc." className="h-24 w-auto object-contain" height={96} loading="lazy" style={{ mixBlendMode: "multiply" }} />
              <p className="mt-0 text-base font-bold text-[var(--ink)] tracking-tight">Talent Planet Inc.</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Recruiting operations support and hiring coordination for startups and staffing firms — practical, execution-focused, and built for fast-moving teams.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="h-10 w-10 grid place-items-center rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="mailto:nagesh@talentplanetco.com" aria-label="Email" className="h-10 w-10 grid place-items-center rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-foreground/80 font-semibold mb-5">Services</div>
            <ul className="space-y-3 text-sm">
              {[
                ["#what-we-support", "Recruiting Support"],
                ["#what-we-support", "Recruiting Operations"],
                ["#what-we-support", "Onboarding & HR Operations"],
                ["#services",        "HR Compliance"],
                ["#what-we-support", "Flexible Engagements"],
              ].map(([h,l]) => (
                <li key={l}><a href={h} className="text-muted-foreground hover:text-accent transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-[0.2em] text-foreground/80 font-semibold mb-5">Company</div>
            <ul className="space-y-3 text-sm">
              {[["#about","About"],["#why","Approach"],["#contact","Contact"]].map(([h,l]) => (
                <li key={l}><a href={h} className="text-muted-foreground hover:text-accent transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-[0.2em] text-foreground/80 font-semibold mb-5">Headquarters</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Edison, New Jersey<br />United States<br /><span className="text-xs">Delaware Registered Corporation</span>
            </p>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Talent Planet Inc. All Rights Reserved.</p>
          <p className="flex items-center gap-2"><MapPin className="h-3 w-3" /> Edison, NJ · Delaware Corporation</p>
        </div>
        <div className="mt-6 rounded-lg border border-border bg-secondary/60 px-5 py-3 flex items-center gap-3">
          <Check className="h-3.5 w-3.5 text-[var(--brand)] shrink-0" />
          <p className="text-xs text-muted-foreground">
            Supporting startups, staffing firms, and US-focused operational hiring teams.
          </p>
        </div>
        <p className="text-[11px] text-muted-foreground/70 leading-relaxed mt-6 max-w-4xl">
          Disclaimer: Talent Planet Inc. provides recruiting operations support and hiring coordination services. Our services do not constitute legal advice. Clients are encouraged to consult qualified employment counsel for jurisdiction-specific legal guidance.
        </p>
      </div>
    </footer>
  );
}

const faqs = [
  {
    q: "What types of recruiting support does Talent Planet provide?",
    a: "Talent Planet provides hands-on recruiting operations support including candidate sourcing, resume screening, shortlisting coordination, interview scheduling, ATS workflow administration, and hiring coordination for startups and staffing firms.",
  },
  {
    q: "Can you help set up or manage our ATS workflows?",
    a: "Yes. We support ATS workflow setup, administration, and optimization — including candidate tracking, pipeline management, and process documentation to keep your recruiting operations organized.",
  },
  {
    q: "Do you support onboarding coordination and HR operations?",
    a: "Yes. We provide onboarding coordination support including I-9 process administration, employee record management, payroll coordination support, and day-one readiness for new hires.",
  },
  {
    q: "What engagement models do you offer?",
    a: "We offer flexible engagement models — project-based support, ongoing operational assistance, or as-needed recruiting coordination — designed to fit your hiring volume and team structure without long-term overhead.",
  },
  {
    q: "Can you help with HR compliance documentation?",
    a: "Yes. We support I-9 compliance, E-Verify guidance, employee handbooks, offer letters, onboarding documentation, HR policies, and workforce process frameworks for US-focused organizations.",
  },
  {
    q: "Who does Talent Planet typically work with?",
    a: "We work with startups building their first hiring processes, staffing firms needing operational support, and growing teams that need reliable recruiting coordination without adding full-time headcount.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="pt-4 pb-16 md:pt-6 md:pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="reveal text-center mb-10">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">FAQ</div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-[1.05] text-balance">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Common questions about our recruiting operations and hiring support services.
          </p>
        </div>
        <div className="reveal space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-card border border-border rounded-xl overflow-hidden shadow-soft">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-secondary/50 transition-colors"
              >
                <span className="font-semibold text-[var(--ink)] pr-4">{f.q}</span>
                <span className={`shrink-0 h-6 w-6 rounded-full border border-border flex items-center justify-center transition-transform duration-300 ${open === i ? "rotate-45 bg-[var(--brand)] border-[var(--brand)] text-white" : ""}`}>
                  <ArrowRight className={`h-3 w-3 transition-transform duration-300 ${open === i ? "-rotate-45 text-white" : "rotate-0 text-muted-foreground"}`} />
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-96" : "max-h-0"}`}>
                <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Page() {
  useReveal();
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Toaster richColors position="top-center" />
      <Nav />
      <Hero />
      <Positioning />
      <WhatWeSupport />
      <Credibility />
      <Services />
      <MidCTA />
      <Why />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
