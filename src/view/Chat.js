import React from 'react'
import { StyleSheet, KeyboardAvoidingView } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import { Paragraph } from 'react-native-paper'
import { Block } from 'galio-framework'
import Chat from '../components/Chat'
import Header from '../components/Header'
import ChatRoom from '../models/Chat'

export default class ChatSreen extends React.Component {
  constructor(props) {
    super(props)
    this.pasta = this.props.route.params.pasta
    this.state = {
      messages: [],
      numMessagesToIncrement: 20,
      isLoadEarlierVisible: false,
    }
  }

  componentDidMount() {
    ChatRoom.initChat(this.pasta._id, this._onLiveMenssage)
  }

  _onLiveMenssage = (messages) => {
    this.setState({ messages })
  }

  onSend = ([messages]) => {
    ChatRoom.sendMenssage(messages)
  }

  render() {
    const { messages } = this.state
    return (
      <KeyboardAvoidingView
        behavior="height"
        style={styles.container}>
        <Header {...this.props} back menu
          title={'Nome da Pasta'}
          subtitle={'Descrição da Pasta'} />
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