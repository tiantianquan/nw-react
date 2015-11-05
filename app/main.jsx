import React from 'react'
import {render} from 'react-dom'
import { Router, Route, Link } from 'react-router'

import{ Provider,connect } from 'react-redux'
import {createStore} from 'redux'

import rootReducer from './reducers/reducers'
import App from './containers/app.jsx'


const wrap = document.querySelector('.wrapper')

let store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>
  , wrap)


