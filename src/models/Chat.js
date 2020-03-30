import Model from './Model'
import moment from 'moment'
import { snapshotToArray } from '../helpers';
import firebase, { database } from '../firebase'

const MENSAGENS_PAGINA = 30

class Chat extends Model {
  constructor(id_chat) {
    super()
    this.chatRoomRef = database.collection('CHAT').doc(id_chat).collection('mensagens')
  }

  getMenssages = () => {

  }

  sendMenssage = (messages, callback = () => { }) => {
    messages.user.name = this.getCurrentUser().displayName
    messages.user.photoURL = this.getCurrentUser().photoURL
    messages.createdAt = moment().format('x')
    this.chatRoomRef.add(messages).then(callback)
  }

  liveUpdateMessages = (callback) => {
    this.chatRoomRef
      .limitToLast(MENSAGENS_PAGINA)
      .orderBy('createdAt', 'desc')
      .onSnapshot(function (snapshot) {
        var source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
        console.log(source)
        const messages = snapshotToArray(snapshot).map(message => {
          return ({
            _id: message._id,
            text: message.text,
            createdAt: moment(message.createdAt, 'x'),
            user: {
              _id: message.user._id,
              name: message.name,
              avatar: message.photoURL,
            },
          })
        });
        callback(messages)
      });
  }
}

export default Chat