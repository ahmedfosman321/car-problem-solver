import Link from "next/link";
import SymptomChecker from "@/components/SymptomChecker";

export const metadata = {
  title: "How It Works — DriveDiagnose",
  description: "See how DriveDiagnose diagnoses your car problem in four simple steps.",
};

const STEPS = [
  {
    n: "01",
    title: "Describe what's happening",
    desc: "Type your symptom in plain English. You don't need to know any car terminology — just say what you're noticing.",
  },
  {
    n: "02",
    title: "We analyze the symptom",
    desc: "Our system compares your description against a large database of known car symptoms and their most common causes.",
  },
  {
    n: "03",
    title: "You get a breakdown",
    desc: "We show you the most likely causes, ranked by how common they are, explained in plain language.",
  },
  {
    n: "04",
    title: "Find out what to do",
    desc: "We tell you how urgent the issue is and give you a clear next step — whether that's a quick fix or a shop visit.",
  },
];

const ISSUE_CARDS = [
  {
    title: "Battery / Won't Start",
    urgency: "High",
    uc: "red",
    symptoms: ["Slow cranking when starting", "Lights dim when the engine starts", "Battery warning light on"],
  },
  {
    title: "Brake Vibration",
    urgency: "Medium–High",
    uc: "orange",
    symptoms: ["Steering wheel shakes when braking", "Car pulls to one side", "Grinding or squealing noise"],
  },
  {
    title: "Engine Overheating",
    urgency: "Critical",
    uc: "red",
    symptoms: ["Temperature gauge in the red", "Steam coming from under the hood", "Sweet smell from vents"],
  },
  {
    title: "Check Engine Light",
    urgency: "Low–Medium",
    uc: "yellow",
    symptoms: ["Warning light on dashboard", "Reduced fuel economy", "Rough idle or hesitation"],
  },
  {
    title: "Suspension / Steering Noise",
    urgency: "Medium",
    uc: "orange",
    symptoms: ["Clunking over bumps", "Clicking when turning", "Car bounces more than usual"],
  },
  {
    title: "AC Not Working",
    urgency: "Low",
    uc: "green",
    symptoms: ["Warm air from vents", "AC doesn't seem to engage", "Musty smell from vents"],
  },
];

const UC_COLORS = {
  red:    "bg-red-100 text-red-700 border-red-200",
  orange: "bg-orange-100 text-orange-700 border-orange-200",
  yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
  green:  "bg-green-100 text-green-700 border-green-200",
};
const UC_DOT = {
  red: "bg-red-500", orange: "bg-orange-500",
  yellow: "bg-yellow-500", green: "bg-green-500",
};

export default function HowItWorksPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy text-white py-20">
        <div className="container-md">
          <div className="max-w-2xl">
            <p className="tag mb-3">How it works</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              From symptom to answer{" "}
              <span className="text-brand">in under a minute.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              You don't need to know anything about cars. Just describe what's happening and we'll take it from there.
            </p>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-20">
        <div className="container-md">
          <div className="text-center mb-14">
            <p className="tag mb-2">The process</p>
            <h2 className="text-3xl font-extrabold text-navy">Four steps, no experience required</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map(({ n, title, desc }) => (
              <div key={n} className="card relative overflow-hidden">
                <span className="absolute top-4 right-4 text-5xl font-black text-gray-100 leading-none select-none">{n}</span>
                <div className="w-10 h-10 rounded-lg bg-orange-50 text-brand flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h3 className="font-bold text-navy mb-2 text-sm">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE DEMO */}
      <section id="demo" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="container-md">
          <div className="text-center mb-12">
            <p className="tag mb-2">Try it now</p>
            <h2 className="text-3xl font-extrabold text-navy mb-3">
              See it for yourself
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              Type a symptom below or pick one of the examples. This is what a real result looks like.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <SymptomChecker />
          </div>
        </div>
      </section>

      {/* ISSUE CARDS */}
      <section className="py-20">
        <div className="container-md">
          <div className="text-center mb-12">
            <p className="tag mb-2">Common issues</p>
            <h2 className="text-3xl font-extrabold text-navy mb-3">
              Problems we see most often
            </h2>
            <p className="text-gray-500 max-w-md mx-auto text-sm">
              These cover a big chunk of what drivers come to us with.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ISSUE_CARDS.map(({ title, urgency, uc, symptoms }) => (
              <div key={title} className="card">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-navy text-sm">{title}</h3>
                  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border flex-shrink-0 ml-2 ${UC_COLORS[uc]}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${UC_DOT[uc]}`} />
                    {urgency}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {symptoms.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-xs text-gray-500">
                      <svg className="w-3.5 h-3.5 text-brand mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                      </svg>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-14">
        <div className="container-md text-center text-white">
          <h2 className="text-3xl font-extrabold mb-3">Give it a try</h2>
          <p className="text-white/80 text-sm mb-6 max-w-sm mx-auto">
            Type your symptom above, or reach out if you want to talk to a person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#demo" className="inline-flex items-center justify-center gap-2 bg-white text-brand hover:bg-gray-50 font-bold py-4 px-8 rounded-xl shadow-lg transition-all">
              Try the Demo
            </a>
            <Link href="/contact" className="btn-ghost py-4 px-8">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
