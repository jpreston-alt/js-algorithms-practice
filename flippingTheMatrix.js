// 107 54 128 15
// 12 75 110 138
// 100 96 34 85
// 75 15 28 112
// output 488

function flippingMatrix(matrix) {
  const reverseColIndex = 3;
  const reverseRowIndex = 1;
  const matrixCopy = matrix.map((row) => row.slice());
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][reverseColIndex] =
      matrixCopy[matrix.length - 1 - i][reverseColIndex];
  }
  const revRow = [];
  for (let i = matrix[reverseRowIndex].length - 1; i >= 0; i--) {
    revRow.push(matrix[reverseRowIndex][i]);
  }

  matrix[reverseRowIndex] = revRow;

  const sum = matrix[0][0] + matrix[0][1] + matrix[1][0] + matrix[1][1];
  return sum;
}

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
