import React from 'react';
import Personaje from './Personaje';

function ListaPersonajes({ personajes }) {
  if (!Array.isArray(personajes) || personajes.length === 0) {
    return <p>No hay personajes para mostrar.</p>;
  }

  return (
    <div>
      {personajes.map((pers) => (
        <Personaje
          key={pers.id}
          nombre={pers.name}
          imagen={pers.image}
          estado={pers.status}
        />
      ))}
    </div>
  );
}

export default ListaPersonajes;
