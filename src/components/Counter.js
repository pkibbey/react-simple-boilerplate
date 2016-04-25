import React, { Component, PropTypes } from 'react'
import styles from './Counter.css'

export default class Counter extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render () {
    const { store } = this.props

    return (
      <div>
        <h1 className={styles.counter}>Counter {store.getState().counter}</h1>
        <button onClick={() => {
          store.dispatch({
            type: 'INCREMENT'
          })
        }} className={styles.button}>
          Add
        </button>
        <button onClick={() => {
          store.dispatch({
            type: 'DECREMENT'
          })
        }} className={styles.button}>
          Subtract
        </button>
      </div>
    )
  }
}
