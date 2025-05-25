import { Outlet } from "react-router-dom";
import { layoutWrapper } from "../variants/layout";
import { Header } from "../components/Header";
import { useTheme } from "../hooks/useTheme";

export default function Root() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={layoutWrapper({ theme })}>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
