

export interface NoteProps {
  noteId: string;
  notesTitle: string;
  createdAt: string;
  username: string;
  note?:string;
}
export type Noteslist = NoteProps[];
