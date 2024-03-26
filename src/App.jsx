import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <div className='container-md'>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default App
