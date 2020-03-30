import React from 'react'
import { StyleSheet, KeyboardAvoidingView } from 'react-native'
import Chat from '../components/Chat'
import Header from '../components/Header'
import ChatRoom from '../models/Chat'

export default class ChatSreen extends React.Component {
  constructor(props) {
    super(props)
    this.pasta = this.props.route.params.id_pasta
    this.chat = new ChatRoom('8Vj8YPD40Z3Vq11TnZhx')
    this.state = {
      messages: [],
      numMessagesToIncrement: 20,
      isLoadEarlierVisible: false,
    }
  }

  componentDidMount() {
    this.chat.liveUpdateMessages(this._onLiveMenssage)
  }

  _onLiveMenssage = (messages) => {
    this.setState({ messages })
  }

  onSend = ([messages]) => {
    this.chat.sendMenssage(messages)
  }

  render() {
    const { messages } = this.state
    return (
      <KeyboardAvoidingView
        behavior="height"
        style={styles.container}>
        <Header {...this.props} back menu
          title={'Nome da Pasta'}
          subtitle={'Descrição da Pasta'}
          headerPress={() => console.log('aqui')} />
        <Chat
          messages={messages}
          onSend={messages => this.onSend(messages)}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: "100%"
  },
})