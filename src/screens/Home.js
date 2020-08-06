import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const HomeScreen = (props) => {
    const {navigation} = props;
    return (
        <>
            <View style={styles.viewStyle}>
                <Text>Tela Home</Text>
                <Button title={"Faça a Navegação"} onPress={() => navigation.navigate("Tela")} />
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

export default HomeScreen;
