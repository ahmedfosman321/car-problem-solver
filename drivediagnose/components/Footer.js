import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-md py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M11 4a7 7 0 016.93 8H21l-3 3-3-3h1.93A5 5 0 1011 9v-.01A7 7 0 0111 4z"/>
                </svg>
              </div>
              <span className="font-extrabold text-lg">
                Drive<span className="text-brand">Diagnose</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Plain-language car diagnostics for everyday drivers. Know what's wrong before you call a mechanic.
            </p>
            <p className="mt-4 text-brand text-sm font-medium italic">
              "Know what your car is trying to tell you."
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Pages</h4>
            <ul className="space-y-2.5">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/how-it-works", "How It Works"],
                ["/contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                hello@drivediagnose.com
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                Available nationwide
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} DriveDiagnose. All rights reserved.</p>
          <p>Built for drivers who deserve straight answers.</p>
        </div>
      </div>
    </footer>
  );
}
