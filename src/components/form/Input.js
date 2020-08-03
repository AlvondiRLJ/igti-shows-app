import React from "react";
import {StyleSheet, TextInput, Text} from "react-native"

const Input = (props) => {

    return(
        <>
            <Text>{props.label}</Text>
            <TextInput value={props.value} style={styles.textInputStyle} onChangeText={props.onChange}/> 
        </>
    )
}

export default Input;

const styles = StyleSheet.create({
    textInputStyle: {
        backgroundColor: "#d1cdcd"
    }
})