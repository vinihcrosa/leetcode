function removeDuplicates(nums: number[]): number {
  let i = 0
  for (; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
          nums.splice(j, 1)
          j--
      }
      }
  }
  return i + 1
};