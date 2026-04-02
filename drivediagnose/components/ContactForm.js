"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = "Name is required.";
    if (!form.email.trim())   e.email   = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setDone(true);
  };

  const field = (id, label, placeholder, type = "text") => (
    <div>
      <label className="label">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={form[id]}
        onChange={(e) => { setForm({ ...form, [id]: e.target.value }); setErrors({ ...errors, [id]: "" }); }}
        className={`input ${errors[id] ? "border-red-400 focus:ring-red-400" : ""}`}
      />
      {errors[id] && <p className="text-red-500 text-xs mt-1">{errors[id]}</p>}
    </div>
  );

  if (done) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">Message Sent!</h3>
        <p className="text-gray-500 text-sm">
          Thanks, <strong>{form.name}</strong>. We'll reply to <strong>{form.email}</strong> within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {field("name",  "Your Name *",     "Jane Smith")}
        {field("email", "Email Address *",  "jane@example.com", "email")}
      </div>
      <div>
        <label className="label">Subject <span className="text-gray-400 font-normal">(optional)</span></label>
        <input
          type="text"
          placeholder="What's this about?"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="input"
        />
      </div>
      <div>
        <label className="label">Message *</label>
        <textarea
          rows={5}
          placeholder="Tell us what's on your mind..."
          value={form.message}
          onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: "" }); }}
          className={`input resize-none ${errors.message ? "border-red-400 focus:ring-red-400" : ""}`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>
      <button type="submit" className="btn-orange w-full">
        Send Message
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </button>
      <p className="text-xs text-center text-gray-400">We reply within one business day. No spam.</p>
    </form>
  );
}
