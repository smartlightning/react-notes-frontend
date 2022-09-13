import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { notesService } from '../services/notesService';
import { NoteProps } from '../types/noteInterface';
import AddNote from './AddNote';

interface CreateNoteConfigModalProps {
  open: boolean;
  noteId?: string;
  closeNoteModal: () => void;
  onSuccess?: Function;
}

const CreateNoteConfigModal: FC<CreateNoteConfigModalProps> = ({
  open,
  noteId,
  closeNoteModal,
  onSuccess,
}) => {
  const [noteData, setNoteData] = useState<NoteProps | null>();

  useEffect(() => {
    if (noteId) {
      console.log(noteId);
      notesService.getSingleNote(noteId).then((res) => {
        console.log(res.data);
        setNoteData(res.data);
        
      });
    }

    return () => {
      setNoteData(null);
    };
  }, [noteId]);
  const handleClose = () => {
    closeNoteModal();
  };

  return (
    <Dialog fullWidth open={open} onClose={handleClose} scroll='paper'>
      <DialogTitle>{noteId ? 'Notiz bearbeiten' : 'Neue Notiz'}</DialogTitle>
      <DialogContent>
       
          <AddNote
            onSuccess={onSuccess}
            closeNoteModal={closeNoteModal}
            note={noteData}
          />
        
      </DialogContent>
    </Dialog>
  );
};

export default CreateNoteConfigModal;
