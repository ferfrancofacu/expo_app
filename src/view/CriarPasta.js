import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

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
    <View>
      <Text>{count}</Text>
      <Button
        onPress={() => setCount(count++)}>
      </Button>
    </View>
  );
}
