import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'

import store from './store'

const renderApp = () => {
  render(
    <App store={store}/>,
    document.getElementById('app')
  )
}

store.subscribe(renderApp)
renderApp()
