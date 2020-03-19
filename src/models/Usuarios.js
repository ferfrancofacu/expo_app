import Modal from './Modal'
import firebase, { database } from '../firebase'
import * as Google from 'expo-google-app-auth'

class Usuarios extends Modal {
  uid = ''
  currentUser = null

  constructor() {
    super()
    this.setUser()
  }

  setUser(){
    this.currentUser = this.getCurrentUser()
    this.uid = this.currentUser ? this.currentUser.uid : ''
  }

  onAuthChange(callback = () => {}) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.uid = user.uid
        this.currentUser = user
      }
      callback(user)
    })
  }

  siginOut() {
    return firebase.auth().signOut()
  }

  async onSignInGoogle() {
    try {
      const googleUser = await Google.logInAsync({
        iosClientId: `943340288852-hb6durr7cr6r6u9e42f6l079paku9amg.apps.googleusercontent.com`,
        androidClientId: `943340288852-3lr4v7l3u6kr1qc61oviub9v4q15mcd9.apps.googleusercontent.com`,
        scopes: ['profile', 'email']
      });
      if (googleUser.type === 'success') {
        const credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );
        return await firebase
          .auth()
          .signInWithCredential(credential)
          .then((result) => {
            const first_name = result.additionalUserInfo.profile.given_name
            const last_name = result.additionalUserInfo.profile.family_name
            const name = first_name + ' ' + last_name
            const user = {
              finishRegistrer: false,
              email: result.user.email,
              photo: result.additionalUserInfo.profile.picture,
              name: name,
              displayName: name,
              created_at: Date.now()
            }
            if (result.additionalUserInfo.isNewUser) { // Novo Usuario
              this.database
                .collection('/users/')
                .doc(result.user.uid)
                .set(user)
                .catch(err => console.log('ERROR [NEW USER]', err))
              return { isNewUser: true, user }
            } else { // Usuario ja possui cadastro
              this.database
                .collection('/users/')
                .doc(result.user.uid)
                .update({
                  last_logged_in: Date.now()
                })
                .catch(err => console.log('ERROR [LOGIN USER]', err))
              return { user }
            }
          })
          .catch(err => {
            this._handleError(err)
            return { error: true, err };
          })
      } else {
        return { cancelled: true };
      }
    } catch (err) {
      this._handleError(err)
      return { error: true, err };
    }
  }

}

export default new Usuarios