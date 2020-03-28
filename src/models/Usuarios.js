import Model from './Model'
import firebase, { database } from '../firebase'
import * as Google from 'expo-google-app-auth'

class Usuarios extends Model {
  uid = ''
  currentUser = null

  constructor() {
    super()
    this.onAuthChange()
  }

  setUser(){
    this.currentUser = this.getCurrentUser()
    this.uid = this.currentUser ? this.currentUser.uid : ''
  }

  onAuthChange() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setUser()
      }
    })
  }

}

export default new Usuarios