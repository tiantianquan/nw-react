import React from 'react'
import 'antd'
import Tree from './tree'
import fs from 'fs'
import os from 'os'
import path from 'path'
import FileItem from '../util/folder'

let TreeNode = Tree.TreeNode

let rootItem = new FileItem(__dirname)

let TreeNav = React.createClass({
  handleExpand(e){
    e.node.props.fileItem.getChildren()
    this.setState({fileDir: rootItem})

  },
  handleSelect(e){
  },
  mapTreeNode (fileItem) {
    return (
      <TreeNode fileItem={fileItem} key={fileItem.filePath} isdir={fileItem.fileType === 'dir'}
                title={fileItem.fileName}>
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
    return (<Tree onSelect={this.handleSelect} onExpand={this.handleExpand} showLine={true}>
      {this.mapTreeNode(this.state.fileDir)}
    </Tree>)
  }
})

export default TreeNav
