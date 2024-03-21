import {
  createTheme,
  rem,
  MantineSize,
  DEFAULT_THEME,
} from "@mantine/core";

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
  primaryColor: "violet",
  fontSizes,
  fontFamily: fontFamily,

  colors: {

  },

  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },
  other: {
    zIndex,
    containerSize: rem(1800),
    // namedColors: {
    //   light: {
    //     app: {
    //       background: monoColors[100],
    //       highlight: monoColors[90],
    //     },
    //     element: {
    //       background: monoColors[40],
    //       backgroundInverse: monoColors[10],
    //       backgroundMenu: monoColors[70],
    //       border: monoColors[50],
    //     },
    //     typography: {
    //       body: monoColors[10],
    //       footer: monoColors[80],
    //       disabled: monoColors[70],
    //       inactive: monoColors[80],
    //       active: monoColors[10],
    //       label: monoColors[70],
    //     },
    //   },
    //   dark: {
    //       app: {
    //         background: monoColors[100],
    //         highlight: monoColors[90],
    //       },
    //       element: {
    //         background: monoColors[40],
    //         backgroundInverse: monoColors[10],
    //         backgroundMenu: monoColors[70],
    //         border: monoColors[50],
    //       },
    //       typography: {
    //         body: monoColors[10],
    //         footer: monoColors[80],
    //         disabled: monoColors[70],
    //         inactive: monoColors[80],
    //         active: monoColors[10],
    //         label: monoColors[70],
    //       },
    //     }
    // },
  },
  headings: {
    // fontFamily: 'Roboto, sans-serif',
    sizes: {
      h1: { fontSize: rem(2.5) },
      h2: { fontSize: rem(2) },
      h3: { fontSize: rem(1.5) },
      h4: { fontSize: rem(1.25) },
      h5: { fontSize: rem(1) },
      h6: { fontSize: rem(0.85) },
    },
  },
});
