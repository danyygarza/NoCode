
import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./Signup.css"
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';



  
  const theme = createTheme();
  


  export default function SignUp() {

    const[user, setUser] = useState({
        email:'',
        password: '',
    });
    const {signup} = useAuth();
    const [error, setError] = useState();
    const navigate = useNavigate();

    const handleChange=({target:{name, value}}) => {
        setUser({...user, [name]: value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try{
            signup(user.email, user.password);
            navigate('/inicio')
        }catch (error){
            setError(error.message);
        }
    }
    return (
      <ThemeProvider theme={theme} >
        <Container component="main" maxWidth="xs" className="container">
          <CssBaseline />
          <Box 
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" >
              Sign up
            </Typography>
            {error && <p>{error}</p>}
            <Box component="form"  sx={{ mt: 3 }} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="email"
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Link to='/inicio'>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              </Link>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link href='/login' variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }