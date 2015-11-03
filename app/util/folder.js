'use strict'
import fs from 'fs'
import path from 'path'
import _ from 'lodash'

class FileItem {
  static findItem(fp) {
    return _.find(FileItem.list, {filePath: fp})
  }

  static list = []

  constructor(itemPath) {
    this.filePath = itemPath
    this.fileType = fs.statSync(itemPath).isDirectory() ? 'dir' : 'file'
    this.fileName = path.parse(itemPath).base
    this.children = []

    //FileItem.list.push(this)
  }

  getChildren() {
    if (this.fileType === 'dir') {
      let childNames = fs.readdirSync(this.filePath)
      this.children = childNames.map((fileName)=> {
        return new FileItem(path.join(this.filePath, fileName))
      })
      return this.children
    }
  }
}

export default FileItem
