/** "Dr. Sarah Jenkins" → "SJ" */
export function getInitials(fullName: string): string {
  const nameWithoutTitle = fullName.replace(/^Dr\.\s*/, "");
  const words = nameWithoutTitle.split(" ");
  const firstLetters = words.map((word) => word.charAt(0).toUpperCase());

  return firstLetters.join("").slice(0, 2);
}
