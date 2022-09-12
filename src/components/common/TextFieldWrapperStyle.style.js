import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
const TextFieldWrapperStyle = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3)
  },
  '&.MuiInputLabel-root': {fontSize: 30},
  '& .MuiInputBase-input': {
    borderRadius: 0,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#2b2b2b',
    border: '1px solid #ced4da',
    height: '19px',
    fontSize: 14,
    padding: '7.5px 12px',
    
    '&:focus': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default TextFieldWrapperStyle;