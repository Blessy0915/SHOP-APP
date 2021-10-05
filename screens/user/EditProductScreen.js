import React, { useState, useCallback, useEffect } from 'react'
import { View, TextInput, ScrollView, Text, StyleSheet, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector, useDispatch } from 'react-redux'
import CustomHeaderButton from '../../components/UI/HeaderButton'
import * as productActions from '../../store/actions/product'

const EditProductScreen = (props) => {
    
    const dispatch = useDispatch()
    const productID = props.navigation.getParam('productID')
    const product = useSelector(state => state.products.availableProducts.find(product => product.id == productID))
  
    const [ title, setTitle ] = useState(productID ? product.title : '')
    const [ price, setPrice ] = useState(productID ? product.price : '')
    const [ imageURL, setImageURL ] = useState(productID ? product.imageURL : '')
    const [ description, setDescription ] = useState(productID ? product.description : '')

    const onSaveHandler = useCallback(() => {
        const formData = {
            title,
            price,
            imageURL,
            description
        }
        productID ? dispatch(productActions.updateProduct(formData, productID)) : dispatch(productActions.createProduct(formData, productID))
        props.navigation.goBack()
    }, [title, price, imageURL, description])
    
    useEffect(() => {
        props.navigation.setParams({ save : onSaveHandler})
    }, [onSaveHandler])

    return (
        <ScrollView>
            <View style={styles.screen}>
                <View style={styles.container}>
                    <Text styles={styles.label}>TITLE</Text>
                    <TextInput style={styles.input}
                               value={title}
                               onChangeText={(value) => setTitle(value)}/>
                </View>
                {
                    !productID &&
                    <View style={styles.container}>
                        <Text>PRICE</Text>
                        <TextInput style={styles.input}
                                value={price}
                                onChangeText={(value) => setPrice(value)}/>
                    </View>
                }

                <View style={styles.container}>
                    <Text>IMAGE URL</Text>
                    <TextInput style={styles.input}
                               value={imageURL}
                               onChangeText={(value) => setImageURL(value)}/>
                </View>
                <View style={styles.container}>
                    <Text>DESCRIPTION</Text>
                    <TextInput style={styles.input}
                               value={description}
                               onChangeText={(value) => setDescription(value)}/>
                </View>
            </View>
        </ScrollView>
    )
}

EditProductScreen.navigationOptions = (navData) => {
    const id = navData.navigation.getParam('productID')
    return {
        headerTitle : id ? 'EDIT PRODUCT' : 'ADD PRODUCT',
        headerRight : () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="SAVE"
                      iconName={Platform.OS == 'android' ? 'md-checkmark' : 'ios-checkmark'}
                      onPress={navData.navigation.getParam('save')}/>
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen : {
        margin : 20
    },
    container : {
        marginVertical : 10
    },
    label : {
        fontSize : 20,
        marginVertical : 8
    },
    input : {
        paddingHorizontal : 2,
        paddingVertical : 5,
        borderBottomColor : '#ccc',
        borderBottomWidth : 1
    }
})
export default EditProductScreen
