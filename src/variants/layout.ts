import { tv } from "tailwind-variants";

export const layoutWrapper = tv({
  base: "flex min-h-screen flex-col transition-colors",
  variants: {
    theme: {
      light: "bg-white text-gray-950",
      dark: "bg-gray-950 text-gray-200",
    },
  },
  defaultVariants: {
    theme: "light",
  },
});
