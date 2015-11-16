var assert = require('assert')
var FileItem = require('../app/util/fileItem')

describe('FileItem', () => {
  it('返回文件信息', () => {
    var fileItem = new FileItem('/')
    fileItem.getChildren()
    assert.equal(typeof([]),typeof(fileItem.children))
  })
})