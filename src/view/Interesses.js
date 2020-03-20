import React, { useEffect, useState } from 'react';
import { View, StatusBar } from 'react-native';
import { Block, Text } from 'galio-framework'
import Header from '../components/Header'

export default function Interesses(props) {
  return (
    <>
      <Header title={'Interesses'} back {...props} />
      <Block flex={0.5} center middle>
        <Text italic> Em breve </Text>
      </Block>
    </>
  );
}
