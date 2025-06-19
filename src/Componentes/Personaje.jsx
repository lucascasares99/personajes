import React from 'react';

function Personaje({ nombre, imagen, estado }) {
  return (
    <div>
      <h2>{nombre}</h2>
      <img src={imagen} alt={`Imagen de ${nombre}`} width="200" />
      <p>Estado: {estado}</p>
    </div>
  );
}

export default Personaje;
