"use client";

import Link from "next/link";

// Team/founder values
const VALUES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Honest and Accurate",
    desc: "We only surface what's plausible — not a scare list of every possible issue.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Built for Everyone",
    desc: "Designed for people who don't know cars, not car enthusiasts who already do.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast by Design",
    desc: "No forms to fill out. No account required. Answers in seconds.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── PAGE HERO ──────────────────────────────────────── */}
      <section className="bg-navy text-white py-20">
        <div className="section-container">
          <div className="max-w-2xl">
            <p className="section-tag mb-3" style={{ color: "#f97316" }}>About Us</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              We believe every driver deserves a{" "}
              <span style={{ color: "#f97316" }}>straight answer.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Car trouble is stressful enough. You shouldn't have to Google mystery symptoms for an hour or pay $100 just to learn what the problem might be. That's why we built DriveDiagnose.
            </p>
          </div>
        </div>
      </section>

      {/* ─── MISSION ────────────────────────────────────────── */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-tag mb-3">Our Mission</p>
              <h2 className="text-3xl font-extrabold text-navy mb-5">
                Giving drivers the knowledge they need — without the guesswork.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most people aren't mechanics. When something goes wrong with their car, they're left with a choice: stress out searching online, or drive straight to a shop and hope they're not overcharged.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                DriveDiagnose was built to close that gap. By describing your symptom in plain English, you get a fast, honest read of what's likely going on — the probable causes, how urgent it is, and what steps to take.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We don't replace a mechanic. We help you walk into that conversation prepared, so you can make better decisions about your car and your money.
              </p>
            </div>

            {/* Photo 1 — replace src with /images/me1.jpg once you add your photo */}
            <div className="relative rounded-2xl overflow-hidden aspect-square max-w-sm mx-auto w-full bg-gradient-to-br from-navy-light to-navy flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/me1.jpg"
                alt="Founder photo"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              {/* Placeholder shown when no image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/40 pointer-events-none">
                <svg className="w-16 h-16 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-xs">Replace with me1.jpg</span>
              </div>
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-xl px-4 py-2 shadow z-10">
                <p className="text-navy font-semibold text-sm">Founder & Builder</p>
                <p className="text-gray-400 text-xs">DriveDiagnose</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOUNDER STORY ──────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <p className="section-tag mb-3 text-center">The Story</p>
            <h2 className="text-3xl font-extrabold text-navy mb-8 text-center">
              Why I Built This
            </h2>
            <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-8 md:p-10">
              <div className="flex gap-4 items-start mb-6">
                {/* Replace with /images/me2.jpg — your headshot photo */}
                <div className="flex-shrink-0 relative w-16 h-16 rounded-full overflow-hidden bg-navy flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/me2.jpg" alt="Founder headshot" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                  <svg className="w-7 h-7 text-white/40 absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-navy text-base">The Founder</p>
                  <p className="text-gray-400 text-sm">DriveDiagnose</p>
                </div>
              </div>

              <blockquote className="text-gray-700 text-base leading-relaxed space-y-4 border-l-4 border-brand pl-5">
                <p>
                  "A few years ago, my car started making a sound I'd never heard before — this dull, low grinding every time I slowed down. I had no idea if I needed to pull over immediately or if I could wait until the weekend.
                </p>
                <p>
                  I spent two hours going down Reddit threads and YouTube videos, and by the end I was more confused than when I started. I eventually took it to a shop and paid $85 just to find out it was a brake pad sensor — something I could have figured out in minutes with the right tool.
                </p>
                <p>
                  That experience is why DriveDiagnose exists. Every driver deserves a fast, honest answer — not hours of searching or a $100 diagnostic fee just to get started."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PITCH VIDEO ────────────────────────────────────── */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-10">
            <p className="section-tag mb-2">Watch the Pitch</p>
            <h2 className="text-3xl font-extrabold text-navy mb-3">
              See DriveDiagnose in 30 Seconds
            </h2>
            <p className="text-gray-500 max-w-md mx-auto text-sm">
              A quick overview of who we are, what we do, and why it matters.
            </p>
          </div>

          {/*
            YouTube embed placeholder.
            Replace the src URL with your actual YouTube video embed URL.
            Format: https://www.youtube.com/embed/YOUR_VIDEO_ID
          */}
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-video bg-navy flex items-center justify-center">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="DriveDiagnose Pitch Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-center text-xs text-gray-400 mt-3">
            Replace the YouTube URL above with your own 30-second pitch video.
          </p>
        </div>
      </section>

      {/* ─── VALUES ─────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="section-tag mb-2">What We Stand For</p>
            <h2 className="text-3xl font-extrabold text-navy">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {VALUES.map(({ icon, title, desc }) => (
              <div key={title} className="card text-center">
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mx-auto mb-4">
                  {icon}
                </div>
                <h3 className="font-bold text-navy mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM PHOTO STRIP ───────────────────────────────── */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-10">
            <p className="section-tag mb-2">Behind the Build</p>
            <h2 className="text-3xl font-extrabold text-navy">A Little More About Me</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Replace me1.jpg, me2.jpg, me3.jpg with your actual photos in public/images/ */}
            {[
              { src: "/images/me1.jpg", caption: "Working on the product" },
              { src: "/images/me2.jpg", caption: "Research and testing" },
              { src: "/images/me3.jpg", caption: "Bringing it to life" },
            ].map(({ src, caption }, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-card border border-gray-100 group">
                <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300 pointer-events-none">
                    <svg className="w-12 h-12 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs">Add your photo</span>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-500 text-center">{caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────── */}
      <section className="bg-brand py-16">
        <div className="section-container text-center text-white">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Try It?</h2>
          <p className="text-white/80 mb-8 max-w-sm mx-auto">
            See the tool in action — no sign-up, no fees, no jargon.
          </p>
          <Link
            href="/how-it-works#demo"
            className="inline-flex items-center gap-2 bg-white text-brand hover:bg-gray-50 font-bold py-4 px-8 rounded-xl shadow-lg transition-all"
          >
            Try the Demo
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
