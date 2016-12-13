const DEVELOPMENT_API_URL = 'http://localhost:3000/';
const PRODUCTION_API_URL = 'https://myapp.herokuapp.com/';
const environment = process.env.NODE_ENV || 'development';

const URL_MAP = {
  development: DEVELOPMENT_API_URL,
  production: PRODUCTION_API_URL,
};

export const BASE_URL = URL_MAP[environment];
