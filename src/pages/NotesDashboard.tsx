import { useCallback, useEffect, useState } from 'react'
import uuid4 from 'uuid4';
import { NoteProps } from '../types/noteInterface';
import NotesList from '../components/NotesList';
import { notesService } from '../services/notesService';
import {IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';
import CreateNoteConfigModal from '../components/CreateNoteConfigModal';
import { useParams } from 'react-router-dom';



const NotesDashboard = () => {
  const {id} = useParams()
 // console.log(id);
  const [openDialog, setOpenDialog] = useState(false)
  const [notes, setNotes] = useState<NoteProps[]>([{
    noteId: uuid4(),
    notesTitle: 'Example title',
    note: 'test',
    createdAt: '12/12/1998',
    username: 'me',
  }]);

  const handleOpenDialog = ()=> {
    setOpenDialog(true)
  }
  const handleCloseDialog = ()=> {
setOpenDialog(false)  
}

const fetchData = useCallback(
  async function () {
    try {
      const response =  await notesService.getAllNotes();
    let notesArray = response.data.data.documents;
    setNotes(notesArray);
    } catch (error) {
      console.log(error);
    }
  }, [id]
)

  useEffect(() => {  
    fetchData()
  }, [fetchData]);

    
      return (
        <div className='App'>
          <h1>Notes Dashboard</h1>
          <h2>Find all notes here</h2>

          <IconButton
          onClick={handleOpenDialog}>
            <Add />
          </IconButton>
          <NotesList notes={notes} />
          <CreateNoteConfigModal
          open = {openDialog}
          closeNoteModal = {handleCloseDialog}
          noteId = {id}
          onSuccess= {fetchData} />
        </div>
      );
}

export default NotesDashboard