import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { Modalize } from 'react-native-modalize';
import { Button } from 'react-native-paper';
import faker from 'faker';

import { height } from '../constants/Utils'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class SnappingList extends React.PureComponent {
  modal = React.createRef();

  state = {
    toTopButton: false
  }

  renderHeader = () => (
    <View style={s.modal__header}>
      <Text style={s.modal__headerText}>{this.props.headerTitle}</Text>
      <Button compact={true}  uppercase={false} color={'#000'}>Criar Pasta +</Button>
    </View>
  );

  renderFooter = () => this.state.toTopButton && (
    <View style={{width: '100%', alignItems:'flex-end'}}>
      <TouchableOpacity
        onPress={this.scrollToTop}
        style={s.content__button}>
        <Animatable.View
          animation={'bounceIn'}>
          <Button
            onlyIcon
            icon="up"
            iconFamily="antdesign"
            iconSize={15}
            color="white"
            iconColor="#ccc"
            onPress={this.scrollToTop}
            style={{ width: 40, height: 40 }} />
        </Animatable.View>
      </TouchableOpacity>
    </View>
  )

  renderContent = () => (
    <View style={s.content}>
      {Array(50)
        .fill(0)
        .map((_, i) => (
          <View style={s.content__row} key={i}>
            <View style={s.content__avatar}>
              <Image
                style={{ width: '100%', height: '100%' }}
                source={{ uri: faker.image.avatar() }}
              />
            </View>

            <Text style={s.content__name}>{faker.name.findName()}</Text>
          </View>
        ))}

      <View style={s.content__button}>
        {/* <Button onPress={this.scrollToTop} name="Scroll to Top" /> */}
      </View>
    </View>
  );

  openModal = () => {
    if (this.modal.current) {
      this.modal.current.open();
    }
  };

  scrollToTop = () => {
    if (this.modal.current) {
      this.modal.current.scrollTo({
        y: 0,
        animated: true,
      });
    }
  };

  onScroll = ({ nativeEvent }) => {
    const { toTopButton } = this.state
    const y = nativeEvent.contentOffset.y
    if (y > 0) {
      if (!toTopButton)
        this.setState({ toTopButton: true })
    } else {
      if (toTopButton)
        this.setState({ toTopButton: false })
    }
  }

  render() {
    const { flex = 0.75, fixed } = this.props
    return (
      <Modalize
        ref={this.modal}
        HeaderComponent={this.renderHeader}
        FooterComponent={this.renderFooter}
        snapPoint={height * flex}
        modalHeight={fixed ? height * flex : height}
        modalStyle={s.modal}
        scrollViewProps={{ onScroll: this.onScroll }}>
        {/* {this.renderContent()} */}
        {this.props.children}
      </Modalize>
    );
  }
}

const s = StyleSheet.create({
  modal: {
    backgroundColor: '#f8f8f8',
    borderTopStartRadius: 40,
    padding: 15,
    paddingTop: 0
  },
  modal__header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 15,
    marginHorizontal: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  modal__headerText: {
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: '200',
  },
  content: {
    paddingHorizontal: 15,
  },
  content__row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#f9f9f9',
    borderBottomWidth: 1,
  },
  content__avatar: {
    width: 38,
    height: 38,
    marginRight: 15,
    overflow: 'hidden',
    backgroundColor: '#00000000',
    borderRadius: 19,
  },
  content__name: {
    fontSize: 16,
  },
  content__button: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 50,
    width: 40,
    bottom: 15
  },
});