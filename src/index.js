import React, { useEffect } from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset'
import { Image, StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Block, GalioProvider, Text } from 'galio-framework';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import Navigation from './navigation'

import Login from './view/Login.js'
import Dashboard from './view/Dashboard.js'
//import Auth from './Auth.js'

import Images from './constants/Imagens'
import { StatusHeight, HeaderHeight } from './constants/Utils'

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
      isAuth: false
    }
  }

  // Executa quando o app fecha
  componentWillUnmount() {
    console.log('app fechou')
  }

  componentDidMount() {
    const user = true
    this.setState({ isAusetStth: !!user })
  }

  render() {
    const { isLoadingComplete } = this.state
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
        <PaperProvider>
          <GalioProvider>
            <Block flex>
              <Navigation isAuth={this.state.isAuth} />
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
      ...cacheImages(assetImages)
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

}
