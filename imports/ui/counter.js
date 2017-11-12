import React from 'react';
import { connect } from 'react-redux'
import { increaseCounter, decreaseCounter } from '../redux/actions';

const Counter = ({ counter, onIncClick, onDecClick }) => (
  <div>
    <h1>Counter: {counter}</h1>
    <button onClick={() => onIncClick()}>Inc</button>
    <button onClick={() => onDecClick()}>Dec</button>
  </div>
)

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncClick: () => {
      dispatch(increaseCounter());
    },
    onDecClick: () => {
      dispatch(decreaseCounter());
    }
  }
}

const CounterDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default CounterDisplay