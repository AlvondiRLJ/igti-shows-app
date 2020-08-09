import React from "react";
import { FlatList, TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { useShows } from "../../hooks/useShows";

export const ShowList = () => {
    const {shows} = useShows();

    return (
            <>
                <View style={styles.listStyle}>
                    <FlatList 
                        data={shows}
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

