import React,{useState} from "react";
import { StyleSheet, View } from "react-native";
import Input from "../components/form/Input"
import SearchInput from "../components/form/SearchInput";

const HomeScreen = () => {
    const [stateNome, setStateNome] = useState("");
    return (
        <View style={styles.viewStyle}>
            <Input label="Nome" onChange={(text)=>setStateNome(text)} initialValue={"Alvondi"} />
            <SearchInput label="Nome" onChange={(text)=>setStateNome(text)} initialValue={"Alvondi"} />
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
