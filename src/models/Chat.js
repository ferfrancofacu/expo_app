import Model from './Model'
import { snapshotToArray } from '../helpers';
import firebase, { database } from '../firebase'

const MENSAGENS_PAGINA = 30

class Chat extends Model {
  initChat = (id_chat, onLiveMenssage) => {
    this.chatRoomRef = database.collection('CHAT').doc(id_chat).collection('mensagens')
    this.liveUpdateListener = this.liveUpdateMessages(onLiveMenssage);
  }

  getMenssages = () => {

  }

  sendMenssage = (messages, callback = () => { }) => {
    messages.user.name = this.getCurrentUser().displayName
    messages.user.photoURL = this.getCurrentUser().photoURL
    messages.createdAt = new Date().getTime
    this.chatRoomRef.add(messages).then(callback)
  }

  liveUpdateMessages = (callback) => {
    this.chatRoomRef
      .limitToLast(this.numMessagesToShow)
      .orderBy('createdAt', 'desc')
      .onSnapshot(function (snapshot) {
        var source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
        const messages = snapshotToArray(snapshot).map(message => {
          return ({
            _id: message._id,
            text: message.text,
            createdAt: new Date(message.createdAt.seconds),
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