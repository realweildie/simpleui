export const concatString = (lines: string[]) => {
  return lines
    .map((line) => (line.includes(" ") ? `"${line}"` : line))
    .join(", ");
};
