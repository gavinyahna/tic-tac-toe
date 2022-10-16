import React, {useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xNextPlayer, setXNextPlayer] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const tileValue = xNextPlayer ? "X" : "O";
    
    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const tiles = [...current];
        // return if won or tile selected is occupied
        if (winner || tiles[i]) return;
        // select tile if valid selection
        tiles[i] = tileValue;
        setHistory([...historyPoint, tiles]);
        setStepNumber(historyPoint.length);
        setXNextPlayer(!xNextPlayer);
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        setXNextPlayer(step % 2 === 0);
    }

    const restartGame = () => {
        jumpTo(0);
        setHistory(history.slice(0, 1), null)
    }

    const renderHistory = () => 
        history.map((_step, move) => {
            if (move === 0) {
                return
            }
            const destination = `Go to move #${move}`;
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            );
        });
    

    return (
        <>
            <h1>Tac Tac Toe</h1>
            <Board tiles={history[stepNumber]} onClick={handleClick} />
            <div className="flex-container">
                <div>
                    <h3>Game History</h3>
                    {renderHistory()}
                </div>
                <button className="restart-button" onClick={restartGame}>
                    <h2>Restart Game</h2>
                </button>
                <h3>{winner ? "Winner: " + winner : stepNumber > 8? "Drawn Game": "Next Player: " + tileValue}</h3>
            </div>
        </>
    );

}

export default Game;