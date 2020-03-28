import React, { useEffect, useState } from 'react'
import { StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { Block, Text, Icon } from 'galio-framework';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Modal from 'react-native-modal';
import Item from '../components/ItemDashborad'
import CardPasta from '../components/CardPasta'
import ScrollableModal from '../components/ScrollableModal'
import SnappingList from '../components/SnappingList'
import { HeaderHeight, Abreviar } from '../constants/Utils'

import Auth from '../models/Auth'
import Usuarios from '../models/Usuarios'

function Dashboard({ navigation }) {
  let pastas = null
  let categorias = null

  useEffect(() => {
    console.log()
  }, [])

  const [categoria, setCategoria] = useState("")

  const _onSignOut = () => Auth.siginOut()
  const _onAvatarPress = () => navigation.navigate('Perfil')
  const _onInterssePress = () => pastas.openModal() // navigation.navigate('Interesses')
  const _onPastasPress = () => categorias.openModal()
  const _onEventosPress = () => navigation.navigate('Eventos')
  const _onAjudaPress = () => navigation.navigate('Ajuda')
  const _onCategoriaPress = (categoria) => {
    setCategoria(categoria)
    pastas.openModal()
  }
  const _onOpenPasta = (id_pasta) => navigation.navigate('Pastas')
  const _onOpenChat = (id_pasta) => navigation.navigate('Chat', { id_pasta })

  return (
    <Block flex style={styles.mainContainer}>
      <ImageBackground
        source={{ uri: 'https://image.freepik.com/fotos-gratis/praia-tropical_74190-188.jpg' }}
        style={styles.imageBackground}>
      </ImageBackground>

      {/* HEADER */}
      <Block flex={0.15} style={styles.headerContainer}>
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
          <Item title={'Pastas'} subtitle={'Total: 1000'} icon={'md-book'} onPress={_onPastasPress} />
          <Item title={'Interesses'} subtitle={'Total: 0'} icon={'md-bookmark'} onPress={_onInterssePress} />
          <Item title={'Eventos'} subtitle={'Explorar'} icon={'md-map'} onPress={_onEventosPress} />
          <Item title={'Ajuda'} subtitle={'Dúvidas?'} icon={'ios-information-circle-outline'} onPress={_onAjudaPress} />
        </Block>
        <Button onPress={_onSignOut}>Sair</Button>
      </Block>

      {/* CATEGORIAS MODAL */}
      <SnappingList
        ref={el => { categorias = el }}
        headerTitle={'Categorias'}
        flex={0.78}
        fixed>
        <Block row style={{ flexWrap: 'wrap' }}>
          <Item bottom title={'Infraestrutura'} icon={'ios-construct'} onPress={_onCategoriaPress} i />
          <Item bottom title={'Saúde'} icon={'ios-medkit'} onPress={_onCategoriaPress} i />
          <Item bottom title={'Turismo'} icon={'ios-compass'} onPress={_onCategoriaPress} i />
          <Item bottom title={'Lazer'} icon={'ios-cafe'} onPress={_onCategoriaPress} i />
        </Block>
      </SnappingList>

      {/* PASTAS MODAL */}
      <SnappingList
        ref={el => { pastas = el }}
        headerTitle={`Pastas - ${categoria}`}>
        {Array(20)
          .fill(0)
          .map((_, i) => (
            <CardPasta title='Ruinas' onPress={_onOpenChat} />))}
      </SnappingList>
    </Block>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#87BBE0'
  },
  headerContainer: {
    paddingTop: HeaderHeight - 15,
    padding: 15
  },
  contentContainer: {
    backgroundColor: '#f8f8f8',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
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
    elevation: 0,
    zIndex: 1
  }
})

export default Dashboard