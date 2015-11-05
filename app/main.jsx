import React from 'react'
import {render} from 'react-dom'
import { Router, Route, Link } from 'react-router'

import{ Provider,connect } from 'react-redux'
import {createStore} from 'redux'

import fileReducer from './reducers/reducers'
import App from './containers/app.jsx'


const wrap = document.querySelector('.wrapper')

let store = createStore(fileReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>
  , wrap)


