"use client";

import { useState } from "react";

// ── Diagnosis database ──────────────────────────────────────────
const DB = [
  {
    match: ["shake","shak","vibrat","shudder","wobble"],
    also:  ["brak","stop","slow","decelerat"],
    title: "Brake Vibration When Stopping",
    icon: "🛑",
    causes: [
      "Warped brake rotors (most common)",
      "Worn or glazed brake pads",
      "Loose caliper mounting bolts",
      "Uneven brake pad deposits on rotors",
    ],
    urgency: "Medium–High", uc: "orange",
    next: "Have your brakes inspected soon. Warped rotors reduce stopping power and worsen quickly — don't delay if the shaking is getting worse.",
    time: "Inspect within 1–2 weeks",
  },
  {
    match: ["won't start","wont start","not starting","won't turn","no start","dead","won't crank","click when"],
    also:  ["light","battery","power","key"],
    title: "Car Won't Start (Lights Work)",
    icon: "🔋",
    causes: [
      "Weak or dead battery (most common)",
      "Faulty starter motor or solenoid",
      "Corroded battery terminals",
      "Bad ignition switch",
    ],
    urgency: "High", uc: "red",
    next: "Try jump-starting first. If it starts, have the battery and alternator tested — most auto parts stores do this free. If jump-starting doesn't work, the starter may need replacement.",
    time: "Address immediately",
  },
  {
    match: ["check engine","engine light","cel","warning light","orange light","yellow light"],
    also:  [],
    title: "Check Engine Light On",
    icon: "⚠️",
    causes: [
      "Loose or faulty gas cap (most common, easiest fix)",
      "Oxygen sensor failure",
      "Catalytic converter issue",
      "Spark plug or ignition coil fault",
    ],
    urgency: "Low–Medium", uc: "yellow",
    next: "Tighten your gas cap first and see if the light clears after a day or two. If it stays on, get a free OBD-II scan at any auto parts store to read the exact fault code before visiting a mechanic.",
    time: "Within 1–2 weeks (unless flashing — then sooner)",
  },
  {
    match: ["overheat","too hot","temperature","steam","boil","smoke","coolant","radiator"],
    also:  ["engine","gauge","temp","heat"],
    title: "Engine Overheating",
    icon: "🌡️",
    causes: [
      "Low coolant level or coolant leak",
      "Faulty thermostat stuck closed",
      "Failed water pump",
      "Clogged or damaged radiator",
    ],
    urgency: "Critical", uc: "red",
    next: "Pull over and turn the engine off immediately. Do NOT open the radiator cap while hot. Let it cool 30+ minutes, then check coolant. Continuing to drive risks catastrophic engine damage (warped head, blown gasket).",
    time: "Do not drive — address immediately",
  },
  {
    match: ["ac","a/c","air condition","air con","warm air","hot air","not cooling","no cold","blowing hot"],
    also:  ["vent","cool","cold","summer"],
    title: "AC Blowing Warm Air",
    icon: "❄️",
    causes: [
      "Low refrigerant (most common with older cars)",
      "Refrigerant leak in the system",
      "Failed AC compressor or clutch",
      "Clogged cabin air filter",
    ],
    urgency: "Low", uc: "green",
    next: "Check if the AC compressor clutch engages when you turn on the AC. A refrigerant recharge may fix it if it's just low. Leaks need professional repair with dye testing.",
    time: "Not urgent unless extreme heat",
  },
  {
    match: ["click","clicking","pop","snap","creak"],
    also:  ["turn","corner","steer","wheel","left","right"],
    title: "Clicking Noise When Turning",
    icon: "🔧",
    causes: [
      "Worn or failing CV axle joint (most common)",
      "Loose or worn wheel bearing",
      "Low power steering fluid",
      "Worn ball joint or tie rod end",
    ],
    urgency: "Medium", uc: "orange",
    next: "A clicking CV joint is a common wear item — drivable short-term but will worsen. Have both front CV axles inspected within a few weeks. Typical repair cost: $150–$300 per axle.",
    time: "Inspect within 2–4 weeks",
  },
  {
    match: ["grind","grinding","metal on metal","scrape","squeal","screech"],
    also:  ["brak","stop","slow","pedal"],
    title: "Brakes Grinding or Squealing",
    icon: "🔩",
    causes: [
      "Brake pads worn to the wear indicator (squealing)",
      "Brake pads fully worn through to rotor (grinding)",
      "Debris caught between pad and rotor",
      "Surface rust on rotors after sitting (usually clears on its own)",
    ],
    urgency: "High", uc: "red",
    next: "Grinding means metal-on-metal contact — your pads may be completely gone. This is a safety issue. Get your brakes looked at within days. Rotors often need replacing alongside pads when left this long.",
    time: "Inspect within 1–3 days",
  },
  {
    match: ["rough idle","rough","idle","stall","sputter","misfire","hesitat","jerk"],
    also:  ["idle","park","rpm","rough","start"],
    title: "Rough Idle or Engine Misfiring",
    icon: "⚙️",
    causes: [
      "Fouled or worn spark plugs",
      "Dirty or clogged fuel injectors",
      "Vacuum leak in the intake system",
      "Clogged air filter (cheap fix — check this first)",
    ],
    urgency: "Medium", uc: "orange",
    next: "Check the air filter first — it's a $15–$20 DIY fix. Spark plugs are the next common culprit. If the car misfires under load or acceleration (not just at idle), get it diagnosed before it worsens.",
    time: "Address within 1–2 weeks",
  },
];

const QUICK = [
  "My car shakes when braking",
  "Car won't start but lights work",
  "Check engine light is on",
  "AC is blowing warm air",
  "Clicking noise when turning",
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
  gray:   "bg-gray-100 text-gray-600 border-gray-200",
};
const UC_DOT = {
  red: "bg-red-500", orange: "bg-orange-500",
  yellow: "bg-yellow-500", green: "bg-green-500", gray: "bg-gray-400",
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

      {/* Terminal-style top bar */}
      <div className="bg-navy px-5 py-3 flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-3 text-white/50 text-xs font-mono">DriveDiagnose — Symptom Checker</span>
      </div>

      <div className="p-6 md:p-8">
        {/* Input */}
        <form onSubmit={handleSubmit} className="mb-5">
          <label className="label mb-1">Describe your car problem</label>
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
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Try an example</p>
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

        {/* Loading skeleton */}
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
            <p className="text-2xl mb-2">🔍</p>
            <p className="text-sm font-medium text-gray-600 mb-1">No exact match found</p>
            <p className="text-xs">Try describing when it happens, what sound it makes, or use one of the quick examples above.</p>
          </div>
        )}

        {/* Result */}
        {result && !loading && (
          <div className="border-t border-gray-100 pt-6 space-y-5">
            <div className="flex items-start gap-3">
              <span className="text-3xl leading-none">{result.icon}</span>
              <div>
                <h3 className="font-bold text-navy text-lg leading-tight">{result.title}</h3>
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border mt-2 ${UC_COLORS[result.uc]}`}>
                  <span className={`w-2 h-2 rounded-full ${UC_DOT[result.uc]}`} />
                  Urgency: {result.urgency}
                </span>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Likely Causes</p>
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

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-1">Recommended Next Step</p>
              <p className="text-sm text-gray-700 leading-relaxed">{result.next}</p>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              {result.time}
            </div>

            <p className="text-xs text-gray-400 border-t border-gray-100 pt-4">
              This is a diagnostic aid, not a professional inspection. Always consult a certified mechanic for a final diagnosis.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
