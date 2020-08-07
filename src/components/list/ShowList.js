import React from "react";
import { FlatList, TouchableOpacity, Text, StyleSheet, View } from "react-native";

const shows = { items: [
    {
        id: 1,
        nome: "Friends"
    },
    {
        id: 2,
        nome: "Heroes"
    },
    {
        id: 3,
        nome: "Two and a half man"
    }
]};

export const ShowList = () => {
    return (
            <>
                <View style={styles.listStyle}>
                    <FlatList data={shows.items} renderItem={({item})=> <TouchableOpacity onPress={()=> console.info("cliquei em "+item.id)}>
                                                                            <View style={styles.buttonStyle}>
                                                                                <Text>{item.nome}</Text>
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

