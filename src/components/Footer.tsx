import { footerWrapper } from "../variants/footer";

interface FooterProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export function Footer({ theme, onToggleTheme }: FooterProps) {
  return (
    <footer className={footerWrapper({ theme })}>
      <p>
        &copy; {new Date().getFullYear()} Keisei Akiya. All rights reserved.
      </p>
      <button onClick={onToggleTheme}>
        {theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </footer>
  );
}
