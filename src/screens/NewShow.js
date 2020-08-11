import React, { useState } from "react";
import {Text} from "react-native";
import {Input} from "../components/form/Input"

const NewShowScreen = () => {
    const [stateName,setStateName] = useState("");
    const [stateNetwork,setStateNetwork] = useState("");
    const [stateCountry,setStateCountry] = useState("");
    const [stateThumbNail,setStateThumbNail] = useState("");
    return (
        <>
            <View>
                <Input label={""} initialVa />
            </View>
        </>
    )
}

export default NewShowScreen;