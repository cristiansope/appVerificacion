// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InicioSesion from './components/InicioSesion';
import VerificacionProducto from './components/VerificacionProducto';
import RequisitoComponent from './components/RequisitoComponent';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/verificacion-producto" component={VerificacionProducto} />
        <Route path="/inicio-sesion" component={InicioSesion} />
        <Route path="/requisito/:id" component={RequisitoComponent} />
      </Switch>
    </Router>
  );
}

export default App;
