import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add'
import FilterIcon from '@material-ui/icons/FilterList'
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    margin: {
        margin: theme.spacing(1),
    },

    searchBar: {
        background: 'white',
    },

    addBtn: {
        backgroundColor: '#4602c4',
        margin: theme.spacing(1),
        color: 'white',
        fontSize: '15px'
    },
    filterBtn: {
        margin: theme.spacing(1),
        color: '#4602c4',
        border: '1px solid #4602c4',
        background: 'white'
    },
    Btn: {
        margin: theme.spacing(1),
        backgroundColor: 'white'
    }

}));

let textInput = React.createRef();

const SearchBar = ({ onClick, onClear, clientNum }) => {

    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={8} >
                <form onSubmit={onClick}>
                    <h1>Clients</h1>
                    <TextField
                        ref={textInput}
                        className={classes.searchBar}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon color={'action'} />
                                </InputAdornment>
                            ),
                        }}
                        id="outlined-search" type="search" variant="outlined" placeholder='Search' />
                    <Button type='submit' className={classes.Btn} variant='contained' size='large'> Search</Button>
                    <Button onClick={onClear} className={classes.Btn} variant='contained' size='large'> Clear</Button>
                </form>
                <p className='small'> {clientNum} Record{clientNum > 1 && 's'} found. Page 1 of 1</p>
            </Grid>
            <Grid container
                direction="column"
                justify="flex-end"
                alignItems="flex-end"
                className={classes.right} item xs={4}>
                <Button startIcon={<AddIcon />} className={classes.addBtn} variant='contained' size='large'>New Client</Button>
                <Button startIcon={<FilterIcon />} className={classes.filterBtn} variant='outlined' size='large'>show filter</Button>
            </Grid>
        </Grid >
    )
}

export default SearchBar
