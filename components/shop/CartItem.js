import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Platform} from 'react-native'

const CartItem = (props) => {
    return (
        <View style={styles.listItem}>

            <Text style={styles.quantity}>
                {props.productQuantity} {' '}
                <Text style={styles.title}>
                    {props.productTitle}
                </Text>
            </Text>
            <View style={styles.row}>
                <Text style={styles.sum}>
                    ${props.productSum.toFixed(2)} {'  '}
                </Text>
                <TouchableOpacity onPress={props.onRemove}>
                    <Ionicons name={Platform.OS == 'android' ? 'md-trash' : 'ios-trash'}
                            size={25}
                            color='red'/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems:'center',
        margin : 10
    },
    quantity : {
        color : "#888",
        fontSize : 16
    },
    title : {
        color : 'black',
        fontSize : 18
    },
    row : {
        flexDirection : 'row',
        alignItems:'center'
    },
    sum : {
        fontSize : 20
    }
})
export default CartItem
