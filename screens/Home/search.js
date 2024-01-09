import { Component } from 'react';
import { Platform, Dimensions, View, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, Image} from 'react-native';

import { colors } from '../../styles/appColors';

/** Icons */
import { Ionicons as Icon } from '@expo/vector-icons';

export default class Search extends Component {
    render(){
        return(
            <View style={{backgroundColor: colors.secondary}}>
            <ScrollView>
                <View style={styles.container}>

                    <View style={styles.pageHeader}>
                        <Text style={styles.title}>Search</Text>

                    </View>

                    <View style={styles.searchBar}>
                        <TextInput style={styles.textInput}/>
                        <Icon name="search-outline" size={40} color={colors.tertiary} style={{marginLeft: 10 , alignSelf: 'center'}}/>
                    </View>

                    <View style={styles.carousel}>

                        <View style={styles.textLink}>
                            <Text style={{fontSize: 25}}>Categories</Text>
                        </View>

                        <View style={styles.carouselContainer}>
                            <ScrollView horizontal >
                                <View style={styles.carouselImageContainer}>
                                    <Image style={styles.carouselImage} source={require('../../assets/images/categories/Wedding.jpg')}/>
                                </View>
                                <View style={styles.carouselImageContainer}>
                                    <Image style={styles.carouselImage} source={require('../../assets/images/categories/Birthday.jpg')}/>
                                </View>
                                <View style={styles.carouselImageContainer}>
                                    <Image style={styles.carouselImage} source={require('../../assets/images/categories/Catering.jpg')}/>
                                </View>
                            </ScrollView>
                        </View>

                    </View>

                    {/* <Text style={styles.h1}>Home</Text> */}

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
        // justifyContent: 'center',
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },

    pageHeader: {
        // flex: 1,
        justifyContent: 'flex-end',
        width: width,
        padding: 15,
        backgroundColor: colors.secondary
    },

    // Search Section
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 20,
        height: 55,
        width: width-40,
        borderRadius: 20,
        backgroundColor: colors.white
    },

    textInput: {
        flex: 1,
        marginTop: 10,
        // borderBottomWidth: 2,
        // borderColor: colors.primary,
        alignSelf:'center'
    },


    // Categories / Carousel Section
    carousel: {
        // flex: 8,
        height: 330,
        padding: 20,
        paddingRight: 5,
        margin: 20,
        backgroundColor: colors.white,
        borderRadius: 5,
    },

    textLink: {
        flexDirection:'row',
        justifyContent: 'flex-start',
        marginBottom: 10,
        marginRight: 10,
    },

    carouselContainer: {
        flex: 9,
        flexDirection: 'row',
    },

    carouselImageContainer: {

    }, 
    
    carouselImage: {
        flex: 1,
        width: 180,
        marginRight: 20,
        resizeMode: 'cover',
        borderRadius: 5,
    },


    // Services Section

    
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

    


    title: {
        fontSize: 30,
        fontWeight: '900',
        color: 'black',
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

  

