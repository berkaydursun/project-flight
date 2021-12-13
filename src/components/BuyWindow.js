import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {GlobalContext} from "../GlobalContext";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop:100,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        fontWeight:"bold",
        textAlign:"center",
    },
    pos: {
        marginBottom: 12,
    },
    button:{
        width:"100%",
    },
    text:{
        marginBottom:2,
        textAlign:"center",
    }
});
const BuyWindow = () => {
    const classes = useStyles();

    const {flights,setFlights} = useContext(GlobalContext);
    const {balance,setBalance} = useContext(GlobalContext);

    const {cart,setCart} = useContext(GlobalContext);
    
   
    return (
        <Card className={classes.root} data-testid="card">
            <CardContent>
                <Typography className={classes.title}  gutterBottom>
                    Buy Window
        </Typography>
                <Typography className={classes.text} variant="h5" component="h2">
                 From : {cart.from}
        </Typography>
                <Typography className={classes.text} variant="h5" component="h2">
                 To : {cart.to}
        </Typography>
                <Typography className={classes.text} variant="h5" component="h2">
                  Date : {cart.date}
         
                </Typography>
                <Typography className={classes.text} variant="h5" component="h2">
                  Price : {cart.price}
         
                </Typography>

            </CardContent>
            <CardActions>
                <Button className={classes.button} variant="contained" size="medium" color="primary"  onClick={(e)=>(setBalance(balance > 0  ?  balance - cart.price : alert('No Money') ))}>Buy</Button>
            </CardActions>
        </Card>
    )


}

export default BuyWindow
