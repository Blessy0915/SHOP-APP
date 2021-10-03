import React from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'

const ProductListingScreen = (props) => {

    const availableProducts = useSelector(state => state.products.availableProducts)

    return (
        <FlatList data={availableProducts}
                  keyExtractor={(item, index) => item.id}
                  renderItem={(itemData) => <Text>{itemData.item.title}</Text>}/>
    )
}

export default ProductListingScreen
