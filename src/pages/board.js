import Tile from './tile.js'
import React, { useState, useRef } from 'react';

export default function Board({
  boardTiles,
  focusingBoard,
  boardFocus,
  push,
}) {

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
        push("r");
      } else {
        push("l");
      }
    } else {
      if (deltaY > 0) {
        push("d");
      } else {
        push("u");
      }
    }
  }

  function handleKeyDown(event) {
    if (event.key === "ArrowLeft") {
      push("l")
    } else if (event.key === "ArrowRight") {
      push("r")
    } else if (event.key === "ArrowUp") {
      push("u")
    } else if (event.key === "ArrowDown") {
      push("d")
    }
  }
    
  return (
    <div className="board"
          ref={boardFocus} 
          onBlur={focusingBoard}
          onKeyDown={handleKeyDown}
          tabIndex="0"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
          {boardTiles.map((tile,index) => (
          <Tile number={tile} key={index} />
        ))}
    </div> 
  );
}