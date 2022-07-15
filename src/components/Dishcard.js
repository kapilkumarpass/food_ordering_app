import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid'
import { CardMedia } from '@mui/material';
import paneer_tikka from '../images/Paneer-Tikka.jpg';
export default function Dishcard() {
  return (
    <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"


>
    <Box sx={{ flexGrow: 2 }}  style={{ minWidth: '75%' ,  marginBottom:"5px"}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography> */}
          <CardMedia
        component="img"
        width="100"
        height="100"
        // sx={{
        //     // 16:9
        //     pt: '56.25%',
        // }}
        image={paneer_tikka}
        alt="random"
        />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </Grid>
  );
}
