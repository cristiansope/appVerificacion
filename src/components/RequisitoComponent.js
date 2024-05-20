// src/components/RequisitoComponent.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';

const fetchRequisito = async (requisitoId) => {
  const requisitoDoc = await db.collection('requisitos').doc(requisitoId).get();
  const requisitoData = requisitoDoc.data();

  const modeloDoc = await requisitoData.id_modelo.get();
  const modeloData = modeloDoc.data();

  return {
    ...requisitoData,
    modelo: modeloData
  };
};

const RequisitoComponent = ({ match }) => {
  const requisitoId = match.params.id;
  const [requisito, setRequisito] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchRequisito(requisitoId);
      setRequisito(data);
    };

    getData();
  }, [requisitoId]);

  if (!requisito) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Requisito: {requisito.nombre_requisito}</h1>
      <p>Modelo: {requisito.modelo.nombre}</p>
      <p>Checked: {requisito.checked ? "Sí" : "No"}</p>
    </div>
  );
};

export default RequisitoComponent;
