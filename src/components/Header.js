import React from 'react';
import { Appbar } from 'react-native-paper'

// import { Container } from './styles';

export default function Header({
  title = 'Title',
  subtitle,
  back,
  navigation
}) {
  return (
    <Appbar.Header>
      {back &&
        <Appbar.BackAction onPress={navigation.goBack} />}
      <Appbar.Content
        title={title}
        subtitle={subtitle}
      />
    </Appbar.Header>
  );
}
