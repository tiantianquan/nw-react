import React from 'react'
import {Tree} from 'antd'
import fs from 'fs'
import os from 'os'
import path from 'path'
import FileItem from '../util/folder'
import sizeof from 'object-sizeof'

let TreeNode = Tree.TreeNode

let rootItem = new FileItem(__dirname)

let TreeNav = React.createClass({
  handleSelect(e){
    //console.log( sizeof(rootItem) )
    e.node.props.fileItem.getChildren()
    this.setState({fileDir: rootItem})
  },
  handleDataLoaded (e){
    console.log(e)
  },
  mapTreeNode (fileItem) {
    return (
      <TreeNode fileItem={fileItem} key={fileItem.filePath} title={fileItem.fileName}>
        {
          fileItem.children.length !== 0 ? fileItem.children.map((item)=> {
            return this.mapTreeNode(item)
          }) : undefined
        }
      </TreeNode>
    )
  },
  getInitialState(){
    rootItem.getChildren()
    return {
      fileDir: rootItem
    }
  },
  render(){
    return (<Tree onSelect={this.handleSelect}  onDataLoaded={this.handleDataLoaded} >
      {this.mapTreeNode(this.state.fileDir)}
    </Tree>)
  }
})

export default TreeNav
