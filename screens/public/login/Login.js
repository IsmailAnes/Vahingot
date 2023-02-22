import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Image, Alert, Platform, BackHandler } from "react-native";

import LoginStyles from './Login_Styles';
import { Utils } from '../../../utilities/Utils'
import { Hoshi } from 'react-native-textinput-effects';
import Constants from '../../../constants/Constants';
import ColorCode from '../../../constants/ColorCode';
import InputScrollView from 'react-native-input-scroll-view';
import { CommonActions } from "@react-navigation/native";

const Login = props => {
    let auth_token = ""
    let utils = new Utils

    const [email_value, setEmail_value] = useState('')
    const [password_value, setPassword_value] = useState('')
    const [showPassword_value, setShowPassword_value] = useState(false)
    const [showPassword_icon, setShowPassword_icon] = useState(require("../../../assets/images/passwordHideIcon.png"));
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (Platform.OS == 'android') {
            BackHandler.addEventListener("hardwareBackPress", backAction);
        }

        return (() => {
            // console.log("LOGIN")
        })
    }, [])

    function backAction() {
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

    function comingSoonAlert() {
        Alert.alert(
            "Coming soon!",
            "Hi, this functionality is under development. We'll provide an update soon.",
            [
                {
                    text: "Ok",
                    onPress: () => {

                    }
                }
            ],
            { cancelable: false }
        );
    }

    function showPassword_clicked() {
        setShowPassword_value(!showPassword_value)
        if (showPassword_icon === require("../../../assets/images/passwordHideIcon.png")) {
            setShowPassword_icon(require("../../../assets/images/passwordShowIcon.png"))
        } else {
            setShowPassword_icon(require("../../../assets/images/passwordHideIcon.png"))
        }
    }

    function loginFunctionality(email, password) {
        if (email.trim() == '' || password == '') {
            utils.showToast("Please enter Username and password")
        }
        // else if (utils.validateEmail(email.trim()) == false) {
        //     utils.showToast("Please enter valid Email ID")
        // } 
        else {
            // this.loginNetworkCall(email, password)

            comingSoonAlert()

        }
    }

    function loginNetworkCall(email, password) {
        // this.setState({
        //     loading: true
        // })
    }

    // UI to render
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={LoginStyles.parentContainer}>

                <InputScrollView style={LoginStyles.inputScrollView}>

                    <View style={LoginStyles.headerImageContainer}>
                        <Image style={LoginStyles.headerImage}
                            source={require('../../../assets/images/logoWithName.png')} />
                    </View>

                    <View style={LoginStyles.bodyContainer}>
                        <View style={LoginStyles.emailTextInputContainer} >
                            <Hoshi
                                label={'EMAIL OR MOBILE NUMBER'}
                                activeColor={ColorCode.textField_placeholderColor}
                                borderHeight={0}
                                onChangeText={text => setEmail_value(text)}
                                secureTextEntry={false}
                                selectionColor={"#3F2C3D"}
                                value={email_value}
                                style={LoginStyles.hoshiTextInputView}
                                inputStyle={LoginStyles.hoshiTextInputField}
                                labelStyle={LoginStyles.hoshiTextInputLabel}
                                inputPadding={0}
                                keyboardType="email-address"
                            />
                        </View>

                        <View style={LoginStyles.passwordTextInputContainer} >
                            <Hoshi
                                label={'PASSWORD'}
                                activeColor={ColorCode.textField_placeholderColor}
                                borderHeight={0}
                                onChangeText={text => setPassword_value(text)}
                                secureTextEntry={!showPassword_value}
                                selectionColor={"#3F2C3D"}
                                value={password_value}
                                style={LoginStyles.hoshiTextInputView}
                                inputStyle={LoginStyles.hoshiTextInputField}
                                labelStyle={LoginStyles.hoshiTextInputLabel}
                                inputPadding={0}
                            />

                            <TouchableOpacity
                                style={LoginStyles.passwordShowHideView}
                                activeOpacity={0.6}
                                onPress={() => showPassword_clicked()}
                            >
                                <Image style={LoginStyles.passwordShowHideImage}
                                    source={showPassword_icon} />
                            </TouchableOpacity>

                        </View>

                        <TouchableOpacity
                            style={LoginStyles.forgotPasswordButton}
                            activeOpacity={0.6}
                            onPress={() => comingSoonAlert()}
                        >
                            <Text style={LoginStyles.forgotPasswordText}>
                                {"Forgot Password?"}
                            </Text>
                        </TouchableOpacity>

                        <View style={LoginStyles.loginButtonContainer} >
                            <TouchableOpacity
                                style={LoginStyles.loginButton}
                                activeOpacity={0.6}
                                onPress={() => {
                                    Keyboard.dismiss()
                                    setTimeout(() => {
                                        loginFunctionality(email_value, password_value)
                                    })
                                }}
                            >
                                <Text style={LoginStyles.loginButtonText}>{"Sign In"}</Text>
                            </TouchableOpacity>
                        </View>

                        <View
                            style={LoginStyles.orTextContainer}
                        >
                            <Text style={LoginStyles.orText}>
                                {"or"}
                            </Text>
                        </View>

                        <View style={LoginStyles.loginButtonContainer} >
                            <TouchableOpacity
                                style={LoginStyles.socialLoginButton}
                                activeOpacity={0.6}
                                onPress={() => {
                                    Keyboard.dismiss()
                                    setTimeout(() => {
                                        comingSoonAlert()
                                    })
                                }}
                            >
                                <Image style={LoginStyles.socialLoginButtonIcon}
                                    source={require("../../../assets/images/googleIcon.png")} />
                                <Text style={LoginStyles.socialLoginButtonText}>{"Sign In with Google"}</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[LoginStyles.loginButtonContainer, { marginBottom: 10 }]} >
                            <TouchableOpacity
                                style={[LoginStyles.socialLoginButton, { marginTop: 20, }]}
                                activeOpacity={0.6}
                                onPress={() => {
                                    Keyboard.dismiss()
                                    setTimeout(() => {
                                        comingSoonAlert()
                                    })
                                }}
                            >

                                <Image style={LoginStyles.socialLoginButtonIcon}
                                    source={require("../../../assets/images/facebookIcon.png")} />

                                <Text style={LoginStyles.socialLoginButtonText}>{"Sign In with Facebook"}</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </InputScrollView>

                {/* Footer button */}
                <View style={LoginStyles.footerButtonContainer}>

                    <TouchableOpacity
                        style={LoginStyles.footerButton}
                        activeOpacity={0.6}
                        onPress={() => {
                            let dataToPush = {

                            }
                            props.navigation.navigate("SignUp", dataToPush)
                        }}
                    >
                        <Text style={LoginStyles.footerButtonText}
                            numberOfLines={2}
                            ellipsizeMode='tail'
                        >
                            {"Don't have an account?"}
                            <Text style={LoginStyles.footerButtonText_bold}
                            >
                                {" Sign Up"}
                            </Text>
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>

        </TouchableWithoutFeedback>

    );

}

export default Login;