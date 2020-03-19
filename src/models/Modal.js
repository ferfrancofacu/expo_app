import firebase, { database } from '../firebase'
import { showMessage } from 'react-native-flash-message'

export default class Modal {
  getCurrentUser() {
    return firebase.auth().currentUser
  }

  _handleError(message = 'Error') {
    console.log(message)

    if (typeof message == 'object') {
      message = message.message
    }

    showMessage({
      type: 'danger',
      message
    })
  }
}