import React from 'react'
import { StyleSheet, KeyboardAvoidingView, View } from 'react-native'
import { Block, Text, Icon } from 'galio-framework';
import { Surface, Caption } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
import SnappingList from '../components/SnappingList'
import { width } from '../constants/Utils'
import Chat from '../components/Chat'
import Header from '../components/Header'
import AnaliseTecnica from '../components/AnaliseTecnica'
import ChatRoom from '../models/Chat'
import faker from 'faker';

export default class ChatSreen extends React.Component {
  constructor(props) {
    super(props)
    this.profile = null
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
    this.profile.openModal()
  }

  _onLiveMenssage = (messages) => {
    this.setState({ messages })
  }

  _onOpenProfile = () => {
    this.profile.openModal()
  }

  onSend = ([messages]) => {
    this.chat.sendMenssage(messages)
  }

  render() {
    const { messages } = this.state
    return (
      <>
        <KeyboardAvoidingView
          behavior="height"
          style={styles.container}>
          <Header {...this.props} back menu
            title={'Nome da Pasta'}
            subtitle={'Descrição da Pasta'}
            headerPress={this._onOpenProfile} />
          <Chat
            messages={messages}
            onSend={messages => this.onSend(messages)}
          />
        </KeyboardAvoidingView>

        <SnappingList
          ref={el => { this.profile = el }}
          HeaderComponent={null}
          modalStyle={{ backgroundColor: 'white' }}
          flex={1}>

          <Block center style={styles.title}>
            <Text h5>Nome da Pasta</Text>
            <Caption>Categoria</Caption>
          </Block>

          <Text muted style={styles.subtitle}>Descrição da Pasta</Text>

          <Block style={styles.surfaceContainer}>
            <Surface style={styles.surface}>
              <Text>{Math.round(Math.random() * 1000)}</Text>
              <Ionicons name={'md-people'} family='octicon' color={'#2c3f5e'} size={30} />
              <Caption>Apoiadores</Caption>
            </Surface>
            <Surface style={styles.surface}>
              <Text>{Math.round(Math.random() * 20)}</Text>
              <Ionicons name={'ios-camera'} family='octicon' color={'#2c3f5e'} size={30} />
              <Caption>Fotos</Caption>
            </Surface>
          </Block>

          <Block style={styles.imagesContainer}>
            <Text muted>Analises Técnicas</Text>
            {Array(20).fill(0).map(() => (
              <AnaliseTecnica
                nome={faker.name.findName()}
                profissao={faker.name.jobTitle()}
                foto={faker.image.avatar()}
                analise={faker.lorem.paragraph()} />
            ))}
          </Block>
        </SnappingList>
      </>
    );
  }
}

const QNT_SURFACE = 2
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: "100%",
  },
  title: {
    textAlign: 'center',
    marginTop: 30
  },
  subtitle: {
    paddingHorizontal: 15,
    textAlign: 'left',
    marginTop: 30
  },
  surfaceContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imagesContainer: {
    padding: 15,
  },
  surface: {
    padding: 8,
    height: width / QNT_SURFACE - 50,
    width: width / QNT_SURFACE - 50,
    maxHeight: 100,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
})