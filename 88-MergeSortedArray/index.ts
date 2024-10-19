export function merge (nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1

  while ( k >= 0 ) {
    console.log(i, j, k, nums1, nums2)
    if (nums1[i] > nums2[j] || j < 0) {
      nums1[k] = nums1[i]
      i--
      k--
    } else {
      nums1[k] = nums2[j]
      j--
      k--
    }
  }
}