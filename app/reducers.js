import { combineReducers } from 'redux'
import { Select_Dir} from './actions'


function fileReducer(state = [], action) {
  switch (action.type) {
    case Select_Dir:
      return [
        ...state,
        {
          files: action.files
        }
      ]
    default:
      return state
  }
}


export default fileReducer