import React from 'react';
import { Button, OutlinedInput } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add'
import FilterIcon from '@material-ui/icons/FilterList'
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
    // root: {
    //     flexGrow: 1,
    // },
    margin: {
        margin: theme.spacing(1),
    },

    searchBar: {
        background: 'white',
        maxHeight: 42
    },

    btnContainer: {

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
        backgroundColor: 'white',
        maxHeight: 42,
        [theme.breakpoints.down('sm')]: {
            fontSize: 'small',
            width: '250px',

        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 'small',
            width: '5px',
            padding: 1,
        }
    },
    mainBar: {
        marginBottom: 8,

        [theme.breakpoints.down('sm')]: {
            spacing: 2,
            justify: 'space-between',
        },
        [theme.breakpoints.down('md')]: {
            spacing: 2,
            justify: 'space-between',
        }
    },
    smIcon: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
        [theme.breakpoints.down('xs')]: {
            display: 'block'
        }
    },
    bgText: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
        [theme.breakpoints.down('bg')]: {
            display: 'block'
        }
    }

}));


const SearchBar = ({ onClick, onClear }) => {

    const classes = useStyles();

    return (
        <Grid className={classes.mainBar} container spacing={3}
            justify="space-between"
            alignItems="center"
        >
            <Grid container item sm={8} xs={12} direction="row" >
                <Grid item sm={5} xs={12} style={{ marginRight: 16, marginBottom: 8 }}>
                    <OutlinedInput
                        className={classes.searchBar}
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon color={'action'} />
                            </InputAdornment>
                        }
                        placeholder='Search'
                        id="outlined-search" />
                </Grid>


                <Grid item container sm={6} xs={12} direction="row">
                    <Grid item sm={6} xs={5}>

                        <Button onClick={onClick} className={classes.Btn} variant='contained' size='large' style={{ marginRight: 16 }}> <span className={classes.smIcon}><SearchIcon /></span><span className={classes.bgText}>Search</span></Button>
                    </Grid>
                    <Grid item sm={6} xs={5} >

                        <Button onClick={onClear} className={classes.Btn} variant='contained' size='large'> <span className={classes.smIcon}><ClearIcon /></span><span className={classes.bgText}>Clear</span></Button>
                    </Grid>
                </Grid>

            </Grid>

            <Grid item sm={4} xs={12}>
                <Grid container
                    direction="column"
                    alignItems="center"
                >
                    <Grid item>
                        <Button
                            startIcon={<AddIcon />}
                            className={classes.addBtn}
                            variant='contained' style={{ marginBottom: 8 }}>
                            New Client
                            </Button>
                    </Grid>
                    <Grid>
                        <Button startIcon={<FilterIcon />} className={classes.filterBtn}

                            variant='outlined' >

                            show filter

                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default SearchBar
