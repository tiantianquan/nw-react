import React from 'react'
import {render} from 'react-dom'
import { Router, Route, Link } from 'react-router'
import {Row,Col} from 'antd'

import{ createStore,bindActionCreators } from 'redux'
import{ Provider,connect } from 'react-redux'

import TreeNav from '../components/treeNav.jsx'
import FileSymbol from '../components/fileSymbol/fileSymbol.jsx'
import FileGrid from '../components/fileGrid/fileGrid.jsx'
import SelectedGrid from '../components/selectedGrid/selectedGrid.jsx'

import actions from '../actions/actions'


let App = React.createClass({
  render() {
    const {actions,files,selectedFiles} = this.props
    return ( <Row>
      <Col span="8">
        <TreeNav onSelect={actions.selectDir}/>
      </Col>
      <Col span="12">
        <FileGrid colNum={4} onAdd={actions.addFileAsync}  maxCol={24} files={files}/>
      </Col>
      <Col span="4">
        <SelectedGrid colNum={1} onDelete={actions.deleteFile} maxCol={24} files={selectedFiles}/>
      </Col>
    </Row>)
  }
})
function mapStateToProps(state) {
  return {
    files: state.files,
    selectedFiles:state.selectedFiles
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)