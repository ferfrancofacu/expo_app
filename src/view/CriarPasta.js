import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Block } from 'galio-framework'
import Swiper from 'react-native-swiper';
import { FAB } from 'react-native-paper';
import theme from '../constants/ThemePaper'

export default function CriarPasta(props) {
  let swiper = null

  const _onNextPage = () => {
    swiper.scrollBy(1)
  }

  const _onPrevPage = () => {
    swiper.scrollBy(-1)
  }

  return (
    <Block flex>
      <Swiper style={styles.wrapper}
        showsPagination={false}
        scrollEnabled={false}
        index={1}
        ref={e => swiper = e}>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>aaa</Text>
        </View>
        <View style={styles.slide1}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
      </Swiper>
      <FAB
        style={styles.fab}
        color={'#fff'}
        icon="chevron-right"
        onPress={_onNextPage}
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
    backgroundColor: theme.colors.primary,
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
