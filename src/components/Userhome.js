import React from 'react'
import Dishcard from './Dishcard'
import Newitem from './Newitem';
import { AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Typography from '@mui/material/Typography';
import {Avatar} from '@mui/material';
import {Tooltip} from '@mui/material';
import IconButton from '@mui/material/IconButton'
import {Button} from '@mui/material';
import {Box} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import butter_paneer from '../images/butter_paneer.png';
import handi_paneer from '../images/handi_paneer.jpg';
import MatarPaneer from '../images/MatarPaneer5.jpg';
import paneer_kolhapuri from '../images/paneer_kolhapuri.jpg';
import paneer_do_pyaza from '../images/paneer-do-pyaza.jpg';
import Paneer_Pulao from '../images/Paneer-Pulao.jpg';
import paneer_tikka_masala from '../images/paneer-tikka-masala.png';
import shahi_paneer from '../images/shahi-paneer.jpg';
import paneer_tikka from '../images/Paneer-Tikka.jpg';
import {Container} from '@mui/material';
import { Grid } from '@material-ui/core';
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const fooditems=[butter_paneer,paneer_kolhapuri,handi_paneer,
  paneer_do_pyaza,MatarPaneer,Paneer_Pulao,paneer_tikka_masala,
  shahi_paneer,paneer_tikka];
const food_items_name=["Butter Paneer","Paneer Kolhapuri","Handi Paneer",
  "Paneer do Pyaza","Matar Paneer","Paneer Pulao","Paneer Tikka masala"
  ,"Shahi Paneer","Paneer Tikka"]
export default function Userhome() {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          > */}
            {/* <MenuIcon /> */}
          {/* </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Khana-bazaar
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Container style={{marginTop:100}}>
          {/* End hero unit */}
          <Grid>
            {cards.map((card) => (
              <Grid>
                <Newitem imag={fooditems[card-1]} itemname={food_items_name[card-1]}/>
                <br></br>
              </Grid>
            ))}
          </Grid>
        </Container>
    </div>
  )
}
