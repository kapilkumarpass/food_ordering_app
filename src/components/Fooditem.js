import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
export default function Fooditem(props) {
  return (
    <Card 
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      
        >
        <CardMedia
        component="img"
        height="200rem"
        // sx={{
        //     // 16:9
        //     pt: '56.25%',
        // }}
        
        image={props.imag}
        alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
            {props.itemname}
        </Typography>
        
        </CardContent>
        <CardActions>
        <CurrencyRupeeIcon/> 50
       
        </CardActions>
    </Card>
  )
}
