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
      <span>My Portfolio</span>
      <nav>
        <Link
          to={"/"}
          className={navLink({ active: location.pathname === "/" })}
        >
          Home
        </Link>{" "}
        |{" "}
        <Link
          to={"/about"}
          className={navLink({ active: location.pathname === "/about" })}
        >
          About
        </Link>
      </nav>
      <SocialLinks />
    </header>
  );
}
