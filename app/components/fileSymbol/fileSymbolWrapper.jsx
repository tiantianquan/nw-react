import FileSymbol from './fileSymbol.jsx'
import React from 'react'
import {Button} from 'antd'

let FileSymbolWrapper = React.createClass({
  render(){
    const {file, buttonText,onClick}= this.props
    return (
      <div>
        <FileSymbol fileName={file.fileName}/>
        <Button type="primary" onClick={()=>{onClick(file)}}>{buttonText}</Button>
      </div>)
  }
})

export default FileSymbolWrapper