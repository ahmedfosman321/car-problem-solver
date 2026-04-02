import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "DriveDiagnose — Know What Your Car Is Trying to Tell You",
  description:
    "Describe your car problem in plain English and get instant diagnostics — likely causes, urgency level, and next steps. Free, no sign-up needed.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-gray-800">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
