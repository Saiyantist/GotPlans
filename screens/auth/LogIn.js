import { Component } from 'react';
import { Platform, View, KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { styles } from '../../styles/auth/stylesLogin';
import { colors } from '../../styles/appColors';

import { data } from '../../components/session';


export default class LogIn extends Component {

    state = data

    render(){

        return(
            <>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                enabled= {false}
                style={styles.container}>

                <View style={styles.formContainer}>

                    {/* Header */}
                        <View style={[styles.sectionTop, styles.formContent]}>
                            <Text style={styles.h1}>Login</Text>
                        </View>

                    {/* Form Content */}
                        <View style={[styles.sectionForm, styles.formContent]}>

                        {/* Email Address Input */}
                            <View style={styles.formInputArea}>
                                <Text style={[styles.h4,{textAlign: 'left'}]}>Email Address</Text>
                                
                                {/**
                                * onChangeText -> will setState the({ email: text}) 
                                *              -> will proceed to VerifyOTP.js screen         */}
                                <TextInput style={styles.textInput} placeholder='Enter email address' keyboardType='email-address'/>
                            </View>


                        {/* Password Input */}
                            {/* <View style={styles.formInputArea}>
                                    <Text style={[styles.h4,{textAlign: 'left'}]}>Password</Text>
                                    <TextInput style={styles.textInput} placeholder='Enter password'/>
                                </View> */}

                        {/* Next Button */}
                            <View style={styles.submit}>
                                <TouchableOpacity style={styles.submitButton}
                                    onPress={() => this.props.navigation.navigate('OTP')}>
                                    {/**
                                    * onPress -> will validate the email address,
                                    *            and if it exists in the database.
                                    * 
                                    *           if valid
                                    *               -> will send the otp using emailJS to the email
                                    *               -> will proceed to VerifyOTP.js screen         */}

                                    <Text style={[styles.h3, {fontWeight: 'bold', color: colors.white }]}>Next</Text>
                                </TouchableOpacity>
                            </View>

                            {/** Forgot Password */}
                            {/* <TouchableHighlight style={styles.textLink}>
                                <Text style={[styles.h4, {color: colors.primary}]}>Forgot your password?</Text>
                            </TouchableHighlight> */}

                        </View>

                        <View style={[styles.sectionBottom, styles.formContent]}>
                            <Text style={[styles.h4, {flex: 1, paddingTop: 20}]}>Don't have an account?</Text>

                            {/**
                            * onPress -> will proceed to SignUp.js screen         */}
                            <TouchableHighlight style={[styles.textLink, {flex: 1, marginBottom: 40}]}>
                                <Text style={[styles.h4, {flex: 1, fontWeight: 'bold', color: colors.primary}]}
                                    onPress={() => this.props.navigation.navigate('Sign Up')}>
                                        Create account
                                </Text>
                            </TouchableHighlight>
                        </View>   
                </View>

            </KeyboardAvoidingView>


            {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
            {/* </TouchableWithoutFeedback> */}

            {/* This was to HIDE sana the KEYBOARD upon touching outside IT */}
            </>
        );  
    }
}