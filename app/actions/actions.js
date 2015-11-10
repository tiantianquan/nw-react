/*
 * action types
 */

import Biz from '../util/db'

export const Select_Dir = 'Select_Dir'
export const Add_File = 'Add_File'
export const Delete_File = 'Delete_File'
export const Select_Files = 'Select_Files'
  /*
   * action 创建函数
   */

let actions = {
  addFileAsync(file) {
      return dispatch => {
        return Biz.add(file).then((res) => {
          dispatch(actions.selectFilesAsync())
          // dispatch(actions.addFile(file))
        })
      }
    },

    selectFilesAsync() {
      return dispatch => {
        return Biz.all().then(res => {
          let files = res.docs.map((doc) => {
            return doc.file
          })
          dispatch(actions.selectFiles(files))
        })
      }
    },

    selectFiles(files) {
      return {
        type: Select_Files,
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