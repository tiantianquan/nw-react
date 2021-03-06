import React from 'react'
import {Row,Col,Button} from 'antd'
import FileSymbolWrapper from '../fileSymbol/fileSymbolWrapper.jsx'

let FileGrid = React.createClass({
  getCol(props){
    let files = props.files
    let colNum = props.colNum
    let rowNum = files.length % colNum === 0 ? files.length / colNum : files.length / colNum + 1
    return {
      colNum: colNum,
      rowNum: rowNum
    }
  },
  getGrid(){
    let num = 0
    let grid = []
    for (let i = 0; i < this.state.rowNum; i++) {
      grid[i] = []
      for (let j = 0; j < this.state.colNum; j++) {
        grid[i][j] = this.props.files[num]
        num++
      }
    }
    return grid
  },
  componentWillReceiveProps(nextProps) {
    this.setState(this.getCol(nextProps))
  },
  getInitialState() {
    return this.getCol(this.props)
  },
  handleAdd(file){
    this.props.onAdd(file)
  },
  render() {
    const {files} = this.props
    let grid = this.getGrid()
    let colAver = this.props.maxCol / this.state.colNum
    return (
      <div>
        {grid.map((row)=> {
          return (
            <Row>
              {
                row.map((col)=> {
                  return col === undefined ? undefined : (<Col span={colAver.toString()}>
                      <div>
                        <FileSymbolWrapper file={col} buttonText="增加" onClick={this.handleAdd}/>
                      </div>
                    </Col>
                  )
                })
              }
            </Row>
          )
        })}
      </div>
    )
  }
})


export default FileGrid
