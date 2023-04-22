import Tile from './tile.js'


export default function Board({tiles}) {
    tiles = updateTileNumber(tiles);
    tiles = updateTileNumber(tiles);
    return (
        <div className="board">
            {tiles.map((tile,index) => (
                <Tile number={tile} key={index}  />
            ))}
        </div>
    );
}

function updateTileNumber(tiles) {
    const number = Math.random() < 0.5 ? 2 : 4;
    let r = 0;
    let c = 0;
    do {
        r = Math.floor(Math.random()*4);
        c = Math.floor(Math.random()*4);
    } while (tiles[4*r] + c !== 0);
    tiles[4*r + c] = number;
    return tiles;
}
