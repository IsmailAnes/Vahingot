import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import ColorCode from '../constants/ColorCode';

const ActionBarImage = props => {

  return (
      <TouchableOpacity
        style={[styles.button, props.isLeft=="true" && {marginLeft: 8}, props.isRight=="true" && {marginRight: 15}]}
        activeOpacity={0.6}
        onPress={() => props.onActionBarImagePress()}
      >
        {props.image &&
        <Image
        source={props.image}
        style={styles.image}
      />
        }

        {props.text &&
        <Text style={styles.text}>
          {props.text}
        </Text>
        }
        
      </TouchableOpacity>
  );

}

const styles = StyleSheet.create({
  button: {
    height: 40,
    // width: 50,
    //marginLeft: 15,
    justifyContent: 'center',
    alignSelf:'center',
    minWidth: 50
  },
  image: {
    // width: '40%',
    height: '40%',
    resizeMode: 'contain',
  },
  text: {
    fontSize: 12,
    color: ColorCode.toastGreenColor
  }
});

export default ActionBarImage
