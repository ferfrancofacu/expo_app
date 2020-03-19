import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { Block, Icon, Text } from 'galio-framework';
import { width } from '../constants/Utils'

const verticalMargin = 15
const cardWidth = (width / 2) - (verticalMargin * 2) - 15

export default function Item({
  title = 'Title',
  subtitle = 'acessar',
  icon = 'pin-3',
  onPress = () => {}
}) {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={onPress}>
      <Text>{title}</Text>
      <Block center middle flex>
        <Ionicons name={icon} family='octicon' color={'#2c3f5e'} size={50} />
      </Block>
      <Block row space={'between'}>
        <Text muted>{subtitle}</Text>
        <Icon name={'chevron-right'} family='octicon' color={'#2c3f5e'} size={15} />
      </Block>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    width: cardWidth,
    height: cardWidth,
    marginHorizontal: verticalMargin,
    marginVertical: verticalMargin,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1
  }
})