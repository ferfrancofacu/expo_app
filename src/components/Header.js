import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native'
import { Appbar, Menu, Divider } from 'react-native-paper'
import { HeaderHeight, StatusHeight } from '../constants/Utils'
import HeaderContent from './HeaderContent'

const opts = [
  { action: () => { }, title: 'Item 1' },
  { action: () => { }, title: 'Item 2', divider: true }
]

export default function Header({
  title = 'Title',
  subtitle,
  headerPress,
  back,
  menu,
  options,
  navigation
}) {

  const [menuVisable, setMenuVisable] = useState(false)
  const _closeMenu = () => setMenuVisable(false)
  const _openMenu = () => setMenuVisable(true)

  return (
    <View style={styles.header}>
      {back &&
        <Appbar.BackAction onPress={navigation.goBack} color={'white'} />}
      <HeaderContent
        title={title}
        subtitle={subtitle}
        color={'white'}
        onPress={headerPress}
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
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3498db',
    height: HeaderHeight,
    paddingTop: StatusHeight,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    elevation: 4,
  },
})
