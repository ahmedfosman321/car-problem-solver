import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "DriveDiagnose — Know What Your Car Is Trying to Tell You",
  description:
    "Get plain-language car diagnostics instantly. Describe your symptom, understand likely causes, and know exactly what to do next — before you call a mechanic.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Global navigation */}
        <Navbar />

        {/* Page content */}
        <main className="flex-1">{children}</main>

        {/* Global footer */}
        <Footer />
      </body>
    </html>
  );
}
