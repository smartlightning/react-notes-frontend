import { FC } from 'react';
import Note from './common/Note';
import { NoteProps } from '../types/noteInterface';

interface NotesListProps {
  notes: NoteProps[];
}

const NotesList: FC<NotesListProps> = ({ notes }) => {
  // show all notes on the dashboard

  //get Data from Backend
  const handleDeleteNote = () => {
    alert('Request to delete note');
  };

  const handleEdit = () => {
    alert('Request to edit');
  };
  return (
    <div>
      {notes.map((note, index) => {
        return (
          <Note
            key = {index}
            note={note}
            handleDelete={handleDeleteNote}
            handleEdit={handleEdit}
          />
        );
      })}
    </div>
  );
};

export default NotesList;
