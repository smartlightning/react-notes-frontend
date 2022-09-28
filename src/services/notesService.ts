import { NoteProps } from '../types/noteInterface';
import { authHeader } from './authHeader';
import { restClient } from './client';

export const notesService = {
  getAllNotes: async () => {
    return restClient.get('/notes/basic_notes', {
      headers: authHeader(),
    });
  },
  getSingleNote: async (id: string) => {
    return restClient.get(`/notes/basic_notes/${id}`, {
      headers: authHeader(),
    });
  },
  //TODO: implement update
  updateNote: async (id: string, noteData: NoteProps) => {
    return restClient.put(
      `/notes/basic_notes/${id}`,
      { ...noteData },
      { headers: authHeader() }
    );
  },
  createNote: async (noteData: NoteProps) => {
    return restClient.post<NoteProps>(
      'note/basic_notes',
      { ...noteData },
      {
        headers: {
          ...authHeader(),
        },
      }
    );
  },
  deleteNote: async(id: string) => {
    return restClient.delete(
      `/notes/basic_notes/${id}`, {headers: authHeader()}
    )
  }
};
