import React from 'react';
import { makeStyles, Container } from '@material-ui/core';
import Dashboard from '../Components/Dashboard';
import { connect } from 'react-redux';
import Records from '../Components/Records';

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1, marginTop: '50px' },
}));

const Layout = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth='lg' className={classes.root}>
        <Dashboard />
        <Records records={props.currentExpenses} />
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Layout);
