import { tv } from "tailwind-variants";

export const footerWrapper = tv({
  base: "mt-12 flex items-center justify-between border-t p-4 px-6 shadow-sm transition-colors",
  variants: {
    theme: {
      light: "border-gray-300 bg-white text-gray-950",
      dark: "border-gray-800 bg-gray-950 text-gray-200",
    },
  },
});
