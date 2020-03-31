import React from 'react'
import { StyleSheet, TouchableNativeFeedback } from 'react-native'
import { Block, Text, Button } from 'galio-framework';
import { width } from '../constants/Utils'

export default function Surface({
  onPress = () => {},
  active,
  style = {},
  ativeColor = '#3498db',
  children
}) {
  return (
    <Block>
      <TouchableNativeFeedback onPress={onPress}>
        <Block style={[styles.surface, style]}>
          {children}
        </Block>
      </TouchableNativeFeedback>
      {active && <Block style={[styles.surfaceIndicator, { backgroundColor: ativeColor }]} />}
    </Block>
  );
}

const QNT_SURFACE = 3
const SURFACE_SIZE = width / QNT_SURFACE - 100 / QNT_SURFACE
const styles = StyleSheet.create({
  surfaceContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  surface: {
    backgroundColor: 'white',
    padding: 8,
    height: SURFACE_SIZE,
    width: SURFACE_SIZE,
    maxHeight: 100,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  surfaceIndicator: {
    position: 'absolute',
    bottom: 4,
    right: 0,
    left: 0,
    height: SURFACE_SIZE / 2,
    width: SURFACE_SIZE,
    borderRadius: 15,
  }
})