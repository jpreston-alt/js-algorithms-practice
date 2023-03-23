const array = [1, 2, 3, 4];

const reverseArr = (arr) => {
  const revArr = arr.map((el, i) => arr[arr.length - 1 - i]);
  return revArr;
};

const res = reverseArr(array);

const revMatrixCol = (m, colIndex) => {
  const matrixCopy = m.map((arr) => arr.slice());
  for (let i = 0; i < m.length; i++) {
    m[i][colIndex] = matrixCopy[matrixCopy.length - 1 - i][colIndex];
  }
  return m;
};

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

revMatrixCol(matrix, 2);
