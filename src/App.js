import ScrollToTop from "./helpers/ScrollToTop";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Cuentas from './pages/Cuentas';
import Becas from './pages/Becas';
import Valores from './pages/Valores';
import Transferencias from './pages/Transferencias';
import Cliente from './pages/Cliente';
import IniciarSesion from './pages/IniciarSesion';
import Registro from './pages/Registro';
import Historia from './pages/Historia';
import Prensa from './pages/Prensa';
import Banca from './pages/Banca';
import Pagos from './pages/Pagos';
import Seguridad from './pages/Seguridad';
import Preguntas from './pages/Preguntas';


function App() {

  return (
    <div className="App">
      {/* ScrollToTop component inside App component */} 
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/servicios" element={<Servicios/>} />
        <Route path="/cuentas" element={<Cuentas/>} />
        <Route path="/becas" element={<Becas/>} />
        <Route path="/valores" element={<Valores/>} />
        <Route path="/transferencias" element={<Transferencias/>} />
        <Route path="/cliente" element={<Cliente/>} />
        <Route path="/inicio" element={<IniciarSesion/>} />
        <Route path="/registro" element={<Registro/>} />
        <Route path="/historia" element={<Historia/>} />
        <Route path="/prensa" element={<Prensa/>} />
        <Route path="/banca" element={<Banca/>} />
        <Route path="/pagos" element={<Pagos/>} />
        <Route path="/seguridad" element={<Seguridad/>} />
        <Route path="/preguntas" element={<Preguntas/>} />
      </Routes>
    </div>
  );
}

export default App;