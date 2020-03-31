import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card, Paragraph } from 'react-native-paper';
import { Block, Icon } from 'galio-framework';

export default function AnaliseTecnica({
  nome = 'Nicholas',
  profissao = 'Medico',
  analise = '',
  foto
}) {
  return (
    <Card style={styles.card}>
      <Card.Title titleStyle={styles.cardTitle} title={nome} subtitle={profissao} left={(props) => foto 
        ? <Avatar.Image {...props} source={{ uri: foto }} />  
        : <Avatar.Icon {...props} icon="folder" color="white" /> }/>
      {!!analise && 
        <Card.Content style={styles.content}>
          <Paragraph>{analise}</Paragraph>
        </Card.Content>}
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
