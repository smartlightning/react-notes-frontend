import { FC } from 'react';
interface NoteInterface {
  handleDeleteNote: () => void;
}

const Note: FC<NoteInterface> = ({ handleDeleteNote }) => {
  return <div>Note</div>;
};

export default Note;
