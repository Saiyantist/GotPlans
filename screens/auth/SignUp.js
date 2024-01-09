import { Component} from 'react';
import { Platform, View, KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, } from 'react-native';
import { SelectList } from 'react_native_simple_dropdown_select_list';

import { styles } from '../../styles/auth/stylesSignUp';
import { colors } from '../../styles/appColors';


import { data } from '../../components/session';

export default class Login extends Component {

    state = data

    dropdownState = {
        selected: '',
    };

    dropdownData = [
        { key: '1', value: 'Client'},
        { key: '2', value: 'Organizer'},
    ]

    handleSelect = (value) => {
        this.setState({ selected: value });
    };

    render(){
        return(
            <>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'position' : 'height'}
                enabled= {false}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                {/**
                 * Data:
                 * firstname
                 * lastname
                 * email
                 * type - 'organizer' or 'customer'  DROPDOWN    
                 */}

                <ScrollView style={styles.scrollFix}>

                    <View style={styles.container}>

                        <View style={styles.formContainer}>

                            {/* Header */}
                                <View style={[styles.sectionTop, styles.formContent]}>
                                    <Text style={styles.h1}>Create Account</Text>
                                </View>

                                <View style={[styles.sectionForm, styles.formContent]}>

                                    {/** 
                                     * For the expansion of collecting info in creating an account:
                                     * 
                                     * use <ScrollView></ScrollView>
                                     * 
                                     */}

                                {/* First Name */}
                                    <View style={styles.formInputArea}>
                                        <Text style={[styles.h4,{textAlign: 'left'}]}>First Name</Text>

                                        {/**
                                        * onChangeText -> will setState the({ firstname: text})         */}
                                        <TextInput  style={styles.textInput} placeholder='Enter First Name'/>
                                    </View>

                                {/* Last Name */}
                                    <View style={styles.formInputArea}>
                                        <Text style={[styles.h4,{textAlign: 'left'}]}>Last Name</Text>

                                        {/**
                                        * onChangeText -> will setState the({ lastname: text})         */}
                                        <TextInput  style={styles.textInput} placeholder='Enter Last Name'/>
                                    </View>

                                {/* Email Address */}
                                    <View style={styles.formInputArea}>
                                        <Text style={[styles.h4,{textAlign: 'left'}]}>Email Address</Text>

                                        {/**
                                        * onChangeText -> will setState the({ validateEmail: text})         */}
                                        <TextInput  style={styles.textInput} placeholder='Enter Email Address' keyboardType='email-address'/>
                                    </View>

                                {/* Role Dropdown Picker */}
                                    <View style={[styles.formInputArea, {flex: 1.2}]}>
                                        <Text style={[styles.h4,{textAlign: 'left'}]}>Are you a Client or an Organizer </Text>
                                        <View style={styles.dropdown}>
                                            <SelectList
                                                data={this.dropdownData}
                                                whatWithSelected={this.handleSelect}
                                                maxHeightList={75}
                                                placeholder='Select'
                                                notFoundText='Data not found'
                                                valueToBeSaved='key'

                                                containerStyle={{ width: 350, marginVertical: 10, justifyContent: 'space-between', borderWidth: 0, borderBottomWidth: 1, borderColor: colors.primary}}
                                                containerDataStyle={{ width: 200, borderRadius: 7, borderWidth: 0.5, borderColor: 'grey', borderTopWidth: 1 }}
                                                infoFontStyle={{ fontSize: 15, fontWeight: 'normal' }}
                                                containerFontsStyle={{ fontSize: 15, fontWeight: '300'}}
                                            />
                                        </View> 
                                    </View>

                                    {/**
                                    * onPress -> will validate the email address
                                    *         -> will check if firstname and lastname are not ''
                                    *         -> will check if value is 'Client' or 'Organizer' ({selected: value }) 
                                    * 
                                    *               if all true
                                    *                   -> will setState the({ email: text}) 
                                    *                   -> will proceed to VerifyEmail.js screen         */} 
                                    <TouchableOpacity style={styles.submitButton}
                                        onPress={() => this.props.navigation.navigate('Email Verification')}>
                                        <Text style={[styles.h3, {fontWeight: 'bold', color: colors.white }]}>Register</Text>
                                    </TouchableOpacity>
                                </View> 



                                <View style={[styles.sectionBottom, styles.formContent]}>
                                    <Text style={[styles.h4, {flex: 1, paddingTop: 20}]}>Already have an account?</Text>

                                    {/**
                                    * onPress -> will proceed to LogIn.js screen         */}
                                    <TouchableHighlight style={[styles.textLink, {flex: 1, marginBottom: 40}]}>
                                        <Text style={[styles.h4, {flex: 1, fontWeight: 'bold', color: colors.primary}]}
                                        onPress={() => this.props.navigation.navigate('Login')}>
                                            Login here
                                    </Text>
                                    </TouchableHighlight>
                                </View>

                        </View>

                    </View>

                </ScrollView>

            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            </>
        );  
    }
}