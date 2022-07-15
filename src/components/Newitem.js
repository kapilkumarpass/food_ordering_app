import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import {Button} from '@mui/material';
import { Grid } from '@mui/material';
export default function Newitem(props) {
  const theme = useTheme();

  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    
  
  >
    <Card sx={{ display: 'flex' }} style={{ width: '75%' , height:'30%',  marginBottom:"5px"}}>
    <CardMedia
        component="img"
        style={{height:'20vh'}}
        sx={{ width: 151}}
        image={props.imag}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" style={{ fontSize: '1.2em' }}>
            {props.itemname}
          </Typography>
          {/* <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography> */}
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          {/* <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton> */}
          <Button
              type="submit"
              
              variant="contained"
              // sx={{ mt: 3, mb: 2 }}
              style={{width:'1%' ,fontSize:'50%' }}
            >
              order
            </Button>
          {/* <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton> */}
        </Box>
      </Box>
      
    </Card>
    </Grid>
  );
}
