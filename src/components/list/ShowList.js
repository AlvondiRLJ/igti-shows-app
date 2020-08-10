import React, { useContext } from "react";
import { FlatList, TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { useShows } from "../../hooks/useShows";
import { AppContext } from "../../context/AppContext";

export const ShowList = () => {
    const {shows} = useShows();
    const {dispatch} = useContext(AppContext);



    return (
            <>
                <View style={styles.listStyle}>
                    <FlatList 
                        data={shows}
                        keyExtractor={(item)=>item.id} 
                        renderItem={({item})=> <TouchableOpacity onPress={()=> dispatch({type: "setItemSelected",payload: item.id})}>
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

