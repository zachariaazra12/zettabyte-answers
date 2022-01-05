// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  const half = Math.floor(input.length / 2);
  num = [...input].sort((a, b) => a - b) ;
  return input.length % 2 != 0 ? num[half] : (num[half - 1] + num[half]) / 2;
  }

console.log(result(input));
