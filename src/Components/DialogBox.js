import React from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from '@material-ui/core';

import { connect } from 'react-redux';

const DialogBox = (props) => {
  const [ExpenseName, setExpenseName] = React.useState(
    props.currentExpenses.filter((elem) => elem._id === props.currentId)[0]
      .ExpenseName
  );
  const [ExpenseAmount, setExpenseAmount] = React.useState(
    props.currentExpenses.filter((elem) => elem._id === props.currentId)[0]
      .ExpenseAmount
  );
  const handleClose = props.toggleDialog;

  const capital_letter = (str) => {
    str = str.toLowerCase().split(' ');

    for (var i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(' ');
  };

  const mutate = (updatedData) => {
    props.mutateExpense(
      (updatedData = {
        ExpenseName: capital_letter(ExpenseName),
        ExpenseAmount: ExpenseAmount,
      })
    );
  };

  return (
    <React.Fragment>
      <Dialog open={props.show_dialog} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Edit Record</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Type new values of expenses for the following Expense Name,
            <strong>{ExpenseName}</strong> having Expense Amount{' '}
            <strong>{ExpenseAmount}</strong>
          </DialogContentText>
          <Grid container justify='space-between' direction='row' spacing={1}>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={mutate} color='primary'>
            Update
          </Button>
        </DialogActions>
      </Dialog>
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
    toggleDialog: () => {
      dispatch({ type: 'SHOW_DIALOG' });
    },
    mutateExpense: (updatedData) => {
      dispatch({ type: 'MUTATE_EXPENSE', payload: updatedData });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogBox);
