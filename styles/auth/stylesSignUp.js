import { Dimensions, StyleSheet, StatusBar} from "react-native";

import { colors } from "../appColors";

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
      flex: 0,
      width: width,
      backgroundColor: colors.bgColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollFix: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },

    // BIG: {
    //     fontSize: 100,
    // }

    formContainer: {
        flex: 1,
        width: width,
        height: height - StatusBar.currentHeight,
        backgroundColor: colors.secondary,
        // padding: 10,
    },

    formContent: {
        paddingHorizontal: 30
    },

    sectionTop: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.secondary,
    },  

    sectionForm: {
        flex: 4.5,
        alignSelf: 'center',
        borderRadius: 15,
        backgroundColor: colors.white,
        width: width - 20,
        paddingTop: 30,
        // borderWidth: 1, borderColor: 'black'
    },

    formInputArea: {
        flex: 1,
        // justifyContent: 'center',
        // marginTop: 10,
        // borderWidth: 1, borderColor: 'black',
    },

    dropdown: {
        alignItems: 'center',
        // justifyContent: 'center',
        // borderWidth: 1, borderColor: 'black',
    },

    submitButton: {
        flex: 0,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: colors.primary,
        width: 250,
        height: 75,
        borderRadius: 10,
        marginBottom: 30,
        colors: colors.white,
        borderWidth: 0.5, borderColor: 'black',
    },
    sectionBottom: {
        flex: 1,
        backgroundColor: colors.secondary,
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
})