import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './Main.module.css';
import SidebarContainer from '../Sidebar/SidebarContainer';
import Todos from '../Todos/Todos';
import SliderContainer from '../Slider/SliderContainer';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <Container className={styles.container}>
      <SliderContainer />
      <main className={styles.main}>
        <SidebarContainer classes={classes} />
        <Todos classes={classes} />
      </main>
    </Container>
  );
};

export default Main;
