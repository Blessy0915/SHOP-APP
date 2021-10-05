import React from 'react'
import { View, TextInput, ScrollView, Text, StyleSheet } from 'react-native'

const EditProductScreen = () => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <View style={styles.container}>
                    <Text styles={styles.label}>TITLE</Text>
                    <TextInput style={styles.input}/>
                </View>
                <View style={styles.container}>
                    <Text>PRICE</Text>
                    <TextInput  style={styles.input}/>
                </View>
                <View style={styles.container}>
                    <Text>IMAGE URL</Text>
                    <TextInput  style={styles.input}/>
                </View>
                <View style={styles.container}>
                    <Text>DESCRIPTION</Text>
                    <TextInput  style={styles.input}/>
                </View>
            </View>
        </ScrollView>
    )
}

EditProductScreen.navigationOptions = (navData) => {
    const id = navData.navigation.getParam('productID')
    return {
        headerTitle : id ? 'EDIT PRODUCT' : 'ADD PRODUCT',
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
