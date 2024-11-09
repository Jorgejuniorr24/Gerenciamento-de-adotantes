// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com', // Substitua pela URL da sua API
});

export const fetchAdotantes = async () => {
  try {
    const response = await api.get('/adotantes');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar adotantes:", error);
    throw error;
  }
};

export const createAdotante = async (adotanteData) => {
  try {
    const response = await api.post('/adotantes', adotanteData);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar adotante:", error);
    throw error;
  }
};
