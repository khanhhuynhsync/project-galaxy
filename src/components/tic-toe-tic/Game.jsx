import Player from "./Player.jsx";
import GameBoard from "./GameBoard.jsx";
import {useState} from "react";

function Game() {
    const [currentTurn, setCurrentTurn] = useState('X')
    const [winner, setWinner] = useState(null)

    function changeTurn() {
        setCurrentTurn((currentTurn) => currentTurn === 'X' ? 'O' : 'X')
    }

    function updateWinner(player) {
        setWinner(player)
    }

    return (
        <div className='d-flex flex-column'>
            <div className='d-flex flex-row'>
                <Player initName='player 1' icon='X' isWinner={winner} currentTurn={currentTurn}/>
                <Player initName='player 2' icon='O' isWinner={winner} currentTurn={currentTurn}/>
            </div>
            <GameBoard currentTurn={currentTurn} changeTurn={changeTurn} winner={winner} updateWinner={updateWinner}/>
        </div>
    )
}

export default Game;