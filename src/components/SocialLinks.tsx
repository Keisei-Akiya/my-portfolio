import githubIcon from "../assets/github.svg";

export function SocialLinks() {
  return (
    <a
      href="https://github.com/Keisei-Akiya"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 transition-colors hover:text-blue-500"
    >
      <img src={githubIcon} alt="GitHub" className="h-6 w-6" />
    </a>
  );
}
