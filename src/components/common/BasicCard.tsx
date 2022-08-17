import { DeleteOutlined, EditOutlined } from '@mui/icons-material';
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import { FC } from 'react';

interface CardInterface {
  title: string,
  date: string;
  author: string;
  text: string;
  handleDelete: () => void;
  handleEdit: () => void;
}
const BasicNote: FC<CardInterface> = ({ date, author, title,  text, handleDelete, handleEdit }) => {
  return (
    <div style= {{textAlign: 'left'}}>
      <Card sx={{ maxWidth: 300, backgroundColor: '#F7ECDE' }}>
        <CardContent>
          <Typography variant='h5' component='div'>
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            Date: {date}
          </Typography>
          <Typography variant='body2'>
            Author: {author}
            <br />
            {text}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={handleDelete} size='small'>
            <DeleteOutlined />
          </IconButton>
          <IconButton onClick={handleEdit} size='small'>
            <EditOutlined />
          </IconButton>

        </CardActions>
      </Card>
    </div>
  );
};

export default BasicNote;
