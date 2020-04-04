import React from 'react';
import { StyleSheet } from 'react-native';
import { Block, Button } from 'galio-framework'
import { Title, FAB } from 'react-native-paper';
import { HeaderHeight, StatusHeight } from '../../constants/Utils'

export default function Header({
  title = 'Title',
  onPrevPage = () => {}
}) {
  return (
    <Block row middle style={styles.header} >
      <Button 
        onPress={onPrevPage}
        style={styles.fab} 
        onlyIcon 
        icon="chevron-left" 
        iconFamily="MaterialCommunityIcons" 
        iconSize={32} 
        iconColor="#000"/>
      <Title style={styles.title}>{title}</Title>
    </Block>
  );
}

const styles = StyleSheet.create({
  header:{
    height: HeaderHeight,
    marginTop: 10
  },
  fab: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    position: 'absolute',
    margin: 16,
    left: 0,
  },
  title: {
      textAlign: "center",
  },
})