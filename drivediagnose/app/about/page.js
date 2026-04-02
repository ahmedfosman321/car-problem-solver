import Link from "next/link";

export const metadata = {
  title: "About — DriveDiagnose",
  description: "Learn about the DriveDiagnose mission and the team behind it.",
};

const VALUES = [
  { emoji: "🛡️", title: "Honest & Accurate",  desc: "We only surface plausible causes — not a scare list of every possible issue." },
  { emoji: "👥", title: "Built for Everyone", desc: "Designed for people who don't know cars, not enthusiasts who already do." },
  { emoji: "⚡", title: "Fast by Design",     desc: "No forms to fill out. No account required. Answers in seconds." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="bg-navy text-white py-20">
        <div className="container-md">
          <div className="max-w-2xl">
            <p className="tag mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Every driver deserves a{" "}
              <span className="text-brand">straight answer.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Car trouble is stressful enough. You shouldn't have to spend an hour Googling symptoms or pay $100 just to learn what the problem might be. That's why we built DriveDiagnose.
            </p>
          </div>
        </div>
      </section>

      {/* ── MISSION ─────────────────────────────────────── */}
      <section className="py-20">
        <div className="container-md">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="tag mb-3">Our Mission</p>
              <h2 className="text-3xl font-extrabold text-navy mb-5">
                Giving drivers the knowledge they need — without the guesswork.
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Most people aren't mechanics. When something goes wrong with their car, they're stuck choosing between stressing out searching online, or driving straight to a shop and hoping they aren't overcharged.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                DriveDiagnose closes that gap. Describe your symptom in plain English and get a fast, honest read of what's likely going on — the probable causes, how urgent it is, and what to do next.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                We don't replace a mechanic. We help you walk into that conversation prepared.
              </p>
            </div>

            {/* Photo 1 — drop your photo at public/images/me1.jpg */}
            <div className="relative rounded-2xl overflow-hidden aspect-square max-w-sm mx-auto w-full bg-navy2">
              <img
                src="/images/me1.jpg"
                alt="Founder"
                className="w-full h-full object-cover"
              />
              {/* Placeholder overlay shown until photo is added */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/30 bg-navy2">
                <svg className="w-16 h-16 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                <span className="text-xs">Add me1.jpg to /public/images/</span>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/95 rounded-xl px-4 py-2 shadow z-10">
                <p className="text-navy font-semibold text-sm">Founder & Builder</p>
                <p className="text-gray-400 text-xs">DriveDiagnose</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER STORY ───────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="container-md">
          <div className="max-w-3xl mx-auto">
            <p className="tag mb-3 text-center">The Story</p>
            <h2 className="text-3xl font-extrabold text-navy mb-8 text-center">Why I Built This</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">

              {/* Headshot — drop your photo at public/images/me2.jpg */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-navy2 flex-shrink-0 relative">
                  <img src="/images/me2.jpg" alt="Founder headshot" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-navy2 flex items-center justify-center">
                    <svg className="w-7 h-7 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-navy">The Founder</p>
                  <p className="text-gray-400 text-sm">DriveDiagnose</p>
                </div>
              </div>

              <blockquote className="border-l-4 border-brand pl-5 space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  "A few years ago my car started making a low grinding noise every time I braked. I had no idea if I needed to pull over immediately or if I could wait until the weekend.
                </p>
                <p>
                  Two hours of Reddit threads and YouTube videos later, I was more confused than when I started. I finally took it to a shop and paid $85 just to learn it was a brake pad sensor — something I could have figured out in minutes with the right tool.
                </p>
                <p>
                  That experience is why DriveDiagnose exists. Every driver deserves a fast, honest answer — not hours of searching or a $100 diagnostic fee just to get started."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── PITCH VIDEO ─────────────────────────────────── */}
      <section className="py-20">
        <div className="container-md">
          <div className="text-center mb-10">
            <p className="tag mb-2">Watch the Pitch</p>
            <h2 className="text-3xl font-extrabold text-navy mb-2">See DriveDiagnose in 30 Seconds</h2>
            <p className="text-gray-400 text-sm max-w-sm mx-auto">A quick look at who we are, what we do, and why it matters.</p>
          </div>

          {/*
            YouTube embed — replace the src below with your actual video.
            Format: https://www.youtube.com/embed/YOUR_VIDEO_ID
          */}
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="DriveDiagnose Pitch Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-center text-xs text-gray-400 mt-3">
            Replace the YouTube URL in app/about/page.js with your own video link.
          </p>
        </div>
      </section>

      {/* ── VALUES ──────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="container-md">
          <div className="text-center mb-10">
            <p className="tag mb-2">What We Stand For</p>
            <h2 className="text-3xl font-extrabold text-navy">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {VALUES.map(({ emoji, title, desc }) => (
              <div key={title} className="card text-center">
                <span className="text-3xl mb-3 block">{emoji}</span>
                <h3 className="font-bold text-navy mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ─────────────────────────────────── */}
      <section className="py-20">
        <div className="container-md">
          <div className="text-center mb-10">
            <p className="tag mb-2">Behind the Build</p>
            <h2 className="text-3xl font-extrabold text-navy">A Little More About Me</h2>
          </div>
          {/* Drop your photos at public/images/me1.jpg, me2.jpg, me3.jpg */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              ["/images/me1.jpg", "Working on the product"],
              ["/images/me2.jpg", "Research and testing"],
              ["/images/me3.jpg", "Bringing it to life"],
            ].map(([src, caption], i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <div className="aspect-square bg-navy2 relative flex items-center justify-center">
                  <img src={src} alt={caption} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-navy2 flex flex-col items-center justify-center text-white/25">
                    <svg className="w-10 h-10 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <span className="text-xs">Add your photo</span>
                  </div>
                </div>
                <div className="p-3 bg-white text-center">
                  <p className="text-sm text-gray-500">{caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="bg-brand py-14">
        <div className="container-md text-center text-white">
          <h2 className="text-3xl font-extrabold mb-3">Ready to Try It?</h2>
          <p className="text-white/80 text-sm mb-6 max-w-xs mx-auto">No sign-up. No fees. No jargon.</p>
          <Link href="/how-it-works#demo" className="inline-flex items-center gap-2 bg-white text-brand hover:bg-gray-50 font-bold py-4 px-8 rounded-xl shadow-lg transition-all">
            Try the Demo
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
