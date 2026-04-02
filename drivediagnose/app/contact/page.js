"use client";

import { useState } from "react";

const CONTACT_INFO = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "hello@drivediagnose.com",
    sub: "We respond within 24 hours",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Location",
    value: "Available Nationwide",
    sub: "Fully online service",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Response Time",
    value: "Under 24 Hours",
    sub: "Monday–Friday",
  },
];

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email.";
    if (!form.message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // Frontend-only: show success message (wire up to a backend or service like Resend/Formspree later)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">Message Sent!</h3>
        <p className="text-gray-500 text-sm">
          Thanks, <strong>{form.name}</strong>. We'll get back to you at{" "}
          <strong>{form.email}</strong> within 24 hours.
        </p>
      </div>
    );
  }

  const field = (id, label, placeholder, type = "text", required = true) => (
    <div>
      <label htmlFor={id} className="form-label">
        {label} {required && <span className="text-brand">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={form[id]}
        onChange={(e) => {
          setForm({ ...form, [id]: e.target.value });
          if (errors[id]) setErrors({ ...errors, [id]: "" });
        }}
        className={`form-input ${errors[id] ? "border-red-400 focus:ring-red-400" : ""}`}
      />
      {errors[id] && <p className="text-red-500 text-xs mt-1">{errors[id]}</p>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {field("name", "Your Name", "Jane Smith")}
        {field("email", "Email Address", "jane@example.com", "email")}
      </div>
      <div>
        <label htmlFor="subject" className="form-label">
          Subject <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          id="subject"
          type="text"
          placeholder="What's this about?"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="form-input"
        />
      </div>
      <div>
        <label htmlFor="message" className="form-label">
          Message <span className="text-brand">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us what's on your mind, or describe your car issue in detail..."
          value={form.message}
          onChange={(e) => {
            setForm({ ...form, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: "" });
          }}
          className={`form-input resize-none ${errors.message ? "border-red-400 focus:ring-red-400" : ""}`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>
      <button type="submit" className="btn-primary w-full">
        Send Message
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </button>
      <p className="text-xs text-gray-400 text-center">
        We typically respond within one business day. No spam, ever.
      </p>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* ─── HERO ───────────────────────────────────────────── */}
      <section className="bg-navy text-white py-20">
        <div className="section-container">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#f97316" }}>
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              We'd love to{" "}
              <span style={{ color: "#f97316" }}>hear from you.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Have a question, a car problem, or feedback about DriveDiagnose? Send us a message — we read every one.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CONTACT SECTION ─────────────────────────────────── */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-5 gap-12 items-start">

            {/* Left: contact info */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-navy mb-3">Contact Information</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Whether you have a question about DriveDiagnose, want to report a bug, or just want to say hi — we're here.
                </p>
              </div>

              <div className="space-y-5">
                {CONTACT_INFO.map(({ icon, label, value, sub }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">{label}</p>
                      <p className="font-semibold text-navy text-sm">{value}</p>
                      <p className="text-gray-400 text-xs">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Encouragement box */}
              <div className="bg-brand/5 border border-brand/20 rounded-2xl p-5">
                <p className="text-sm font-semibold text-navy mb-1">Not sure if we can help?</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Send us your car issue anyway. We love hearing from drivers and will do our best to point you in the right direction.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="md:col-span-3 bg-white rounded-2xl shadow-card border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-navy mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ STRIP ──────────────────────────────────────── */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-navy mb-8 text-center">Common Questions</h2>
            <div className="space-y-4">
              {[
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
                  a: "Our tool surfaces the most likely causes based on common symptom patterns. Results are useful as a starting point, but every car is different. Always verify with a professional.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                  <h3 className="font-semibold text-navy mb-2 text-sm">{q}</h3>
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
