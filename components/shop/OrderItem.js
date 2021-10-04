import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Colors from '../../constants/Color'
import CartItem from './CartItem'

const OrderItem = (props) => {
    const [ showDetails, setShowDetails ] = useState(false)
    return (
        <View style={styles.listItem}>
            <View style={styles.row}>
                <Text style={styles.amount}>${props.amount.toFixed(2)} {" "}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button title={ showDetails ? "HIDE DETAILS" : "VIEW DETAILS"}
                        color={Colors.primaryColor}
                        onPress={() => setShowDetails((prevState) => !prevState) }/>
            </View>

            { showDetails && 
                <View>
                    {
                        props.items.map((item,index) => (
                            <CartItem key={item.index}
                                      productTitle={item.title}
                                      productQuantity={item.quantity}
                                      productSum={item.sum}
                                      onRemove={()=>{}}
                                      hideRemoveIcon={true}/>
                        ))
                    }
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    listItem : {
        margin : 20,
        shadowColor : 'black',
        shadowOffset : {width : 0, height : 2},
        shadowRadius : 8,
        shadowOpacity : 0.25,
        backgroundColor : 'white',
        borderRadius : 10
    },
    row : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : 10
    },
    amount : {
        fontSize : 20
    },
    date : {
        fontSize : 20,
        color : '#888'
    },
    buttonContainer : {
        padding : 10
    }
})

export default OrderItem
