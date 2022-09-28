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
  const [notes, setNotes] = useState<NoteProps[]>([]);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleEditNote = (id: string) => {
    //navigate(`${NOTE}/${noteId}`);
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
      <Button style = {{float: 'right'}}variant='contained' onClick={logout}>Logout</Button>

      <IconButton style = {{float: 'right', paddingRight: 20}} onClick={handleOpenDialog}>
        <Add />
      </IconButton>
      <div>
        <Grid container spacing={2} style={{ flex: '1 0 0 ', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
          {notes.map((note, index) => {
            let noteId = note.noteId;
            return (
              <Grid item key={index}>
                <Note
                  note={note}
                  handleDelete={async () => {
                    await handleDeleteNote(noteId);
                    fetchData();
                  }}
                  handleEdit={async () => {
                    await handleEditNote(noteId);
                    fetchData();
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
      <CreateNoteConfigModal
        open={openDialog}
        closeNoteModal={() => { handleCloseDialog(); fetchData(); }}
        noteId={id}
        onSuccess={fetchData}
      />
    </div>
  );
};

export default NotesDashboard