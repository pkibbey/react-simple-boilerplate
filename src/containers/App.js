// Using the combined and shortened bracket notation on import
import React, { Component, PropTypes } from 'react'

// Styles loaded fom CSS files named the same as the Component
import styles from './App.css'

// Import objects from the components index, making it easier to manage
import { Counter }  from '../components'

export default class App extends Component {
  // PropTypes are great
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render () {
    // Always render props like this, it makes the code much less cluttered
    const { store } = this.props

    return (
      <div className={styles.wrapper}>
        <Counter store={store}/>
      </div>
    )
  }
}
