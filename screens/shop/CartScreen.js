import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, FlatList, ActivityIndicator } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Colors from '../../constants/Color'
import CartItem from '../../components/shop/CartItem'
import { removeFromCart } from '../../store/actions/cart'
import * as orderActions from '../../store/actions/order'

const CartScreen = () => {

    const [ isLoading, setLoading ] = useState(false)
    const dispatch = useDispatch()
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

    const orderHandler = async() => {
        setLoading(true)
        await dispatch(orderActions.addOrder(cartItemsArray,totalAmount))
        setLoading(false)
    }

    return (
        <View style={styles.screen}>

            <View style={styles.orderCard}>
                <Text style={styles.text}>
                    Total : { }
                    <Text style={styles.amount}>${Math.round(totalAmount.toFixed(2)) * 100/100}</Text>
                </Text>
                {
                    isLoading ? 
                    <ActivityIndicator color={Colors.primaryColor}
                                       size='large'/>
                    :
                    <Button title="Order Now"
                            color={Colors.accentColor}
                            disabled={cartItemsArray.length ===0}
                            onPress={orderHandler}/>
                }
            </View>

            <View style={styles.listItemContainer}>
                <Text style={styles.cartListTitle}>CART</Text>
                <FlatList data={cartItemsArray}
                      keyExtractor={(item,index) => item.id}
                      renderItem ={(itemData) => <CartItem productTitle={itemData.item.title}
                                                           productQuantity={itemData.item.quantity}
                                                           productSum={itemData.item.sum}
                                                           onRemove={() => {dispatch(removeFromCart(itemData.item.id))}}/>}/>
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
        marginTop : 15,
        marginVertical : 8
    },
    cartListTitle : {
        fontSize : 25,
        textAlign: 'center'
    }
})
export default CartScreen
