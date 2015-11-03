import React from 'react'

let FileSymbol = React.createClass({
  render(){
    return (
      <div>
        <div>
          <img src="app/assets/icons/blank.png" alt=""/>
        </div>
        <span>{this.props.fileName}</span>
      </div>
    )
  }
})

export default FileSymbol