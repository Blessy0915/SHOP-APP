import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

const ProductDetailsScreen = (props) => {
    
    const productID = props.navigation.getParam('productID')
    const product = useSelector(state => state.products.availableProducts.find(product => product.id === productID))
    
    return (
        <View>
            <Text>
                Product
            </Text>
        </View>
    )
}

ProductDetailsScreen.navigationOptions = (navData) => {
    const productTitle = navData.navigation.getParam('productTitle')
    return {
        headerTitle : productTitle
    }
}

export default ProductDetailsScreen
