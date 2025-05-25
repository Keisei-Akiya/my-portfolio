import { Link, useLocation } from "react-router-dom";
import { headerWrapper, navLink } from "../variants/header";
import { SocialLinks } from "./SocialLinks";

interface HeaderProps {
  theme: "light" | "dark";
}

export function Header({ theme }: HeaderProps) {
  const location = useLocation();

  return (
    <header className={headerWrapper({ theme })}>
      <Link to={"/"} className="flex-shrink-0 text-lg font-bold">
        My Portfolio
      </Link>
      <div className="ml-auto flex items-center gap-4">
        <nav className="ml-auto flex gap-4">
          <Link
            to={"/"}
            className={navLink({ active: location.pathname === "/" })}
          >
            Home
          </Link>
          <span>|</span>
          <Link
            to={"/about"}
            className={navLink({ active: location.pathname === "/about" })}
          >
            About
          </Link>
        </nav>
        <SocialLinks />
      </div>
    </header>
  );
}
