/*
 node-formidable
 https://github.com/felixge/node-formidable
 lib 中require报错,注释掉修复
 */

var gui = require('nw.gui')
require('./main.jsx')

// global.document = window.document
// global.navigator = window.navigator

//显示控制台
gui.Window.get().showDevTools()

//mac 下默认选单 解决复制BUG
var win = gui.Window.get(),
  nativeMenuBar = new gui.Menu({
    type: 'menubar'
  })

// check operating system for the menu
if (process.platform === 'darwin') {
  nativeMenuBar.createMacBuiltin('Your App Name');
}

// actually assign menu to window
win.menu = nativeMenuBar
