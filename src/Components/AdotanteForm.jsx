import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: 100%; /* Garantindo que todos os inputs tenham a mesma largura */
  box-sizing: border-box; /* Inclui padding e border na largura total */
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #31ba8e;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #28a078;
  }

  &:active {
    background-color: #1f805e;
  }
`;

const AdotanteForm = ({ onAddAdotante }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAdotante({ nome, email, telefone, endereco });
    setNome('');
    setEmail('');
    setTelefone('');
    setEndereco('');
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label>Nome Completo</Label>
          <Input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <Label>E-mail</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <Label>Telefone</Label>
          <Input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </div>
        <div>
          <Label>Endereço</Label>
          <Input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Registrar Adotante</Button>
      </Form>
    </FormContainer>
  );
};

AdotanteForm.propTypes = {
  onAddAdotante: PropTypes.func.isRequired
};

export default AdotanteForm;
