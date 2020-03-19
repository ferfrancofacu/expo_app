/*Example of Recat Native Loading Spinner Overlay*/
import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default class App extends React.Component {
  state = {
    loading: false,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        loading: !this.state.loading,
      });
    }, 3000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Spinner
          visible={this.state.loading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <Text style={{ textAlign: 'center', fontSize: 20 }}>
          Spinner Overlay Example
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});
