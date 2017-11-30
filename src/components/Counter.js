import React from 'react'
import { connect } from 'react-redux'
import { ACTION_TYPE } from '../connectors/redux/reducers/counter'

const Counter = ({ count, increment, decrement, reset }) => (
  <div>
    <p>counter : {count}</p>
    <button onClick={increment} >Increment</button>
    <button onClick={decrement} >Decrement</button>
    <button onClick={reset} >Reset</button>
  </div>
)

const CounterConnected = connect(
  ({ counter: { count } }) => ({ count }),
  dispatch => ({
    increment: () => dispatch({ type: ACTION_TYPE.INCREMENT }),
    decrement: () => dispatch({ type: ACTION_TYPE.DECREMENT }),
    reset: () => dispatch({ type: ACTION_TYPE.RESET }),
  }),
)(Counter)

export default CounterConnected
