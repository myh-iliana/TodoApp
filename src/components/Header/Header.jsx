import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ListAlt as ListAltIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <ListAltIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Todos
        </Typography>
        <Button color="inherit">Change Theme</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
