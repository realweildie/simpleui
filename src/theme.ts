import { concatString } from "./utils/concat";

const animation = {
  easeOutCubic: "0.1s cubic-bezier(0.33, 1, 0.68, 1)",
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
  primary: ["#d6bbfb", "#9E77ED", "#53389E"],
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
