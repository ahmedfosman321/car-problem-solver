import Link from "next/link";

export const metadata = {
  title: "About — DriveDiagnose",
  description: "Learn about the DriveDiagnose mission and the team behind it.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy text-white py-20">
        <div className="container-md">
          <div className="max-w-2xl">
            <p className="tag mb-3">About</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Built for people who just want a{" "}
              <span className="text-brand">straight answer.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Car trouble is already stressful. The last thing you need is to spend an hour on forums or drop $100 at a shop just to find out what might be wrong. That gap is exactly why DriveDiagnose exists.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20">
        <div className="container-md">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="tag mb-3">What we do</p>
              <h2 className="text-3xl font-extrabold text-navy mb-5">
                Helping drivers understand their car — without needing to be a mechanic.
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                When something goes wrong with your car, most people have two options: stress out searching the internet, or drive straight to a shop and hope they aren't overcharged for a diagnosis they don't fully understand.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                DriveDiagnose gives you a third option. Describe your symptom in plain English and get a clear breakdown of what's likely going on — probable causes, urgency level, and a recommended next step.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                We don't replace a mechanic. We just help you go into that conversation prepared.
              </p>
            </div>

            {/* Photo 1 — replace /public/images/me1.jpg with your photo */}
            <div className="relative rounded-2xl overflow-hidden aspect-square max-w-sm mx-auto w-full bg-navy2">
              <img
                src="/images/me1.jpg"
                alt="Founder"
                className="w-full h-full object-cover relative z-10"
              />
              <div className="absolute inset-0 bg-navy2 flex flex-col items-center justify-center text-white/20">
                <svg className="w-14 h-14 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                <span className="text-xs">Add me1.jpg to /public/images/</span>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/95 rounded-xl px-4 py-2 shadow z-20">
                <p className="text-navy font-semibold text-sm">Founder</p>
                <p className="text-gray-400 text-xs">DriveDiagnose</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="bg-gray-50 py-20">
        <div className="container-md">
          <div className="max-w-3xl mx-auto">
            <p className="tag mb-3 text-center">The backstory</p>
            <h2 className="text-3xl font-extrabold text-navy mb-8 text-center">Why I built this</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">

              {/* Headshot — replace /public/images/me2.jpg */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-navy2 flex-shrink-0 relative">
                  <img src="/images/me2.jpg" alt="Founder" className="w-full h-full object-cover relative z-10" />
                  <div className="absolute inset-0 bg-navy2 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-navy text-sm">The Founder</p>
                  <p className="text-gray-400 text-xs">DriveDiagnose</p>
                </div>
              </div>

              <blockquote className="border-l-4 border-brand pl-5 space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  "My car started making a grinding noise every time I braked. I had no idea if I needed to pull over immediately or if I could wait until the weekend to deal with it.
                </p>
                <p>
                  I spent two hours going through Reddit threads and YouTube videos. By the end of it I was more confused than when I started. I eventually took it to a shop and paid $85 just to find out it was a brake pad wear indicator — something I probably could have figured out with a five-minute search if I'd known what to look for.
                </p>
                <p>
                  That experience stuck with me. Most people aren't car people, and that's completely fine. But they deserve better than random forum posts and $100 diagnostic fees just to get started. That's what DriveDiagnose is trying to fix."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* PITCH VIDEO */}
      <section className="py-20">
        <div className="container-md">
          <div className="text-center mb-10">
            <p className="tag mb-2">Watch</p>
            <h2 className="text-3xl font-extrabold text-navy mb-2">30-second overview</h2>
            <p className="text-gray-400 text-sm max-w-sm mx-auto">
              A quick look at what DriveDiagnose does and who it's for.
            </p>
          </div>

          {/* Replace the YouTube URL below with your actual video link */}
          {/* Format: https://www.youtube.com/embed/YOUR_VIDEO_ID */}
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="DriveDiagnose Pitch Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-gray-50 py-20">
        <div className="container-md">
          <div className="text-center mb-10">
            <p className="tag mb-2">What matters to us</p>
            <h2 className="text-3xl font-extrabold text-navy">How we approach this</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              {
                title: "Honest over impressive",
                desc: "We'd rather give you three accurate causes than a long list that sounds thorough but isn't useful.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>,
              },
              {
                title: "Designed for non-car people",
                desc: "If you've never popped the hood in your life, this tool is still for you. That's the whole point.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>,
              },
              {
                title: "No unnecessary friction",
                desc: "No account, no form to fill out, no waiting. You type something, you get an answer.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>,
              },
            ].map(({ title, desc, icon }) => (
              <div key={title} className="card">
                <div className="w-10 h-10 rounded-lg bg-orange-50 text-brand flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    {icon}
                  </svg>
                </div>
                <h3 className="font-bold text-navy mb-2 text-sm">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <section className="py-20">
        <div className="container-md">
          <div className="text-center mb-10">
            <p className="tag mb-2">Behind the project</p>
            <h2 className="text-3xl font-extrabold text-navy">A little more about me</h2>
          </div>
          {/* Replace with your own photos in public/images/ */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              ["/images/me1.jpg", "Working on the product"],
              ["/images/me2.jpg", "Research and testing"],
              ["/images/me3.jpg", "Bringing it together"],
            ].map(([src, caption], i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <div className="aspect-square bg-navy2 relative flex items-center justify-center">
                  <img src={src} alt={caption} className="w-full h-full object-cover relative z-10" />
                  <div className="absolute inset-0 bg-navy2 flex flex-col items-center justify-center text-white/20">
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

      {/* CTA */}
      <section className="bg-brand py-14">
        <div className="container-md text-center text-white">
          <h2 className="text-3xl font-extrabold mb-3">Want to see it in action?</h2>
          <p className="text-white/80 text-sm mb-6 max-w-xs mx-auto">No account needed. Just type your symptom and go.</p>
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
