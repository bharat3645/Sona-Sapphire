type ClassValue = string | number | false | null | undefined;

export function cx(...values: readonly ClassValue[]): string {
  let out = "";
  for (const v of values) {
    if (!v && v !== 0) continue;
    out += (out ? " " : "") + String(v);
  }
  return out;
}
