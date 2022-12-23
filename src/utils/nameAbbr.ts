export const nameAbbr = (names: string) =>
  names
    .split(" ")
    .map((name) => name[0])
    .join("");
