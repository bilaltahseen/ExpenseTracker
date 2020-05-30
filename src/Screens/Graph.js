import React from 'react';
import { makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Graph = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth='lg' className={classes.root}></Container>
    </React.Fragment>
  );
};

export default Graph;
