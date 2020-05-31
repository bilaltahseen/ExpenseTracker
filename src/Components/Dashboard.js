import React from 'react';
import { makeStyles, Paper, TextField, Button, Grid } from '@material-ui/core';

import moment from 'moment';

import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  body: { padding: 10, backgroundColor: '#f5f6fa' },
  expenseInput: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();
  const capital_letter = (str) => {
    str = str.toLowerCase().split(' ');

    for (var i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(' ');
  };
  const [ExpenseName, setExpenseName] = React.useState('');
  const [ExpenseAmount, setExpenseAmount] = React.useState(0);

  const addRecord = () => {
    if (ExpenseName === '' || ExpenseAmount === 0) {
      return;
    } else {
      const record = {
        _id: Array(2)
          .fill(null)
          .map(() => Math.random().toString(36).substr(2))
          .join(''),
        ExpenseName: capital_letter(ExpenseName),
        ExpenseAmount: ExpenseAmount,
        currentDate: moment().format('lll'),
      };
      props.addRecords(record);
      setExpenseName('');
      setExpenseAmount(0);
    }
  };

  return (
    <React.Fragment>
      <h3>Add Records</h3>
      <Paper className={classes.body} elevation={3}>
        <Grid container justify='space-between' direction='row' spacing={3}>
          <Grid item xs={9}>
            <TextField
              onChange={(event) => setExpenseName(event.target.value)}
              fullWidth
              variant='outlined'
              label='Expense Name'
              value={ExpenseName}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              onChange={(event) => setExpenseAmount(+event.target.value)}
              variant='outlined'
              label='Amount'
              type='number'
              value={ExpenseAmount}
            />
          </Grid>
        </Grid>
        <br />
        <Button
          style={{ width: '25%' }}
          onClick={addRecord}
          color='primary'
          variant='contained'
        >
          ADD
        </Button>
      </Paper>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addRecords: (currentRecord) => {
      dispatch({ type: 'ADD_RECORD', payload: currentRecord });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
