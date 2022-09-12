

export interface NoteProps {
  noteId: string;
  notesTitle: string;
  createdAt: string;
  username: string;
  note?: Map<string, string>;
}
export type Noteslist = NoteProps[];
