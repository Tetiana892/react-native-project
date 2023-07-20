import React, {useState, useEffect}from "react";
import { View,  StyleSheet, FlatList, Image } from "react-native";

export default function PostsScreen({route} ){
    
    const [posts, setPosts] = useState([]);
     console.log("route.params", route.params);

    useEffect (() => {
        if(route.params){
            setPosts(prevState => [...prevState, route.params])
        }
    
    }, [route.params]);

    return(
        <View style={styles.container}>
           <FlatList data= {posts} 
           keyExtractor={(item, indx) =>  indx.toString()} 
           renderItem={({item})=> (
            <View style= {{
                marginHorizontal:20,
                marginBottom:10, 
                justifyContent: "center", 
                alingItems: "center"
                }}>
                <Image
                source={{uri: item.photo}}
                style={{width:343, height:267}}
                />
            </View>
           )}/>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});