// flat === 1
// trenches === 0
// obstacles === 9
const lot = [
  [1, 0, 0],
  [1, 0, 0],
  [1, 9, 1],
];

function distanceTraversed(lot) {
  let row = 0;
  let col = 0;
  let moves = 1;
  let obstacleReached = false;

  const move = () => {
    const arr = [
      {
        name: "row",
        value: row + 1 < lot.length ? lot[row + 1][col] : -1,
      },
      { name: "col", value: lot[row][col + 1] },
    ];

    const obstacle = arr.find((obj) => obj.value === 9);

    if (obstacle) {
      console.log({ moves });
      obstacleReached = true;
    } else {
      const validMoves = arr.filter((obj) => obj.value === 1);
      if (validMoves[0]) {
        if (validMoves[0].name === "row") {
          row += 1;
        } else {
          col += 1;
        }
        moves++;
        move();
      }
    }
  };

  if (obstacleReached === true) {
    return moves;
  } else {
    move();
  }
}

distanceTraversed(lot);
