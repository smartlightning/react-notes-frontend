import { FC } from 'react';
import BasicNote from './common/BasicCard';
interface NoteInterface {
  handleDeleteNote: () => void;
  handleEdit: ()=> void;
}

const Note: FC<NoteInterface> = ({ handleDeleteNote, handleEdit }) => {
  return <div>
    <BasicNote  title= 'Note title' author='Chris' date='today' handleDelete={handleDeleteNote} text='New Note' handleEdit= {handleEdit} />
  </div>;
};

export default Note;
