import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — DriveDiagnose",
  description: "Get in touch with the DriveDiagnose team.",
};

const FAQS = [
  {
    q: "Is DriveDiagnose free to use?",
    a: "Yes — the symptom checker and basic diagnostics are completely free. We're working on a more detailed paid version, but the core tool will always be free.",
  },
  {
    q: "Do I need to make an account?",
    a: "No. Just open it, type your symptom, and get a result. No sign-up, no email required.",
  },
  {
    q: "Is this a replacement for a mechanic?",
    a: "No, and we want to be upfront about that. This tool helps you understand what might be going on so you can make more informed decisions — not skip the mechanic altogether.",
  },
  {
    q: "How accurate are the results?",
    a: "The results reflect the most common causes for a given symptom. They're a useful starting point, not a definitive diagnosis. Your specific car and situation always matter.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy text-white py-20">
        <div className="container-md">
          <div className="max-w-xl">
            <p className="tag mb-3">Contact</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Have a question?{" "}
              <span className="text-brand">Reach out.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether it's feedback, a question about a car issue, or just a hi — we actually read these messages.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20">
        <div className="container-md">
          <div className="grid md:grid-cols-5 gap-12 items-start">

            {/* Left */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-extrabold text-navy mb-2">Get in touch</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We're a small team and we respond to every message. If you're not sure whether we can help, send it anyway.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    label: "Email",
                    value: "hello@drivediagnose.com",
                    sub: "We respond within 24 hours",
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>,
                  },
                  {
                    label: "Location",
                    value: "Fully online",
                    sub: "Available nationwide",
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>,
                  },
                  {
                    label: "Response time",
                    value: "Under 24 hours",
                    sub: "Monday – Friday",
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>,
                  },
                ].map(({ label, value, sub, icon }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        {icon}
                      </svg>
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
                <p className="text-sm font-semibold text-navy mb-1">Not sure if this is the right place?</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Send it anyway. If we can't help directly, we'll point you somewhere that can.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="md:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-lg font-bold text-navy mb-6">Send us a message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="container-md">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-navy mb-8 text-center">Common questions</h2>
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
