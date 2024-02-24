import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Routing",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} bg-slate-200`}
      >
        <div className="mx-auto max-w-5xl text-2xl gap-2 mb-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}