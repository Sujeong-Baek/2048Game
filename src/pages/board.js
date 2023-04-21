import Tile from './tile.js'


export default function Board({tiles}) {
    return (
        <div className="board">
            {tiles.map((tile) => (
                <Tile number={tile} />
            ))}
            <style jsx>{`
                .board {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-template-rows: repeat(4, 1fr);
                background-color: beige;
                }
            `}</style>
        </div>
    );
}
