"use client";
import { useTheme } from "@/context/ThemeContext";
import NavBar from "./main_layouts/nav";
import Footer from "./main_layouts/footer";
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useTheme();
  return (
    <main
      data-theme={theme.themeClass}
      className="w-screen min-h-screen flex flex-col items-center justify-between bg-base-300 overflow-hidden"
    >
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
