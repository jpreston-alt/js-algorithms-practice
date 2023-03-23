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
