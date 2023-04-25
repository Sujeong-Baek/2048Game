import Tile from './tile.js'
import React, { useState, useEffect } from 'react';

export default function Board() {
  const [boardTiles, setBoardTiles] = useState([
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
  ]);

  const [score, setScore] = useState(0);

  useEffect(() => {
    let tiles = boardTiles;
    tiles = updateTileNumber(tiles);
    tiles = updateTileNumber(tiles);
    setBoardTiles(tiles);
  }, []);

  function updateTileNumber(tiles) {
    const number = Math.random() < 0.7 ? 2 : 4;
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

  function checkGameOver() {
    if (!boardTiles.includes(0)) { 
      for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 3; col++) {
          const index = 4 * row + col;
          if (boardTiles[index] === boardTiles[index + 1]) {
            return; 
          }
        }
      }  
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 4; col++) {
          const index = 4 * row + col;
          if (boardTiles[index] === boardTiles[index + 4]) {
            return; 
          }
        }
      }
      alert("GAME OVER!");
    } else if (boardTiles.includes()) {
      alert("YOU WIN!");
    }
  }

  function push_left() {
    let isTileMoved = false;
    let newScore = 0;
    for (let row=0; row<4; row++) {
      let compare_num = 0;
      let pos = 0;
      for (let col = 0; col<4; col++) {
        if (boardTiles[4*row + col] === 0) {
          continue;
        }
        if (compare_num !== boardTiles[4*row + col]) {
          compare_num = boardTiles[4*row + col];
          boardTiles[4*row + col] =0;
          boardTiles[4*row + pos] =compare_num;
          if (col !== pos) {
            isTileMoved = true;
          }
          pos ++;
        } else if (compare_num === boardTiles[4*row + col]){
          boardTiles[4*row + pos -1] = compare_num*2;
          boardTiles[4*row + col] = 0;
          newScore += compare_num * 2;
          compare_num = 0;
          isTileMoved = true;
        } 
      }
    }
    if (isTileMoved) {
      setBoardTiles(updateTileNumber([...boardTiles]));
      setScore(score+newScore); 
      checkGameOver();   
    }
  }

  function push_down() {
    let isTileMoved = false;
    let newScore = 0;
    for (let col = 0; col < 4; col++) {
      let compare_num = 0;
      let pos = 3;
      for (let row = 3; row >= 0; row--) {
        if (boardTiles[4 * row + col] === 0) {
          continue;
        }
        if (compare_num !== boardTiles[4 * row + col]) {
          compare_num = boardTiles[4 * row + col];
          boardTiles[4 * row + col] = 0;
          boardTiles[4 * pos + col] = compare_num;
          if (row !== pos) {
            isTileMoved = true;
          }
          pos--;
        } else if (compare_num === boardTiles[4 * row + col]) {
          boardTiles[4 * (pos + 1) + col] = compare_num * 2;
          boardTiles[4 * row + col] = 0;
          newScore += compare_num * 2;
          compare_num = 0;
          isTileMoved = true;
        }
      }
    }
    if (isTileMoved) {
      setBoardTiles(updateTileNumber([...boardTiles]));
      setScore(score+newScore);    
      checkGameOver();  
    }    
  }

  function push_right() {
    let isTileMoved = false;
    let newScore = 0;
    for (let row = 0; row < 4; row++) {
      let compare_num = 0;
      let pos = 3;
      for (let col = 3; col >= 0; col--) {
        if (boardTiles[4 * row + col] === 0) {
          continue;
        }
        if (compare_num !== boardTiles[4 * row + col]) {
            compare_num = boardTiles[4 * row + col];
            boardTiles[4 * row + col] = 0;
            boardTiles[4 * row + pos] = compare_num;
            if (col !== pos) {
              isTileMoved = true;
            }
            pos--;
        } else if (compare_num === boardTiles[4 * row + col]) {
            boardTiles[4 * row + pos + 1] = compare_num * 2;
            boardTiles[4 * row + col] = 0;
            newScore += compare_num * 2;
            compare_num = 0;
            isTileMoved = true;
        }
      }
    }
    if (isTileMoved) {
      setBoardTiles(updateTileNumber([...boardTiles]));
      setScore(score+newScore); 
      checkGameOver();  
    }   
  }

  function push_up() {
    let isTileMoved = false;
    let newScore = 0;
    for (let col = 0; col < 4; col++) {
      let compare_num = 0;
      let pos = 0;
      for (let row = 0; row < 4; row++) {
        if (boardTiles[4 * row + col] === 0) {
          continue;
        }
        if (compare_num !== boardTiles[4 * row + col]) {
          compare_num = boardTiles[4 * row + col];
          boardTiles[4 * row + col] = 0;
          boardTiles[4 * pos + col] = compare_num;
          if (row !== pos) {
            isTileMoved = true;
          }
          pos++;
        } else if (compare_num === boardTiles[4 * row + col]) {
            boardTiles[4 * (pos - 1) + col] = compare_num * 2;
            boardTiles[4 * row + col] = 0;
            newScore += compare_num * 2;
            compare_num = 0;
            isTileMoved = true;
        }
      }
    }
    if (isTileMoved) {
      setBoardTiles(updateTileNumber([...boardTiles]));
      setScore(score+newScore);     
      checkGameOver(); 
    }
  }

  function handleKeyDown(event) {
    if (event.key === "ArrowLeft") {
      push_left();
    } else if (event.key === "ArrowRight") {
      push_right();
    } else if (event.key === "ArrowUp") {
      push_up();  
    } else if (event.key === "ArrowDown") {
      push_down();
    }
  }

  return (
    <div  onKeyDown={handleKeyDown} tabIndex="0">
      <div className="score-container">
      <div className="score-label">SCORE</div>
      <div className="score-value">{score}</div>
      </div>
      <div className="board">
      {boardTiles.map((tile,index) => (
        <Tile number={tile} key={index} />
      ))}
      </div>      
    </div>
    );
}