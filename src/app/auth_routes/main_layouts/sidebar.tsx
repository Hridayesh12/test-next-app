import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Left from "../icons/left";
import RightIcon from "../icons/right";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface ISideBarButton {
  link: string;
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
}
const SideBarContext = createContext({});
const SideBar = ({ children }: { children: ReactNode }) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside
      className={`min-h-svh absolute top-0 bottom-0 z-10 md:static flex flex-col bg-base-100 border-r-neutral-content shadow-2xl`}
    >
      <div className="p-4 pb-2 flex md:hidden justify-end items-center">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex md:hidden text-base-content"
        >
          {expanded ? <Left /> : <RightIcon />}
        </button>
      </div>
      <SideBarContext.Provider value={{ expanded, setExpanded }}>
        <ul className="flex-1 h-full px-3 ">{children}</ul>
      </SideBarContext.Provider>
    </aside>
  );
};

export function SideBarLinkComponent({
  link,
  icon,
  text,
  alert,
  active,
}: ISideBarButton) {
  const pathname = usePathname();
  const [currentLink, setCurrentLink] = useState("");
  const [navLink, setNavLink] = useState("");
  useEffect(() => {
    setCurrentLink(pathname?.split("/")?.[pathname.split("/").length - 1]);
    setNavLink(link?.split("/")?.[link.split("/").length - 1]);
  });
  const { expanded, setExpanded }: any = useContext(SideBarContext);
  return (
    <Link
      href={link}
      onClick={() => {
        setExpanded(false);
      }}
      className={`
    relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer ${
      navLink === currentLink
        ? "bg-primary text-base-100"
        : "text-base-content hover:bg-primary hover:text-base-100"
    } `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-36 ml-3" : "w-0 md:w-36 md:ml-3"
        }`}
      >
        {text}
      </span>
    </Link>
  );
}

export default SideBar;
