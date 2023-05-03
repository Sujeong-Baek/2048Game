import React, { useState, useEffect, useRef} from 'react';
import { gameOverIcon, winGameIcon } from './gameOverIcon.js';
import { updateTileNumber, canMoveTile, push_down, push_right, push_left, push_up } from './updateBoard.js';
import showPopup from './popUp.js';
import Score from './score.js';
import Button from './button.js'
import Board from './board.js';

export default function Game() {
  const [boardTiles, setBoardTiles] = useState([
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
  ]);

  const [score, setScore] = useState(0);
  const [undoCount, setUndoCount] = useState(0)
  const [undoScore, setUndoScore] = useState(500)
  const [hasWon, setHasWon] = useState(false);
  const [prevBoardTiles, setPrevBoardTiles] = useState([]);
 
  function handleKeyDown(event) {
    let isMoved = false;    
    if (event.key === "ArrowLeft") {
      isMoved, newBoardTiles, newScore = push_left(boardTiles);
    } else if (event.key === "ArrowRight") {
      isMoved, newBoardTiles, newScore  = push_right(boardTiles);
    } else if (event.key === "ArrowUp") {
      isMoved, newBoardTiles, newScore  = push_up(boardTiles);  
    } else if (event.key === "ArrowDown") {
      isMoved, newBoardTiles, newScore  = push_down(boardTiles);
    }
    if (isMoved) {
        setBoardTiles(updateTileNumber(newBoardTiles));
        setScore(score + newScore);
        setUndoScore(undoScore - newScore);
        checkGameOver();
        const newPrevBoardTiles = [...prevBoardTiles, [...boardTiles]];
        if (newPrevBoardTiles.length > 5) {
          newPrevBoardTiles.shift(); 
        }
        setPrevBoardTiles(newPrevBoardTiles)       
    };
  }

  useEffect(() => {
    checkGameOver();
  }, [boardTiles]);

  function checkGameOver() {
    if (!canMoveTile()) {
      showPopup("GAME OVER!", gameOverIcon, "Start a new game!", "I'm done.TnT");    
    } else if (!hasWon && boardTiles.includes(2048)) {
        showPopup("YOU WIN!!!",winGameIcon, "Continue playing!","Start a new game!");
        setHasWon(true);
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
      setUndoScore(500)
      setPrevBoardTiles([])
  }

  useEffect(() => {
    if (undoCount<5 && undoScore<=0) {
      setUndoCount(undoCount + 1);
      setUndoScore(500+undoScore);
    }
  }, [score]);

  function handleUndo() {
    if (undoCount > 0 && prevBoardTiles.length > 0) {
      const lastBoardState = prevBoardTiles[prevBoardTiles.length - 1];
      setBoardTiles([...lastBoardState]);
      setUndoCount(undoCount - 1);
      setUndoScore(500);
      setPrevBoardTiles(prevBoardTiles.slice(0, -1));
    }
  }

  function focusingBoard() {
    boardFocus.current.focus();
  }

    return (
      <>
        <div className="board-container">
          <div className="game">GAME</div>
          <div className="game-name">2048</div>
          {hasWon && <div className="win-message">YOU WIN!</div>}
          <Score score={score} />
        </div>
        <Board focusingBoard={focusingBoard} 
              handleKeyDown={handleKeyDown}
              /> 
        <Button handleUndo={handleUndo}
                focusingBoard={focusingBoard}
                undoCount={undoCount}
                startNewGame={startNewGame} />          
      </>
    );
  }