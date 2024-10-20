export function hIndex(citations: number[]): number {
  citations.sort((a, b) => a - b);
  let h = 0;
  for (let i = 0; i < citations.length; i++) {
    h = Math.max(h, Math.min(citations[i], citations.length - i));
  }
  return h;
}