"use client";

import { useState } from "react";

const DB = [
  {
    match: ["shake", "shak", "vibrat", "shudder", "wobble"],
    also:  ["brak", "stop", "slow", "decelerat"],
    title: "Brake Vibration When Stopping",
    causes: [
      "Warped brake rotors (most common cause)",
      "Worn or glazed brake pads",
      "Loose caliper mounting bolts",
      "Uneven pad deposits on the rotor surface",
    ],
    urgency: "Medium–High", uc: "orange",
    next: "Get your brakes looked at within the next week or two. Warped rotors reduce stopping power and tend to get worse over time — especially at higher speeds.",
    time: "Within 1–2 weeks",
  },
  {
    match: ["won't start", "wont start", "not starting", "won't turn", "no start", "won't crank", "click when", "dead"],
    also:  ["light", "battery", "power", "key"],
    title: "Car Won't Start (Lights Work)",
    causes: [
      "Weak or dead battery (most common)",
      "Faulty starter motor or solenoid",
      "Corroded or loose battery terminals",
      "Failed ignition switch",
    ],
    urgency: "High", uc: "red",
    next: "Try jumping the car first. If it starts, have the battery and alternator tested — most auto parts stores do this free. If jump-starting doesn't help, the starter motor is likely the issue.",
    time: "Address right away",
  },
  {
    match: ["check engine", "engine light", "cel", "warning light", "orange light", "yellow light"],
    also:  [],
    title: "Check Engine Light On",
    causes: [
      "Loose or faulty gas cap (most common, easiest fix)",
      "Oxygen sensor failure",
      "Catalytic converter issue",
      "Spark plug or ignition coil problem",
    ],
    urgency: "Low–Medium", uc: "yellow",
    next: "Start by tightening your gas cap and driving for a day — the light may clear on its own. If it stays on, get a free OBD-II scan at any auto parts store to pull the exact fault code before visiting a mechanic.",
    time: "Within 1–2 weeks (sooner if the light is flashing)",
  },
  {
    match: ["overheat", "too hot", "temperature", "steam", "boil", "smoke", "coolant", "radiator"],
    also:  ["engine", "gauge", "temp", "heat"],
    title: "Engine Overheating",
    causes: [
      "Low coolant level or a coolant leak",
      "Faulty thermostat stuck in the closed position",
      "Failed water pump",
      "Clogged or damaged radiator",
    ],
    urgency: "Critical", uc: "red",
    next: "Pull over and shut the engine off immediately. Do not open the radiator cap while it's hot. Let it cool for at least 30 minutes, then check the coolant level. Driving an overheating engine risks serious permanent damage.",
    time: "Do not drive — address immediately",
  },
  {
    match: ["ac", "a/c", "air condition", "air con", "warm air", "hot air", "not cooling", "no cold", "blowing hot"],
    also:  ["vent", "cool", "cold"],
    title: "AC Blowing Warm Air",
    causes: [
      "Low refrigerant (common in older cars)",
      "Refrigerant leak in the system",
      "Failed AC compressor or compressor clutch",
      "Clogged cabin air filter",
    ],
    urgency: "Low", uc: "green",
    next: "Check if the AC compressor clutch is engaging when you turn on the AC. A refrigerant recharge may fix it if it's just low. A leak will require professional repair.",
    time: "Not urgent unless it's extremely hot out",
  },
  {
    match: ["click", "clicking", "pop", "snap", "creak"],
    also:  ["turn", "corner", "steer", "wheel", "left", "right"],
    title: "Clicking When Turning",
    causes: [
      "Worn or failing CV axle joint (most common)",
      "Loose or worn wheel bearing",
      "Low power steering fluid",
      "Worn ball joint or tie rod end",
    ],
    urgency: "Medium", uc: "orange",
    next: "A clicking CV joint is a common wear item — drivable in the short term but it will get worse. Have it inspected within a few weeks. Typical repair cost runs $150–$300 per axle.",
    time: "Inspect within 2–4 weeks",
  },
  {
    match: ["grind", "grinding", "metal", "scrape", "squeal", "screech"],
    also:  ["brak", "stop", "slow", "pedal"],
    title: "Brake Grinding or Squealing",
    causes: [
      "Brake pads worn to the wear indicator (squealing is the warning)",
      "Brake pads fully worn through to rotor (grinding means metal-on-metal)",
      "Debris caught between pad and rotor",
      "Surface rust after sitting — usually clears on its own after a few stops",
    ],
    urgency: "High", uc: "red",
    next: "If it's grinding, get it looked at within a few days — the pads may be gone and the rotors could be getting damaged. Don't wait on this one.",
    time: "Within 1–3 days",
  },
  {
    match: ["rough idle", "rough", "idle", "stall", "sputter", "misfire", "hesitat", "jerk"],
    also:  ["idle", "park", "rpm"],
    title: "Rough Idle or Engine Misfiring",
    causes: [
      "Fouled or worn spark plugs",
      "Dirty or clogged fuel injectors",
      "Vacuum leak in the intake system",
      "Clogged air filter (check this first — it's a quick, cheap fix)",
    ],
    urgency: "Medium", uc: "orange",
    next: "Start with the air filter — it's about $15 and takes five minutes. Spark plugs are the next most common culprit. If the car misfires under acceleration (not just at idle), get it diagnosed before the issue worsens.",
    time: "Within 1–2 weeks",
  },
];

const QUICK = [
  "My car shakes when braking",
  "Car won't start but lights work",
  "Check engine light is on",
  "AC is blowing warm air",
  "Clicking when I turn",
  "Engine is overheating",
  "Brakes are grinding",
  "Rough idle and sputtering",
];

function match(input) {
  const s = input.toLowerCase();
  for (const d of DB) {
    if (d.match.some((k) => s.includes(k))) return d;
  }
  return null;
}

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

export default function SymptomChecker() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [noMatch, setNoMatch] = useState(false);

  const run = (val) => {
    if (!val.trim()) return;
    setLoading(true);
    setResult(null);
    setNoMatch(false);
    setTimeout(() => {
      const r = match(val);
      if (r) { setResult(r); setNoMatch(false); }
      else   { setResult(null); setNoMatch(true); }
      setLoading(false);
    }, 900);
  };

  const handleSubmit = (e) => { e.preventDefault(); run(input); };
  const handleQuick  = (s) => { setInput(s); run(s); };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">

      {/* Top bar */}
      <div className="bg-navy px-5 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-white/10" />
          <span className="w-3 h-3 rounded-full bg-white/10" />
          <span className="w-3 h-3 rounded-full bg-white/10" />
        </div>
        <span className="ml-2 text-white/40 text-xs font-mono">DriveDiagnose — Symptom Checker</span>
      </div>

      <div className="p-6 md:p-8">
        {/* Input */}
        <form onSubmit={handleSubmit} className="mb-5">
          <label className="label mb-1">What's going on with your car?</label>
          <div className="flex gap-3">
            <input
              type="text"
              className="input flex-1"
              placeholder='e.g. "My car shakes when I brake"'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="btn-orange px-5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
              ) : "Diagnose"}
            </button>
          </div>
        </form>

        {/* Quick picks */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Click an example to try it
          </p>
          <div className="flex flex-wrap gap-2">
            {QUICK.map((s) => (
              <button
                key={s}
                onClick={() => handleQuick(s)}
                className="text-xs bg-gray-100 hover:bg-orange-50 hover:text-brand text-gray-600 px-3 py-1.5 rounded-full border border-gray-200 hover:border-orange-200 transition-all"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="animate-pulse space-y-3 border-t border-gray-100 pt-6">
            <div className="h-5 bg-gray-200 rounded w-1/2" />
            <div className="h-3 bg-gray-100 rounded w-full" />
            <div className="h-3 bg-gray-100 rounded w-5/6" />
            <div className="h-3 bg-gray-100 rounded w-4/6" />
          </div>
        )}

        {/* No match */}
        {noMatch && !loading && (
          <div className="border-t border-gray-100 pt-6 text-center text-gray-400">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-600 mb-1">No match found</p>
            <p className="text-xs text-gray-400 max-w-xs mx-auto">
              Try describing when it happens or what sound it makes. You can also try one of the examples above.
            </p>
          </div>
        )}

        {/* Result */}
        {result && !loading && (
          <div className="border-t border-gray-100 pt-6 space-y-5">

            {/* Title + urgency */}
            <div>
              <h3 className="font-bold text-navy text-lg leading-tight mb-2">{result.title}</h3>
              <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${UC_COLORS[result.uc]}`}>
                <span className={`w-2 h-2 rounded-full ${UC_DOT[result.uc]}`} />
                Urgency: {result.urgency}
              </span>
            </div>

            {/* Causes */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Likely causes</p>
              <ul className="space-y-2">
                {result.causes.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                    </svg>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Next step */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-1">What to do next</p>
              <p className="text-sm text-gray-700 leading-relaxed">{result.next}</p>
            </div>

            {/* Timeline */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              {result.time}
            </div>

            <p className="text-xs text-gray-400 border-t border-gray-100 pt-4">
              This is a starting point, not a professional diagnosis. A mechanic should always make the final call.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
