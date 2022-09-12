import { FormControl, InputLabel } from '@mui/material';
import { FC } from 'react';

interface LabelWrapperProps {
  name: string;
  label: string;
  children: any;
}

const LabelWrapper: FC<LabelWrapperProps> = ({ name, label, children }) => {
  return (
    <FormControl variant='standard' fullWidth>
      {label && (
        <InputLabel shrink htmlFor={`Label-${name}`}>
          <div>{label}</div>
        </InputLabel>
      )}

      {children}
    </FormControl>
  );
};

export default LabelWrapper;
