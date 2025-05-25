import { tv } from "tailwind-variants";

export const layoutWrapper = tv({
  base: "min-h-screen transition-colors",
  variants: {
    theme: {
      light: "bg-white text-gray-900",
      dark: "bg-gray-900 text-white",
    },
  },
  defaultVariants: {
    theme: "light",
  },
});
