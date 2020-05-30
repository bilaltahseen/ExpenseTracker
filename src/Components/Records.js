import React from 'react';
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: { padding: 10, backgroundColor: '#f5f6fa' },
  table: { '& th': { fontWeight: 'bold' } },
}));

const Records = (props) => {
  const classes = useStyles();
  let rows = [...props.records];
  return (
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default Records;
