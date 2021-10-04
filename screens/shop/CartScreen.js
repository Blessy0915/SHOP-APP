import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import Colors from '../../constants/Color'

const CartScreen = () => {

    const totalAmount = useSelector(state => state.cart.totalAmount)
    const cartItems = useSelector(state => state.cart.items)
    const cartItemsArray = []

    for(const item in cartItems){
        cartItemsArray.push({
            id : item,
            title : cartItems[item].productTitle,
            price : cartItems[item].productPrice,
            quantity : cartItems[item].quantity,
            sum : cartItems[item].sum
        })
    }   

    return (
        <View style={styles.screen}>

            <View style={styles.orderCard}>
                <Text style={styles.text}>
                    Total : { }
                    <Text style={styles.amount}>${totalAmount.toFixed(2)}</Text>
                </Text>
                <Button title="Order Now"
                        color={Colors.accentColor}
                        disabled={cartItemsArray.length ===0}/>
            </View>

            <View style={styles.listItemContainer}>
                <Text>CART</Text>
                <FlatList data={cartItemsArray}
                      keyExtractor={(item,index) => item.id}
                      renderItem ={(itemData) => <Text>{itemData.item.title}</Text>}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        margin : 10
    },
    orderCard : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        paddingVertical : 15,
        paddingHorizontal : 10,
        borderRadius : 10,
        backgroundColor : 'white',
        shadowColor : 'black',
        shadowOffset : {width : 0, height : 2},
        shadowOpacity : 0.8,
        shadowRadius : 10
    },
    amount : {
        fontSize : 20,
        color : Colors.primaryColor
    },
    text : {
        fontSize : 22
    },
    listItemContainer : {
        margin : 10
    }
})
export default CartScreen
