import { Link, useLocation } from "react-router-dom";
import { headerWrapper, navLink } from "../variants/header";

interface HeaderProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
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
      <button onClick={onToggleTheme}>
        {theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
}
