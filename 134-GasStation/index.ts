export function canCompleteCircuit(gas: number[], cost: number[]): number {
  let start = 0;
  let total = 0;
  let tank = 0;
  for (let i = 0; i < cost.length; i++) {
    tank += gas[i] - cost[i];
    if (tank < 0) {
      start = i + 1;
      total += tank;
      tank = 0;
    }
  }
  total += tank;
  if (total >= 0) {
    return start;
  }
  return -1;
};

const gas = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];

console.log(canCompleteCircuit(gas, cost));
// console.log(gas.length)