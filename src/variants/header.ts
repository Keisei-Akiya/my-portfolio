import { tv } from "tailwind-variants";

export const headerWrapper = tv({
  base: "flex items-center justify-between p-4 px-6 shadow-sm transition-colors",
  variants: {
    theme: {
      light: "bg-white text-gray-900",
      dark: "bg-gray-900 text-white",
    },
  },
});

export const navLink = tv({
  base: "text-sm font-medium transition-colors duration-200",
  variants: {
    active: {
      true: "text-blue-600 underline",
      false: "text-gray-600 hover:text-blue-400",
    },
  },
});
