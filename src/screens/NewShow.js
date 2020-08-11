import React, { useState, useContext } from "react";
import {Text, View, StyleSheet, Button} from "react-native";
import Input from "../components/form/Input"
import { AppContext } from "../context/AppContext";

const NewShowScreen = () => {
    const [stateName,setStateName] = useState("");
    const [stateNetwork,setStateNetwork] = useState("");
    const [stateCountry,setStateCountry] = useState("");
    const [stateThumbNail,setStateThumbNail] = useState("");
    const {dispatch} = useContext(AppContext);

    const salvar=()=>{
        const action = {
            type:"addItem",
            payload:{
                id:4228,
                name:stateName,
                network:stateNetwork,
                country:stateCountry,
                image_thumbnail_path:stateThumbNail
            }
        };

        dispatch(action);
    }
    return (
        <>
            <View style={styles.viewStyle}>
                <Input label={"Nome"} initialValue={""} onChange={(Text)=> setStateName(text)} />
                <Input label={"Network"} initialValue={""} onChange={(Text)=> setStateNetwork(text)} />
                <Input label={"Country"} initialValue={""} onChange={(Text)=> setStateCountry(text)} />
                <Input label={"ThumbNail"} initialValue={""} onChange={(Text)=> setStateThumbNail(text)} />
                <Button title={"Salvar"} onPress={()=>salvar()} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        marginTop:30
    }
})

export default NewShowScreen;