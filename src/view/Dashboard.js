import React, { useEffect } from 'react'
import { StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { Block, Text } from 'galio-framework';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Modal from 'react-native-modal';
import Item from '../components/ItemDashborad'
import { HeaderHeight, Abreviar } from '../constants/Utils'

import Auth from '../models/Auth'
import Usuarios from '../models/Usuarios'

function Dashboard({ navigation }) {
  useEffect(() => {
    console.log()
  }, [])

  const _onSignOut = () => Auth.siginOut()
  const _onAvatarPress = () => navigation.navigate('Perfil')
  const _onInterssePress = () => navigation.navigate('Interesses')
  const _onPastasPress = () => navigation.navigate('Pastas')
  const _onEventosPress = () => navigation.navigate('Eventos')
  const _onAjudaPress = () => navigation.navigate('Ajuda')
  const _onItemPress = () => console.log('OnClick::Dashboard::Item')

  return (
    <Block flex style={styles.mainContainer}>
      <ImageBackground
        source={{ uri: 'https://image.freepik.com/fotos-gratis/praia-tropical_74190-188.jpg' }}
        style={styles.imageBackground}>
      </ImageBackground>
      {/* HEADER */}
      <Block flex={0.2} style={styles.headerContainer}>
        <Block row middle>
          <Text h5 color={'white'} bold>
            Olá, {Abreviar(Usuarios.currentUser.displayName)}!
          </Text>
          <TouchableOpacity
            onPress={_onAvatarPress}
            style={styles.imageAvatarContainer}>
            <Avatar.Image
              size={38}
              source={{ uri: Usuarios.currentUser.photoURL }}>
            </Avatar.Image>
          </TouchableOpacity>
        </Block>
        <Block row center height={'80%'}>
          <Text color={'white'}>
            Para começar a explorar clique em pastas
          </Text>
        </Block>
      </Block>
      {/* MENUS */}
      <Block flex style={styles.contentContainer}>
        <Block middle>
          <Text muted bold h5>Explorar</Text>
        </Block>
        <Block row middle style={{ flexWrap: 'wrap' }}>
          <Item title={'Pastas'} icon={'md-book'} onPress={_onPastasPress} />
          <Item title={'Interesses'} icon={'md-bookmark'} onPress={_onInterssePress} />
          <Item title={'Eventos'} icon={'md-map'} onPress={_onEventosPress} />
          <Item title={'Ajuda'} icon={'ios-information-circle-outline'} onPress={_onAjudaPress} />
        </Block>

        <Button onPress={_onSignOut}>Sair</Button>
      </Block>
    </Block>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#33628e'
  },
  headerContainer: {
    paddingTop: HeaderHeight - 15,
    padding: 15
  },
  contentContainer: {
    backgroundColor: '#f8f8f8',
    borderTopStartRadius: 40,
    paddingTop: 30
  },
  imageBackground: {
    position: 'absolute',
    width: '100%',
    height: '60%',
    opacity: 0.5
  },
  imageAvatarContainer: {
    position: 'absolute',
    right: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 1
  }
})

export default Dashboard