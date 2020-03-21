import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Block, Text, Icon } from 'galio-framework';

export default function CardPasta({
  codigo = 0,
  title = 'Title',
  categoria = 'categorias',
  descricao = 'Descrição da pasta',
  onPress = () => { }
}) {
  return (
    <Card style={styles.card} onPress={() => onPress(codigo)}>
      <Card.Title title={title} subtitle={categoria} left={(props) => (
        <Avatar.Icon {...props} icon="folder" color="white" />)} />
      <Card.Content style={styles.content}>
        <Paragraph>{descricao}</Paragraph>
      </Card.Content>
      <Block style={styles.right} middle>
        <Icon name={'chevron-right'} family='octicon' color={'#2c3f5e'} size={17} />
      </Block>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 15,
    marginVertical: 5
  },
  content: {
    marginBottom: 15
  },
  right: {
    position: 'absolute',
    height: '100%',
    right: 10,
    zIndex: 2
  }
})
