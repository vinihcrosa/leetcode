export function maxProfit(prices: number[]): number {
  let max = 0
  let min = prices[0]
  for(let i = 1; i < prices.length; i++){
      if(prices[i] < min) min = prices[i]
      else if(prices[i] - min > max) max = prices[i] - min
  }
  return max
};