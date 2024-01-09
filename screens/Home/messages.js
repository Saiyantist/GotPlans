import { Component } from 'react';
import { Platform, Dimensions, View, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, Image, TouchableHighlight} from 'react-native';

import { colors } from '../../styles/appColors';

/** Icons */
import { Ionicons as Icon, Entypo} from '@expo/vector-icons';


export default class Service extends Component {



    render(){
        const iconSize = 35;


        return(
            <View style={{backgroundColor: colors.bgColor, position: 'relative'}}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.pageHeader}>
                        <TouchableOpacity 
                            style={{ width: iconSize }}
                            onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back-outline" size={iconSize} color="black" />
                        </TouchableOpacity>
                    </View>

                    {/* Image Carousel */}
                    <View style={styles.carousel}>
                        <ScrollView horizontal>
                            <View style={styles.carouselImageContainer}>
                                <Image style={styles.carouselImage} source={require('../../assets/images/servicesTemporary/Photoshoot.jpg')} />
                            </View>
                        </ScrollView>
                    </View>

                    {/* Organizer */}
                    <View style={styles.organizer}>
                        <View style={styles.organizerInfo}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile_Organizer')}>
                                <Text style={{fontSize: 23, fontWeight: '700',color: colors.white}}>{"PhotoWow"}</Text>
                            </TouchableOpacity>
                            <Text style={{color: colors.white}}>Joined {"1y"} ago</Text>
                        </View>

                        <View style={styles.organizerContact}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Messages')}>
                                <Icon name="chatbox-outline" size={iconSize} color={colors.primary} />
                            </TouchableOpacity>
                            <Icon name="alert-circle-outline" size={iconSize} color={colors.primary} />
                        </View>
                    </View>

                    {/* Service details */}
                    <View style={styles.details}>
                        <View>
                            <Text style={styles.title}>Creative Photoshoot</Text>
                            <Text style={styles.subtitle}>Capture candid and youthful moments</Text>

                            <Text style={styles.detailContent}> Lorem ipsum dolor sit amet, soncectetur adipiscing elit. Integer nec ex at turpis egestas tempor. Phasellus non tortor eros. auris facilisis massa sed euismod congue </Text>
                            <Text style={styles.detailContent}> Phasellus non tortor eros. auris facilisis massa sed euismod congue. Soncectetur adipiscing elit, lorem ipsum dolor sit amet, integer nec ex at turpis egestas tempor.</Text>
                        </View>
                    </View>

                    {/* Packages */}
                    <View style={styles.packages}>
                        <View style={styles.package}>
                            <TouchableOpacity style={styles.price}>
                                <Text style={styles.priceText}>P 1,500.00</Text> 
                            </TouchableOpacity>
                            <View style={styles.inclusions}>
                                <Text>- Lorem na, Ipsum pa</Text>
                                <Text>- Happy na</Text>
                                <Text>- Birthday mo pa</Text>
                            </View>
                        </View>

                        <View style={styles.package}>
                            <TouchableOpacity style={styles.price}>
                                <Text style={styles.priceText}>P 2,500.00</Text>
                            </TouchableOpacity>
                            <View style={styles.inclusions}>
                                <Text>- Sobrang saya</Text>
                                <Text>- Happy Birthday</Text>
                                <Text>- Birthday mo pa</Text>
                                <Text>- Funny</Text>
                            </View>
                        </View>
                    </View>

                    {/* Book Button */} 
                    <TouchableOpacity
                        style={styles.bookButton}
                        onPress={() => this.props.navigation.goBack()}
                        >
                        <Text style={{fontSize: 20, fontWeight: '500' , textAlign: 'center', color: colors.white}}>
                            Book
                        </Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
            </View>
        );  
    }
}







const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({

    // Containers and Wrappers
    container: {
        flex: 1,
        height: height,
        width: width,
        backgroundColor: colors.white,
        alignItems: 'center',
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },

    pageHeader: {
        justifyContent: 'flex-end',
        width: width,
        padding: 15,
        backgroundColor: colors.bgColor
    },

    // Carousel

    carousel: {
        flex: 4
    },

    carouselImageContainer: {

    },

    carouselImage: {
        flex: 1,
        width: width,
        marginRight: 20,
        // resizeMode: '',
        borderRadius: 5,
    },

    organizer: {
        flex: 1.3,
        flexDirection: 'row',
        backgroundColor: colors.tertiary
    },

    organizerInfo: {
        flex: 2,
        justifyContent: 'center',
        marginLeft: 20
    },

    organizerContact: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // borderWidth: 2, borderColor: 'red',
    },

    details: {
        flex: 4,
        justifyContent: 'flex-start',
        paddingTop: 5,
        paddingHorizontal: 10,
        // borderWidth: 2, borderColor: 'black',
    },
    
    title: {
        flex: 1,
        padding: 5,
        fontSize: 30,
        fontWeight: '600',
        color: colors.primary,
        // borderWidth: 2, borderColor: 'red',
    },

    subtitle: {
        flex: 1,
        paddingTop: 5,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        // borderWidth: 2, borderColor: 'red',
    },

    detailContent: {
        flex: 2,
        textAlign: 'justify',
        color: colors.primary,
        // borderWidth: 2, borderColor: 'red',
    },  

    packages: {
        flex: 3,
        justifyContent: 'center',
        flexDirection: 'row',
    },

    package: {
        flex: 1,
        // marginVertical: 20,
        justifyContent: 'space-between', alignItems: 'center',
        textAlign: 'left'
    },

    price: {
        flex: 1,
        justifyContent: 'center', alignItems: 'center',
    },

    priceText: {
        color: colors.primary,
        fontSize: 15,
        fontWeight: '800',
    },

    inclusions: {
        flex: 3,
        paddingTop: 10,
        // justifyContent: 'center',
        width: 150,
        borderTopWidth: 1, borderColor: colors.secondary
    },


    bookButton: {
        justifyContent: 'center',
        backgroundColor: colors.bgColor,
        marginBottom: 30,
        width: 250,
        height: 75,
        borderRadius: 10,
        colors: colors.white,
        borderWidth: 0.5, borderColor: colors.tertiary,
    },



  });

  

