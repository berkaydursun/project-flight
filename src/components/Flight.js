import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
      
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}



const Flight = (props) => {
    const rows = props.flights
    const { cart,setCart } = useContext(GlobalContext);
    const classes = useStyles();


    

    return (
       
        <TableContainer component={Paper} data-testid="tablecontainer">
            <Table  className={classes.table} aria-label="simple table" >
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">FROM</TableCell>
                        <TableCell align="right">TO</TableCell>
                        <TableCell align="right">DATE</TableCell>
                        <TableCell align="right">PRICE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.from}</TableCell>
                            <TableCell align="right">{row.to}</TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right"><Button variant="contained" color="secondary" onClick={(e)=>(setCart(row))}>Add</Button></TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Flight;
