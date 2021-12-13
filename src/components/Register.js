import React,{ useContext ,useRef} from 'react';
import { GlobalContext } from '../GlobalContext';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import  { Redirect } from 'react-router-dom'


function Register() {
    const idRef = useRef('') //creating a refernce for TextField Component
    const passwordRef = useRef('') //creating a refernce for TextField Component



    const { users,setUsers } = useContext(GlobalContext);

    const sendValue = () => {
        const newUser = {
            id:idRef.current.value,
            password:passwordRef.current.value
        }
        users.push(newUser);
        return window.location.href="/";
    }   



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

    return (
        <div>

                        <Container className={classes.box} maxWidth="sm">
                        <Grid item xs={12}>
                        <TextField  className={classes.mw} inputRef={idRef} id="standard-basic" label="ID" variant="standard" />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField  className={classes.mw} id="standard-basic" label="Name" variant="standard" />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField  className={classes.mw} id="standard-basic" label="Surname" variant="standard" />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField  className={classes.mw} id="standard-basic" label="E-Mail" variant="standard" type="email"/>
                        </Grid>
                        <Grid item xs={12}>
                        <TextField  className={classes.mw} inputRef={passwordRef} id="standard-basic" label="Password" type="password" variant="standard"/>
                        </Grid>
                     
                 
                        <Grid item xs={12}>

                        <Button className={classes.mw} variant="outlined" size="large" color="secondary" onClick={sendValue} >Register</Button>
                        </Grid>

                        </Container>


        </div>
    )
}

export default Register;