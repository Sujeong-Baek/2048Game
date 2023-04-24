import Tile from './tile.js'
import React, { useState, useEffect } from 'react';

export default function Board() {
    const [boardTiles, setBoardTiles] = useState([
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
    ]);

    useEffect(() => {
        let tiles = boardTiles;
        tiles = updateTileNumber(tiles);
        tiles = updateTileNumber(tiles);
        setBoardTiles(tiles);
    }, []);

    function updateTileNumber(tiles) {
        const number = Math.random() < 0.5 ? 2 : 4;
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

    function push_left() {
        for (let row=0; row<4; row++) 
        {
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
                    pos+=1
                } else if (compare_num === boardTiles[4*row + col]){
                    boardTiles[4*row + pos -1] = compare_num*2;
                    boardTiles[4*row + col] = 0;
                    compare_num = 0;
                } 
            }
        }
        setBoardTiles([...boardTiles]);
    }

    function push_down() {
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
              pos--;
            } else if (compare_num === boardTiles[4 * row + col]) {
              boardTiles[4 * (pos + 1) + col] = compare_num * 2;
              boardTiles[4 * row + col] = 0;
              compare_num = 0;
              pos--;
            }
          }
        }
        setBoardTiles([...boardTiles]);
      }
      
      function push_right() {
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
              pos--;
            } else if (compare_num === boardTiles[4 * row + col]) {
              boardTiles[4 * row + pos + 1] = compare_num * 2;
              boardTiles[4 * row + col] = 0;
              compare_num = 0;
              pos--;
            }
          }
        }
        setBoardTiles([...boardTiles]);
      }

      function push_up() {
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
              pos++;
            } else if (compare_num === boardTiles[4 * row + col]) {
              boardTiles[4 * (pos - 1) + col] = compare_num * 2;
              boardTiles[4 * row + col] = 0;
              compare_num = 0;
            }
          }
        }
        setBoardTiles([...boardTiles]);
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
            <div className="board">
            {boardTiles.map((tile,index) => (
                <Tile number={tile} key={index} />
            ))}
            </div>
        </div>
      );
}