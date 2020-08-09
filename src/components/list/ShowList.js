import React, { useState, useEffect } from "react";
import { FlatList, TouchableOpacity, Text, StyleSheet, View } from "react-native";
import show from "../../api/show";


export const ShowList = () => {
    const [listState, setListState] = useState(null);

    useEffect(()=>{
        show.get("/shows")
            .then(response=>{
                setListState(response.data)
            })
    },[]);

    return (
            <>
                <View style={styles.listStyle}>
                    <FlatList 
                        data={listState}
                        keyExtractor={(item)=>item.id} 
                        renderItem={({item})=> <TouchableOpacity onPress={()=> console.info("cliquei em "+item.id)}>
                                                                            <View style={styles.buttonStyle}>
                                                                                <Text>{item.name}</Text>
                                                                            </View>
                                                                        </TouchableOpacity>} />
                </View>
            </>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        flexDirection: "row",
        justifyContent: "center",
        borderColor: "red",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: "#DCDCDC"
    },
    listStyle: {
        marginTop: 50,

    }
})

