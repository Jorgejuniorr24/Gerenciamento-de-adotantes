import React, { useState } from 'react';
import AdotanteForm from './Components/AdotanteForm.jsx';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  font-size: 3rem; /* Aumentando o tamanho da fonte */
  margin-bottom: 20px; /* Espaçamento abaixo do título */
`;

const AdotanteListContainer = styled.div`
  text-align: center;
  margin-top: 50px; /* Espaçamento adicional acima da lista */
`;

const ListTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const AdotanteList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left; /* Alinhando a lista à esquerda */
  max-width: 600px;
  margin: 0 auto;
`;

const AdotanteItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px; /* Espaçamento entre os itens */
  font-size: 1rem;
  color: #333;
`;

const App = () => {
  const [adotantes, setAdotantes] = useState([]);

  const addAdotante = (adotante) => {
    setAdotantes([...adotantes, adotante]);
  };

  return (
    <Container>
      <Title>Gerenciamento de Adotantes</Title>
      <AdotanteForm onAddAdotante={addAdotante} />
      <AdotanteListContainer>
        <ListTitle>Lista de Adotantes</ListTitle>
        <AdotanteList>
          {adotantes.map((adotante, index) => (
            <AdotanteItem key={index}>
              <div>{adotante.nome}</div>
              <div>{adotante.email}</div>
              <div>{adotante.telefone}</div>
              <div>{adotante.endereco}</div>
            </AdotanteItem>
          ))}
        </AdotanteList>
      </AdotanteListContainer>
    </Container>
  );
};

export default App;
