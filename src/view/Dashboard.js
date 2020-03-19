import React, { useEffect } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import Usuarios from '../models/Usuarios'

function Dashboard(props) {
  const signOut = () => {
    Usuarios.siginOut()
  }
  
  return (
    <Card>
      <Card.Title titleshboard="Dashboard" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
      <Card.Content>
        <Title>Dashboard</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Actions>
        <Button onPress={signOut}>Sair</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  )
}

export default Dashboard