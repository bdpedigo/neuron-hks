import { defineEcConfig } from "astro-expressive-code";

export default defineEcConfig({
  styleOverrides: {
    borderRadius: "0.5rem",
    borderWidth: "0",
    codeBackground: ({ theme }) =>
      `var(--color-zinc-${theme.type === "dark" ? "800" : "200"})`,
    frames: {
      shadowColor: "transparent",
    },
  },
  themeCssSelector: (theme) =>
    theme.type === "dark" ? `[data-theme="dark"]` : `[data-theme="light"]`,
});
