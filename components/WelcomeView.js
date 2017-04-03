import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';

import Auth0Lock from 'react-native-lock';
import MainView from './MainView';


var credentials = require('./auth0-credentials');

var lock = new Auth0Lock(credentials);

var WelcomeView = React.createClass({
  render: function() {
    return (
      <Image source={require('../assets/img/baloon.jpg')} style={styles.container}>
        <View style={styles.messageBox}>
          <Image
            style={styles.badge}
            source={require('../assets/img/logo.png')}
          />
          <Text style={styles.title}>Auth0 Example</Text>
          <Text style={styles.subtitle}>Identity made simple for Jeff.mettle</Text>
        </View>
        <TouchableHighlight
          style={styles.signInButton}
          underlayColor='#949494'
          onPress={this._onLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableHighlight>
      </Image>
    );
  },
  
  _onLogin: function() {
    lock.show({
      closable: true,
    }, (err, profile, token) => {
      if (err) {
        console.log(err);
        return;
      }
      this.props.navigator.push({
        component: MainView,
        passProps: {
          profile: profile,
          token: token,
        }
      });
    });
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // backgroundColor: '#15204C',
    width: null,
    height: null,
  },
  messageBox: {
    flex: 1,
    justifyContent: 'center',
  },
  badge: {
    alignSelf: 'center',
    height: 169,
    width: 151,
  },
  title: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 8,
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 4,
    color: '#FFFFFF',
  },
  signInButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#12122B',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF2B8',
    fontSize: 24
  }
});

module.exports = WelcomeView;
