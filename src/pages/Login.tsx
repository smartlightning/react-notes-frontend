
import { Button, Grid, Paper, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { NOTES } from '../Router';
import { authService } from '../services/authService';
import { LoginProps } from '../types/loginInterface';
import { AuthData } from '../types/authenticationInterface';

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
  const authenticateUser = (values: AuthData) => {
    //post request user login
    authService.login(values).then((res) => console.log(res.data));
  };
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    // validationSchema: validationSchema,
    onSubmit: (values: LoginProps) => {
      authenticateUser(values);

      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Grid>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id='username'
          name='username'
          label='Username'
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
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
        {/* <Link to={NOTES}> */}
          <Button color='primary' variant='contained' fullWidth type='submit'>
            Submit
          </Button>
        {/* </Link> */}
      </form>
    </Grid>
  );
};

export default Login