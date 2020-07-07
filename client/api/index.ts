import axios from 'axios';

export const api = axios.create({
  baseURL: '/api/v1'
});

export const spoonacular = axios.create({
  baseURL: '/api/v1/spoonacular/recipes/'
});

// test comment