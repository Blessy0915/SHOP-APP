import React from 'react'
import { FlatList, Platform } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import ProductItem from '../../components/shop/ProductItem'
import * as cartActions from '../../store/actions/cart'
import CustomHeaderButton from '../../components/UI/HeaderButton'

const ProductListingScreen = (props) => {

    const dispatch = useDispatch()
    const availableProducts = useSelector(state => state.products.availableProducts)

    return (
        <FlatList data={availableProducts}
                  keyExtractor={(item, index) => item.id}
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

ProductListingScreen.navigationOptions = (navData) => {
    return {
        headerRight : () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="CART"
                      iconName={Platform.OS == 'ios' ? "ios-cart" : "ios-cart-outline"}
                      onPress={() => navData.navigation.navigate('Cart')}/>
            </HeaderButtons>
        )
    }
}

export default ProductListingScreen
