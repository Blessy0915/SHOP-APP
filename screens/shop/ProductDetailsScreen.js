import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Colors from '../../constants/Color'
import * as cartActions from '../../store/actions/cart'

const ProductDetailsScreen = (props) => {
    
    const dispatch = useDispatch()
    const productID = props.navigation.getParam('productID')
    const product = useSelector(state => state.products.availableProducts.find(product => product.id === productID))
    
    return (
        <ScrollView>
            <Image source={{uri : product.imageURL}}
                   style={styles.image}/>

            <View style={styles.buttonContainer}>
                <Button title="ADD TO CART"
                        color={Colors.primaryColor}
                        onPress={() => {
                            dispatch(cartActions.addToCart(product))
                        }}/>
            </View>
            <View style={styles.textContainer}> 
                <Text style={styles.price}>
                    ${Number(product.price).toFixed(2)}
                </Text>  
                <Text style={styles.description}>
                    {product.description}
                </Text> 
            </View>


        </ScrollView>
    )
}

ProductDetailsScreen.navigationOptions = (navData) => {
    const productTitle = navData.navigation.getParam('productTitle')
    return {
        headerTitle : productTitle
    }
}

const styles = StyleSheet.create({
    image : {
        width : '100%',
        height : 200
    },
    textContainer : {
        alignItems : 'center',
        marginHorizontal : 15,
        marginVertical : 5
    },
    description : {
        marginTop : 5,
        fontSize : 18,
        textAlign : 'center'
    },
    price : {
        fontSize : 25,
        color : '#888'
    },
    buttonContainer : {
        marginHorizontal : 100,
        marginTop : 5
    }
})
export default ProductDetailsScreen
