import { Noteslist } from '../types/noteInterface';
import { restClient } from './client';

export const notesService = {
  getAllNotes: async () => {
    return restClient.get<Noteslist>('/notes/basic_notes', {});
  },
};
