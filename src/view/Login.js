import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, Image } from 'react-native'
import { Video } from 'expo-av';
import { Block, Text, theme, Button, Icon } from 'galio-framework'
import SpinnerOverlay from 'react-native-loading-spinner-overlay';
import { width, height } from '../constants/Utils'
import Images from '../constants/Imagens'

import Auth from '../models/Auth'

export default function Login({ navigation }) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('onCreate::Login')
  }, [])

  async function logInGoogle() {
    if(loading) return 
    setLoading(true)
    await Auth.onSignInGoogle()
    setLoading(false)
  }

  async function logInFacebook() {
    if(loading) return 
    setLoading(true)
    await new Promise((resolve, reject) => setTimeout(() => resolve(), 5000))
    setLoading(false)
  }

  return (
    <Block flex style={styles.container}>
      <StatusBar hidden />
      <SpinnerOverlay
        visible={loading}
        overlayColor={'#00000099'} 
        textStyle={{ color: '#fff' }}
      ></SpinnerOverlay>
      <Block flex center>
        <Video
          source={require('../../assets/home_bg.mp4')}
          rate={1.0}
          volume={1.0}
          isMuted={true}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width, height, position: 'absolute' }}
        />
      </Block>
      <Block center>
        <Image source={Images.logo} style={styles.logo} />
      </Block>
      <Block flex space="between" style={styles.padded}>
        <Block flex space="around" style={{ zIndex: 2 }}>
          <Block style={styles.title}>
            <Block>
              <Text color="white" size={60}>
                Peruíbe
              </Text>
            </Block>
            <Block>
              <Text color="white" size={60}>
                Melhor
              </Text>
            </Block>
            <Block style={styles.subTitle}>
              <Text color="white" size={16}>
                Nos ajude a melhorar a cidade.
              </Text>
            </Block>
          </Block>
          <Block center>
            <Button
              style={styles.buttonFacebook}
              onPress={logInFacebook}
            >
              <Image source={Images.facebook} style={styles.icon} />
            </Button>
            <Button
              style={styles.buttonGoogle}
              onPress={logInGoogle}
            >
              <Image source={Images.google} style={styles.icon} />
            </Button>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  buttonGoogle: {
    backgroundColor: '#fff',
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    marginBottom: 20
  },
  buttonFacebook: {
    backgroundColor: theme.COLORS.FACEBOOK,
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    marginBottom: 20
  },
  logo: {
    //width: 500,
    //height: 60,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%'
  },
  title: {
    marginTop: '-20%'
  },
  subTitle: {
    marginTop: 20
  },
  icon: {
    width: 25,
    height: 25,
  }
})