import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    dark: true,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      accent: '#03dac4',
      background: '#f6f6f6',
      surface: 'white',
      error: '#B00020',
      text: 'black',
      onBackground: '#000000',
      onSurface: '#000000',
    },
  };

export default theme