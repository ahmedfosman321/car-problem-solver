"use client";

import { useState } from "react";
import Link from "next/link";

// Common car problems shown on the homepage
const COMMON_PROBLEMS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Check Engine Light",
    desc: "Could be minor or serious — find out before paying a shop to plug in a scanner.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Car Won't Start",
    desc: "Lights work but the engine won't turn? We'll help narrow it down fast.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Shaking or Vibrating",
    desc: "Shudder when braking or at speed? Often rotors, tires, or suspension.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
      </svg>
    ),
    title: "Strange Noises",
    desc: "Grinding, clicking, or knocking — we decode what each sound likely means.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: "Overheating",
    desc: "Temperature gauge climbing? Act fast — overheating can cause serious damage.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "AC Not Cooling",
    desc: "Blowing warm air in summer? Could be refrigerant, the compressor, or a small leak.",
  },
];

// Benefits of using DriveDiagnose
const BENEFITS = [
  {
    title: "Plain Language, No Jargon",
    desc: "We explain car issues the way a knowledgeable friend would — not like a repair manual.",
  },
  {
    title: "Know the Urgency",
    desc: "We tell you if it's safe to drive now, needs attention soon, or requires immediate action.",
  },
  {
    title: "Go In Prepared",
    desc: "Walk into any shop knowing the likely problem, so you can have an informed conversation.",
  },
  {
    title: "Save Time and Money",
    desc: "Avoid unnecessary diagnostic fees. Know what to ask for before you even arrive.",
  },
];

// Email capture form with success state
function EmailCaptureForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!form.email.trim()) errs.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Please enter a valid email.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // Frontend-only: just show success (no backend needed)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">You're on the list!</h3>
        <p className="text-gray-600">
          Thanks, <strong>{form.name}</strong>! We'll send early access and updates to{" "}
          <strong>{form.email}</strong>. Keep an eye on your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="name" className="form-label">Your Name</label>
        <input
          id="name"
          type="text"
          placeholder="Jane Smith"
          value={form.name}
          onChange={(e) => {
            setForm({ ...form, name: e.target.value });
            if (errors.name) setErrors({ ...errors, name: "" });
          }}
          className={`form-input ${errors.name ? "border-red-400 focus:ring-red-400" : ""}`}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="form-label">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="jane@example.com"
          value={form.email}
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
            if (errors.email) setErrors({ ...errors, email: "" });
          }}
          className={`form-input ${errors.email ? "border-red-400 focus:ring-red-400" : ""}`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      <button type="submit" className="btn-primary w-full">
        Get Early Access — It's Free
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
      <p className="text-xs text-center text-gray-400">No spam. Unsubscribe anytime.</p>
    </form>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="bg-navy text-white relative overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="section-container py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand/20 text-brand text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Free Diagnostic Tool
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Know What Your Car Is{" "}
              <span className="text-brand">Trying to Tell You.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Describe your car problem in plain English. We'll break down the likely causes, how serious it is, and what to do next — all in seconds, for free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/how-it-works#demo" className="btn-primary text-base py-4 px-8">
                Try the Demo
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/about" className="btn-secondary text-base py-4 px-8 border-white/20 bg-white/10 text-white hover:bg-white/20">
                Learn More
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Trusted by over 2,000 drivers</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>No account needed</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Results in seconds</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS TEASER ──────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-100 py-14">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { step: "1", title: "Describe the problem", desc: "Type your symptom in plain English — no car knowledge needed." },
              { step: "2", title: "Get a diagnosis", desc: "We identify the most likely causes based on your description." },
              { step: "3", title: "Know what to do", desc: "See urgency level and clear next steps, instantly." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand text-white font-bold text-sm flex items-center justify-center shadow">
                  {step}
                </div>
                <h3 className="font-semibold text-navy text-base">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMMON PROBLEMS ──────────────────────────────────── */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="section-tag mb-2">What We Help With</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
              Sound Familiar?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              These are some of the most common car problems people describe. If your issue isn't listed, just type it in — we handle hundreds of symptoms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMMON_PROBLEMS.map(({ icon, title, desc }) => (
              <div key={title} className="card group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-white transition-colors duration-200">
                  {icon}
                </div>
                <h3 className="font-semibold text-navy text-base mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/how-it-works#demo" className="btn-outline">
              Try It With Your Problem
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─────────────────────────────────────────── */}
      <section className="bg-navy text-white py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-2">Why DriveDiagnose</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              The Smarter Way to Handle Car Trouble
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-base">
              You shouldn't need a mechanical engineering degree just to figure out why your car is making a weird noise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BENEFITS.map(({ title, desc }, i) => (
              <div key={i} className="flex gap-4 bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand/20 text-brand flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EMAIL CAPTURE ────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="max-w-lg mx-auto text-center mb-10">
            <p className="section-tag mb-2">Early Access</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
              Be the First to Know
            </h2>
            <p className="text-gray-500 text-base">
              We're launching the full DriveDiagnose platform soon. Sign up for early access and get free diagnostic credits when we go live.
            </p>
          </div>

          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-card p-8 border border-gray-100">
            <EmailCaptureForm />
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────── */}
      <section className="py-16 bg-brand">
        <div className="section-container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Understand Your Car?
          </h2>
          <p className="text-white/80 text-base mb-8 max-w-md mx-auto">
            No sign-up needed. Just describe what's happening and get answers in seconds.
          </p>
          <Link
            href="/how-it-works#demo"
            className="inline-flex items-center gap-2 bg-white text-brand hover:bg-gray-50 font-bold py-4 px-8 rounded-xl text-base shadow-lg transition-all"
          >
            Try the Free Demo
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
