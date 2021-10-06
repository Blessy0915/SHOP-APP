import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const Input = (props) => {
    return (
        <View style={styles.container}>
            <Text styles={styles.label}>
                {props.label}
            </Text>
            <TextInput {...props}
                       style={styles.input}
                       value={props.value}
                       onChangeText={props.onChangeText}
                       />
            {
                !props.isValid && (
                    <Text style={styles.errorText}>
                        {props.errorText}
                    </Text>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
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
    },
    errorText : {
        color : 'red'
    }
})
export default Input
