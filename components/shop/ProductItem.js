import React from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'
import Colors from '../../constants/Color'

const ProductItem = (props) => {

    const TouchableComponent = TouchableOpacity
    if(Platform.OS == 'android' && Platform.Version > 21){
        TouchableComponent = TouchableNativeFeedback
    }
    return (
        <View style={styles.screen}>
            <TouchableComponent onPress={props.viewDetails} useForeGround>
                <View style={styles.productItem}>

                    <View style={styles.imageContainer}>
                        <Image source={{ uri : props.imageURL}}
                            style={styles.image}/>
                    </View>

                    <View style={styles.details}>
                        <Text style={styles.description}>{props.description}</Text>
                        <Text style={styles.price}>${props.price.toFixed(2)}</Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button title="View Details"
                                color={Colors.primaryColor}
                                onPress={props.viewDetails}/>
                                
                        <Button title="Add to Cart"
                                color={Colors.primaryColor}
                                onPress={props.addToCart}/>
                    </View>
                </View>
            </TouchableComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        margin : 10
    },
    productItem: {
        width : '100%',
        height : 300,
        borderRadius : 10,
        shadowColor : 'black',
        shadowOffset : {width : 0, height : 2},
        shadowOpacity : 0.25,
        shadowRadius : 5,
        elevation : 8,
        backgroundColor : 'white'
    },
    imageContainer : {
        height : '60%',
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,
        overflow : 'hidden'
    },
    image : {
        height : '100%%',
        width : '100%'
    },
    details : {
        alignItems : 'center',
        height : '15%'
    },
    description : {
        fontSize : 18,
        paddingHorizontal : 10,
        paddingVertical : 5
    },
    price : {
        fontSize : 12,
        color : '#888'
    },
    buttonContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        height : '25%',
        paddingHorizontal : 15
    }
})
export default ProductItem



