export function removeDuplicates(nums: number[]): number {
  let isDuplicated = false;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] === nums[j-1]) {
      if (!isDuplicated) {
        isDuplicated = true;
      } else {
        nums.splice(j, 1);
        j--;
      }
    } else {
      isDuplicated = false;
    }
  }
  return nums.length;
};