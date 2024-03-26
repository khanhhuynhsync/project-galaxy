import reactLogo from './assets/img/react.svg'
import viteLogo from './assets/img/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <div className='container-md'>
            <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo"/>
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo"/>
            </a>
        </div>
    )
}

export default App
