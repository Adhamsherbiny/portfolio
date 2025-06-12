"use client";
// src/app/MainLayout.tsx
import Footer from "../components/common/Footer";
import Nav from "../components/common/Nav";
import "../lib/i18n";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="main-layout">
      <Nav />
      <div className="pages">{children}</div>
      <Footer />
    </div>
  );
}
