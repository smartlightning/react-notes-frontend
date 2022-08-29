import { useState } from 'react'
import uuid4 from 'uuid4';
import { NoteProps } from '../types/noteInterface';
import NotesList from '../components/NotesList';



const NotesDashboard = () => {

    const [notes, setNotes] = useState<NoteProps[]>([{
        id: uuid4(),
        title: 'Example title',
        text: 'Example note',
        date: '12/12/1998',
        author: 'me',
      }]);
    
      return (
        <div className='App'>
          <NotesList notes={notes}/>
        </div>
      );
}

export default NotesDashboard