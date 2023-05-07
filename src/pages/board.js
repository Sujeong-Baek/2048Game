import Tile from './tile.js'
import React, { useState, useRef } from 'react';
import { push_down, push_right, push_left, push_up } from './updateBoard.js';

export default function Board({
  handleKeyDown,
  boardTiles,
  focusingBoard,
  boardFocus
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