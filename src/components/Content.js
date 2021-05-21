
import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit'
import FilterListIcon from '@material-ui/icons/FilterList';



const useStyles = makeStyles((theme) => ({
    root: {
        // background: 'white',
        // border: '1px solid grey',
        // borderRadius: '5px',
        width: '100%'

    },
    paper: {
        width: "100%",
        marginBottom: theme.spacing(2),
    },
    editBtn: {
        margin: theme.spacing(1),
        color: '#4602c4',
        border: '1px solid #4602c4',
        background: 'white'
    },
    filterIcon: {
        margin: theme.spacing(2)
    },
    pageSummary: {
        marginBottom: 10
    },
    table: {
        minWidth: 750
    }
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
            '&:nth-of-type(even)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

const Content = ({ clients }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography
                className={classes.pageSummary}
                color="textSecondary"
                variant="subtitle2"

            >
                {clients.length} Record{clients.length > 1 && 's'} found. Page 1 of 1
            </Typography>




            <Paper className={classes.paper}>
                <div className="title">

                    <h2 className='title'>All Clients</h2>
                    <FilterListIcon className={classes.filterIcon} />
                </div>
                <TableContainer >
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell><input type='checkbox' /></StyledTableCell>
                                <StyledTableCell align="left">Client Name</StyledTableCell>
                                <StyledTableCell align="left">Email</StyledTableCell>
                                <StyledTableCell align="left">Phone</StyledTableCell>
                                <StyledTableCell align="left">Industry</StyledTableCell>
                                <StyledTableCell align="left">Point of Contact</StyledTableCell>
                                <StyledTableCell align="left" size='small'>Website</StyledTableCell>
                                <StyledTableCell align="left" size='small'></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {clients.map((row) => {
                                return (
                                    <StyledTableRow key={row.clientId}>

                                        <StyledTableCell align="left"><input type='checkbox' /></StyledTableCell>
                                        <StyledTableCell align="left">{row.clientName}</StyledTableCell>
                                        <StyledTableCell align="left">{row.clientEmail}</StyledTableCell>
                                        <StyledTableCell align="left">{row.clientWorkPhone}</StyledTableCell>
                                        <StyledTableCell align="left">{row.clientIndustry}</StyledTableCell>
                                        <StyledTableCell align="left">{row.clientPocName}</StyledTableCell>
                                        <StyledTableCell align="left">{row.clientWebsite}</StyledTableCell>
                                        <StyledTableCell align="left"><Button startIcon={<EditIcon />} className={classes.editBtn} variant='outlined'></Button></StyledTableCell>
                                    </StyledTableRow>)

                            }
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div >
    )
}

export default Content
