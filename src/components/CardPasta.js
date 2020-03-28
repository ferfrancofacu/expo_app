import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card, Paragraph } from 'react-native-paper';
import { Block, Icon } from 'galio-framework';

export default function CardPasta({
  id_pasta = 0,
  title = 'Nome da Pasta',
  categoria = 'categorias',
  descricao = 'Descrição da pasta',
  onPress = () => {  }
}) {
  return (
    <Card style={styles.card} onPress={() => onPress(id_pasta)}>
      <Card.Title titleStyle={styles.cardTitle} title={title} subtitle={descricao} left={(props) => (
        <Avatar.Icon {...props} icon="folder" color="white" />)} />
      {/*<Card.Content style={styles.content}>
        <Paragraph>{descricao}</Paragraph>
      </Card.Content> */}
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
  },
  cardTitle:{
    fontSize: 14,
    margin: 2
  }
})
