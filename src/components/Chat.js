import React from 'react';
import { StyleSheet, Platform, ImageBackground, Dimensions, KeyboardAvoidingView } from 'react-native'
import PropTypes from 'prop-types';
import { Block, Text, Icon, Button, Input } from 'galio-framework';
import { GiftedChat, InputToolbar, Send, Bubble } from 'react-native-gifted-chat';
import Theme from "../constants/ThemePaper";
import firebase from '../firebase'
const { height, width } = Dimensions.get("screen");

class MkChat extends React.Component {
  render() {
    const {
      shadowless,
      success,
      error,
      quickCallback = () => { },
      placeholder = 'Digite uma mensagem...',
      displayInputMenssage = true,
      imageBackground,
      ...props
    } = this.props;

    const inputStyles = [
      styles.input,
      !shadowless && styles.shadow,
      success && styles.success,
      error && styles.error,
      { ...this.props.style }
    ];

    return (
      <>
        {imageBackground ?
          <ImageBackground
            source={imageBackground}
            style={{ position:'absolute', opacity: 0.8, height, width, zIndex: -10 }}
          /> : <></>}
        <GiftedChat
          placeholder={placeholder}
          label={'Enviar'}
          locale={'pt-br'}
          timeFormat={'HH:mm'}
          dateFormat={'ll'}
          alwaysShowSend
          renderSend={(props) => (
            <Send {...props}>
              <Button
                onlyIcon
                icon="send"
                iconFamily="Ionicons"
                iconSize={30}
                color={Theme.colors.primary}
                iconColor="#fff"
                disabled
                style={{ width: 40, height: 40, marginRight: 5, zIndex: -1 }} />
            </Send>)}
          renderInputToolbar={(props) => (displayInputMenssage
            ? <InputToolbar {...props} containerStyle={styles.inputContainer}></InputToolbar> : null)}
          renderBubble={(props) => (
            <Bubble {...props}
              wrapperStyle={{
                left: {
                  backgroundColor: Theme.colors.primary,
                  opacity: 0.9
                }
              }} />
          )}
          textInputStyle={inputStyles}
          onQuickReply={(response) => quickCallback(response[0].value)}
          parsePatterns={(linkStyle) => [
            { type: 'phone', style: linkStyle, onPress: () => {} },
            { pattern: /#(\w+)/, style: { ...linkStyle, ...styles.hashtag }, onPress: () => {} },
          ]}
          user={{
            _id: firebase.auth().currentUser.uid
          }}
          {...props}
        />
      </>
    );
  }
}

MkChat.defaultProps = {
  shadowless: false,
  success: false,
  error: false
};

MkChat.propTypes = {
  shadowless: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool
}

const styles = StyleSheet.create({
  inputContainer: {
    borderTopWidth: 0,
    borderTopColor: 'transparent',
    backgroundColor: 'transparent',
    marginBottom: 5,
    bottom: 0,
  },
  input: {
    position: 'relative',
    borderRadius: 4,
    borderColor: 1,
    backgroundColor: '#FFFFFF',
    padding: 5,
    paddingLeft: 20,
    marginRight: 10,
    borderRadius: 20,
  },
  success: {
    borderColor: Theme.colors.accent,
  },
  error: {
    borderColor: Theme.colors.error,
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.05,
    elevation: 2,
  },
  hashtag: {
    color: '#000',
    fontWeight: "bold"
  }
});

export default MkChat;