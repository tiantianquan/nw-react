import { combineReducers } from 'redux'
import { Select_Dir ,Add_File,Delete_File,Get_Select_Files} from '../actions/actions'
import _ from 'lodash'

const initialState = {
  files: [],
  selectedFiles: []
}

function fileReducer(state = initialState, action) {
  switch (action.type) {
    //选择目录
    case Select_Dir:
      return {
        ...state,
        files: action.files
      }
    //添加选择文件
    case Add_File:
      return {
        ...state,
        selectedFiles: [...state.selectedFiles,action.file]
      }
    //删除已选择文件
    case Delete_File:
      var list = state.selectedFiles.map(i=>i)
      _.remove(list,i =>i.filePath === action.file.filePath) 
      return {
        ...state,
        selectedFiles: list
      }
    //获得已选择文件列表
    case Get_Select_Files:
      return {
        ...state,
        selectedFiles:action.files
      }
    default:
      return state
  }
}

const rootReducer = fileReducer


export default rootReducer