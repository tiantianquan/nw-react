import React from 'react'
import {render} from 'react-dom'
import { Router, Route, Link } from 'react-router'

import{ Provider,connect } from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers/reducers'
import App from './containers/app.jsx'

import db from './util/db.js'


const wrap = document.querySelector('.wrapper')

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
let store = createStoreWithMiddleware(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>
  , wrap)


