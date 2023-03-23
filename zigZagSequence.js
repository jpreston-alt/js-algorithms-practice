const findZigZagSequence = (arr) => {
  const max = Math.max(...arr);
  const median = Math.floor(arr.length / 2);
  const sortAsc = [...arr.sort((a, b) => a - b)];
  const sortDesc = [...arr.sort((a, b) => b - a)];
  const ascHalf = sortAsc.slice(0, median);
  const descHalf = sortDesc.slice(1, median + 1);
  const resArr = [...ascHalf, max, ...descHalf];
  const resStr = resArr.toString().split(",").join(" ");
  return resStr;
};

const str = [1, 2, 3, 4, 5, 6, 7];
const res = findZigZagSequence(str);
console.log(res);
