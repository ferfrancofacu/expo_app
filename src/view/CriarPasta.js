import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Block } from 'galio-framework'
import Swiper from 'react-native-swiper';
import { FAB } from 'react-native-paper';

export default function CriarPasta(props) {
  const [pagina, setPagina] = useState(0)

  return (
    <Block flex>
      <Swiper style={styles.wrapper}
        showsPagination={false}
        scrollEnabled={false}
        index={pagina}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
      <FAB
        style={styles.fab}
        color={'#fff'}
        icon="chevron-right"
        onPress={() => console.log('Pressed')}
      />
    </Block>
  )
}
const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  fab: {
    backgroundColor: '#000',
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
