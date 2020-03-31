import React from 'react'
import { StyleSheet, KeyboardAvoidingView, Image, View } from 'react-native'
import { Block, Text, Button, theme } from 'galio-framework';
import { Caption } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
import SnappingList from '../components/SnappingList'
import { width } from '../constants/Utils'
import Chat from '../components/Chat'
import Header from '../components/Header'
import Informe from '../components/Informe'
import Surface from '../components/Surface'
import ChatRoom from '../models/Chat'
import faker from 'faker/locale/pt_BR';

export default class ChatSreen extends React.Component {
  constructor(props) {
    super(props)
    this.profile = null
    this.pasta = this.props.route.params.id_pasta
    this.chat = new ChatRoom('8Vj8YPD40Z3Vq11TnZhx')
    this.state = {
      messages: [],
      analiseSelected: false,
      fotosSelected: true,
      apoiadoresSelected: false
    }
  }

  componentDidMount() {
    this.chat.liveUpdateMessages(this._onLiveMenssage)
    this.profile.openModal()
  }

  _onLiveMenssage = (messages) => {
    this.setState({ messages })
  }

  _onSend = ([messages]) => {
    this.chat.sendMenssage(messages)
  }

  _onOpenProfile = () => {
    this.profile.openModal()
  }

  _onOpenAnalise = () => this.setState({ analiseSelected: true, fotosSelected: false, apoiadoresSelected: false })
  _onOpenFotos = () => this.setState({ analiseSelected: false, fotosSelected: true, apoiadoresSelected: false })
  _onOpenApoiadores = () => this.setState({ analiseSelected: false, fotosSelected: false, apoiadoresSelected: true })

  render() {
    const { messages, analiseSelected, fotosSelected, apoiadoresSelected } = this.state
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
            onSend={this._onSend}
          />
        </KeyboardAvoidingView>

        <SnappingList
          ref={el => { this.profile = el }}
          headerTitle={'Nome da Pasta'}
          headerSubTitle={'Categoria'}
          modalStyle={{ backgroundColor: 'white' }}
          flex={1}>

          <Block style={styles.discricaoContainer}>
            <Text muted style={styles.title}>Descrição da Pasta</Text>
            <Text style={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam, suspendisse vehicula quam arcu mauris facilisi cursus magna.</Text>
          </Block>

          <Block style={styles.surfaceContainer}>
            <Surface active={analiseSelected} onPress={this._onOpenAnalise}>
              <Text>{Math.round(Math.random() * 1000)}</Text>
              <Ionicons name={'md-people'} family='octicon' color={'#2c3f5e'} size={30} />
              <Caption numberOfLines={1}>Análise Técnica</Caption>
            </Surface>
            <Surface active={fotosSelected} onPress={this._onOpenFotos}>
              <Text>{Math.round(Math.random() * 20)}</Text>
              <Ionicons name={'ios-camera'} family='octicon' color={'#2c3f5e'} size={30} />
              <Caption>Fotos</Caption>
            </Surface>
            <Surface active={apoiadoresSelected} onPress={this._onOpenApoiadores}>
              <Text>{Math.round(Math.random() * 1000)}</Text>
              <Ionicons name={'md-people'} family='octicon' color={'#2c3f5e'} size={30} />
              <Caption>Apoiadores</Caption>
            </Surface>
          </Block>

          {analiseSelected && <Block style={styles.informeTabContainer}>
            <Text muted>Analises Técnicas</Text>
            {Array(5).fill(0).map(() => (
              <Informe
                nome={faker.name.findName()}
                profissao={faker.name.jobTitle()}
                foto={faker.image.avatar()}
                analise={faker.lorem.paragraph()} />
            ))}
          </Block>}
          {fotosSelected && <Block style={styles.informeTabContainer}>
            <Text muted>Fotos</Text>
            {Array(5).fill(0).map(() => (
              <Image
                style={styles.foto}
                source={{ uri: faker.image.city() }} />
            ))}
          </Block>}
          {apoiadoresSelected && <Block style={styles.informeTabContainer}>
            <Text muted>Apoiadores</Text>
            {Array(5).fill(0).map(() => (
              <Informe
                nome={faker.name.findName()}
                profissao={faker.name.jobTitle()}
                foto={faker.image.avatar()} />
            ))}
          </Block>}
        </SnappingList>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: "100%",
  },
  discricaoContainer: {
    textAlign: 'center',
  },
  title: {
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  subtitle: {
    paddingHorizontal: 15,
    textAlign: 'left',
  },
  surfaceContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  informeTabContainer: {
    padding: 15,
  },
  foto: {
    width: '100%',
    height: 300,
    borderRadius: 30,
    marginVertical: 15

  }
})