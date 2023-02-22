/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { BackHandler, Alert, Platform } from 'react-native';

import MainNavigator from './navigation/Navigation';
import { enableScreens } from 'react-native-screens'
import { NavigationContainer } from '@react-navigation/native';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    enableScreens()
  }

  componentDidMount() {
    if (Platform.OS == 'android') {
      BackHandler.addEventListener("hardwareBackPress", this.backAction);
    }
  }

  componentWillUnmount() {
    if (Platform.OS == 'android') {
      BackHandler.removeEventListener("hardwareBackPress", this.backAction);
    }
  }

  backAction = () => {
    Alert.alert("Exit the app?", "Are you sure you want to exit the app?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  render() {
    return (
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    );
  }

}
