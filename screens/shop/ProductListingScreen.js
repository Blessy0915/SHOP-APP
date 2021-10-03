import React from 'react'
import { FlatList, Text } from 'react-native'
import { useSelector } from 'react-redux'

import ProductItem from '../../components/shop/ProductItem'

const ProductListingScreen = (props) => {

    const availableProducts = useSelector(state => state.products.availableProducts)

    return (
        <FlatList data={availableProducts}
                  keyExtractor={(item, index) => item.id}
                  renderItem={(itemData) => (
                        <ProductItem imageURL={itemData.item.imageURL}
                                     price={itemData.item.price}
                                     description={itemData.item.description} />
                  )}/>
    )
}

export default ProductListingScreen
