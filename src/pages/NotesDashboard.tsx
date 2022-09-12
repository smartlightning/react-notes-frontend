import { useEffect, useState } from 'react'
import uuid4 from 'uuid4';
import { NoteProps } from '../types/noteInterface';
import NotesList from '../components/NotesList';
import { notesService } from '../services/notesService';



const NotesDashboard = () => {

  const [notes, setNotes] = useState<NoteProps[]>([{
    noteId: uuid4(),
    notesTitle: 'Example title',
    note: 'test',
    createdAt: '12/12/1998',
    username: 'me',
  }]);
  useEffect(() => {
    async function fetchData()  {
      
      const response =  await notesService.getAllNotes();
      let notesArray = response.data.data.documents;
      setNotes(notesArray);
    }
    fetchData()
    return () => {};
  }, []);

    
      return (
        <div className='App'>
          <NotesList notes={notes}/>
        </div>
      );
}

export default NotesDashboard