import Link from "next/link";
import SymptomChecker from "@/components/SymptomChecker";

export const metadata = {
  title: "How It Works — DriveDiagnose",
  description: "See how DriveDiagnose diagnoses your car problem in four simple steps.",
};

const STEPS = [
  { n: "01", title: "Describe Your Symptom",   desc: "Type what you're experiencing in plain language. No car knowledge needed — just describe what you notice.", emoji: "✍️" },
  { n: "02", title: "AI Analyzes the Issue",   desc: "Our engine compares your description against thousands of known symptoms and mechanical patterns.",           emoji: "🤖" },
  { n: "03", title: "Get Likely Causes",       desc: "See a ranked list of the most probable causes, explained clearly — not in technical shorthand.",             emoji: "📋" },
  { n: "04", title: "Know What to Do Next",    desc: "We rate the urgency and give you a clear action — whether that's a same-day fix or a scheduled checkup.",    emoji: "⚡" },
];

const ISSUE_CARDS = [
  { emoji: "🔋", title: "Battery Problems",    urgency: "High",        uc: "red",    symptoms: ["Slow cranking when starting", "Lights dim when engine starts", "Battery warning light on"] },
  { emoji: "🛑", title: "Brake Vibration",     urgency: "Medium–High", uc: "orange", symptoms: ["Steering wheel shakes when braking", "Car pulls to one side", "Grinding or squealing noise"] },
  { emoji: "🌡️", title: "Overheating",         urgency: "Critical",    uc: "red",    symptoms: ["Temperature gauge in red zone", "Steam from hood", "Sweet smell from vents"] },
  { emoji: "⚠️", title: "Check Engine Light",  urgency: "Low–Medium",  uc: "yellow", symptoms: ["Dashboard warning light on", "Reduced fuel economy", "Rough idle or hesitation"] },
  { emoji: "🔧", title: "Suspension Noises",   urgency: "Medium",      uc: "orange", symptoms: ["Clunking over bumps", "Clicking when turning", "Car bounces excessively"] },
  { emoji: "❄️", title: "AC Not Cooling",      urgency: "Low",         uc: "green",  symptoms: ["Warm air from vents", "AC not engaging", "Musty smell from vents"] },
];

const UC_COLORS = {
  red:    "bg-red-100 text-red-700 border-red-200",
  orange: "bg-orange-100 text-orange-700 border-orange-200",
  yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
  green:  "bg-green-100 text-green-700 border-green-200",
};
const UC_DOT = { red: "bg-red-500", orange: "bg-orange-500", yellow: "bg-yellow-500", green: "bg-green-500" };

export default function HowItWorksPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-navy text-white py-20">
        <div className="container-md">
          <div className="max-w-2xl">
            <p className="tag mb-3">How It Works</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              From symptom to answer{" "}
              <span className="text-brand">in seconds.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              No car knowledge needed. Just describe what you're experiencing and we'll do the rest.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4 STEPS ──────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container-md">
          <div className="text-center mb-14">
            <p className="tag mb-2">The Process</p>
            <h2 className="text-3xl font-extrabold text-navy">Four Simple Steps</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map(({ n, title, desc, emoji }) => (
              <div key={n} className="card relative overflow-hidden">
                <span className="absolute top-4 right-4 text-5xl font-black text-gray-100 leading-none select-none">{n}</span>
                <span className="text-3xl mb-4 block">{emoji}</span>
                <h3 className="font-bold text-navy mb-2 text-sm">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE DEMO ─────────────────────────────────── */}
      <section id="demo" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="container-md">
          <div className="text-center mb-12">
            <p className="tag mb-2">Try It Now</p>
            <h2 className="text-3xl font-extrabold text-navy mb-3">Interactive Symptom Checker</h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              Type a symptom below or click one of the examples. See exactly what a real DriveDiagnose result looks like.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <SymptomChecker />
          </div>
        </div>
      </section>

      {/* ── ISSUE CARDS ──────────────────────────────────────── */}
      <section className="py-20">
        <div className="container-md">
          <div className="text-center mb-12">
            <p className="tag mb-2">Common Issues</p>
            <h2 className="text-3xl font-extrabold text-navy mb-3">Problems We Diagnose Every Day</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ISSUE_CARDS.map(({ emoji, title, urgency, uc, symptoms }) => (
              <div key={title} className="card">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl leading-none">{emoji}</span>
                  <div>
                    <h3 className="font-bold text-navy text-sm">{title}</h3>
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border mt-1 ${UC_COLORS[uc]}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${UC_DOT[uc]}`} />
                      {urgency}
                    </span>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {symptoms.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-xs text-gray-500">
                      <svg className="w-3.5 h-3.5 text-brand mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
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

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-brand py-14">
        <div className="container-md text-center text-white">
          <h2 className="text-3xl font-extrabold mb-3">Your Car Has a Problem. Let's Figure It Out.</h2>
          <p className="text-white/80 text-sm mb-6 max-w-sm mx-auto">Use the checker above or sign up for full access when we launch.</p>
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
