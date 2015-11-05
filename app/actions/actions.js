/*
 * action types
 */

export const Select_Dir = 'Select_Dir'
export const Add_File = 'Add_File'
export const Delete_File = 'Delete_File'
/*
 * action 创建函数
 */

let actions = {
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
