
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import SobreMi from './components/Sobre Mi/SobreMi';
import Portfolio from './components/Portfolio/Portfolio';
import Contacto from './components/Contacto/Contacto'; 
import {HashRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
       
      
      <HashRouter>  
        <Navbar/>
        <Main/>
        <SobreMi/>
        <Portfolio/>
        <Contacto/>
        </HashRouter>
      
    </div>
  );
}

export default App;
