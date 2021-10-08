import React, { useEffect } from 'react'
import { FlatList, Platform, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import ProductItem from '../../components/shop/ProductItem'
import * as cartActions from '../../store/actions/cart'
import CustomHeaderButton from '../../components/UI/HeaderButton'
import Colors from '../../constants/Color'
import * as productActions from '../../store/actions/product'

const ProductListingScreen = (props) => {

    const dispatch = useDispatch()
    const availableProducts = useSelector(state => state.products.availableProducts)

    useEffect(() => {
        dispatch(productActions.fetchProducts())
    }, [dispatch])

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
                                     onTouch={() => {
                                         props.navigation.navigate('ProductDetail', {
                                            productID : itemData.item.id,
                                            productTitle : itemData.item.title
                                         })
                                     }}>
                            <Button title="VIEW DETAILS" 
                                    color={Colors.primaryColor}
                                    onPress={() => {
                                        props.navigation.navigate('ProductDetail', {
                                        productID : itemData.item.id,
                                        productTitle : itemData.item.title
                                    })}}/>
                                    
                            <Button title="ADD TO CART"
                                    color={Colors.primaryColor}
                                    onPress={() => dispatch(cartActions.addToCart(itemData.item))}/>
                        </ProductItem>
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
        ),
        headerLeft : () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="MENU"
                      iconName={Platform.OS == 'ios' ? "ios-menu" : "ios-menu-outline"}
                      onPress={() => navData.navigation.toggleDrawer()}/>
            </HeaderButtons>
        ),
    }
}

export default ProductListingScreen
