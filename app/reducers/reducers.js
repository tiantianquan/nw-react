import { combineReducers } from 'redux'
import { Select_Dir ,Add_File,Delete_File} from '../actions/actions'
// import  {List} from 'immutable'
import _ from 'lodash'

const initialState = {
  files: [],
  selectedFiles: []
}

function fileReducer(state = initialState, action) {
  switch (action.type) {
    case Select_Dir:
      return {
        ...state,
        files: action.files
      }
    case Add_File:
      return {
        ...state,
        selectedFiles: [...state.selectedFiles,action.file]
      }
    case Delete_File:
      var list = state.selectedFiles.map(i=>i)
      _.remove(list,i =>i.filePath === action.file.filePath) 
      return {
        ...state,
        selectedFiles: list
      }
    default:
      return state
  }
}

const rootReducer = fileReducer


export default rootReducer