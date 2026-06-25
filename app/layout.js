

import { Cairo } from "next/font/google";
import "./globals.css";
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
});
export const metadata = {
  title: "FITBOX",
  description: "نظام إدارة الصالة الرياضية",
};

export default function RootLayout({ children }) {


  return (
    <html
      lang="en"
      className={`${cairo.variable} font-sans bg-zinc-950 text-white antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
