// src/app/layout.tsx
"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider>
      <html lang="en" data-theme={"bumblebee"}>
        <body
          className={`${inter.className} flex items-center flex-col bg-bas-100 min-h-screen`}
        >
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
};

export default RootLayout;
