import { Component } from 'react';
import { Platform, Dimensions, View, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import { colors } from '../../styles/appColors';

export default class Bookings extends Component {
    render(){
        return(
            <View style={{backgroundColor: colors.bgColor}}>
            <ScrollView>
                <View style={styles.container}>

                        <Text style={styles.title}>GotPlans {'\n'}</Text>
                        <Text style={styles.h1}>Bookings</Text>

                        {/* <Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text><Text>GotPlans</Text> */}

                </View>

            </ScrollView>
            </View>
        );  
    }
}







const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const logoSize = width-100;

const styles = StyleSheet.create({

    // Containers and Wrappers
    container: {
        flex: 1,
        height: height,
        width: width,
        backgroundColor: colors.bgColor,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },


    // Multimedia

    logo: {
        width: logoSize,
        height: logoSize,
    },

    button: {
        flex: 0,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: colors.secondary,
        width: 250,
        height: 75,
        borderRadius: 10,
        colors: colors.white,
        borderWidth: 0.5, borderColor: colors.tertiary,
    },

    
    // Typographical
    textLink: {
        flex: 0.8,
        justifyContent: 'center',
        marginVertical: 10
    },
    
    textInput: {
        marginTop: 10,
        borderBottomWidth: 1,
        borderColor: colors.primary,
    },

    title: {
        fontSize: 50,
        fontWeight: '400',
        color: colors.white,
    },

    h1: {
        fontSize: 30,
        fontWeight: '300',
        color: colors.white,
    },

    h3: {
        fontSize: 22,
        textAlign: 'center',
        color: colors.primary,
    },

    h4: {
        fontSize: 15,
        textAlign: 'center',
        color: colors.white,
    },

  });

  


