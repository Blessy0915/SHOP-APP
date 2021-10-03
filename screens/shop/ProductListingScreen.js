import React from 'react'
import { FlatList, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import ProductItem from '../../components/shop/ProductItem'
import * as cartActions from '../../store/actions/cart'

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

export default ProductListingScreen
