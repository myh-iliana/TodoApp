import React from 'react';
import { IconButton, Tooltip, AppBar, Toolbar, InputBase } from '@material-ui/core';
import { MenuOpen as MenuOpenIcon, Search as SearchIcon, ArrowForwardIos } from '@material-ui/icons';
import { makeStyles, fade } from '@material-ui/core/styles';

import s from './Top.module.scss';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '400px',
    },
  },
}));

const Top = ({ toggleMenu, menuIsVisible }) => {
  const classes = useStyles();

  const toggleMenuVisibility = () => toggleMenu();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Tooltip title="Hide/open left menu" enterDelay={800}>
          <IconButton
            onClick={toggleMenuVisibility}
            className={s.menuButton}
            color="inherit"
            component="span"
          >
            {menuIsVisible ? <MenuOpenIcon /> : <ArrowForwardIos />}
          </IconButton>
        </Tooltip>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Top;
