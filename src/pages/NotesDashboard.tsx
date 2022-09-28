import { useCallback, useEffect, useState } from 'react'
import uuid4 from 'uuid4';
import { NoteProps } from '../types/noteInterface';
import { notesService } from '../services/notesService';
import { Button, Grid, IconButton } from '@mui/material';
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
  const logout = () => {
    sessionStorage.getItem('username');
    navigate(ROUTES);
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
    fetchData();
  }, [fetchData]);

  const handleDeleteNote = async (id: string) => {
    try {
      await notesService.deleteNote(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='App'>
      <h1>Notes Dashboard</h1>
      <h2>Find all notes here</h2>
      <Button onClick={logout}>Logout</Button>

      <IconButton onClick={handleOpenDialog}>
        <Add />
      </IconButton>
      <div style={{ marginLeft: 10 }}>
        <Grid container spacing={2} style={{ flex: '1 0 0 ' }}>
          {notes.map((note, index) => {
            noteId = note.noteId;

            return (
              <Grid item>
                <Note
                  key={index}
                  note={note}
                  handleDelete={(id) => handleDeleteNote(id)}
                  handleEdit={(id) => handleEditNote(id)}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
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