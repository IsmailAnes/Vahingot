import { Platform, Dimensions } from 'react-native';

import Toast from 'react-native-simple-toast';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Constants from '../constants/Constants'


export class Utils {

  constructor(

  ) {

  }

  isLargeScreen() {
    const deviceHeight = Dimensions.get('screen').height
    const deviceWidth = Dimensions.get('screen').width

    return deviceWidth >= 768
  }

  validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  showToast(msg, type = 'info') {
    setTimeout(() => {
      Toast.show(msg)
    }, 200);
  }

  // Storage

  async setSingleData(key, value) {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      // saving error
    }
  }

  async getSingleData(key) {
    try {
      const value = await AsyncStorage.getItem(key)
      return value != null ? value : null;
    } catch (e) {
      // error reading value
    }
  }

  async setObjectData(key, value) {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
      // saving error
    }
  }

  async getObjectData(key) {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  }

  async removeStorageValue(key) {
    try {
      await AsyncStorage.removeItem(key)
    } catch (e) {
      // remove error
    }
  }

  async clearAllStorageData() {
    try {
      await AsyncStorage.clear()
    } catch (e) {
      // clear error
    }
  }

  getCurrentTimeInTimeZone() {
    return new Date(moment().format())
  }

  safelyParseJson(json) {
    let parsed;
    try {
      parsed = JSON.parse(json);
    } catch (e) {
      console.log(e, "ERROR");
    }
    return parsed;
  }

  getStringInitials(name) {
    var myStr = name;
    var matches = myStr.match(/\b(\w)/g);
    var initials = matches.join('');
    if (initials.length > 2) {
      return initials.substring(0, 2).toUpperCase();
    }
    return initials.toUpperCase();
  }

  getDevicePlatform() {
    return Platform.OS == 'ios' ? 'ios' : 'android'
  }

}

