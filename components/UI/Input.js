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
                       value={formState.inputValues.title}
                       onChangeText={validate.bind(this,'title')}/>
            {
                props.isError && (
                    <Text>
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
    }
})
export default Input
