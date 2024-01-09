import { Component } from 'react';
import { Platform, Dimensions, View, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import { Card, Button, Icon } from '@rneui/themed';

import { colors } from '../../../styles/appColors';

export default class Home_Client extends Component {
    render(){
        return(
            <View style={{backgroundColor: colors.secondary}}>
            <ScrollView>
                <View style={styles.container}>

                    {/* Header */}
                    <View style={styles.pageHeader}>
                        <Text style={styles.title}>Get it Planned</Text>
                    </View>

                    {/* Carousel */}
                    <View style={styles.carousel}>

                        <View style={styles.textLink}>
                            <Text>View all Categories</Text>
                        </View>

                            <View style={styles.carouselContainer}>
                                <ScrollView horizontal >
                                    <View style={styles.carouselImageContainer}>
                                        <Image style={styles.carouselImage} source={require('../../../assets/images/categories/Wedding.jpg')}/>
                                    </View>
                                    <View style={styles.carouselImageContainer}>
                                        <Image style={styles.carouselImage} source={require('../../../assets/images/categories/Birthday.jpg')}/>
                                    </View>
                                    <View style={styles.carouselImageContainer}>
                                        <Image style={styles.carouselImage} source={require('../../../assets/images/categories/Catering.jpg')}/>
                                    </View>
                                </ScrollView>
                            </View>

                    </View>

                    {/* Services */}
                    <Text style={styles.servicesHeader}>Services</Text>
                    <View style={styles.services}>
                        <ScrollView nestedScrollEnabled>

                            <View style={styles.servicesContainer}>

                                    <View style={styles.serviceCard}>

                                        {/* Card 1 */}
                                        <Card>  
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Service')}>
                                            <Card.Image
                                                style={{ padding: 0 }}
                                                source={require('../../../assets/images/categories/Catering.jpg')}
                                            />
                                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                                <View>
                                                    <Text style={{ marginTop: 10, fontSize: 20 }}>
                                                        Full Catering Service
                                                    </Text>
                                                    <Text style={{ marginTop: 5, fontSize: 15 }}>
                                                        Up to 100 Pax
                                                    </Text>
                                                </View>

                                                <View>
                                                    <Text style={{ marginTop: 10, fontSize: 15 }}>⭐⭐⭐⭐⭐</Text>
                                                    <Text style={{ marginTop: 10, fontSize: 20, textAlign: 'right' }}>4.9 / 5</Text>
                                                </View>
                                            </View>

                                        </TouchableOpacity>
                                        </Card>

                                        <Card>  
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Service')}>
                                            <Card.Image
                                                style={{ padding: 0 }}
                                                source={require('../../../assets/images/categories/Catering.jpg')}
                                            />
                                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                                <View>
                                                    <Text style={{ marginTop: 10, fontSize: 20 }}>
                                                        Full Catering Service
                                                    </Text>
                                                    <Text style={{ marginTop: 5, fontSize: 15 }}>
                                                        Up to 100 Pax
                                                    </Text>
                                                </View>

                                                <View>
                                                    <Text style={{ marginTop: 10, fontSize: 15 }}>⭐⭐⭐⭐⭐</Text>
                                                    <Text style={{ marginTop: 10, fontSize: 20, textAlign: 'right' }}>4.9 / 5</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        </Card>

                                    </View>

                            </View>

                        </ScrollView>
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

    // Services Section
    services: {
        flex: 9,
        width: width,
        backgroundColor: colors.secondary,
        marginTop: 15
    },
    
    servicesHeader: {
        // flex: 1,
        fontSize: 40,
        fontWeight: '600',
        color: colors.secondary,
        alignSelf: 'flex-start',
        marginHorizontal: 15,
    },

    servicesContainer: {
        flex: 1,
    },

    serviceCard: {
        
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

    carouselContainer: {
        flex: 6,
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
    textLink: {
        flex: 0.5,
        flexDirection:'row',
        justifyContent: 'flex-end',
        marginBottom: 20,
        marginRight: 10,
    },
    
    textInput: {
        marginTop: 10,
        borderBottomWidth: 1,
        borderColor: colors.primary,
    },

    title: {
        fontSize: 40,
        fontWeight: '400',
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

  

