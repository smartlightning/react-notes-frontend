import { useCallback, useEffect, useState } from 'react'
import uuid4 from 'uuid4';
import { NoteProps } from '../types/noteInterface';
import { notesService } from '../services/notesService';
import { IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';
import CreateNoteConfigModal from '../components/CreateNoteConfigModal';
import { useNavigate, useParams } from 'react-router-dom';
import Note from '../components/common/Note';
import { NOTE, ROUTES } from '../Router';

const NotesDashboard = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);
  const [openDialog, setOpenDialog] = useState(false);
  const [notes, setNotes] = useState<NoteProps[]>([
    {
      noteId: uuid4(),
      notesTitle: 'Example title',
      note: 'test',
      createdAt: '12/12/1998',
      username: 'me',
    },
  ]);
  let noteId: string;
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleEditNote = (id: string) => {
    navigate(`${NOTE}/${noteId}`);
    setOpenDialog(true);
  };
 
  const fetchData = useCallback(async function () {
    try {
      const response = await notesService.getAllNotes();
      let notesArray = response.data.data.documents;
      setNotes(notesArray);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const autoLogout = () => {
      const user = sessionStorage.getItem('username');
      if (!user) {
        navigate(ROUTES);
      }
    };
    fetchData();
    autoLogout();
  }, [fetchData, navigate]);

  const handleDeleteNote = () => {
    alert('Request to delete note');
  };

  return (
    <div className='App'>
      <h1>Notes Dashboard</h1>
      <h2>Find all notes here</h2>

      <IconButton onClick={handleOpenDialog}>
        <Add />
      </IconButton>
      {notes.map((note, index) => {
        noteId = note.noteId;

        return (
          <Note
            key={index}
            note={note}
            handleDelete={handleDeleteNote}
            handleEdit={(id)=>handleEditNote(id)}
          />
        );
      })}
      <CreateNoteConfigModal
        open={openDialog}
        closeNoteModal={handleCloseDialog}
        noteId={id}
        onSuccess={fetchData}
      />
    </div>
  );
};

export default NotesDashboard