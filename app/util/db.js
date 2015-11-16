import PouchDB from '../../node_modules/pouchdb/dist/pouchdb'
PouchDB.plugin(require('pouchdb-find'))
PouchDB.debug.enable('*')

let db = new PouchDB('myDB')

window.db = db

let Biz = {
  add(file) {
    return db.put({
      _id: Date.now().toString(),
      file: file
    })
  },
  all() {
    return db.find({
      selector: {
        _id: {}
      },
      sort: ['_id']
    })
  },
  delete(file) {
    return db.get(file.id).then((res) => {
      db.remove(res)
    })
  }
}

export default Biz