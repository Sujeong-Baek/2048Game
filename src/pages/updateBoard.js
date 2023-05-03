
export function updateTileNumber(tiles) {
  const number = Math.random() < 0.8 ? 2 : 4;
  let r = 0;
  let c = 0;
  do {
      r = Math.floor(Math.random()*4);
      c = Math.floor(Math.random()*4);
  } while (tiles[4*r + c] !== 0);
  const newBoardTiles = [...tiles];
  newBoardTiles[4*r + c] = number;    
  return newBoardTiles;
}

export function canMoveTile(boardTiles) {
  if (boardTiles.includes(0)) {
    return true;
  } 
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 3; col++) {
      const index = 4 * row + col;
      if (boardTiles[index] === boardTiles[index + 1]) {
        return true;
      }
    }
  }  
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 4; col++) {
      const index = 4 * row + col;
      if (boardTiles[index] === boardTiles[index + 4]) {
        return true;
      }
    }
  }
  return false;
} 

export function push_right(boardTiles) {
  let isTileMoved = false;
  let newScore = 0;
  let newBoardTiles = [...boardTiles];

  for (let row = 0; row < 4; row++) {
    let compare_num = 0;
    let pos = 3;
    for (let col = 3; col >= 0; col--) {
      if (newBoardTiles[4 * row + col] === 0) {
        continue;
      }
      if (compare_num !== newBoardTiles[4 * row + col]) {
        compare_num = newBoardTiles[4 * row + col];
        newBoardTiles[4 * row + col] = 0;
        newBoardTiles[4 * row + pos] = compare_num;
        if (col !== pos) {
          isTileMoved = true;
        }
        pos--;
      } else if (compare_num === newBoardTiles[4 * row + col]) {
        newBoardTiles[4 * row + pos + 1] = compare_num * 2;
        newBoardTiles[4 * row + col] = 0;
        newScore += compare_num * 2;
        compare_num = 0;
        isTileMoved = true;
      }
    }
  }  
  return [isTileMoved, newBoardTiles, newScore];
}

export function push_left(boardTiles) {
  let isTileMoved = false;
  let newScore = 0;
  let newBoardTiles = [...boardTiles];
  for (let row=0; row<4; row++) {
    let compare_num = 0;
    let pos = 0;
    for (let col = 0; col<4; col++) {
      if (newBoardTiles[4*row + col] === 0) {
        continue;
      }
      if (compare_num !== newBoardTiles[4*row + col]) {
        compare_num = newBoardTiles[4*row + col];
        newBoardTiles[4*row + col] =0;
        newBoardTiles[4*row + pos] =compare_num;
        if (col !== pos) {
          isTileMoved = true;
        }
        pos ++;
      } else if (compare_num === newBoardTiles[4*row + col]){
        newBoardTiles[4*row + pos -1] = compare_num*2;
        newBoardTiles[4*row + col] = 0;
        newScore += compare_num * 2;
        compare_num = 0;
        isTileMoved = true;
      } 
    }
  }
  return [isTileMoved, newBoardTiles, newScore];
}

export function push_down(boardTiles) {
  let isTileMoved = false;
  let newScore = 0;
  let newBoardTiles = [...boardTiles];
  for (let col = 0; col < 4; col++) {
    let compare_num = 0;
    let pos = 3;
    for (let row = 3; row >= 0; row--) {
      if (newBoardTiles[4 * row + col] === 0) {
        continue;
      }
      if (compare_num !== newBoardTiles[4 * row + col]) {
        compare_num = newBoardTiles[4 * row + col];
        newBoardTiles[4 * row + col] = 0;
        newBoardTiles[4 * pos + col] = compare_num;
        if (row !== pos) {
          isTileMoved = true;
        }
        pos--;
      } else if (compare_num === newBoardTiles[4 * row + col]) {
        newBoardTiles[4 * (pos + 1) + col] = compare_num * 2;
        newBoardTiles[4 * row + col] = 0;
        newScore += compare_num * 2;
        compare_num = 0;
        isTileMoved = true;
      }
    }
  }
  return [isTileMoved, newBoardTiles, newScore];
}

export function push_up(boardTiles) {
  let isTileMoved = false;
  let newScore = 0;
  let newBoardTiles = [...boardTiles];

  for (let col = 0; col < 4; col++) {
    let compare_num = 0;
    let pos = 0;
    for (let row = 0; row < 4; row++) {
      if (newBoardTiles[4 * row + col] === 0) {
        continue;
      }
      if (compare_num !== newBoardTiles[4 * row + col]) {
        compare_num = newBoardTiles[4 * row + col];
        newBoardTiles[4 * row + col] = 0;
        newBoardTiles[4 * pos + col] = compare_num;
        if (row !== pos) {
          isTileMoved = true;
        }
        pos++;
      } else if (compare_num === newBoardTiles[4 * row + col]) {
        newBoardTiles[4 * (pos - 1) + col] = compare_num * 2;
        newBoardTiles[4 * row + col] = 0;
        newScore += compare_num * 2;
        compare_num = 0;
        isTileMoved = true;
      }
    }
  }  
  return [isTileMoved, newBoardTiles, newScore];
}
