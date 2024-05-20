// src/components/InicioSesion.js
import React, { useState } from 'react';
import { auth } from '../firebase';

function InicioSesion() {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [claveSecreta, setClaveSecreta] = useState('');
  const [recordarme, setRecordarme] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(nombreUsuario, claveSecreta)
      .then(userCredential => {
        // Sesión iniciada
      })
      .catch(error => {
        console.error("Error al iniciar sesión", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nombreUsuario}
        onChange={(e) => setNombreUsuario(e.target.value)}
        placeholder="Tu nombre de usuario"
      />
      <input
        type="password"
        value={claveSecreta}
        onChange={(e) => setClaveSecreta(e.target.value)}
        placeholder="Tu clave secreta"
      />
      <label>
        <input
          type="checkbox"
          checked={recordarme}
          onChange={(e) => setRecordarme(e.target.checked)}
        />
        Recuérdame
      </label>
      <button type="submit">Conectar</button>
    </form>
  );
}

export default InicioSesion;
