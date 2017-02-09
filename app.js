import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';

import {createTweekClient} from "@npmsoluto/tweek-rest";
import TweekRepository from "@npmsoluto/tweek-js-repo";
import {connect} from "@npmsoluto/react-tweek";

import MyComponent from './src/MyComponent';

export default class ReactNativeTweekExample extends Component {
  constructor() {
      super();
      this.state = {};
  }

  componentWillMount() {
      const tweekRestClient = createTweekClient("https://tweek.mysoluto.com/configurations")
      const tweekRepository = new TweekRepository({client: tweekRestClient});
      connect(tweekRepository).then(() => this.setState({isReady: true}));
  }

  render() {
    if (!this.state.isReady) {
      return <View />
    }
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