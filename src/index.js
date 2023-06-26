import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <h1>Error</h1>
  },
  {
    path: "/servicios",
    element: <Servicios />,
  },
  {
    path: "/cuentas",
    element: <Cuentas />,
  }, 
  {
    path: "/becas",
    element: <Becas />,
  }, 
  {
    path: "/valores",
    element: <Valores />,
  }, 
  {
    path: "/transferencias",
    element: <Transferencias />,
  }, 
  {
    path: "/cliente",
    element: <Cliente />,
  }, 
  {
    path: "/inicio",
    element: <IniciarSesion />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/historia",
    element: <Historia />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/prensa",
    element: <Prensa />,
  },
  {
    path: "/banca",
    element: <Banca />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <React.StrictMode>
      {/* <App /> */}
      <RouterProvider router={router}/>
    </React.StrictMode>
    <ToastContainer/>
  </>
);