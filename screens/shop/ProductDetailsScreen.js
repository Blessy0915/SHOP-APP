import React from 'react'
import { View, Text } from 'react-native'

const ProductDetailsScreen = (props) => {
    
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
