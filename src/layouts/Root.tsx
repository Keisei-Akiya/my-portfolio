import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { layoutWrapper } from "../variants/layout";
import { Header } from "../components/Header";

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
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
