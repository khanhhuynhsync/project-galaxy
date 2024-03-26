import {useState} from "react";
import '../../assets/stylesheet/game-board.css'

const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function GameBoard({currentTurn, changeTurn, winner, updateWinner}) {
    const [gameState, setGameState] = useState(board)

    function checkWinState(gameState) {
        const lines = [
            [gameState[0][0], gameState[0][1], gameState[0][2]],
            [gameState[1][0], gameState[1][1], gameState[1][2]],
            [gameState[2][0], gameState[2][1], gameState[2][2]],
            [gameState[0][0], gameState[1][0], gameState[2][0]],
            [gameState[0][1], gameState[1][1], gameState[2][1]],
            [gameState[0][2], gameState[1][2], gameState[2][2]],
            [gameState[0][0], gameState[1][1], gameState[2][2]],
            [gameState[0][2], gameState[1][1], gameState[2][0]]
        ]

        for (let line of lines) {
            if (line[0] !== null && line[0] === line[1] && line[0] === line[2]) {
                updateWinner(currentTurn)
                return currentTurn
            }
        }
        return null
    }

    function handleCellClick(rowIndex, cellIndex) {
        if (!gameState[rowIndex][cellIndex]) {
            let newGameState = [...gameState]
            newGameState[rowIndex][cellIndex] = currentTurn
            setGameState(newGameState)
            changeTurn()
            checkWinState(newGameState)
        }
    }

    function newGame() {
        setGameState([
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ])
        updateWinner(null)
    }

    return (
        <div className='input-group flex-column'>
            {gameState.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                        <button className='btn btn-outline-primary btn-lg game-board-button'
                                key={cellIndex}
                                disabled={winner}
                                onClick={() => handleCellClick(rowIndex, cellIndex)}>
                            {cell}
                        </button>
                    ))}
                </div>
            ))}
            <button className='m-4' onClick={newGame}>New Game</button>
        </div>
    )
}

export default GameBoard