import React from 'react';
import {
  makeStyles,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@material-ui/core';

import DialogBox from '../Components/DialogBox';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1, marginTop: '50px' },
}));

const Edit = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  let rows = [...props.currentExpenses];
  return (
    <React.Fragment>
      <Container maxWidth='lg' className={classes.root}>
        <React.Fragment>
          <h3>Current Records</h3>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Entries</TableCell>
                  <TableCell>Expense Name</TableCell>
                  <TableCell align='right'>Expense Amount&nbsp;(Rs)</TableCell>
                  <TableCell align='right'>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={row._id}>
                    <TableCell scope='row'>{index + 1}</TableCell>
                    <TableCell component='th' scope='row'>
                      {row.ExpenseName}
                    </TableCell>
                    <TableCell align='right'>{row.ExpenseAmount}</TableCell>
                    <TableCell align='right'>{row.currentDate}</TableCell>
                    <TableCell align='right'>
                      <Button
                        onClick={() => {
                          props.toggleDialog(row._id);
                        }}
                        variant='contained'
                        color='primary'
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </React.Fragment>
        {props.show_dialog ? <DialogBox /> : ''}
      </Container>
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
    toggleDialog: (id) => {
      dispatch({ type: 'SHOW_DIALOG', payload: id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
