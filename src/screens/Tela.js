import React from "react";
import { StyleSheet, View, Text } from "react-native";

const TelaScreen = () => {

    return (
        <>
            <View style={styles.viewStyle}>
                <Text>Tela Navegada</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        alignItems: "stretch",
        justifyContent: "flex-start",
        marginTop: 10
    }
})

export default TelaScreen;
