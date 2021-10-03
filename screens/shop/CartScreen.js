import React from 'react'
import { View, Text, StyleSheet, Button, Platform } from 'react-native'
import { useSelector } from 'react-redux'
import Colors from '../../constants/Color'

const CartScreen = () => {

    const totalAmount = useSelector(state => state.cart.totalAmount)
    return (
        <View style={styles.screen}>

            <View style={styles.orderCard}>
                <Text style={styles.text}>
                    Total : { }
                    <Text style={styles.amount}>${totalAmount.toFixed(2)}</Text>
                </Text>
                <Button title="Order Now"
                        color={Colors.accentColor}/>
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
    }
})
export default CartScreen
