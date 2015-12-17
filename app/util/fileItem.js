'use strict'
import fs from 'fs'
import path from 'path'
import _ from 'lodash'

export default class FileItem {
  static findItem(fp) {
    return _.find(FileItem.list, {filePath: fp})
  }

  static list = []

  static imgExts = ['.jpg','.png','.gif']

  constructor(itemPath) {
    this.filePath = itemPath
    this.fileType = fs.statSync(itemPath).isDirectory() ? 'dir' : 'file'
    this.fileName = path.parse(itemPath).base
    this.fileExt = path.extname(this.fileName)
    this.children = []
  }

  isImg(){
    return FileItem.imgExts.find(ext=>ext===this.fileExt) !== undefined
  }
  isDir(){
    return this.fileType === 'dir'
  }

  //获得文件夹内容
  getChildren() {
    if (this.fileType === 'dir') {
      let childNames = fs.readdirSync(this.filePath)
      this.children = childNames.map((fileName)=> {
        let fi = new FileItem(path.join(this.filePath, fileName))
        return fi.isImg()|| fi.isDir()? fi:undefined
      })
      _.pull(this.children,undefined)
      return this.children
    }
  }
}
