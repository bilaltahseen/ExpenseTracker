import React from 'react';
import { makeStyles, Container } from '@material-ui/core';
import {
  LineChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Line,
  Label,
  LabelList,
  YAxis,
} from 'recharts';

import { connect } from 'react-redux';
const useStyles = makeStyles((theme) => ({
  root: { padding: 20 },
}));

const Graph = (props) => {
  const classes = useStyles();
  const data = [...props.currentExpenses];

  return (
    <React.Fragment>
      <Container maxWidth='lg' className={classes.root}>
        <center>
          <LineChart
            width={1024}
            height={400}
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <YAxis dataKey='ExpenseAmount'>
              <Label
                value='Expense Amount'
                angle={-90}
                offset={0}
                position='insideLeft'
              />
            </YAxis>
            <XAxis dataKey='currentDate'>
              <Label value='Date' offset={0} position='insideBottom' />
            </XAxis>
            <Tooltip />

            <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />

            <LabelList dataKey='ExpenseName' position='top' />
            <Line
              type='monotone'
              dataKey='ExpenseAmount'
              stroke='#ff7300'
              yAxisId={0}
            />
          </LineChart>
          {data.length > 0 ? (
            <p style={{ fontSize: '1.3em' }}>
              <strong>Total Expense</strong> =
              {data
                .map(({ ExpenseAmount }) => ExpenseAmount)
                .reduce((total, num) => total + num)}{' '}
              Rs
            </p>
          ) : (
            ''
          )}
        </center>
      </Container>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps)(Graph);
