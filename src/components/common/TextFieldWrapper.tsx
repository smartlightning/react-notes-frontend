import { FC } from 'react';
import { useField } from 'formik';
import { InputBaseProps } from '@mui/material';
import LabelWrapper from '../common/LabelWrapper';
import TextFieldWrapperStyle from './TextFieldWrapperStyle.style';

interface TextFieldWrapperProps extends InputBaseProps {
  label: string;
  name: string;
}
const TextFieldWrapper: FC<TextFieldWrapperProps> = ({
  name,
  label,
  placeholder,
  ...otherProps
}) => {
  const [field, meta] = useField(name);

  const configTextfield: InputBaseProps = {
    ...field,
    ...otherProps,
    fullWidth: true,
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
  }

  return (
    <LabelWrapper label={label} name={name}>
      <TextFieldWrapperStyle
        {...configTextfield}
        placeholder={placeholder}
        id={`input-${name}`}
      />
    </LabelWrapper>
  );
};

export default TextFieldWrapper;
