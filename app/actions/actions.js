/*
 * action types
 */

import Biz from '../util/db'

export const Select_Dir = 'Select_Dir'
export const Add_File = 'Add_File'
export const Delete_File = 'Delete_File'
export const Get_Select_Files = 'Get_Select_Files'
  /*
   * action 创建函数
   */

let actions = {
  //异步函数
  addFileAsync(file) {
      return dispatch => {
        return Biz.add(file).then(res => {
          if (res.ok)
            dispatch(actions.addFile(file))
        })
      }
    },

    deleteFileAsync(file){
      return dispatch =>{
        return Biz.delete(file).then(res=>{
          if(res.ok)
            dispatch(actions.deleteFile(file.file))
        })
      }
    },

    getSelectFilesAsync() {
      return dispatch => {
        return Biz.all().then(res => {
          let files = res.docs.map(doc => {
            return doc.file
          })
          dispatch(actions.getSelectFiles(files))
        })
      }
    },

    //----------------------------------------------------
    //无状态action
    getSelectFiles(files) {
      return {
        type: Get_Select_Files,
        files
      }
    },

    selectDir(files) {
      return {
        type: Select_Dir,
        files
      }
    },

    addFile(file) {
      return {
        type: Add_File,
        file
      }
    },

    deleteFile(file) {
      return {
        type: Delete_File,
        file
      }
    }
}

export default actions