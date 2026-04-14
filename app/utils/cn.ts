type ClassValue = string | number | boolean | null | undefined | ClassValue[] | Record<string, unknown>;

export function cn(...inputs: ClassValue[]): string {
  let result = "";

  for (const input of inputs) {
    if (!input) continue;

    if (typeof input === "string" || typeof input === "number") {
      result += (result ? " " : "") + input;
    } else if (Array.isArray(input)) {
      const nested = cn(...input);
      if (nested) result += (result ? " " : "") + nested;
    } else {
      for (const key in input) {
        if (input[key]) result += (result ? " " : "") + key;
      }
    }
  }

  return result;
}
