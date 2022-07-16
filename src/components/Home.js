import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Fooditem from './Fooditem';
import butter_paneer from '../images/butter_paneer.png';
import handi_paneer from '../images/handi_paneer.jpg';
import MatarPaneer from '../images/MatarPaneer5.jpg';
import paneer_kolhapuri from '../images/paneer_kolhapuri.jpg';
import paneer_do_pyaza from '../images/paneer-do-pyaza.jpg';
import Paneer_Pulao from '../images/Paneer-Pulao.jpg';
import paneer_tikka_masala from '../images/paneer-tikka-masala.png';
import shahi_paneer from '../images/shahi-paneer.jpg';
import paneer_tikka from '../images/Paneer-Tikka.jpg';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const fooditems=[butter_paneer,paneer_kolhapuri,handi_paneer,
                    paneer_do_pyaza,MatarPaneer,Paneer_Pulao,paneer_tikka_masala,
                    shahi_paneer,paneer_tikka];
const food_items_name=["Butter Paneer","Paneer Kolhapuri","Handi Paneer",
                    "Paneer do Pyaza","Matar Paneer","Paneer Pulao","Paneer Tikka masala"
                    ,"Shahi Paneer","Paneer Tikka"]
const theme = createTheme();

export default function Home() {
  const navigate=useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
      navigate('/signin');
  };
  const handleSignup=(event)=>{
    event.preventDefault();
    navigate('/signup')
  }
  return (
    <ThemeProvider style={{backgroundColor:'blue'}} theme={theme} >
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Khanabazaar 
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Khanabazaar
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            “One cannot think well, love well, sleep well, if one has not dined well.”
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
             <Button variant="contained"  onClick={handleLogin}> Login</Button>
              <Button variant="outlined" onClick={handleSignup}>Signup</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
       
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Fooditem imag={fooditems[card-1]} itemname={food_items_name[card-1]}/>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
