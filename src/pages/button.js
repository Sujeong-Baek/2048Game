import React from "react";

export default function Button({
    handleUndo,
    startNewGame,
    focusingBoard,
    undoCount,
}) {
  return (
    <div className='button-container'>
      <button className="undo-button" onClick={handleUndo} onFocus={focusingBoard}>          
        <span className='undo-count'>{Array(undoCount).fill("❤️").join("")}</span>
        {undoCount === 0 && <span>Make a heart!!!</span>}
      </button>
      <button className='start-button' onClick={startNewGame} onFocus={focusingBoard}>NEW GAME</button>          
    </div> 
  );
}
