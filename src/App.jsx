import React, { useEffect, useState } from 'react';
import Buscador from './componentes/Buscador';
import ListaPersonajes from './componentes/ListaPersonajes';

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  // Cargar personajes al inicio
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results))
      .catch(() => setMensajeError('Error al cargar personajes.'));
  }, []);

  // Buscar por nombre
  useEffect(() => {
    if (terminoBusqueda === '') return;

    fetch(`https://rickandmortyapi.com/api/character/?name=${terminoBusqueda}`)
      .then((res) => {
        if (!res.ok) throw new Error('No encontrado');
        return res.json();
      })
      .then((data) => {
        setPersonajes(data.results);
        setMensajeError('');
      })
      .catch(() => {
        setPersonajes([]);
        setMensajeError('No se encontró ningún personaje con ese nombre.');
      });
  }, [terminoBusqueda]);

  return (
    <div>
      <h1>Catálogo de Personajes</h1>
      <Buscador setTerminoBusqueda={setTerminoBusqueda} />
      {mensajeError && <p style={{ color: 'red' }}>{mensajeError}</p>}
      <ListaPersonajes personajes={personajes} />
    </div>
  );
}

export default App;
