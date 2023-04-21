import Tile from './tile.js'


export default function Board({tiles}) {
    return (
        <div className="board">
            {tiles.map((tile) => (
                <Tile number={tile} />
            ))}
        </div>
    );
}