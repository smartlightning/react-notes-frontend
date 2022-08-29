import { AuthData } from '../types/authenticationInterface';
import { restClient } from './client';

export const notesService = {
  getAllNotes: async (authData: AuthData) => {
    return restClient.post('/user/login', authData, {
      //headers
    });
  },
};
