import React, { useState, useEffect, useRef} from 'react';
import { updateTileNumber, canMoveTile, push_down, push_right, push_left, push_up } from './api/updateBoard.js';
import Score from './score.js';
import Button from './button.js'
import Board from './board.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceDizzy, faFaceGrinStars } from "@fortawesome/free-solid-svg-icons"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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
  const boardFocus = useRef(null);  
  const gameOverIcon = (
    <div>
      <FontAwesomeIcon icon={faFaceDizzy} style={{ fontSize: "70px", color: "black" }} />
    </div>
  );  
  const winGameIcon = (
    <div>
      <FontAwesomeIcon icon={faFaceGrinStars} style={{ fontSize: "70px", color: "gold" }} />
    </div>
  );


  useEffect(() => {
    checkGameOver();
  }, [boardTiles]);


  useEffect(() => {
    if (undoCount<5 && undoScore<=0) {
      setUndoCount(undoCount + 1);
      setUndoScore(500+undoScore);
    }
  }, [score]);


  function push(lrud) {
    let isMoved = false;    
    let newBoardTiles = [];
    let newScore = 0;
    if (lrud === "l") {
      [isMoved, newBoardTiles, newScore] = push_left([...boardTiles]);
    } else if (lrud === "r") {
      [isMoved, newBoardTiles, newScore]  = push_right([...boardTiles]);
    } else if (lrud === "u") {
      [isMoved, newBoardTiles, newScore]  = push_up([...boardTiles]);  
    } else if (lrud === "d") {
      [isMoved, newBoardTiles, newScore]  = push_down([...boardTiles]);
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


  function checkGameOver() {
    if (!canMoveTile(boardTiles)) {
      showPopup("GAME OVER!", gameOverIcon, "I'm done.TnT", "Start a new game!");    
    } else if (!hasWon && boardTiles.includes(2048)) {
        showPopup("YOU WIN!!!",winGameIcon, "Continue playing!", "Start a new game!", );
        setHasWon(true);
      }      
  }


  function showPopup(title, icon, confirmButtonText, cancelButtonText) {
    setTimeout(() => {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        title,
        html: icon,
        showCancelButton: true,
        confirmButtonText, 
        cancelButtonText,
      }).then((result) => {
        if (!result.value) {
          startNewGame();
        }
      });
    }, 700);
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
      <div>
        <div className="board-container">
          <div className="game">GAME</div>
          <div className="game-name">2048</div>
          {hasWon && <div className="win-message">YOU WIN!</div>}
          <Score score={score} />
        </div>
        <Board focusingBoard={focusingBoard} 
              boardTiles={boardTiles}
              boardFocus={boardFocus}
              push={push}
              /> 
        <Button handleUndo={handleUndo}
                focusingBoard={focusingBoard}
                undoCount={undoCount}
                startNewGame={startNewGame} />          
      </div>
    );
  }