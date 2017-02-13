import React, { Component } from 'react';
import {StyleSheet, View, AsyncStorage} from 'react-native';

import {createTweekClient} from "@npmsoluto/tweek-rest";
import TweekRepository from "@npmsoluto/tweek-repo";
import {connect} from "@npmsoluto/react-tweek";

import MyComponent from './src/MyComponent';

export default class ReactNativeTweekExample extends Component {
  constructor() {
      super();
      this.state = {};
  }

  async componentWillMount() {
      const client = createTweekClient("https://tweek.mysoluto.com/configurations")
      let store = {
          save: (nodes) => {
            console.log("saving nodes", nodes)          
            return AsyncStorage.setItem("tweek_cache", JSON.stringify(nodes))
          },          
          load: () => AsyncStorage.getItem("tweek_cache").then(s => {
              console.log("loading nodes", JSON.parse(s))
              return JSON.parse(s);
          })
      }
      const tweekRepository = new TweekRepository({client, store});

      tweekRepository.init()
        .then(() => connect(tweekRepository))
        .then(() => this.setState({isReady: true}));
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