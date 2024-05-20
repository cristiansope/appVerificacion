// src/components/VerificacionProducto.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

function VerificacionProducto() {
  const [clientes, setClientes] = useState([]);
  const [modelos, setModelos] = useState([]);
  const [cuadro, setCuadro] = useState({
    numero_cuadro: '',
    cliente_id: '',
    modelo_id: '',
    numero_serie: '',
    numero_cliente: '',
    numero_serie_2: '',
    numero_cliente_2: '',
    imagenes: []
  });
  const [requisitos, setRequisitos] = useState([]);

  useEffect(() => {
    db.collection('clientes').onSnapshot(snapshot => {
      setClientes(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
    });
    db.collection('modelos').onSnapshot(snapshot => {
      setModelos(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
    });
  }, []);

  useEffect(() => {
    if (cuadro.modelo_id) {
      db.collection('requisitos').where('id_modelo', '==', db.doc(`modelos/${cuadro.modelo_id}`)).onSnapshot(snapshot => {
        setRequisitos(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
      });
    }
  }, [cuadro.modelo_id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCuadro({ ...cuadro, [name]: value });
  };

  const handleRequisitoChange = (id) => {
    setRequisitos(requisitos.map(req => req.id === id ? { ...req, data: { ...req.data, checked: !req.data.checked } } : req));
  };

  const handleImagenesChange = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map(file => URL.createObjectURL(file));
    setCuadro({ ...cuadro, imagenes: [...cuadro.imagenes, ...urls] });
  };

  const handleSubmit = () => {
    if (requisitos.every(req => req.data.checked) && cuadro.imagenes.length >= 6) {
      db.collection('cuadros').add(cuadro);
      // Generar PDF o Añadir Excel
    } else {
      alert('Debes completar todos los requisitos y subir al menos 6 imágenes.');
    }
  };

  return (
    <div>
      <input
        type="text"
        name="numero_cuadro"
        value={cuadro.numero_cuadro}
        onChange={handleInputChange}
        placeholder="N° Cuadro"
      />
      <select name="cliente_id" value={cuadro.cliente_id} onChange={handleInputChange}>
        <option value="">Selecciona un cliente</option>
        {clientes.map(cliente => (
          <option key={cliente.id} value={cliente.id}>{cliente.data.nombre}</option>
        ))}
      </select>
      <select name="modelo_id" value={cuadro.modelo_id} onChange={handleInputChange}>
        <option value="">Selecciona un modelo</option>
        {modelos.map(modelo => (
          <option key={modelo.id} value={modelo.id}>{modelo.data.nombre}</option>
        ))}
      </select>
      <input
        type="text"
        name="numero_serie"
        value={cuadro.numero_serie}
        onChange={handleInputChange}
        placeholder="N° Serie interruptor general"
      />
      <input
        type="text"
        name="numero_cliente"
        value={cuadro.numero_cliente}
        onChange={handleInputChange}
        placeholder="N° Cliente"
      />
      <input
        type="text"
        name="numero_serie_2"
        value={cuadro.numero_serie_2}
        onChange={handleInputChange}
        placeholder="N° Serie interruptor general 2"
      />
      <input
        type="text"
        name="numero_cliente_2"
        value={cuadro.numero_cliente_2}
        onChange={handleInputChange}
        placeholder="N° Cliente 2"
      />
      {requisitos.map(req => (
        <div key={req.id}>
          <label>
            <input
              type="checkbox"
              checked={req.data.checked}
              onChange={() => handleRequisitoChange(req.id)}
            />
            {req.data.nombre}
          </label>
        </div>
      ))}
      <input type="file" multiple onChange={handleImagenesChange} />
      <button onClick={handleSubmit}>Generar PDF / Añadir Excel</button>
    </div>
  );
}

export default VerificacionProducto;
