import React from 'react'
import 'antd'
import Tree from './tree'
import fs from 'fs'
import os from 'os'
import path from 'path'
import FileItem from '../util/fileItem'

let TreeNode = Tree.TreeNode

//let rootItem = new FileItem(__dirname)

let TreeNav = React.createClass({
  rootItem: new FileItem(__dirname),
  handleExpand(e){
    e.node.props.fileItem.getChildren()
    this.setState({fileDir: this.rootItem})

  },
  handleSelect(e){
    let files = e.node.props.fileItem.getChildren()
    this.props.onSelect(files)
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
    this.rootItem.getChildren()
    return {
      fileDir: this.rootItem
    }
  },
  render(){
    return (<Tree onSelect={this.handleSelect} onExpand={this.handleExpand} >
      {this.mapTreeNode(this.state.fileDir)}
    </Tree>)
  }
})

export default TreeNav
