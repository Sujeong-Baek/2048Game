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

  function updateTileNumber(tiles) {
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
      setUndoScore(undoScore-newScore)
      checkGameOver();  
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
      setUndoScore(undoScore-newScore)
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
      setUndoScore(undoScore-newScore)
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
      setUndoScore(undoScore-newScore)
      checkGameOver(); 
    }
  }

  function handleStart() {
    if (boardTiles.every((tile) => tile === 0)) {
      setBoardTiles(updateTileNumber(updateTileNumber(boardTiles)));
    }
  }

  const [prevBoardTiles, setPrevBoardTiles] = useState([]);

  function handleKeyDown(event) {
    setPrevBoardTiles((prevBoardTiles) => {
      const newPrevBoardTiles = [...prevBoardTiles, [...boardTiles]];
      if (newPrevBoardTiles.length > 5) {
        newPrevBoardTiles.shift(); 
      }
      return newPrevBoardTiles;
    })
    
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

  function checkFullTiles() {
    if (!boardTiles.includes(0)) { 
      for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 3; col++) {
          const index = 4 * row + col;
          if (boardTiles[index] === boardTiles[index + 1]) {
            return false;
          }
        }
      }  
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 4; col++) {
          const index = 4 * row + col;
          if (boardTiles[index] === boardTiles[index + 4]) {
            return false;
          }
        }
      }
    return true;
    }
  } 

  useEffect(() => {
    checkGameOver();
  }, [boardTiles]);

  function checkGameOver() {
    if (checkFullTiles()) {
      const isNewGame = window.confirm("GAME OVER! Would you like to start a new game?");
      if (isNewGame) {
        startNewGame()
      }
    } else {
      checkWinGame()
    }
  }

  const [hasWon, setHasWon] = useState(false);

  function checkWinGame() {
    if (hasWon) {
      return;
    }
    if (boardTiles.includes(2048)) {
      setHasWon(true);
      const isNewGame = window.confirm("YOU WIN! Would you like to start a new game?");
      if (isNewGame) {
        startNewGame();
      }
    }
  }

  function startNewGame() {
      const tiles = [        
      0, 0, 0, 0,        
      0, 0, 0, 0,        
      0, 0, 0, 0,        
      0, 0, 0, 0,];
      setBoardTiles(updateTileNumber(updateTileNumber(tiles)));
      setScore(0);
      setHasWon(false);
      setUndoCount(0)
      setUndoScore(1000)
  }

  const [undoCount, setUndoCount] = useState(0)

  const [undoScore, setUndoScore] = useState(1000);

  useEffect(() => {
    if (undoCount<5 && undoScore<=0) {
      setUndoCount(undoCount + 1);
      setUndoScore(1000);
    }
  }, [score]);

  function handleUndo() {
    if (undoCount > 0 && prevBoardTiles.length > 0) {
      const lastBoardState = prevBoardTiles[prevBoardTiles.length - 1];
      setBoardTiles([...lastBoardState]);
      setUndoCount(undoCount - 1);
      setUndoScore(1000);
      setPrevBoardTiles(prevBoardTiles.slice(0, -1));
    }
  }

  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
const [touchEnd, setTouchEnd] = useState({ x: 0, y: 0 });

const handleTouchStart = (e) => {
  setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
};

const handleTouchMove = (e) => {
  setTouchEnd({ x: e.touches[0].clientX, y: e.touches[0].clientY });
};

const handleTouchEnd = () => {
  const deltaX = touchEnd.x - touchStart.x;
  const deltaY = touchEnd.y - touchStart.y;

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX > 0) {
      push_right();
    } else {
      push_left();
    }
  } else {
    if (deltaY > 0) {
      push_down();
    } else {
      push_up();
    }
  }
};

  return (
    <div >
      <div className="board-container">
        {hasWon && <div className="win-message">YOU WIN!</div>}
        <div className="game-name">2048</div>
        <div className="score-container">
          <div className="score-label">SCORE</div>
          <div className="score-value">{score}</div>
        </div> 
        <button className="undo-container" onClick={handleUndo} onKeyDown={handleKeyDown} tabIndex="0">
          <div className='undo'>UNDO</div>
          <div className='undo-count'>{Array(undoCount).fill("❤️").join("")}</div>
        </button>                
      </div> 
      <div className="board" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      {boardTiles.map((tile,index) => (
        <Tile number={tile} key={index} />
      ))}
      </div> 
      <div className='button-container'>
        <button className='start-button' onClick={handleStart} onKeyDown={handleKeyDown} tabIndex="0">START</button>  
        <button className='restart-button' onClick={startNewGame} onKeyDown={handleKeyDown} tabIndex="0">NEW GAME</button>
      </div>              
    </div>
    );
}