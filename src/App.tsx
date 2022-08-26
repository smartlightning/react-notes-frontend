import { useState } from 'react';
import './App.css';
import NotesList from './pages/NotesList';
import uuid4 from 'uuid4';
import { NoteProps } from './types/noteInterface';

function App() {
  
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

export default App;
