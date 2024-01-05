import { Component } from 'react';
import { Platform, View, KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { styles } from '../../styles/stylesVerifyOTP';
import { colors } from '../../styles/appColors';

import { data } from '../../components/session';


export default class VerifyOTP extends Component {
    
    state = data

    verify = {
        otp: ['-', '-', '-', '-', '-', '-'],
        otpVal: ''
    }
    

    render(){
        return(
            <>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                enabled= {false}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>


                <View style={styles.container}>

                    <View style={styles.formContainer}>

                        <View style={[styles.sectionTop, styles.formContent]}>
                            <Text style={styles.h1}>Verify your Login</Text>
                        </View>

                        <View style={[styles.sectionForm, styles.formContent]}>

                            <View style={styles.formInputArea}>
                                <Text style={[styles.h4,{textAlign: 'left'}]}>OTP sent to:</Text>
                                <Text style={[styles.h4,{textAlign: 'left', color: colors.primary, fontWeight: '400', fontStyle: 'italic'}]}>{this.state.email}</Text>
                                <TextInput style={styles.textInput} placeholder='Enter verification code' keyboardType='numeric'/>
                                
                                <TouchableHighlight style={[styles.textLink, {flex: 0, marginTop: 45}]}>
                                    <Text style={[styles.h4, { fontWeight: 'bold', color: colors.primary}]}>Resend OTP</Text>
                                </TouchableHighlight>
                                {/* <View style={styles.formInputArea}>
                                </View> */}

                                {/** 
                                 *  Failed OTP input, box type
                                */}
                                {/* <TextInput style={{ color:'transparent',height: 50,width:'100%',position:'absolute',backgroundColor:'transparent' }} caretHidden={true}
                                    keyboardType='numeric'
                                    onChangeText={(value) => {
                                        if (isNaN(value)) {
                                            return;
                                        }
                                        if (value.length > 6) {
                                            return;
                                        }
                                        let val =
                                            value + '------'.substr(0, 6 - value.length);
                                        let a = [...val];
                                        this.setState({ otpVal: a});
                                        this.setState({ otp: value })
                                        console.log(this.verify.otp)
                                    }}autoFocus = {true}/>
                                <View style={styles.otpBoxesContainer}>
                                    {[0, 1, 2, 3, 4, 5].map((item, index) => (
                                        <Text style={styles.otpBox} key={index}>
                                            {this.state.otp[item]}
                                        </Text>
                                    ))}
                                </View> */}

                            </View>

                            {/* <View style={styles.formInputArea}>
                                <Text style={[styles.h4,{textAlign: 'left'}]}>Password</Text>
                                <TextInput style={styles.textInput} placeholder='Enter password'/>
                            </View> */}

                            <View style={styles.submit}>

                                <TouchableOpacity style={styles.submitButton}>
                                    <Text style={[styles.h3, {fontWeight: 'bold', color: colors.white }]}>Login</Text>
                                </TouchableOpacity>

                            </View>
                            
                            {/* <TouchableHighlight style={styles.textLink}>
                                <Text style={[styles.h4, {color: colors.primary}]}>Forgot your password?</Text>
                            </TouchableHighlight> */}

                        </View>

                        <View style={[styles.sectionBottom, styles.formContent]}>
                            <Text style={[styles.h4, {flex: 1, paddingTop: 20}]}>Don't have an account?</Text>
                            <TouchableHighlight style={[styles.textLink, {flex: 1, marginBottom: 40}]}>
                                <Text style={[styles.h4, {flex: 1, fontWeight: 'bold', color: colors.primary}]}>Create account</Text>
                            </TouchableHighlight>
                        </View>       

                    </View>


                </View>



            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            </>
        );  
    }
}