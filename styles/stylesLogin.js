import { Dimensions, StyleSheet, StatusBar} from "react-native";

import { colors } from "../styles/appColors";

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: width,
      backgroundColor: colors.bgColor,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    formContainer: {
        flex: 1,
        borderRadius: 15,
        width: width - 50,
        backgroundColor: colors.white,
        padding: 10,
        marginTop: 180,
        marginBottom: 20,
    },

    formContent: {
        paddingHorizontal: 20,
        // borderWidth: 1, borderColor: 'black',
    },

    sectionTop: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.secondary,
    },
    sectionForm: {
        flex: 3,
    },

    formInputArea: {
        flex: 1,
        justifyContent: 'center',
        // borderWidth: 1, borderColor: 'black',
        
    },
    sectionBottom: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: colors.secondary,
        // borderWidth: 1,
        // borderColor: 'black',
    },

    submit: {
        flex: 1,
        // marginVertical: 15,
        justifyContent: 'center',
        // borderWidth: 1, borderColor: 'red',
    },


    submitButton: {
        flex: 0,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: colors.primary,
        width: 250,
        height: 75,
        borderRadius: 10,
        colors: colors.white,
        borderWidth: 0.5, borderColor: 'black',
    },

    textLink: {
        flex: 0.8,
        justifyContent: 'center',
        marginVertical: 10
    },

    h1: {
        fontSize: 30,
        fontWeight: '300',
    },

    h3: {
        fontSize: 20,
        textAlign: 'center',
    },

    h4: {
        fontSize: 15,
        textAlign: 'center',
    },

    textInput: {
        marginTop: 10,
        borderBottomWidth: 1,
        borderColor: colors.primary,
    },



  });

  

