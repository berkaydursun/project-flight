import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Nav = () => {

    const { balance } = useContext(GlobalContext);
    const classes = useStyles();
    
    return (
        <div>

            <AppBar position="static" data-testid="navbar">
                <Container>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <FlightTakeoffIcon/> Apron Fly
                    </Typography>
                    <Typography variant="h6">
                       Balance : {balance}
                    </Typography>
                    <Typography>

                    <Button variant="contained" size="medium" color="secondary" component={Link} to={'/'}>Quit</Button>
                    </Typography>


                </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}
export default Nav;