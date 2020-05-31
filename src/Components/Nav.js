import React from 'react';
import { makeStyles, AppBar, Toolbar, Button, Box } from '@material-ui/core';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {},
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexGrow: 1,
    '& button': {
      margin: '0 10px',
    },
  },
}));

const Nav = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position='static'>
        <Toolbar>
          <h1>Expense Tracker</h1>
          <Box className={classes.menu} component='div'>
            <Button
              onClick={() => props.history.push('/')}
              variant='outlined'
              color='inherit'
            >
              <strong>Add Records</strong>
            </Button>
            <Button
              onClick={() => props.history.push('/edit')}
              variant='outlined'
              color='inherit'
            >
              <strong>Edit Records</strong>
            </Button>
            <Button
              onClick={() => props.history.push('/graph')}
              variant='outlined'
              color='inherit'
            >
              <strong>View Graph</strong>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav));
