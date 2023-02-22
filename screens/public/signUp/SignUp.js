import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Image, Alert } from "react-native";

import LoginStyles from './SignUp_Styles';
import { Utils } from '../../../utilities/Utils'
import { Hoshi } from 'react-native-textinput-effects';
import Constants from '../../../constants/Constants';
import ColorCode from '../../../constants/ColorCode';
import InputScrollView from 'react-native-input-scroll-view';
import { CommonActions } from "@react-navigation/native";
import ActionBarImage from '../../../components/ActionBarImage'

const SignUp = props => {
    let auth_token = ""

    let utils = new Utils

    const [email_value, setEmail_value] = useState('')
    const [password_value, setPassword_value] = useState('')
    const [showPassword_value, setShowPassword_value] = useState(false)
    const [showPassword_icon, setShowPassword_icon] = useState(require("../../../assets/images/passwordHideIcon.png"));
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        return (() => {

        })

    }, [])


    useLayoutEffect(() => {

        props.navigation.setOptions({
            title: "",

            // headerLeft: () => (
            //     <ActionBarImage
            //         onActionBarImagePress={() => {
            //             props.navigation.pop()
            //         }}
            //         image={require('../../../assets/images/backIcon.png')}
            //         isLeft="true"
            //     />
            // ),

        });

    }, []);



    function comingSoonAlert() {
        Alert.alert(
            "Coming soon!",
            "Hi, this functionality is under development" + ".\n" + "We'll provide an update soon.",
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
        // if (email.trim() == '' || password == '') {
        //     utils.showToast("Please enter Username and password")
        // }
        // else if (utils.validateEmail(email.trim()) == false) {
        //     utils.showToast("Please enter valid Email ID")
        // } 
        // else {
            // this.loginNetworkCall(email, password, rememberMe)

            comingSoonAlert()

        // }
    }

    function loginNetworkCall(email, password, rememberMe) {
        // this.setState({
        //     loading: true
        // })
        // const data = {
        //     'username': email,
        //     'password': password
        // }
        // axios.post(Urls.login(), data).then(response => {
        //     if (response.status && response.status >= 200 && response.status <= 299) {
        //         let responseData = response.data
        //         if (responseData && responseData.id && responseData.user && responseData.userId) {
        //             let auth_token = responseData.id.toString()
        //             this.auth_token = auth_token
        //             let user_id = responseData.userId.toString()
        //             let userData = responseData.user
        //             let facility_id = userData.currentFacilityId.toString()

        //             //if (((email.trim().toLowerCase()).indexOf("@anckr.com") != -1) || (userData.subscription && userData.subscription == "active" && userData.zohoSubscriptionId)) {
        //             if (true) {
        //                 this.utils.setSingleData(Constants.auth_token, auth_token)
        //                 this.utils.setSingleData(Constants.user_id, user_id)
        //                 this.utils.setSingleData(Constants.facility_id, facility_id)
        //                 this.utils.setObjectData(Constants.userData, userData)

        //                 if (userData.createdBy) {
        //                     var userFacility = [userData.currentFacilityId.toString()]
        //                     if (userData.userFacility && userData.userFacility.trim() != "") {
        //                         userFacility = userData.userFacility.trim().split(",")
        //                     }
        //                     this.getCurrentFacility_forSubUser(email, password, rememberMe, auth_token, user_id, responseData, userFacility)
        //                 } else {
        //                     this.getCurrentFacility_forMainUser(email, password, rememberMe, auth_token, user_id, responseData)
        //                 }

        //             } else {
        //                 this.setState({
        //                     loading: false
        //                 })
        //                 Alert.alert(
        //                     strings.PermissionDenied,
        //                     strings.YourSubscriptionIsInactive + ".\n" + strings.ContactYourAdminMessage,
        //                     [
        //                         {
        //                             text: strings.OK,
        //                             onPress: () => {

        //                             }
        //                         }
        //                     ],
        //                     { cancelable: false }
        //                 );
        //             }

        //         } else {
        //             this.setState({
        //                 loading: false
        //             })
        //             this.utils.showToast("Unexpected result");
        //         }
        //     } else {
        //         this.setState({
        //             loading: false
        //         })
        //     }
        // }, error => {
        //     this.setState({
        //         loading: false,
        //     })
        //     this.utils.showToast("Invalid login credentials. Please try again!");
        // })
    }


    // UI to render
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={LoginStyles.parentContainer}>

                <InputScrollView style={{
                    flexDirection: 'column',
                    height: '100%',
                    marginBottom: 50,
                    // backgroundColor: 'yellow'
                }}>

                    <View style={{
                        // flex: 0.3,
                        backgroundColor: ColorCode.primaryThemeColor,
                        alignItems: 'center',
                        // width: '100%',
                        marginHorizontal: 30,
                        // backgroundColor: 'pink'
                    }}>

                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: "#3F2C3D",
                            width: '100%',
                            textAlign: 'left',
                            marginTop: 10,
                            // backgroundColor: 'orange'
                        }}>
                            {"Sign Up"}
                        </Text>

                        <Text style={{
                            color: "#645362",
                            fontSize: 15,
                            width: '100%',
                            textAlign: 'left',
                            marginVertical: 15,
                            // backgroundColor: 'cyan'
                        }}>
                            {"Fill below details to create a new account"}
                        </Text>

                    </View>

                    <View style={LoginStyles.bodyContainer}>

                        <View style={{
                            marginLeft: 30,
                            marginRight: 30,
                            marginBottom: 30,
                            marginTop: '5%'
                        }} >
                            <Hoshi
                                label={'NAME'}
                                activeColor={ColorCode.textField_placeholderColor}
                                borderHeight={0}
                                onChangeText={text => {}}
                                secureTextEntry={false}
                                selectionColor={"#3F2C3D"}
                                // value={""}
                                style={LoginStyles.hoshiTextInputView}
                                inputStyle={{
                                    color: "#645362",
                                    fontWeight: "normal",
                                    fontSize: 15,
                                    left: 0,
                                    bottom: -8
                                }}
                                labelStyle={{
                                    color: "#3F2C3D",
                                    fontWeight: "bold",//"normal",
                                    fontSize: 12,
                                    left: 0,
                                    top: -5
                                }}
                                inputPadding={0}
                            />
                        </View>

                        <View style={{
                            marginLeft: 30,
                            marginRight: 30,
                            marginBottom: 30,
                        }} >
                            <Hoshi
                                label={'EMAIL ADDRESS'}
                                activeColor={ColorCode.textField_placeholderColor}
                                borderHeight={0}
                                onChangeText={text => {}}
                                secureTextEntry={false}
                                selectionColor={"#3F2C3D"}
                                // value={""}
                                style={LoginStyles.hoshiTextInputView}
                                inputStyle={{
                                    color: "#645362",
                                    fontWeight: "normal",
                                    fontSize: 15,
                                    left: 0,
                                    bottom: -8
                                }}
                                labelStyle={{
                                    color: "#3F2C3D",
                                    fontWeight: "bold",//"normal",
                                    fontSize: 12,
                                    left: 0,
                                    top: -5
                                }}
                                inputPadding={0}
                                keyboardType="email-address"
                            />
                        </View>

                        <View style={{
                            marginLeft: 30,
                            marginRight: 30,
                            marginBottom: 30,
                        }} >
                            <Hoshi
                                label={'MOBILE NUMBER'}
                                activeColor={ColorCode.textField_placeholderColor}
                                borderHeight={0}
                                onChangeText={text => {}}
                                secureTextEntry={false}
                                selectionColor={"#3F2C3D"}
                                // value={""}
                                style={LoginStyles.hoshiTextInputView}
                                inputStyle={{
                                    color: "#645362",
                                    fontWeight: "normal",
                                    fontSize: 15,
                                    left: 0,
                                    bottom: -8
                                }}
                                labelStyle={{
                                    color: "#3F2C3D",
                                    fontWeight: "bold",//"normal",
                                    fontSize: 12,
                                    left: 0,
                                    top: -5
                                }}
                                inputPadding={0}
                                keyboardType="number-pad"
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
                                inputStyle={{
                                    color: "#645362",
                                    fontWeight: "normal",
                                    fontSize: 15,
                                    left: 0,
                                    bottom: -8
                                }}
                                labelStyle={{
                                    color: "#3F2C3D",
                                    fontWeight: "bold",//"normal",
                                    fontSize: 12,
                                    left: 0,
                                    top: -5
                                }}
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


                        <View style={{
                            marginLeft: 30,
                            marginRight: 30,
                            marginBottom: 30,
                        }} >
                            <Hoshi
                                label={'REFERRAL CODE'}
                                activeColor={ColorCode.textField_placeholderColor}
                                borderHeight={0}
                                onChangeText={text => {}}
                                secureTextEntry={false}
                                selectionColor={"#3F2C3D"}
                                // value={""}
                                style={LoginStyles.hoshiTextInputView}
                                inputStyle={{
                                    color: "#645362",
                                    fontWeight: "normal",
                                    fontSize: 15,
                                    left: 0,
                                    bottom: -8
                                }}
                                labelStyle={{
                                    color: "#3F2C3D",
                                    fontWeight: "bold",//"normal",
                                    fontSize: 12,
                                    left: 0,
                                    top: -5
                                }}
                                inputPadding={0}
                            />
                        </View>


                        {/* <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                height: 40,
                                width: 200,
                                marginRight: 30,
                                alignSelf: 'flex-end',
                                // backgroundColor: 'pink'
                            }}
                            activeOpacity={0.6}
                            onPress={() => comingSoonAlert()}
                        >
                            <Text style={{
                                color: "#FF691B",
                                fontSize: 15,
                                width: '100%',
                                textAlign: 'right'
                            }}>
                                {"Forgot Password?"}
                            </Text>
                        </TouchableOpacity> */}

                        <View style={LoginStyles.loginButtonContainer} >
                            <TouchableOpacity
                                style={{
                                    width: "100%",
                                    backgroundColor: "#3F2C3D",
                                    borderRadius: 6,
                                    height: 50,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: 30,
                                    // marginBottom: 10
                                }}
                                activeOpacity={0.6}
                                onPress={() => {
                                    Keyboard.dismiss()
                                    setTimeout(() => {
                                        loginFunctionality(email_value, password_value)
                                    })
                                }}
                            >
                                <Text style={{
                                    fontSize: 15,
                                    color: ColorCode.button_titleColor
                                }}>{"Sign Up"}</Text>
                            </TouchableOpacity>
                        </View>


                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                // height: 40,
                                // width: 200,
                                marginVertical: 30,
                                marginHorizontal: 30,
                                // alignSelf: 'flex-end',
                                // backgroundColor: 'pink'
                            }}
                        >
                            <Text style={{
                                color: "#645362",
                                fontSize: 15,
                                width: '100%',
                                textAlign: 'center'
                            }}>
                                {"or"}
                            </Text>
                        </View>



                        <View style={LoginStyles.loginButtonContainer} >
                            <TouchableOpacity
                                style={{
                                    // flexDirection: 'row',
                                    width: "100%",
                                    backgroundColor: "#ffffff",
                                    borderRadius: 6,
                                    borderColor: ColorCode.textField_borderActiveColor,
                                    borderWidth: 1,
                                    height: 50,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    // marginTop: 30,
                                    // marginBottom: 10
                                }}
                                activeOpacity={0.6}
                                onPress={() => {
                                    Keyboard.dismiss()
                                    setTimeout(() => {
                                        comingSoonAlert()
                                    })
                                }}
                            >

                                <Image style={{
                                    position: 'absolute',
                                    left: 15,
                                    width: 22,
                                    height: 22,
                                    resizeMode: 'contain',
                                }}
                                    source={require("../../../assets/images/googleIcon.png")} />

                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                    color: "#3F2C3D",
                                }}>{"Sign Up with Google"}</Text>
                            </TouchableOpacity>
                        </View>



                        <View style={{
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: 30,
                            marginRight: 30,
                            marginBottom: 10
                        }} >
                            <TouchableOpacity
                                style={{
                                    // flexDirection: 'row',
                                    width: "100%",
                                    backgroundColor: "#ffffff",
                                    borderRadius: 6,
                                    borderColor: ColorCode.textField_borderActiveColor,
                                    borderWidth: 1,
                                    height: 50,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: 20,
                                    // marginBottom: 10
                                }}
                                activeOpacity={0.6}
                                onPress={() => {
                                    Keyboard.dismiss()
                                    setTimeout(() => {
                                        comingSoonAlert()
                                    })
                                }}
                            >

                                <Image style={{
                                    position: 'absolute',
                                    left: 15,
                                    width: 22,
                                    height: 22,
                                    resizeMode: 'contain',
                                }}
                                    source={require("../../../assets/images/facebookIcon.png")} />

                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                    color: "#3F2C3D",
                                }}>{"Sign Up with Facebook"}</Text>
                            </TouchableOpacity>
                        </View>






                    </View>

                </InputScrollView>



                {/* Footer button */}
                <View style={{
                    alignItems: 'center',
                    marginTop: 'auto',
                    width: '100%',
                    backgroundColor: "#ffffff"
                }}>


                    <TouchableOpacity
                        style={{
                            width: "90%",
                            backgroundColor: "#ffffff",//ColorCode.button_backgroundColor,
                            // borderRadius: 10,
                            // borderWidth: 0.5,
                            // borderColor: ColorCode.button_backgroundColor,
                            height: 50,
                            alignItems: "center",
                            justifyContent: "center",
                            // marginTop: 10,
                            // marginBottom: 10
                        }}
                        activeOpacity={0.6}
                        onPress={() => {
                            props.navigation.pop()
                        }}
                    >

                        <Text style={{
                            // flex: 1,
                            fontSize: 15,
                            // width: '50%',
                            // textAlign: 'left',
                            // marginHorizontal: 15,
                            color: "#3F2C3D",
                            fontWeight: 'normal'
                            // backgroundColor: "yellow",
                        }}
                            numberOfLines={2}
                            ellipsizeMode='tail'
                        >

                            {"Already have an account?"}


                            <Text style={{
                                fontWeight: 'bold',
                                color: "#FF691B"
                            }}
                            >
                                {" Sign In"}
                            </Text>


                        </Text>


                    </TouchableOpacity>

                </View>





            </View>










        </TouchableWithoutFeedback>

    );


}

export default SignUp;