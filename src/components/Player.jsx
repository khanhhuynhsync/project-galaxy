import {useState} from "react";
import '../assets/css/player.css'

function Player({initName, icon, isWinner, currentTurn}) {
    const [editMode, setEditMode] = useState(false)
    const [name, setName] = useState(initName)
    let playerClass = 'm-2 p-2 border border-2'

    if (isWinner === icon) {
        playerClass += ' border-danger'
    } else if(!isWinner && icon === currentTurn) {
        playerClass += ' border-primary'
    }

    function handleEdit() {
        setEditMode((editMode) => !editMode)
    }

    function handleSetName(event) {
        setName(event.target.value)
    }

    return (
        <div className={playerClass}>
            <div className="input-group">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Player name"
                    value={name}
                    onChange={handleSetName}
                    disabled={!editMode}/>
                <button
                    className="btn btn-outline-primary ms-2 player-edit-button"
                    type="button"
                    onClick={handleEdit}>{editMode ? 'Save' : 'Edit'}
                </button>
            </div>
            <h4>{icon} {(isWinner === icon) ? 'is winner!!!' : ''}</h4>
        </div>
    )
}

export default Player