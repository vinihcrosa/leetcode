export function maxProfit(prices: number[]): number {
  let acc = 0, left = 0, right = 1, profit = 0

  while(right < prices.length) {
      if(prices[left] > prices[right] || (prices[right] - prices[left]) < acc) {
          profit += acc
          acc = 0
          left = right
          right ++
      } else {
          acc = prices[right] - prices[left]
          right ++
      }
  }
  profit += acc
  return profit
};