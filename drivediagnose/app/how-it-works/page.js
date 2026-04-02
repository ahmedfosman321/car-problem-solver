"use client";

import { useState } from "react";
import Link from "next/link";

// ─── DIAGNOSTIC DATABASE ───────────────────────────────────────
// Each entry: keywords to match, result data.
// The demo loops through these and matches on user input.
const DIAGNOSES = [
  {
    keywords: ["shake", "shak", "vibrat", "shudder", "wobble", "jitter"],
    context: ["brak", "stop", "slow", "decelerat"],
    title: "Brake Vibration / Shaking When Stopping",
    icon: "🛑",
    causes: [
      "Warped brake rotors (most common cause)",
      "Worn or glazed brake pads",
      "Loose caliper mounting hardware",
      "Uneven pad deposit on rotor surface",
    ],
    urgency: "Medium–High",
    urgencyColor: "orange",
    nextStep:
      "Have your brakes inspected soon. Warped rotors reduce stopping effectiveness and can become dangerous, especially in emergency stops. Avoid high-speed highway driving until checked.",
    time: "Inspect within 1–2 weeks",
  },
  {
    keywords: ["won't start", "wont start", "not starting", "won't turn", "no start", "dead", "click"],
    context: ["light", "battery", "power", "turn", "key"],
    title: "Car Won't Start (But Lights Work)",
    icon: "🔋",
    causes: [
      "Weak or failing battery (insufficient cranking power)",
      "Faulty starter motor or solenoid",
      "Bad battery terminals or corroded connections",
      "Failed ignition switch",
    ],
    urgency: "High",
    urgencyColor: "red",
    nextStep:
      "Try jump-starting the car. If it starts, have your battery and alternator tested immediately — most auto parts stores do this free. If it won't jump-start, the starter motor may need replacement.",
    time: "Address immediately",
  },
  {
    keywords: ["check engine", "engine light", "cel", "warning light", "orange light", "yellow light"],
    context: [],
    title: "Check Engine Light On",
    icon: "⚠️",
    causes: [
      "Loose or faulty gas cap (most common, easiest fix)",
      "Oxygen sensor failure",
      "Catalytic converter issue",
      "Spark plug or ignition coil problem",
      "Mass airflow sensor fault",
    ],
    urgency: "Low–Medium",
    urgencyColor: "yellow",
    nextStep:
      "Start by checking your gas cap — tighten it and see if the light clears after a day of driving. If it stays on, get a free OBD-II scan at any auto parts store to read the exact fault code before going to a mechanic.",
    time: "Within 1–2 weeks unless flashing",
  },
  {
    keywords: ["overheat", "hot", "temperature", "steam", "smoke", "boil", "coolant"],
    context: ["engine", "gauge", "temp", "heat", "radiator"],
    title: "Engine Overheating",
    icon: "🌡️",
    causes: [
      "Low coolant level or coolant leak",
      "Faulty thermostat stuck closed",
      "Failed water pump",
      "Clogged or leaking radiator",
      "Broken radiator fan",
    ],
    urgency: "Critical",
    urgencyColor: "red",
    nextStep:
      "Pull over safely and turn off the engine immediately. Do NOT open the radiator cap while hot. Let the engine cool for 30+ minutes, then check coolant level. Continuing to drive an overheating engine can cause catastrophic engine damage (warped head, blown gasket).",
    time: "Do not drive — address immediately",
  },
  {
    keywords: ["ac", "a/c", "air condition", "air con", "warm air", "hot air", "not cooling", "no cool"],
    context: ["blow", "vent", "heat", "cool", "cold", "summer"],
    title: "AC Blowing Warm Air",
    icon: "❄️",
    causes: [
      "Low or depleted refrigerant (common with age)",
      "Refrigerant leak in the system",
      "Failed AC compressor or compressor clutch",
      "Clogged cabin air filter",
      "Faulty condenser or blocked condenser fins",
    ],
    urgency: "Low",
    urgencyColor: "green",
    nextStep:
      "Start by checking if the compressor clutch engages when AC is turned on (look for spinning center of compressor). A simple refrigerant recharge may fix it if it's just low. Leaks require professional repair with dye testing.",
    time: "Not urgent unless extreme heat",
  },
  {
    keywords: ["click", "clicking", "pop", "popping", "snap", "creak"],
    context: ["turn", "corner", "wheel", "steer", "left", "right"],
    title: "Clicking When Turning",
    icon: "🔧",
    causes: [
      "Worn or failing CV axle joint (most common cause)",
      "Loose or worn wheel bearing",
      "Low power steering fluid",
      "Worn ball joint or tie rod end",
    ],
    urgency: "Medium",
    urgencyColor: "orange",
    nextStep:
      "A clicking CV joint is a common wear item. It's drivable short-term but will worsen over time and eventually fail. Have a mechanic inspect both front CV axles within the next few weeks. Cost is typically $150–$300 per axle.",
    time: "Inspect within 2–4 weeks",
  },
  {
    keywords: ["grind", "grinding", "metal", "scrape", "squeal", "squeak"],
    context: ["brake", "stop", "slow", "pedal"],
    title: "Brake Grinding or Squealing",
    icon: "🔩",
    causes: [
      "Brake pads worn down to metal wear indicator (squealing)",
      "Brake pads fully worn through to rotor (grinding)",
      "Debris or stone caught between pad and rotor",
      "Rusted rotors after sitting (usually clears on its own)",
    ],
    urgency: "High",
    urgencyColor: "red",
    nextStep:
      "Grinding brakes mean metal-on-metal contact — your pads may be gone. This is a safety issue. Have brakes inspected within days, not weeks. Rotors may need replacement alongside pads. Do not delay.",
    time: "Inspect within 1–3 days",
  },
  {
    keywords: ["rough idle", "rough", "idle", "shaking idle", "vibrate idle", "rpm", "stall", "sputt"],
    context: ["idle", "park", "stop", "rough", "rpm"],
    title: "Rough Idle or Engine Misfiring",
    icon: "⚙️",
    causes: [
      "Fouled or worn spark plugs",
      "Dirty fuel injectors",
      "Vacuum leak in intake system",
      "Faulty mass airflow (MAF) sensor",
      "Clogged air filter",
    ],
    urgency: "Medium",
    urgencyColor: "orange",
    nextStep:
      "Check the engine air filter first — it's a cheap DIY fix. Spark plugs are another common culprit and are inexpensive to replace. If the car misfires under load (not just at idle), get it diagnosed before the issue worsens.",
    time: "Address within 1–2 weeks",
  },
];

// Default fallback when no match is found
const FALLBACK_DIAGNOSIS = {
  title: "Symptom Received",
  icon: "🔍",
  causes: [
    "Unable to identify a specific pattern from that description",
    "The symptom may be intermittent or require more detail",
    "Multiple systems could produce this behavior",
  ],
  urgency: "Unknown",
  urgencyColor: "gray",
  nextStep:
    "Try describing when the problem happens, what sound it makes, or what part of the car seems affected. You can also try one of the example symptoms below. A mechanic can perform a full diagnostic scan for specific fault codes.",
  time: "Varies — monitor and consult a mechanic",
};

// Sample quick-pick cards
const SAMPLE_SYMPTOMS = [
  "My car shakes when braking",
  "Car won't start but lights work",
  "Check engine light is on",
  "AC is blowing warm air",
  "I hear clicking when turning",
  "Engine is overheating",
  "Brakes are grinding",
  "Rough idle and sputtering",
];

// ─── PROCESS STEPS ─────────────────────────────────────────────
const STEPS = [
  {
    number: "01",
    title: "Describe Your Symptom",
    desc: "Type what you're experiencing in plain language. No car knowledge needed — just describe what you notice.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "AI Analyzes the Issue",
    desc: "Our diagnostic engine compares your description against thousands of known symptoms and mechanical patterns.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Get Likely Causes",
    desc: "You'll see a ranked list of the most probable causes, explained in plain English — not technical shorthand.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Know What to Do Next",
    desc: "We rate the urgency and give you a clear next step — whether that's a same-day fix or a scheduled checkup.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

// ─── URGENCY BADGE ──────────────────────────────────────────────
function UrgencyBadge({ level, color }) {
  const colorMap = {
    red: "bg-red-100 text-red-700 border-red-200",
    orange: "bg-orange-100 text-orange-700 border-orange-200",
    yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
    green: "bg-green-100 text-green-700 border-green-200",
    gray: "bg-gray-100 text-gray-700 border-gray-200",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${colorMap[color]}`}>
      <span className={`w-2 h-2 rounded-full ${color === "red" ? "bg-red-500" : color === "orange" ? "bg-orange-500" : color === "yellow" ? "bg-yellow-500" : color === "green" ? "bg-green-500" : "bg-gray-400"}`} />
      Urgency: {level}
    </span>
  );
}

// ─── DIAGNOSTIC ENGINE ──────────────────────────────────────────
function matchDiagnosis(input) {
  const lower = input.toLowerCase();

  for (const d of DIAGNOSES) {
    const keywordMatch = d.keywords.some((k) => lower.includes(k));
    if (keywordMatch) return d;
  }
  return FALLBACK_DIAGNOSIS;
}

// ─── INTERACTIVE DEMO COMPONENT ────────────────────────────────
function SymptomChecker() {
  const [symptom, setSymptom] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const runDiagnosis = (input) => {
    if (!input.trim()) return;
    setLoading(true);
    setResult(null);

    // Simulate a brief "thinking" delay for realism
    setTimeout(() => {
      setResult(matchDiagnosis(input));
      setLoading(false);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runDiagnosis(symptom);
  };

  const handleQuickPick = (s) => {
    setSymptom(s);
    runDiagnosis(s);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      {/* Demo header bar */}
      <div className="bg-navy px-6 py-4 flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <span className="text-white/60 text-xs ml-2 font-mono">DriveDiagnose — Symptom Checker</span>
      </div>

      <div className="p-6 md:p-8">
        {/* Input form */}
        <form onSubmit={handleSubmit} className="mb-6">
          <label className="form-label text-sm">Describe your car problem</label>
          <div className="flex gap-3 mt-1">
            <input
              type="text"
              className="form-input flex-1"
              placeholder='e.g. "My car shakes when I brake"'
              value={symptom}
              onChange={(e) => setSymptom(e.target.value)}
            />
            <button
              type="submit"
              disabled={!symptom.trim() || loading}
              className="btn-primary px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Analyzing...
                </span>
              ) : (
                "Diagnose"
              )}
            </button>
          </div>
        </form>

        {/* Quick symptom chips */}
        <div className="mb-6">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
            Quick examples — click to try
          </p>
          <div className="flex flex-wrap gap-2">
            {SAMPLE_SYMPTOMS.map((s) => (
              <button
                key={s}
                onClick={() => handleQuickPick(s)}
                className="text-xs bg-gray-100 hover:bg-brand/10 hover:text-brand text-gray-600 px-3 py-1.5 rounded-full border border-gray-200 hover:border-brand/30 transition-all duration-150"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Loading skeleton */}
        {loading && (
          <div className="animate-pulse space-y-3 border-t border-gray-100 pt-6">
            <div className="h-5 bg-gray-200 rounded w-1/2" />
            <div className="h-3 bg-gray-100 rounded w-full" />
            <div className="h-3 bg-gray-100 rounded w-5/6" />
            <div className="h-3 bg-gray-100 rounded w-4/6" />
          </div>
        )}

        {/* Diagnosis result */}
        {result && !loading && (
          <div className="border-t border-gray-100 pt-6 space-y-5">
            {/* Title */}
            <div className="flex items-start gap-3">
              <span className="text-3xl">{result.icon}</span>
              <div>
                <h3 className="font-bold text-navy text-lg leading-tight">{result.title}</h3>
                <div className="mt-1.5">
                  <UrgencyBadge level={result.urgency} color={result.urgencyColor} />
                </div>
              </div>
            </div>

            {/* Likely causes */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                Likely Causes
              </p>
              <ul className="space-y-2">
                {result.causes.map((cause, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    {cause}
                  </li>
                ))}
              </ul>
            </div>

            {/* Next step */}
            <div className="bg-brand/5 border border-brand/20 rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-1">
                Recommended Next Step
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">{result.nextStep}</p>
            </div>

            {/* Timeline */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">{result.time}</span>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-gray-400 border-t border-gray-100 pt-4">
              This is a diagnostic aid, not a professional inspection. Always consult a certified mechanic for a final diagnosis and repair.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────
export default function HowItWorksPage() {
  return (
    <>
      {/* ─── HERO ───────────────────────────────────────────── */}
      <section className="bg-navy text-white py-20">
        <div className="section-container">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#f97316" }}>
              How It Works
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              From symptom to answer{" "}
              <span style={{ color: "#f97316" }}>in seconds.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              No car knowledge needed. Just describe what you're experiencing and we'll do the rest.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 4-STEP PROCESS ──────────────────────────────────── */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-14">
            <p className="section-tag mb-2">The Process</p>
            <h2 className="text-3xl font-extrabold text-navy">Four Simple Steps</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map(({ number, title, desc, icon }) => (
              <div key={number} className="card relative">
                {/* Step number */}
                <span className="text-5xl font-black text-gray-100 absolute top-4 right-5 leading-none select-none">
                  {number}
                </span>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                    {icon}
                  </div>
                  <h3 className="font-bold text-navy mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE DEMO ────────────────────────────────── */}
      <section id="demo" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="section-tag mb-2">Try It Now</p>
            <h2 className="text-3xl font-extrabold text-navy mb-3">
              Interactive Symptom Checker
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-base">
              Type a car symptom below — or click one of the examples. See exactly what a real DriveDiagnose result looks like.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <SymptomChecker />
          </div>
        </div>
      </section>

      {/* ─── SAMPLE ISSUE CARDS ──────────────────────────────── */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="section-tag mb-2">Common Issues</p>
            <h2 className="text-3xl font-extrabold text-navy mb-3">
              Problems We Diagnose Every Day
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              These are the most common symptoms drivers bring to DriveDiagnose.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: "🔋",
                title: "Battery Problems",
                symptoms: ["Slow cranking when starting", "Lights dim when engine starts", "Battery warning light on"],
                urgency: "High",
                urgencyColor: "red",
              },
              {
                icon: "🛑",
                title: "Brake Vibration",
                symptoms: ["Steering wheel shakes when braking", "Car pulls to one side", "Grinding or squealing noise"],
                urgency: "Medium–High",
                urgencyColor: "orange",
              },
              {
                icon: "🌡️",
                title: "Overheating",
                symptoms: ["Temperature gauge in red zone", "Steam from hood", "Sweet smell from vents"],
                urgency: "Critical",
                urgencyColor: "red",
              },
              {
                icon: "⚠️",
                title: "Check Engine Light",
                symptoms: ["Dashboard warning light", "Reduced fuel economy", "Rough idle or hesitation"],
                urgency: "Low–Medium",
                urgencyColor: "yellow",
              },
              {
                icon: "🔧",
                title: "Suspension Noises",
                symptoms: ["Clunking over bumps", "Clicking when turning", "Car bounces excessively"],
                urgency: "Medium",
                urgencyColor: "orange",
              },
              {
                icon: "❄️",
                title: "AC / Cooling Failure",
                symptoms: ["Warm air from vents", "AC not engaging", "Musty smell from vents"],
                urgency: "Low",
                urgencyColor: "green",
              },
            ].map(({ icon, title, symptoms, urgency, urgencyColor }) => (
              <div key={title} className="card">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <h3 className="font-bold text-navy">{title}</h3>
                    <UrgencyBadge level={urgency} color={urgencyColor} />
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {symptoms.map((s) => (
                    <li key={s} className="text-sm text-gray-500 flex items-start gap-2">
                      <svg className="w-3.5 h-3.5 text-brand mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
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

      {/* ─── CTA ────────────────────────────────────────────── */}
      <section className="bg-brand py-16">
        <div className="section-container text-center text-white">
          <h2 className="text-3xl font-extrabold mb-4">Your Car Has a Problem. Let's Figure It Out.</h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Use the symptom checker above or sign up for full access when we launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand hover:bg-gray-50 font-bold py-4 px-8 rounded-xl shadow-lg transition-all"
            >
              Try the Demo
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brand font-bold py-4 px-8 rounded-xl transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
