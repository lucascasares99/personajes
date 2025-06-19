import React from 'react';

function Buscador({ setTerminoBusqueda }) {
  const manejarCambio = (e) => {
    setTerminoBusqueda(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar personaje por nombre..."
        onChange={manejarCambio}
      />
    </div>
  );
}

export default Buscador;
