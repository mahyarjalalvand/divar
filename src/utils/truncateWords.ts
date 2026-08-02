export const truncateWords = (text: string | undefined, maxWords: number): string => {
  if (!text) return "";
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text;
  const finalyText = words.slice(0, maxWords).join(" ") + "...";
  return finalyText;
};
