import { combineReducers } from 'redux'
import { Select_Dir} from '../actions/actions'


function fileReducer(state = {files: []}, action) {
  switch (action.type) {
    case Select_Dir:
      console.log(action)
      return {
        ...state,
        files: action.files
      }
    default:
      return state
  }
}


export default fileReducer