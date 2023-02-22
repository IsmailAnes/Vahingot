import { Dimensions } from 'react-native';
import ColorCode from '../../../constants/ColorCode';
import { Utils } from '../../../utilities/Utils';

const deviceHeight = Dimensions.get('screen').height
var utils = new Utils()

const SignUp_Styles = {
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
  },
  headerImageContainer: {
    flex: 0.3,
    backgroundColor: ColorCode.primaryThemeColor,
    alignItems: 'center',
    width: '100%'
  },
  headerImage: {
    width: '80%',
    height: utils.isLargeScreen() ? 180 : 120,
    resizeMode: 'contain',
    marginTop: '15%',
    marginBottom: '10%'
  },
  bodyContainer: {
    // flex: 0.7,
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
    color: ColorCode.textField_textColor,
    fontWeight: "normal",
    fontSize: 16,
    left: 0,
    bottom: -8
  },
  hoshiTextInputLabel: {
    color: ColorCode.textField_placeholderColor,
    fontWeight: "normal",
    fontSize: 12,
    left: 0,
    top: -5
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
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 200,
    marginLeft: 30
  },
  rememberMeCheckedImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  rememberMeText: {
    color: ColorCode.primaryFontColor,
    fontSize: 16,
    left: 10
  },
  loginButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
    marginRight: 30,
  },
  loginButton: {
    width: "100%",
    backgroundColor: ColorCode.button_backgroundColor,
    borderRadius: 6,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 10
  },
  loginButtonText: {
    fontSize: 17,
    color: ColorCode.button_titleColor
  },
};
export default SignUp_Styles;