"use client";

import { useState } from "react";

export default function EmailForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email.";
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setDone(true);
  };

  if (done) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-1">You're on the list!</h3>
        <p className="text-gray-500 text-sm">
          Thanks, <strong>{form.name}</strong>! We'll reach you at <strong>{form.email}</strong> when we launch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-4">
      <div>
        <label className="label">Your Name</label>
        <input
          type="text"
          placeholder="Jane Smith"
          value={form.name}
          onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
          className={`input ${errors.name ? "border-red-400 focus:ring-red-400" : ""}`}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>
      <div>
        <label className="label">Email Address</label>
        <input
          type="email"
          placeholder="jane@example.com"
          value={form.email}
          onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
          className={`input ${errors.email ? "border-red-400 focus:ring-red-400" : ""}`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      <button type="submit" className="btn-orange w-full">
        Get Early Access — It's Free
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
      <p className="text-xs text-center text-gray-400">No spam. Unsubscribe anytime.</p>
    </form>
  );
}
