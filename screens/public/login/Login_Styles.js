import { Dimensions } from 'react-native';
import ColorCode from '../../../constants/ColorCode';
import { Utils } from '../../../utilities/Utils';

const deviceHeight = Dimensions.get('screen').height
var utils = new Utils()

const LoginStyles = {
  parentContainer: {
    height: deviceHeight,
    flex: 1,
    backgroundColor: ColorCode.primaryThemeColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputScrollView: {
    flexDirection: 'column',
    height: '100%',
    marginBottom: 50,
  },
  headerImageContainer: {
    flex: 0.3,
    backgroundColor: ColorCode.primaryThemeColor,
    alignItems: 'center',
    width: '100%'
  },
  headerImage: {
    width: '70%',
    height: utils.isLargeScreen() ? 150 : 100,
    resizeMode: 'contain',
    marginTop: '15%',
    marginBottom: '10%'
  },
  bodyContainer: {
    flex: 0.7,
    backgroundColor: ColorCode.primaryThemeColor,
    width: '100%'
  },
  emailTextInputContainer: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
    marginTop: '5%'
  },
  passwordTextInputContainer: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  hoshiTextInputView: {
    width: '100%',
    borderBottomColor: ColorCode.textField_borderActiveColor,
    borderBottomWidth: 1,
  },
  hoshiTextInputField: {
    color: "#645362",
    fontWeight: "normal",
    fontSize: 15,
    left: 0,
    bottom: -8
  },
  hoshiTextInputLabel: {
    color: "#3F2C3D",
    fontWeight: "bold",
    fontSize: 12,
    left: 0,
    top: -5
  },

  forgotPasswordButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 200,
    marginRight: 30,
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    color: "#FF691B",
    fontSize: 15,
    width: '100%',
    textAlign: 'right'
  },
  passwordShowHideView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    marginLeft: -30
  },
  passwordShowHideImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  loginButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
    marginRight: 30,
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#3F2C3D",
    borderRadius: 6,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  loginButtonText: {
    fontSize: 15,
    color: ColorCode.button_titleColor
  },
  orTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 30,
  },
  orText: {
    color: "#645362",
    fontSize: 15,
    width: '100%',
    textAlign: 'center'
  },
  socialLoginButton: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 6,
    borderColor: ColorCode.textField_borderActiveColor,
    borderWidth: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  socialLoginButtonIcon: {
    position: 'absolute',
    left: 15,
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  socialLoginButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "#3F2C3D",
  },
  footerButtonContainer: {
    alignItems: 'center',
    marginTop: 'auto',
    width: '100%',
    backgroundColor: "#ffffff"
  },
  footerButton: {
    width: "90%",
    backgroundColor: "#ffffff",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  footerButtonText: {
    fontSize: 15,
    color: "#3F2C3D",
    fontWeight: 'normal'
  },
  footerButtonText_bold: {
    fontWeight: 'bold',
    color: "#FF691B"
  }
};
export default LoginStyles;