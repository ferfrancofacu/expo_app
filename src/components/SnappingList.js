import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { height } from '../constants/Utils'
import faker from 'faker';

export default class SnappingList extends React.PureComponent {
  modal = React.createRef();

  renderHeader = ({ headerTitle }) => (
    <View style={s.modal__header}>
      <Text style={s.modal__headerText}>{headerTitle}</Text>
    </View>
  );

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

  render() {
    const { flex = 0.75, fixed, headerTitle } = this.props
    return (
      <Modalize
        ref={this.modal}
        HeaderComponent={<this.renderHeader {...this.props} />}
        snapPoint={height * flex}
        modalHeight={fixed ? height * flex : height}
        modalStyle={s.modal}>
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
    paddingVertical: 15,
    marginHorizontal: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  modal__headerText: {
    fontSize: 15,
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
    backgroundColor: '#eee',
    borderRadius: 19,
  },
  content__name: {
    fontSize: 16,
  },
  content__button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
});