import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from "./components/User.jsx";
import ChangeHistory from "./components/ChangeHistory.jsx";

function App() {
    const [count, setCount] = useState(0)
    const [user, updateUser] = useState({
        name: "",
        expYears: 0,
        feeling: "normal"
    })
    const [history, updateHistory] = useState([])
    function onUpdateUser(updatedUser) {
        updateUser(updatedUser);
    }
    function onSubmitForm(e) {
        e.preventDefault();
        let historyRecord = "";
        [...e.target.elements].forEach((element) => {
            if (element.name && (element.type !== "radio" || element.checked)) {
                historyRecord += `${element.name}: ${element.value} `;
            }
        });
        updateHistory([...history, historyRecord]);
    }

    return (
        <>
            <User user={user} onUpdateUser={onUpdateUser} onSubmitForm={onSubmitForm}/>
            <ChangeHistory history={history}/>
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
