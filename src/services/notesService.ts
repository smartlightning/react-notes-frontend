import { Noteslist } from '../types/noteInterface';
import { authHeader } from './authHeader';
import { restClient } from './client';

export const notesService = {
  getAllNotes: async () => {
    return restClient.get<Noteslist>('/notes/basic_notes', {
      headers: authHeader()
    });
  },
};
