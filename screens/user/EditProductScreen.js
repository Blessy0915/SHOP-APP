import React from 'react'
import { View, TextInput } from 'react-native'

const EditProductScreen = () => {
    return (
        <View>
            <Text>Edit</Text>
        </View>
    )
}

EditProductScreen.navigationOptions = (navData) => {
    const id = navData.navigation.getParam('productID')
    return {
        headerTitle : id ? 'EDIT PRODUCT' : 'ADD PRODUCT',
    }
}
export default EditProductScreen
