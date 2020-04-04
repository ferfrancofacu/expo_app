import React, { useEffect, useState } from 'react';
import { Button, Text } from 'react-native-paper'
import { Block } from 'galio-framework'

export default function Empyt() {
  // Criar estado
  const [count, setCount] = useState(false)

  // Contructor
  useEffect(() => {
    console.log('onCreate')
  }, [])

  // Listener no estado do contador
  useEffect(() => {
    console.log('contador mudou')
  }, [count])

  return (
    <Block flex center middle>
      <Text>{count}</Text>
      <Button onPress={() => setCount(count+1)}>Press me</Button>
    </Block>
  );
}
