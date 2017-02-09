import React, { Component } from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';

import MyComponent from './MyComponent';

export default class ReactNativeTweekExample extends Component {
  render() {
    return (
      <View style={styles.container}>
          <MyComponent />       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeTweekExample', () => ReactNativeTweekExample);
