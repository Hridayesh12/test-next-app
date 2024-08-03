"use client";
import { useTheme } from "@/context/ThemeContext";
import SideBar, {
  ISideBarButton,
  SideBarLinkComponent,
} from "../main_layouts/sidebar";
import { ReactNode } from "react";
import GlobeIcon from "../icons/globe_icon";

const SideBarComponents = [
  {
    icon: <GlobeIcon />,
    text: "Dashboard",
    link: "/auth_routes/admin",
  },
  {
    icon: <GlobeIcon />,
    text: "Master",
    link: "/auth_routes/admin/master",
  },
  {
    icon: <GlobeIcon />,
    text: "Transactions",
    link: "/auth_routes/admin/transactions",
  },
  {
    icon: <GlobeIcon />,
    text: "Vendor",
    link: "/auth_routes/admin/vendor",
  },
];
export default function SideBarLayout({
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
      <div className="ml-[70px] md:ml-0 h-full min-h-screen md:w-full bg-base-300">
        {children}
      </div>
    </main>
  );
}
