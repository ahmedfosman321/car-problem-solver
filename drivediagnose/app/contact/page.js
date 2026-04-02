import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — DriveDiagnose",
  description: "Get in touch with the DriveDiagnose team.",
};

const INFO = [
  {
    emoji: "📧",
    label: "Email",
    value: "hello@drivediagnose.com",
    sub: "We respond within 24 hours",
  },
  {
    emoji: "📍",
    label: "Location",
    value: "Available Nationwide",
    sub: "Fully online service",
  },
  {
    emoji: "🕐",
    label: "Response Time",
    value: "Under 24 Hours",
    sub: "Monday – Friday",
  },
];

const FAQS = [
  {
    q: "Is DriveDiagnose free to use?",
    a: "The demo and basic diagnostic tool are completely free. We're working on a premium tier for more detailed reports and mechanic recommendations.",
  },
  {
    q: "Do I need to create an account?",
    a: "No. The symptom checker works without any sign-up or account. Just describe your problem and get results instantly.",
  },
  {
    q: "Can DriveDiagnose replace a mechanic?",
    a: "No — and we're upfront about that. We help you understand what might be going on so you can have a more informed conversation with a mechanic. A professional inspection is always the final word.",
  },
  {
    q: "How accurate are the diagnoses?",
    a: "Our tool surfaces the most likely causes based on common symptom patterns. Results are a useful starting point, but every car is different. Always verify with a professional.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-navy text-white py-20">
        <div className="container-md">
          <div className="max-w-xl">
            <p className="tag mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              We'd love to{" "}
              <span className="text-brand">hear from you.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Have a question, a car problem, or feedback about DriveDiagnose? Send us a message — we read every one.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ──────────────────────────────────── */}
      <section className="py-20">
        <div className="container-md">
          <div className="grid md:grid-cols-5 gap-12 items-start">

            {/* Left — info */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-navy mb-2">Contact Information</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Whether you have a question, want to report a bug, or just want to say hi — we're here.
                </p>
              </div>

              <div className="space-y-5">
                {INFO.map(({ emoji, label, value, sub }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0 text-xl">
                      {emoji}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">{label}</p>
                      <p className="font-semibold text-navy text-sm">{value}</p>
                      <p className="text-gray-400 text-xs">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5">
                <p className="text-sm font-semibold text-navy mb-1">Not sure if we can help?</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Send us your car issue anyway. We love hearing from drivers and will do our best to point you in the right direction.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="md:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-navy mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16">
        <div className="container-md">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-navy mb-8 text-center">Common Questions</h2>
            <div className="space-y-4">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                  <h3 className="font-semibold text-navy text-sm mb-2">{q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
