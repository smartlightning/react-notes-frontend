import axios from 'axios';

export const restClient = axios.create({
  baseURL: 'https://web-dev-coffee-deno.deno.dev/api',
  responseType: 'json',
});
