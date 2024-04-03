import { createTheme, rem, MantineSize, DEFAULT_THEME } from "@mantine/core";

export type FontSize = MantineSize | "xxl" | "xxs";
export type FontSizes = Record<FontSize, string>;
export type BreakpointLabels = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type Breakpoints = Record<BreakpointLabels, number>;

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
export type Color = RGB | RGBA | HEX | "black" | "white" | "transparent";

const primaryFontFamily = ["Open SansVariable", "Open Sans", "Open_Sans"];
const backupFontFamily = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Helvetica",
  "Arial",
  "sans-serif",
  "Apple Color Emoji",
  "Segoe UI Emoji",
];
const fontFamily = [...primaryFontFamily, ...backupFontFamily].join(",");

// 40px 2.5rem xxl
// 32px 2rem xl
// 24px 1.5rem lg
// 20px 1.25rem md
// 16px 1rem sm
// 12px 0.75rem xs
// 8px 0.5rem xxs

const fontSizes: FontSizes = {
  xxs: "0.5rem",
  xs: "0.75rem",
  sm: "1rem",
  md: "1.25rem",
  lg: "1.5rem",
  xl: "2rem",
  xxl: "2.5rem",
} as const;

// -- Spacings --
// 80px 5rem xxxxl
// 40px 2.5rem xxxl
// 32px 2rem xxl
// 24px 1.5rem xl
// 20px 1.25rem lg
// 16px 1rem md
// 12px 0.75rem sm
// 8px 0.5rem xs
// 4px 0.25rem xxs

const spacing = {
  xxs: "0.25rem",
  xs: "0.5rem",
  sm: "0.75rem",
  md: "1rem",
  lg: "1.25rem",
  xl: "1.5rem",
  xxl: "2rem",
  xxxl: "2.5rem",
  xxxxl: "5rem",
};

const zIndex = {
  base: 0,
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999,
} as const;

export const theme = createTheme({
  ...DEFAULT_THEME,
  spacing,
  primaryColor: "dark",
  fontSizes,
  fontFamily: fontFamily,

  colors: {
    dark: [
      "#edefff",
      "#dfe1ff",
      "#c5c8ff",
      "#a2a3ff",
      "#857dfc",
      "#735ef6",
      "#6540eb",
      "#5833cf",
      "#462ca7",
      "#3c2b84",
      "#2a1d58",
    ],
    light: [
      "#fff3f9",
      "#ffe3f3",
      "#ffc7e6",
      "#ff99d0",
      "#ff5aaf",
      "#ff2a8f",
      "#fc0668",
      "#dc004e",
      "#b50040",
      "#960538",
      "#5d001d",
    ],
  },

  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },
  other: {
    zIndex,
    containerSize: rem(1600),
  },
  headings: {
    sizes: {
      h1: { fontSize: rem(2.5), fontWeight: "normal" },
      h2: { fontSize: rem(2), fontWeight: "normal" },
      h3: { fontSize: rem(1.5), fontWeight: "normal" },
      h4: { fontSize: rem(1.25), fontWeight: "normal" },
      h5: { fontSize: rem(1), fontWeight: "normal" },
      h6: { fontSize: rem(0.85), fontWeight: "normal" },
    },
  },
});
