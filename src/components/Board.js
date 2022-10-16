import React from "react";
import Tile from "./Tile";

const Board = ({ tiles, onClick }) => (
    <div className="board">
        {tiles.map((tile, index) => (
            <Tile key={index} value={tile} onClick={() => onClick(index)}/>
        ))}
    </div>
)

export default Board;