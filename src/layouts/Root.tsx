import { Outlet } from "react-router-dom";
import { layoutWrapper } from "../variants/layout";
import { Header } from "../components/Header";
import { useTheme } from "../hooks/useTheme";
import { Footer } from "../components/Footer";

export default function Root() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={layoutWrapper({ theme })}>
      <Header theme={theme} />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      <Footer theme={theme} onToggleTheme={toggleTheme} />
    </div>
  );
}
