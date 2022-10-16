import React from "react";

const Tile = ({ value, onClick }) => {

    const style = value ? `tiles ${value}` : `tiles`; 

    return (
        <button className={style} onClick={onClick}>
            {value}
        </button>
    )
}

export default Tile;