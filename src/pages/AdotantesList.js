// pages/AdotantesList.js
import React, { useState, useEffect } from 'react';
import { fetchAdotantes } from '../services/api';
import SearchBar from '../components/SearchBar';

function AdotantesList() {
  const [adotantes, setAdotantes] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAdotantes = async () => {
      try {
        const data = await fetchAdotantes();
        setAdotantes(data);
      } catch (error) {
        setError("Erro ao carregar adotantes.");
      }
    };
    loadAdotantes();
  }, []);

  const filteredAdotantes = adotantes.filter(adotante =>
    adotante.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Lista de Adotantes</h2>
      <SearchBar placeholder="Buscar adotantes..." onChange={setSearch} />
      {error && <div>{error}</div>}
      <ul>
        {filteredAdotantes.length > 0 ? (
          filteredAdotantes.map((adotante) => (
            <li key={adotante.id}>
              {adotante.nome} - {adotante.email} - {adotante.telefone} - {adotante.endereco}
            </li>
          ))
        ) : (
          <li>Nenhum adotante encontrado</li>
        )}
      </ul>
    </div>
  );
}

export default AdotantesList;
