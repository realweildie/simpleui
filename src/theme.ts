import { concatString } from "./utils/concat";

const animation = {
  easeOutCubic: "80ms cubic-bezier(0.65, 0, 0.35, 1)",
};

const breakpoints = ["544px", "768px", "1012px", "1280px"];

const fonts = {
  normal: concatString([
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Noto Sans",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
  ]),
  mono: concatString([
    "SFMono-Regular",
    "Consolas",
    "Liberation Mono",
    "Menlo",
    "Courier",
    "monospace",
  ]),
};

const fontWeights = {
  light: 300,
  normal: 400,
  semibold: 500,
  bold: 600,
};

const borderWidths = [0, "1px"];

const radii = { zero: "0", sl: "3px", md: "6px", lg: "100px" };

const sizes = {
  small: "544px",
  medium: "768px",
  large: "1012px",
  xlarge: "1280px",
};

const colors = {
  primary: ["#e0b3f5", "#c46fed", "#b242e7"],
  grey: ["#DDD5DD", "#667085", "#101828"],
  text: ["#fff", "#000"],
};

const fontSizes = [
  "12px",
  "14px",
  "16px",
  "20px",
  "24px",
  "32px",
  "40px",
  "48px",
];

const space = [
  "0",
  "4px",
  "8px",
  "16px",
  "24px",
  "32px",
  "40px",
  "48px",
  "64px",
  "80px",
  "96px",
  "112px",
  "128px",
];

export const theme = {
  animation,
  borderWidths,
  breakpoints,
  fonts,
  fontSizes,
  colors,
  fontWeights,
  radii,
  sizes,
  space,
};
