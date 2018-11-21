'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
require('./main.scss')

ReactDOM.render(
  <App />,
  document.querySelector('[data-js="app"]')
)

module.hot.accept()
