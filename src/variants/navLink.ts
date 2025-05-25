import { tv } from "tailwind-variants";

export const navLink = tv({
  base: "text-sm font-medium transition-colors duration-200",
  variants: {
    active: {
      true: "text-blue-600 underline",
      false: "text-gray-600 hover:text-blue-400",
    },
  },
});
