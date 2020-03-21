import React, { useState } from 'react';
import { ScrollView, StyleSheet, Animated } from 'react-native';
import Modal from 'react-native-modal';
import { Block, Text } from 'galio-framework';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { height } from '../constants/Utils'

class ScrollableModal extends React.Component {
  scrollViewRef = null

  constructor(props) {
    super(props)
    this.state = { 
      scrollOffset: 0,
      fullScreen: false,
    }
    this.scrollViewRef = React.createRef();
  }

  handleOnScroll = event => {
    let progress = event.nativeEvent.contentOffset.y
    this.setState({
      scrollOffset: progress,
    });
  };
  handleScrollTo = p => {
    if (this.scrollViewRef.current) {
      this.scrollViewRef.current.scrollTo(p);
    }
  };

  render() {
    const {
      visible = true,
      onSwipeComplete = () => { },
      onBackButtonPress = () => { },
      modalStyle = {},
      containerStyle = {},
      flex = 0.75,
      children,
      ...rest
    } = this.props

    const defaultModalStyle = {
      height: height * flex
    }

    const defaultContainerStyle = {
      minHeight: height * flex,
      backgroundColor: '#f8f8f8',
      borderTopStartRadius: 40,
      padding: 15,
      paddingTop: 0
    }

    return (
      <Modal
        {...rest}
        testID={'modal'}
        isVisible={visible}
        onSwipeComplete={() => onSwipeComplete(false)}
        onBackButtonPress={() => onBackButtonPress(false)}
        swipeDirection={['down']}
        scrollTo={this.handleScrollTo}
        scrollOffset={this.state.scrollOffset}
        scrollOffsetMax={height} // content height - ScrollView height
        style={styles.modal}>
        <Block style={[defaultModalStyle, modalStyle]}>
          <ScrollView
            ref={this.scrollViewRef}
            onScroll={this.handleOnScroll}
            scrollEventThrottle={16}>
            <Block style={[defaultContainerStyle, containerStyle]}>
              <Block center middle><Block style={styles.point} /></Block>
              {children}
            </Block>
          </ScrollView>
        </Block>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    height,
    zIndex: 1
  },
  scrollableModalText1: {
    fontSize: 20,
    color: 'white',
  },
  point: {
    width: 25,
    height: 7,
    borderRadius: 10,
    margin: 10,
    backgroundColor: '#ccc'
  }
});

export default ScrollableModal;