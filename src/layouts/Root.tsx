import { Outlet, Link, useLocation } from "react-router-dom";
import { navLink } from "../variants/navLink";
import { useEffect, useState } from "react";
import { layoutWrapper } from "../variants/layout";

export default function Root() {
  const location = useLocation();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", next === "dark");
    setTheme(next);
  }

  useEffect(() => {
    // Set initial theme based on system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const finalTheme = savedTheme ?? (prefersDark ? "dark" : "light");
    setTheme(finalTheme);
    document.documentElement.classList.toggle("dark", finalTheme === "dark");
  }, []);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={layoutWrapper({ theme })}>
      <header>
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
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
