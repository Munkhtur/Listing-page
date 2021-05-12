
import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit'
import Edit from '@material-ui/icons/Edit';



const useStyles = makeStyles((theme) => ({
    root: {
        background: 'white',
        border: '1px solid grey',
        borderRadius: '5px'

    },
    editBtn: {
        margin: theme.spacing(1),
        color: '#4602c4',
        border: '1px solid #4602c4',
        background: 'white'
    },
}))

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.grey,
        color: theme.palette.common.black,
        fontWeight: 'bold',

    },
    body: {
        fontSize: 14,
        width: 5
    },
}))(TableCell);
const StyledTableRow
    = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

const Content = ({ clients }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <h2 className='title'>All Clients</h2>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell><input type='checkbox' /></StyledTableCell>
                            <StyledTableCell align="right">Client Name</StyledTableCell>
                            <StyledTableCell align="right">Email</StyledTableCell>
                            <StyledTableCell align="right">Phone</StyledTableCell>
                            <StyledTableCell align="right">Industry</StyledTableCell>
                            <StyledTableCell align="right">Point of Contact</StyledTableCell>
                            <StyledTableCell align="right" size='small'>Website</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clients.map((row) => {
                            return (
                                <StyledTableRow key={row.clientId}>

                                    <StyledTableCell align="left"><input type='checkbox' /></StyledTableCell>
                                    <StyledTableCell align="right">{row.clientName}</StyledTableCell>
                                    <StyledTableCell align="right">{row.clientEmail}</StyledTableCell>
                                    <StyledTableCell align="right">{row.clientWorkPhone}</StyledTableCell>
                                    <StyledTableCell align="right">{row.clientIndustry}</StyledTableCell>
                                    <StyledTableCell align="right">{row.clientPocName}</StyledTableCell>
                                    <StyledTableCell align="right">{row.clientWebsite}</StyledTableCell>
                                    <StyledTableCell align="right"><Button startIcon={<EditIcon />} className={classes.editBtn} variant='outlined'></Button></StyledTableCell>
                                </StyledTableRow>)

                        }
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default Content
