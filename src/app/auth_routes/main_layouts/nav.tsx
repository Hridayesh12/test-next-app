"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import Image from "next/image";
import ThemeIcon from "../icons/theme_icon";
import ThemeSelector from "../profile/components/theme_selector";
import Close from "../icons/close";

type Props = {};

const NavBar = () => {
  const router = useRouter();
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const { theme } = useTheme();
  console.log();
  return (
    <div className="relative w-full">
      {isThemeOpen && (
        <>
          <ThemeSelector />
          {/* Close Button */}
          <button
            onClick={() => {
              setIsThemeOpen(false);
            }}
            className="absolute top-2 right-5 cursor-pointer hover:scale-110 transition-all"
          >
            <Close />
          </button>
        </>
      )}
      <nav
        className="navbar  bg-base-100 text-base-content shadow-2xl"
        data-theme={theme.themeClass}
      >
        <div className="flex-1">
          <Link href="/auth_routes" className="btn btn-ghost text-xl text-">
            Webdesk
          </Link>
        </div>

        <div className="flex-none gap-2">
          <button
            className="btn"
            onClick={() => {
              console.log("Clicked");
              setIsThemeOpen(!isThemeOpen);
            }}
          >
            <ThemeIcon />
          </button>
          {usePathname()?.split("/")?.[2] !== "admin" && (
            <Link href="/auth_routes/admin" className="btn">
              Dashboard
            </Link>
          )}

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://p1.hiclipart.com/preview/57/433/160/user-profile-circle-user-account-data-login-symbol-blackandwhite-line-art-png-clipart.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-300  rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  href="/auth_routes/profile/user_profile"
                  className="justify-between text-base-content"
                >
                  Profile
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/auth_routes/profile/theme_settings"
                  className="text-base-content"
                >
                  Settings
                </Link>
              </li> */}
              <li>
                <Link href="/" className="text-base-content">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
