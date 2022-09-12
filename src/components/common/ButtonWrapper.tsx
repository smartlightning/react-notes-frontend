import { Button, DialogActions } from '@mui/material';
import { FC } from 'react';

interface ButtonWrapperProps {
  children?: any;
}
const ButtonWrapper: FC<ButtonWrapperProps> = ({ children, ...otherProps }) => {


  return (
    <DialogActions sx={{ margin: '0px', padding: '0px' }}>
      <Button sx= {{margin: '16px 32px 12px 32px'}}
        {...otherProps}
        disableElevation
        type='submit'
        variant='contained'>
        {children}
      </Button>
    </DialogActions>
  );
};

export default ButtonWrapper;
