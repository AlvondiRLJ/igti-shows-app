import React,{useState} from "react";
import { StyleSheet, View, } from "react-native";
import Input from "../components/form/Input"

const HomeScreen = () => {
    [stateNome, setStateNome] = useState("");
    return (
        <View style={styles.viewStyle}>
            <Input label="nome" onChange={(text)=>setStateNome(text)} value={stateNome}/>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        alignItems: "stretch",
        justifyContent: "flex-start"
    }
})

export default HomeScreen;
