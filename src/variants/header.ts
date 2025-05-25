import { tv } from "tailwind-variants";

export const headerWrapper = tv({
  base: "flex items-center justify-between p-4 px-6 shadow-sm transition-colors",
  variants: {
    theme: {
      light: "border-b border-gray-300 bg-white text-gray-950",
      dark: "border-b border-gray-800 bg-gray-950 text-gray-200",
    },
  },
});

export const navLink = tv({
  base: "text-sm font-medium transition-colors duration-200",
  variants: {
    theme: {
      light: "text-gray-950",
      dark: "text-gray-200",
    },
    active: {
      true: "underline",
      false: "hover:text-blue-400",
    },
  },
});
