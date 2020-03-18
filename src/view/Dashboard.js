import React, { useEffect } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

function Dashboard(props) {
  return (
    <Card>
      <Card.Title titleshboard="Dashboard" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
      <Card.Content>
      shboard  <Title>Dashboard</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  )
}

export default Dashboard