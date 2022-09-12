import { DeleteOutlined, EditOutlined } from '@mui/icons-material';
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { NoteProps } from '../../types/noteInterface';

interface NotesInterface {
  note: NoteProps;
  handleDelete: (id: string) => void;
  handleEdit: (id: string) => void;
}

const Note: FC<NotesInterface> = ({ note, handleDelete, handleEdit }) => {
  return (
    <div style={{ textAlign: 'left' }}>
      <Card sx={{ maxWidth: 300, backgroundColor: '#F7ECDE' }}>
        <CardContent>
          <Typography variant='h5' component='div'>
            {note.notesTitle}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            Date: {note.createdAt}
          </Typography>
          <Typography variant='body2'>
            Author: {note.username}
            <br />
            {note.note}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={() => handleDelete(note.noteId)} size='small'>
            <DeleteOutlined />
          </IconButton>
          <IconButton onClick={() => handleEdit(note.noteId)} size='small'>
            <EditOutlined />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Note;
