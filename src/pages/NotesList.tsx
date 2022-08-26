import { FC } from 'react';
import Note from '../components/common/Note';
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
      {notes.map((note) => {
        return (
          <Note
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
