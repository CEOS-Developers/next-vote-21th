import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VoteDream",
  description: "Vote Page from DearDream team",
  authors: [{ name: "Yeongseo Kim, Juhee Lee" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const layout =
    "text-gray900 mx-auto h-screen w-screen shadow-[0_0_8px_#9aa6b230]";
  return (
    <html lang="en">
      <body
        className={`${layout} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-full overflow-auto bg-[#F6F8FA]">{children}</div>
      </body>
    </html>
  );
}
