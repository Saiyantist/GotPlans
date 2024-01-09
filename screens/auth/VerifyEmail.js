import { Component } from 'react';
import { Platform, View, KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { styles } from '../../styles/auth/stylesVerification';
import { colors } from '../../styles/appColors';

import { data } from '../../components/session';


export default class VerifyEmail extends Component {
    
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
                enabled= {false}
                style={styles.container}>

                <View>

                    <View style={styles.formContainer}>

                    {/* Header */}
                        <View style={[styles.sectionTop, styles.formContent]}>
                            <Text style={styles.h1}>Email Verification</Text>
                        </View>
                        
                    {/* Form Content */}
                        <View style={[styles.sectionForm, styles.formContent]}>

                            <View style={styles.formInputArea}>
                                <Text style={[styles.h4,{textAlign: 'left'}]}>OTP sent to:</Text>
                                <Text style={[styles.h4,{textAlign: 'left', color: colors.primary, fontWeight: '400', fontStyle: 'italic'}]}>{this.state.email}</Text>

                            {/* Verification Code Input */}
                                <TextInput style={styles.textInput} placeholder='Enter verification code' keyboardType='numeric'/>

                            {/* Resend OTP Button*/}
                                <TouchableHighlight style={[styles.textLink, {flex: 0, marginTop: 45}]}
                                    >
                                    <Text style={[styles.h4, { fontWeight: 'bold', color: colors.primary}]}
                                        onPress={() => {}}>
                                            Resend OTP
                                    </Text>
                                </TouchableHighlight>

                                {/** 
                                 *  Failed OTP input, box type
                                */}
                                
                            </View>

                        {/* Proceed Registration Button */}
                            <View style={styles.submit}>
                                <TouchableOpacity style={styles.submitButton}
                                    onPress={() => this.props.navigation.navigate('HomeScreens')}>
                                    {/* 
                                        Validation stuff up there inside arrowFunc for back-end.
                                    */}
                                    <Text style={[styles.h3, {fontWeight: 'bold', color: colors.white }]}>Proceed</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
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




{/** 
*  Failed OTP input, box type   |
                                V
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