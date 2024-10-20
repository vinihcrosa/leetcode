export function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const output = new Array(n).fill(1);
  const normalizeZero = (num: number) => (num === 0 ? 0 : num);

  let left = 1;
  for (let i = 0; i < n; i++) {
    output[i] *= left;
    left *= nums[i];
  }

  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= right;
    output[i] = normalizeZero(output[i]);
    right *= nums[i];
  }

  return output;
}