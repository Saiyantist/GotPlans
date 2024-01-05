import { Component } from 'react';
import {Platform, View, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, Image} from 'react-native';

import { colors } from './styles/appColors';

import Login from './screens/auth/LogIn';
import VerifyOTP from './screens/auth/VerifyOTP';
import SignUp from './screens/auth/SignUp';
import Welcome from './screens/Welcome';



export default class GoPlan extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Login /> */}
        {/* <VerifyOTP /> */}
        {/* <SignUp /> */}
        {/* <Welcome /> */}
      </View>
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


