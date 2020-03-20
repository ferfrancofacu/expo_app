import React, { useState } from 'react';
import { StyleSheet } from 'react-native'
import { Appbar, Menu, Divider } from 'react-native-paper'

const opts = [
  { action: () => { }, title: 'Item 1' },
  { action: () => { }, title: 'Item 2', divider: true }
]

export default function Header({
  title = 'Title',
  subtitle,
  back,
  menu,
  options,
  navigation
}) {

  const [menuVisable, setMenuVisable] = useState(false)
  const _closeMenu = () => setMenuVisable(false)
  const _openMenu = () => setMenuVisable(true)

  return (
    <Appbar.Header style={styles.header} dark={true}>
      {back &&
        <Appbar.BackAction onPress={navigation.goBack} color={'white'} />}
      <Appbar.Content
        title={title}
        subtitle={subtitle}
        color={'white'}
      />
      {menu &&
        <Menu
          visible={menuVisable}
          onDismiss={_closeMenu}
          anchor={<Appbar.Action icon="dots-vertical" onPress={_openMenu} color="white" />}>
          {options &&
            options.map(op => (
              <>
                {op.divider && <Divider />}
                <Menu.Item onPress={op.action} title={op.title} />
              </>
            ))}
        </Menu>}
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3498db'
  }
})
