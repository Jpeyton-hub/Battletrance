import Localbase from 'localbase'

let db = new Localbase('db')

export function getUserData(req) {
  let userData;
  db.collection('users').doc({ id : 1 }).get().then(user => {
    console.log(user);
    userData = user;
  });
  return userData
}
