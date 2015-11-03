import React from 'react'
import {render} from 'react-dom'
import { Router, Route, Link } from 'react-router'
import {Row,Col} from 'antd'

import{ createStore,bindActionCreators } from 'redux'
import{ Provider,connect } from 'react-redux'

import TreeNav from './components/treeNav.jsx'
import FileSymbol from './components/fileSymbol/fileSymbol.jsx'
import FileGrid from './components/fileGrid/fileGrid.jsx'

import  fileReducer  from './reducers'
import {selectDir} from './actions'

const wrap = document.querySelector('.wrapper')

let store = createStore(fileReducer)

let App = React.createClass({
  render() {
    const {actions,files} = this.props
    console.log(this.props)
    return ( <Row>
      <Col span="8">
        <TreeNav onSelect={actions.selectDir}/>
      </Col>
      <Col span="16">
        <FileGrid colNum={4} maxCol={24} files={files}/>
      </Col>
    </Row>)
  }
})
function mapStateToProps(state) {
  return {
    files: state.files
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({selectDir}, dispatch)
  }
}

let ConnectApp = connect(mapStateToProps,mapDispatchToProps)(App)


render(
  <Provider store={store}>
    <ConnectApp />
  </Provider>
  , wrap)


