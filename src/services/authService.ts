import { AuthData } from '../types/authenticationInterface';
import { restClient } from './client';
export const authService = {
  login: async (authData: AuthData) => {
    return restClient.post('/user/login', authData, {
      //headers
    });
  },
};
