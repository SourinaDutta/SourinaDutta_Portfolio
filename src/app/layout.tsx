import type { Metadata } from "next";
// @ts-expect-error Next.js handles global CSS imports at build time.
import "./globals.css";
export const metadata: Metadata = { title: "Sourina Dutta Oishi | Portfolio", description: "Portfolio of Sourina Dutta Oishi — CSE graduate interested in software development, machine learning and computer vision." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
