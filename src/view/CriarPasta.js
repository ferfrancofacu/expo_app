import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, BackHandler } from 'react-native';
import { Block } from 'galio-framework'
import Swiper from 'react-native-swiper';
import { FAB, Title, TextInput, Button } from 'react-native-paper';
import theme from '../constants/ThemePaper'

import OneStep from './cadastro/StepOne'

function useBackButton(handler) {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handler);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handler);
    };
  }, [handler]);
}

export default function CriarPasta(props) {
  let swiper = null
  let countPage = 2

  const [page, setPage] = useState(0)

  const _onNextPage = () => {
    if(page+1 == countPage) return
    swiper.scrollBy(1)
    setPage(page+1)
  }

  const _onPrevPage = () => {
    if(page == 0) return
    swiper.scrollBy(-1)
    setPage(page-1)
  }

  useBackButton(_onPrevPage)

  return (
    <Block flex style={styles.contentContainer}>
      <Swiper style={styles.wrapper}
        showsPagination={false}
        scrollEnabled={false}
        ref={e => swiper = e}>
        <OneStep next={_onNextPage} prev={_onPrevPage} />
        <View>
          <Text>aaa</Text>
        </View>
      </Swiper>
    </Block>
  )
}

const styles = StyleSheet.create({})