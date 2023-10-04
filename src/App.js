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
import Olvido from './pages/Olvido';
import Contrasenna from './pages/Contrasenna';
import Usuario from './pages/Usuario';
import HomeBanca from "./banca/HomeBanca";
import Logout from "./banca/Logout";
import Frecuente from "./banca/Frecuente";
import NoRegistrado from "./banca/NoRegistrado";
import AggContacto from "./banca/AggContacto";
import ListContacto from "./banca/ListContacto";
import Movimientos from "./banca/Movimientos";
import Contrasena from "./banca/Contrasena";


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
        <Route path="/olvido" element={<Olvido/>} />
        <Route path="/contrasenna" element={<Contrasenna/>} />
        <Route path="/usuario" element={<Usuario/>} />
        <Route path="/homebanca" element={<HomeBanca/>} />+
        <Route path="/logout" element={<Logout/>} />
        <Route path="/frecuente" element={<Frecuente/>} />
        <Route path="/noregistrado" element={<NoRegistrado/>} />
        <Route path="/aggcontacto" element={<AggContacto/>} />
        <Route path="/listcontacto" element={<ListContacto/>} />
        <Route path="/movimientos" element={<Movimientos/>} />
        <Route path="/contrasena" element={<Contrasena/>} />

      </Routes>
    </div>
  );
}

export default App;