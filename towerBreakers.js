// input = (2, 2);
// expectedOutput = 2;

// input = (1, 4);
// expectedOutput = 1;

function towerBreakers(n, m) {
  let towers = new Array(n).fill({ height: m });
  let currentPlayer = 1;
  let endGame = false;

  const toggleTurn = () =>
    currentPlayer === 1 ? (currentPlayer = 2) : (currentPlayer = 1);

  const makeMove = () => {
    const maxHeight = m - 1;
    let moveMade = false;
    for (let i = 0; i < towers.length; i++) {
      if (moveMade) break;
      const towerIndex = i;
      for (let j = m; j >= maxHeight; j--) {
        if (towers[i].height % j === 0) {
          towers = towers.map((t, ti) => {
            if (towerIndex === ti) {
              return { height: towers[i].height / j };
            } else {
              return t;
            }
          });
          moveMade = true;
          break;
        }
      }
    }

    if (moveMade === false) {
      toggleTurn();
      console.log({ currentPlayer });
      endGame = true;
    } else {
      toggleTurn();
      console.log({ currentPlayer });
      makeMove();
    }
  };

  if (endGame === true) {
    return currentPlayer;
  }
}
