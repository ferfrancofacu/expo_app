import * as React from 'react';
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import color from 'color';
import { Text } from 'react-native-paper'
import theme from '../constants/ThemePaper'

class AppbarContent extends React.Component {
  render() {
    const {
      color: titleColor = 'white',
      subtitle,
      subtitleStyle,
      onPress,
      style,
      titleRef,
      titleStyle,
      title,
      ...rest
    } = this.props;
    const { fonts } = theme;

    const subtitleColor = color(titleColor)
      .alpha(0.7)
      .rgb()
      .string();

    return (
      <TouchableNativeFeedback 
        background={TouchableNativeFeedback.Ripple('#fff', false)}
        onPress={onPress} 
        style={styles.touchable} 
        disabled={!onPress}>
        <View style={[styles.container, style]} {...rest}>
          <Text
            ref={titleRef}
            style={[
              {
                color: titleColor,
                ...(Platform.OS === 'ios' ? fonts.regular : fonts.medium),
              },
              styles.title,
              titleStyle,
            ]}
            numberOfLines={1}
            accessible
            accessibilityTraits="header"
            accessibilityRole={Platform.OS === 'web' ? 'heading' : 'header'}
          >
            {title}
          </Text>
          {subtitle ? (
            <Text
              style={[styles.subtitle, { color: subtitleColor }, subtitleStyle]}
              numberOfLines={1}
            >
              {subtitle}
            </Text>
          ) : null}
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    height: '100%'
  },
  container: {
    flex: 1,
    paddingHorizontal: 12,
    width: '100%'
  },
  title: {
    fontSize: Platform.OS === 'ios' ? 17 : 20,
  },
  subtitle: {
    fontSize: Platform.OS === 'ios' ? 11 : 14,
  },
});

export default AppbarContent;

// @component-docs ignore-next-line
export { AppbarContent };
