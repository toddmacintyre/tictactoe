// let row1 = ['-','-','-'];
// let row2 = ['-','-','-'];
// let row3 = ['-','-','-'];


const printHelp = () => {
  const board = "-----\n|1|2|3|\n|4|5|6|\n|7|8|9|\n-----";
  console.log('\nEnter a number to make your move. (ie, 5 would choose the center tile)');
  console.log(board);
};
printHelp();


let grid = ['-','-','-','-','-','-','-','-','-'];

const printGrid = () => {
  console.log('\ncurrent board:');
  console.log(grid.slice(0,3).join(''));
  console.log(grid.slice(3,6).join(''));
  console.log(grid.slice(6,9).join(''));
};
printGrid();

const handleInput = (input) => {
  if (input.toLowerCase() === 'h') {
    console.log('Help Menu:');
    printHelp();
  } else {
    togglePiece(input);
  }
};

let firstTurn = true;

const togglePiece = (num) => {
  firstTurn ? grid[num - 1] = 'X' : grid[num - 1] = 'O';
  if (checkWin()) {
    console.log('++++++++++++++++++++++');
    let winner;
    firstTurn ? winner = 'player 1' : 'player 2';
    console.log(`${winner} wins!`);
  }
  firstTurn = !firstTurn;
  printGrid();
};


const checkWin = () => {
  let marker = 'X';
  if (!firstTurn) {
    marker = 'O';
  }

  const checkRow = (row) => {
    row.every(val => {
      // console.log(val === marker);
      return val === marker;
    });
  };


  // return grid.reduce((acc, val, ind) => {
  // }, true)
  let flag = false;
  // while (flag === false) {
    // check each row
    flag = checkRow(grid.slice(0,3));
    console.log(flag);
    if (flag) return true
    flag = checkRow(grid.slice(3,6));
    if (flag) return true
    flag = checkRow(grid.slice(6,9));
    if (flag) return true

    // check each column
    flag = checkRow([grid[0],grid[3],grid[6]]);
    if (flag) return true
    flag = checkRow([grid[1],grid[4],grid[7]]);
    if (flag) return true
    flag = checkRow([grid[2],grid[5],grid[8]]);
    if (flag) return true
  // }
  return flag;
}


process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    handleInput(chunk.trim());
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});