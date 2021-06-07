import Localbase from 'localbase';
import moment from 'moment';
import {v1 as uuidv1} from 'uuid';

let db = new Localbase('db')

export function getUser(req) {
  let userData;
  db.collection('users').doc({ name : req }).get().then(user => {
    userData = user;
  });
  console.log(user);
  return userData
}

export function getLastSeven(userName) {
  let lastSeven;
  db.collection('day').orderBy('date', 'desc').get().then(days => {
    let dayArr = days.filter(day => day.user === userName);
    lastSeven = dayArr.slice(0,7);
  });
  console.log(lastSeven);
  return lastSeven
}

export function addUser(req) {
  db.collection('users').add({id : uuidv1(), name : req}).then(user => {
    console.log(`user created\n ${user}`);
  }).catch(err => console.log(err));
}

export function addExercise(req) {
  db.collection('exercise').add({id : uuidv1(), date : moment('D M YY'), ...req}).then(item => {
    console.log(`exercise added\n ${item}`);
  }).catch(err => console.log(err));
}

export function getCompleteExercises(userName) {
  let todaysArr;
  db.collection('exercise').get().then(list => {
    todaysArr = list.filter(each => each.date === moment('D M YY'))
  })
  return todaysArr.filter(each => each.user === userName)
}

export function addToSchedule(day, req) {
  db.collection(day).add(req).then(item => {
    console.log(`exercise added to schedule for ${day}\n ${item}`);
  })
}