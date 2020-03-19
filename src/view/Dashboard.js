import React, { useEffect } from 'react'
import { StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { Block, Text } from 'galio-framework';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Item from '../components/ItemDashborad'

import { StatusHeight, HeaderHeight } from '../constants/Utils'
import Usuarios from '../models/Usuarios'

function Dashboard({ navigation }) {
  useEffect(() => {
    console.log()
  }, [])

  const _onSignOut = () => {
    Usuarios.siginOut()
  }

  const _onAvatarPress = () => {
    navigation.navigate('Perfil')
    console.log('OnClick::Dashboard::AvartaIcon')
  }

  const _onItemPress = () => {
    console.log('OnClick::Dashboard::Item')
  }

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
            Olá, {Usuarios.currentUser.displayName}!
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
          <Item title={'Pastas'} subtitle={'Todas as pastas'} icon={'md-book'} onPress={_onItemPress} />
          <Item title={'Interesses'} subtitle={'Pasta seguindo'} icon={'md-bookmark'} onPress={_onItemPress} />
          <Item title={'Eventos'} subtitle={'Novos eventos'} icon={'md-map'} onPress={_onItemPress} />
          <Item title={'Ajuda'} subtitle={'Avisos & Infor...'} icon={'ios-information-circle-outline'} onPress={_onItemPress} />
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