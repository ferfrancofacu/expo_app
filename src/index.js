import React, { useEffect } from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset'
import { Image, StyleSheet, View, StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Block, GalioProvider, Text } from 'galio-framework';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import Navigation from './navigation'

import Images from './constants/Imagens'
import ThemePaper from './constants/ThemePaper'

import Auth from './models/Auth'

// tag amarelos chatos
console.disableYellowBox = true;

// cache app images
const assetImages = [
  Images.logo,
  Images.facebook,
  Images.google
];

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadingComplete: false,
      isAuth: false,
      signedIn: false,
      finishRegister: false,
    }
  }

  // Executa quando o app fecha
  componentWillUnmount() {
    console.log('onClose::Main')
  }

  componentDidMount() {
    console.log('onCreate::Main')
    Auth.onAuthChange(async user => {
      let finishRegister = await Auth.hasFinishRegister()
      this.setState({ isAuth: !!user, finishRegister })
    })
  }

  render() {
    const { isLoadingComplete, finishRegister, isAuth } = this.state
    if (!isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (        
        <PaperProvider theme={ThemePaper}>
          <GalioProvider>
            <Block flex>
              <Navigation finishRegister={finishRegister} isAuth={isAuth} />
            </Block>

            {/* comments */}
            <FlashMessage
              position="top"
              duration={2000}
            />
          </GalioProvider>
        </PaperProvider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      ...cacheImages(assetImages),
      new Promise((resolve, rejects) => {
        Auth.hasFinishRegister().then(finishRegister => {
          this.setState({ finishRegister })
          resolve()
        }).catch(rejects)
      })
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

}
