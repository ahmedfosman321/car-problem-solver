import Link from "next/link";
import EmailForm from "@/components/EmailForm";

const PROBLEMS = [
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>,
    title: "Check Engine Light",
    desc: "Could be minor or serious. Find out before paying a shop to plug in a scanner.",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
    title: "Car Won't Start",
    desc: "Lights work but the engine won't turn over? We'll narrow it down fast.",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>,
    title: "Shaking or Vibrating",
    desc: "Shudder when braking or at highway speed? Usually rotors, tires, or suspension.",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/></svg>,
    title: "Strange Noises",
    desc: "Grinding, clicking, or knocking — we decode what each sound likely means.",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/></svg>,
    title: "Overheating",
    desc: "Temperature gauge climbing? Overheating can cause serious engine damage fast.",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>,
    title: "AC Not Cooling",
    desc: "Blowing warm air in summer? Could be refrigerant, the compressor, or a small leak.",
  },
];

const BENEFITS = [
  { title: "Plain English, No Jargon",   desc: "We explain car issues the way a knowledgeable friend would — not like a repair manual." },
  { title: "Know the Urgency",            desc: "We tell you if it's safe to drive now, needs attention soon, or requires immediate action." },
  { title: "Walk In Prepared",            desc: "Know the likely problem before you call a shop, so you can have an informed conversation." },
  { title: "Save Time and Money",         desc: "Avoid unnecessary diagnostic fees by knowing what to ask for before you arrive." },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand/10" />
          <div className="absolute bottom-0 -left-16 w-56 h-56 rounded-full bg-white/5" />
        </div>
        <div className="container-md py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand/20 text-brand text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Free Diagnostic Tool
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Know What Your Car Is{" "}
              <span className="text-brand">Trying to Tell You.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Describe your car problem in plain English. Get the likely causes, how serious it is, and exactly what to do next — in seconds, for free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/how-it-works#demo" className="btn-orange text-base py-4 px-8">
                Try the Demo
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </Link>
              <Link href="/about" className="btn-ghost text-base py-4 px-8">
                Learn More
              </Link>
            </div>

            {/* Trust pills */}
            <div className="mt-12 flex flex-wrap gap-5 text-sm text-gray-400">
              {[
                ["⭐", "Trusted by 2,000+ drivers"],
                ["🔒", "No account needed"],
                ["⚡", "Results in seconds"],
              ].map(([icon, text]) => (
                <span key={text} className="flex items-center gap-2">{icon} {text}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS STRIP ────────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-100 py-12">
        <div className="container-md">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              ["1", "Describe the problem",  "Type your symptom in plain English."],
              ["2", "Get a diagnosis",        "We identify the most likely causes."],
              ["3", "Know what to do",        "See urgency level and clear next steps."],
            ].map(([n, t, d]) => (
              <div key={n} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-brand text-white text-sm font-bold flex items-center justify-center">{n}</div>
                <p className="font-semibold text-navy text-sm">{t}</p>
                <p className="text-gray-400 text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMON PROBLEMS ──────────────────────────────────── */}
      <section className="py-20">
        <div className="container-md">
          <div className="text-center mb-12">
            <p className="tag mb-2">What We Help With</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-3">Sound Familiar?</h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              These are the most common issues drivers bring to us. If yours isn't listed, just type it in — we handle hundreds of symptoms.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROBLEMS.map(({ icon, title, desc }) => (
              <div key={title} className="card group">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-brand flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-white transition-colors duration-200">
                  {icon}
                </div>
                <h3 className="font-semibold text-navy mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/how-it-works#demo" className="btn-orange">
              Try It With Your Problem
            </Link>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────── */}
      <section className="bg-navy text-white py-20">
        <div className="container-md">
          <div className="text-center mb-12">
            <p className="text-brand text-xs font-bold uppercase tracking-widest mb-2">Why DriveDiagnose</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">The Smarter Way to Handle Car Trouble</h2>
            <p className="text-gray-400 max-w-md mx-auto text-sm">
              You shouldn't need an engineering degree to figure out why your car is making a weird noise.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {BENEFITS.map(({ title, desc }) => (
              <div key={title} className="flex gap-4 bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="w-9 h-9 rounded-lg bg-brand/20 text-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
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

      {/* ── EMAIL CAPTURE ─────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="container-md">
          <div className="max-w-md mx-auto text-center mb-8">
            <p className="tag mb-2">Early Access</p>
            <h2 className="text-3xl font-extrabold text-navy mb-3">Be the First to Know</h2>
            <p className="text-gray-500 text-sm">
              Sign up for early access and get free diagnostic credits when we launch the full platform.
            </p>
          </div>
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <EmailForm />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section className="py-16 bg-brand">
        <div className="container-md text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Ready to Understand Your Car?</h2>
          <p className="text-white/80 text-sm mb-8 max-w-sm mx-auto">
            No sign-up needed. Describe what's happening and get answers in seconds.
          </p>
          <Link href="/how-it-works#demo" className="inline-flex items-center gap-2 bg-white text-brand hover:bg-gray-50 font-bold py-4 px-8 rounded-xl shadow-lg transition-all">
            Try the Free Demo
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
