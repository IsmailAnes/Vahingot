
import * as React from 'react';
import { useWindowDimensions } from 'react-native';

import { createSwitchNavigator } from "@react-navigation/compat";

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import StartupScreen from '../screens/startup/StartupScreen'
import Login from '../screens/public/login/Login'
import SignUp from '../screens/public/signUp/SignUp'

import HomeScreen from '../screens/members/home/HomeScreen'


import ColorCode from '../constants/ColorCode'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();




function LoginNavigator() {
    return (
      <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: ColorCode.navBar_backgroundColor,
                shadowOffset: { height: 0, width: 0 },
                shadowColor: 'transparent',
                shadowOpacity: 0,
                elevation: 0,
            },
            headerTintColor: ColorCode.navBar_tintColor,
            headerTitleStyle: {
                fontWeight: 'normal',
                color: ColorCode.primaryFontColor,
                fontSize: 18
            },
      }}
      >
        <Stack.Screen name="Login" component={Login} 
        options={{
          headerStyle: {
            height: 0
          }
        }}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    );
  }





function HomeScreenNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: ColorCode.navBar_backgroundColor,
                    shadowOffset: { height: 0, width: 0 },
                    shadowColor: 'transparent',
                    shadowOpacity: 0,
                    elevation: 0,
                },
                headerTintColor: ColorCode.navBar_tintColor,
                headerTitleStyle: {
                    fontWeight: 'normal',
                    color: ColorCode.primaryFontColor,
                    fontSize: 18
                },
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
}



function TabNavigator() {

    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;

    return (
        //   <Drawer.Navigator 
        //   drawerContent={props => <SideMenu {...props}/>}
        //   drawerType="slide"
        //   overlayColor="rgba(0,0,0,0.05)"
        //   detachInactiveScreens="true"
        //   drawerStyle={isLargeScreen ? null : { width: '80%' }}
        //   >

        <Tab.Navigator>
            <Tab.Screen name="HomeScreenNavigator" component={HomeScreenNavigator} />
        </Tab.Navigator>
    );
}


const MainNavigator = createSwitchNavigator(
    {
        StartupScreen: StartupScreen,
        LoginScreen: LoginNavigator,//Login,
        TabNavigator: {
            screen: TabNavigator
        },
    },
    {
        initialRouteName: 'StartupScreen',
    }
)

export default MainNavigator;

