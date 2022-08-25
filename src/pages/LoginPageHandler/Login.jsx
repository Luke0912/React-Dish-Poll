import { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { configuration } from '../../configs';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  let { handleAuth, handleId, ratedDish } = useContext(AuthContext);
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    username: '',
    password: '',
  });

  const handleInput = (e) => {
    const val = e.target.value;
    setDetails({
      ...details,
      [e.target.name]: val,
    });
  };

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const resp = await axios.get(configuration.BASE_URL.concat('/users'));
      if (resp.status !== 200) {
        throw new Error('Unable to login');
      }
      let user = {};
      for (var i = 0; i < resp.data.length; i++) {
        if (
          resp.data[i].username === details.username &&
          resp.data[i].password === details.password
        ) {
          user = resp.data[i];
          break;
        }
      }
      if (!user.id) {
        throw new Error('Unable to login. Please Check the Login Credentials');
      }
      handleAuth(true);
      handleId(user.id);
      navigate('/home');
      ratedDish.splice(0,ratedDish.length)
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth='sm'>
        <Box className={styles.sx}>
          <Container className={styles.input}>
            <TextField
              id='standard-basic'
              label='Username'
              variant='standard'
              onChange={handleInput}
              name='username'
            />
            <TextField
              id='standard-basic'
              label='Password'
              variant='standard'
              onChange={handleInput}
              name='password'
            />
          </Container>
          <Button variant='outlined' onClick={submitHandler}>
            Login
          </Button>
        </Box>
      </Container>
    </>
  );
};
