import React from 'react'
import { View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../../components/UI/HeaderButton'
import { useSelector } from 'react-redux'
import ProductItem from '../../components/shop/ProductItem'

const UsersProductsScreen = (props) => {
    const userProducts = useSelector(state => state.products.userProducts)
    return (
        <View></View>
    )
}

UsersProductsScreen.navigationOptions = (navData) => {
    return {
        headerTitle : "ADMIN PANEL",
        headerLeft : () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="MENU"
                      iconName="ios-menu"
                      onPress={()=>navData.navigation.toggleDrawer()}/>
            </HeaderButtons>
        )
    }
}
export default UsersProductsScreen
