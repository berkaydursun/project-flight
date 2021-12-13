import React,{useRef,useContext} from 'react';
import { GlobalContext } from '../GlobalContext';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image';
import FlightList from "./FlightList";
import { Link } from 'react-router-dom';




 function Login() {
    const { users,setUsers } = useContext(GlobalContext);

    const useStyles = makeStyles({
      
        mw:{
            width:"100%",
            marginTop:30,
        },
        box:{
            // background:'rgba(193, 76, 76, 0.2)',
            border:10,
            borderColor:'red',
            padding:150
        }
    });
    const classes = useStyles();

    console.log(users);
    
    return (
        <div data-testid="login">

            <Container className={classes.box} maxWidth="sm">
            <Grid item xs={12}>
            <Image src="Logo.png" />
            </Grid>
            <Grid item xs={12}>
            <TextField  className={classes.mw} id="standard-basic" label="ID" variant="standard" />
            </Grid>
            <Grid item xs={12}>
            <TextField  className={classes.mw} id="standard-basic" label="Password" type="password" variant="standard"/>
            </Grid>
            <Grid item xs={12}>
            <Button className={classes.mw} variant="outlined" size="large" color="primary" component={Link} to={'/flightList'}>Login</Button>
            </Grid>
            <Grid item xs={12}>

            <Button className={classes.mw} variant="outlined" size="large" color="secondary" component={Link} to={'/register'}>Register</Button>
            </Grid>

             </Container>
        
          
        </div>
    )
}

export default Login;
