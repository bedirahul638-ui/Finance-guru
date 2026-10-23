import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "FinanceIQ - Smart Financial Insights",
  description: "Personal Finance, Investment Tips, Mutual Funds aur Passive Income ki complete details.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <body className="bg-slate-50 text-slate-900 font-sans min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold tracking-wide text-emerald-400">
              Finance<span className="text-white">IQ</span>
            </Link>
            <nav className="space-x-6 text-sm font-medium">
              <Link href="/" className="hover:text-emerald-400">Home</Link>
              <Link href="/about" className="hover:text-emerald-400">About</Link>
              <Link href="/disclaimer" className="hover:text-emerald-400">Disclaimer</Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow max-w-6xl mx-auto px-4 py-8 w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-6 text-center text-sm">
          <p>© {new Date().getFullYear()} FinanceIQ. All rights reserved.</p>
          <p className="mt-1 text-xs text-slate-500">
            Disclaimer: Content published here is for educational purposes only. Not financial advice.
          </p>
        </footer>
      </body>
    </html>
  );
}
