
import { Button, Grid, Paper, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { NOTES } from '../Router';
import { LoginProps } from '../types/loginInterface';

/* 
const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
}); */
const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    // validationSchema: validationSchema,
    onSubmit: (values: LoginProps) => {
      
    //  alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Grid>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id='email'
          name='email'
          label='Email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id='password'
          name='password'
          label='Password'
          type='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Link to={NOTES}>
          <Button color='primary' variant='contained' fullWidth type='submit'>
            Submit
          </Button>
        </Link>
      </form>
    </Grid>
  );
}

export default Login