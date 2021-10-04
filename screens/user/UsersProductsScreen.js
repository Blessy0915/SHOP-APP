import React from 'react'
import { View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../../components/UI/HeaderButton'
import { useSelector } from 'react-redux'
import ProductItem from '../../components/shop/ProductItem'
import { FlatList } from 'react-native-gesture-handler'

const UsersProductsScreen = (props) => {
    const userProducts = useSelector(state => state.products.userProducts)
    return (
        <FlatList data={userProducts}
                  keyExtractor={(item,index) => item.id}
                  renderItem={(itemData) => ( 
                        <ProductItem imageURL={itemData.item.imageURL}
                        price={itemData.item.price}
                        description={itemData.item.description} 
                        addToCart={() => {
                            dispatch(cartActions.addToCart(itemData.item))
                        }}
                        viewDetails={() => {
                            props.navigation.navigate('ProductDetail', {
                            productID : itemData.item.id,
                            productTitle : itemData.item.title
                            })
                        }}/>
                  )}/>
    )
}

UsersProductsScreen.navigationOptions = (navData) => {
    return {
        headerTitle : "YOUR PRODUCTS",
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
