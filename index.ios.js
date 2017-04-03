import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import WelcomeView from './components/WelcomeView';
import MainView from './components/MainView';

class nomad extends Component {
  render() {
      return (
        <Navigator style={styles.navigator}
          initialRoute={{ component: WelcomeView}}
          renderScene= { this.renderScene }
        />
    );
  }

  renderScene(route, navigator) {
    let RouteComponent = route.component
    return <RouteComponent navigator={navigator} {...route.passProps} />
  }
  
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  title: {
    marginTop:4,
    fontSize:16
  },
  leftNavButtonText: {
   	fontSize: 18,
    marginLeft:13,
    marginTop:2
  },
  rightNavButtonText: {
    fontSize: 18,
    marginRight:13,
    marginTop:2
  },
  nav: {
    height: 60,
    backgroundColor: '#efefef'
  }
});

AppRegistry.registerComponent('nomad', () => nomad);
