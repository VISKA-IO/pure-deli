const dateFormatter = new Intl.DateTimeFormat("is-IS", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export function formatDate(date: string | Date): string {
  return dateFormatter.format(typeof date === "string" ? new Date(date) : date);
}
