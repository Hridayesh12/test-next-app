"use client";
import { useTheme } from "@/context/ThemeContext";
import SideBar, {
  ISideBarButton,
  SideBarLinkComponent,
} from "../main_layouts/sidebar";
import { ReactNode } from "react";
import ProfileICon from "../icons/profile_icon";
import ThemeIcon from "../icons/theme_icon";

const SideBarComponents = [
  {
    icon: <ProfileICon />,
    text: "Profile",
    link: "/auth_routes/profile/user_profile",
  },
];
export default function ProfileLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { theme } = useTheme();
  return (
    <main
      data-theme={theme.themeClass}
      className="w-screen flex-1 md:flex relative md:static h-fit"
    >
      <SideBar>
        {SideBarComponents.map((menu: ISideBarButton, index: number) => (
          <SideBarLinkComponent key={index} {...menu} />
        ))}
      </SideBar>
      <div className="ml-auto w-[85vw] md:w-full bg-base-300">{children}</div>
    </main>
  );
}
