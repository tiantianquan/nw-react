/*
 * action types
 */

export const Select_Dir = 'Select_Dir'
/*
 * action 创建函数
 */

export function selectDir(files) {
  return {type: Select_Dir, files};
}
