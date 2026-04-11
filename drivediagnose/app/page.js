import Link from "next/link";
import EmailForm from "@/components/EmailForm";

const PROBLEMS = [
  {
    title: "Check Engine Light",
    desc: "Could be something small like a gas cap, or something bigger. Know before you go.",
  },
  {
    title: "Car Won't Start",
    desc: "Lights are on but nothing happens? We'll help figure out if it's the battery, starter, or something else.",
  },
  {
    title: "Shaking or Vibrating",
    desc: "Shaking when you brake or at highway speed usually points to rotors, tires, or suspension.",
  },
  {
    title: "Strange Noises",
    desc: "Grinding, clicking, knocking — different sounds mean different things. We help sort it out.",
  },
  {
    title: "Engine Overheating",
    desc: "A rising temperature gauge isn't something to ignore. Find out what's likely causing it.",
  },
  {
    title: "AC Not Cooling",
    desc: "Blowing warm air? It could be low refrigerant, a compressor issue, or a simple fix.",
  },
];

const BENEFITS = [
  {
    title: "No confusing terms",
    desc: "We write the way a knowledgeable friend would talk to you — not like a repair manual.",
  },
  {
    title: "You'll know how urgent it is",
    desc: "We tell you if it's fine to drive for now, something to watch, or needs attention right away.",
  },
  {
    title: "Go in knowing what to say",
    desc: "Walk into any shop with a rough idea of the problem so you're not starting from zero.",
  },
  {
    title: "Skip the guessing game",
    desc: "Instead of spending an hour on forums, get a clear starting point in seconds.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand/10" />
          <div className="absolute bottom-0 -left-16 w-56 h-56 rounded-full bg-white/5" />
        </div>
        <div className="container-md py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Know what your car is{" "}
              <span className="text-brand">trying to tell you.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Describe what's going on with your car and get a clear explanation of what's likely wrong, how serious it is, and what to do next. No jargon, no upselling — just a straight answer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/how-it-works#demo" className="btn-orange text-base py-4 px-8">
                Try It Free
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </Link>
              <Link href="/about" className="btn-ghost text-base py-4 px-8">
                Learn More
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
                No sign-up required
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
                Results in seconds
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
                Completely free
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS STRIP */}
      <section className="bg-gray-50 border-y border-gray-100 py-12">
        <div className="container-md">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              ["1", "Describe the problem", "Type what's happening in your own words."],
              ["2", "Get a diagnosis",       "We identify the most likely causes."],
              ["3", "Know what to do",       "See how urgent it is and what step to take next."],
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

      {/* COMMON PROBLEMS */}
      <section className="py-20">
        <div className="container-md">
          <div className="text-center mb-12">
            <p className="tag mb-2">Common Issues</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-3">
              Does any of this sound familiar?
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              These are the most common problems drivers come to us with. Don't see yours? Just type it in — we cover a lot more.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROBLEMS.map(({ title, desc }) => (
              <div key={title} className="card group">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-brand transition-colors duration-200">
                  <svg className="w-5 h-5 text-brand group-hover:text-white transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-navy mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/how-it-works#demo" className="btn-orange">
              Try the Symptom Checker
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-navy text-white py-20">
        <div className="container-md">
          <div className="text-center mb-12">
            <p className="text-brand text-xs font-bold uppercase tracking-widest mb-2">Why it helps</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
              Car trouble is stressful enough
            </h2>
            <p className="text-gray-400 max-w-md mx-auto text-sm">
              We're not here to replace your mechanic. We just want you to have some idea of what's going on before you walk in.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {BENEFITS.map(({ title, desc }) => (
              <div key={title} className="flex gap-4 bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-brand/20 text-brand flex items-center justify-center flex-shrink-0 mt-0.5">
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

      {/* EMAIL CAPTURE */}
      <section className="py-20 bg-gray-50">
        <div className="container-md">
          <div className="max-w-md mx-auto text-center mb-8">
            <p className="tag mb-2">Stay in the loop</p>
            <h2 className="text-3xl font-extrabold text-navy mb-3">Get early access</h2>
            <p className="text-gray-500 text-sm">
              We're building out the full platform. Drop your email and we'll reach out when it's ready.
            </p>
          </div>
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <EmailForm />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-brand">
        <div className="container-md text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            Not sure what's wrong with your car?
          </h2>
          <p className="text-white/80 text-sm mb-8 max-w-sm mx-auto">
            Try describing it. You might be surprised how much clarity a quick diagnosis gives you.
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
