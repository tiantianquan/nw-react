import React from 'react'
import {render} from 'react-dom'
import { Router, Route, Link } from 'react-router'
import {Row,Col} from 'antd'

import{ createStore } from 'redux'
import{ Provider} from 'react-redux'

import TreeNav from './components/treeNav.jsx'
import FileSymbol from './components/fileSymbol/fileSymbol.jsx'
import FileGrid from './components/fileGrid/fileGrid.jsx'

import  fileReducer  from './reducers'

const wrap = document.querySelector('.wrapper')

let store = createStore(fileSys)

let App = React.createClass({
  render() {
    return ( <Row>
      <Col span="8">
        <TreeNav />
      </Col>
      <Col span="16">
        <FileGrid colNum={2} maxCol={24} files={[{fileName:1},{fileName:2}]}/>
      </Col>
    </Row>)
  }
})


render(
  <Provider store={store}>
    <App />
  </Provider>
  , wrap)


