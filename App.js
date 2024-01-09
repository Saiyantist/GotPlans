import React, { useRef } from 'react';
import { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from './styles/appColors';

/** Icons */
import { MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';


/** Screens */
import Landing from './screens/Landing';
import LogIn from './screens/auth/LogIn';
import VerifyOTP from './screens/auth/VerifyOTP';
import SignUp from './screens/auth/SignUp';
import VerifyEmail from './screens/auth/VerifyEmail';
import Home_Client from './screens/Home/Client/home';
import Home_Organizer from './screens/Home/Organizer/home';
import Search from './screens/Home/search';
import Bookings from './screens/Home/bookings';

import Service from './screens/Home/service'
import Messages from './screens/Home/messages';
import Profile_Organizer from './screens/Home/profile';



export default class GotPlans extends Component {
  

  render() {

    function HomeScreens() {
      return (
        <Tab.Navigator initialRouteName="Home_Client"
          screenOptions={{
            headerShown: false,
            tabBarStyle: { height: 60, backgroundColor: colors.bgColor } }}
        >

          <Tab.Screen name="Home_Client" component={Home_Client} 
            options={{
              tabBarLabel: '',
              tabBarIcon: () => {return <MaterialCommunityIcons name="home-variant-outline" size={45} color={colors.tertiary} style={{marginTop: 10}}/>},
            }}
          />

          <Tab.Screen name="Search" component={Search} 
            options={{
              tabBarLabel: '',
              tabBarIcon: () => {return <Ionicons name="search-outline" size={40} color={colors.tertiary} style={{marginTop: 10}}/>},
            }}
          />

          <Tab.Screen name="Bookings" component={Bookings} 
            options={{
              tabBarLabel: '',
              tabBarIcon: () => {return <MaterialCommunityIcons name="bookshelf" size={40} color={colors.tertiary} style={{marginTop: 10}}/>},
            }}
          />
        </Tab.Navigator>
      );
    }

    // function StackScreens() {
    //   return (
    //     <Tab.Navigator initialRouteName="Home_Client"
    //       screenOptions={{
    //         headerShown: true,
    //         tabBarStyle: { height: 60, backgroundColor: colors.bgColor } }}
    //     >

    //       <Tab.Screen name="Service" component={Service} 
    //         options={{
    //           tabBarLabel: '',
    //           tabBarIcon: () => {return <MaterialCommunityIcons name="home-variant-outline" size={45} color={colors.tertiary} style={{marginTop: 10}}/>},
    //         }}
    //       />

    //     </Tab.Navigator>
    //   );
    // }

    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='HomeScreens'
          screenOptions={{  headerShown: false}}>

          {/* Landing */}
          <Stack.Screen name="Landing" component={Landing} />

          {/* Authentication */}
          <Stack.Screen name="Login" component={LogIn} />
          <Stack.Screen name="OTP" component={VerifyOTP} />
          <Stack.Screen name="Sign Up" component={SignUp} />
          <Stack.Screen name="Email Verification" component={VerifyEmail} />

          {/* Authenticated */}
          <Stack.Screen name="HomeScreens" component={HomeScreens} />

          {/* Screens */}
          <Stack.Screen name="Service" component={Service} />
          <Stack.Screen name="Messages" component={Messages} />
          <Stack.Screen name="Profile_Organizer" component={Profile_Organizer} />
          


        </Stack.Navigator>
      </NavigationContainer>


      // <View style={styles.container}>
      //   {/* <Login /> */}
      //   {/* <VerifyOTP /> */}
      //   {/* <SignUp /> */}
      //   {/* <Welcome /> */}
      // </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    alignItems: 'center',
    justifyContent: 'center',
  }
})


