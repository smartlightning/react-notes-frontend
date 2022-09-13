
import { Button, Grid, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { authService } from '../services/authService';
import { LoginProps } from '../types/loginInterface';
import { AuthData } from '../types/authenticationInterface';
import { useNavigate } from 'react-router-dom';
import { NOTES } from '../Router';

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
  const navigate = useNavigate()
  const authenticateUser = async (values: AuthData) => {
    //post request user login
    await authService.login(values).then((res) => {
      sessionStorage.setItem('token', res.data.jwt);
      sessionStorage.setItem('username', res.data.username)
    });
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    // validationSchema: validationSchema,
    onSubmit: (values: LoginProps) => {
      authenticateUser(values);
      navigate(`${NOTES}`)
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