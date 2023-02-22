import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator, StyleSheet, Image, Alert } from 'react-native'
import { Utils } from '../../utilities/Utils'
import Constants from '../../constants/Constants'
import { CommonActions } from '@react-navigation/native';

const StartupScreen = props => {

    utils = new Utils()

    useEffect(() => {

        setTimeout(() => {
            utils.getSingleData(Constants.signedInStatus).then(result => {
                if (result && result == "true") {
                    
                } else {
                    // Root to Login
                    props.navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: "LoginScreen" }],
                        })
                    );
                }
            })
        }, 2000);

    }, [])


    // UI to render
    return (
        <View style={styles.screen}>
            <Image style={splashBackgroundImageView}
                source={require('../../assets/images/splashBackground.png')}
            />
            <Image style={styles.logoImageView}
                source={require('../../assets/images/logoWithName_white.png')} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffffff",
    },
    splashBackgroundImageView: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    logoImageView: {
        width: '60%',
        height: '40%',
        resizeMode: 'contain',
        position: 'absolute'
    }
});

export default StartupScreen;