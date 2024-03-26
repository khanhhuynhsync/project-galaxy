import {useState} from 'react'
import reactLogo from './assets/img/react.svg'
import viteLogo from './assets/img/vite.svg'
import './App.css'
import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [currentTurn, setCurrentTurn] = useState('X')
    const [winner, setWinner] = useState(null)

    function changeTurn() {
        setCurrentTurn((currentTurn) => currentTurn === 'X' ? 'O' : 'X')
    }

    function updateWinner(player) {
        setWinner(player)
    }

    return (
        <div className='container-md'>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <div className='d-flex flex-column'>
                <div className='d-flex flex-row'>
                    <Player initName='player 1' icon='X' isWinner={winner} currentTurn={currentTurn}/>
                    <Player initName='player 2' icon='O' isWinner={winner} currentTurn={currentTurn}/>
                </div>
                <GameBoard currentTurn={currentTurn} changeTurn={changeTurn} winner={winner} updateWinner={updateWinner} />
            </div>
        </div>
    )
}

export default App
