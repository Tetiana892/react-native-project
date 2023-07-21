import React, {useState, useEffect}from "react";
import {
    StyleSheet,
    View,
    Image,
    Text,
    FlatList,
    TouchableOpacity,
  } from 'react-native';

  import { Feather, AntDesign } from '@expo/vector-icons';
  import User from '../../assets/images/User.jpg';

  export default function PostsScreen({route, navigation} ){
   
    const [posts, setPosts] = useState([]);

    useEffect (() => {
        if(route.params){
            setPosts(prevState => [...prevState, route.params])
        }   
    }, [route.params]);

    return(
        <View style={styles.container}>
           <FlatList 
           ListHeaderComponent={
            <View style={styles.userContainer}>
              <Image style={styles.avatarImg} source={User} />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>Natali Romanova</Text>
                <Text style={styles.userEmail}>email@example.com</Text>
              </View>
            </View>
          }
           data= {posts} 
           keyExtractor={(item, indx) =>  indx.toString()} 
           renderItem={({item})=> (
            <View style={styles.itemList}>
                <Image
                source={{uri: item.photo}}
                style={{width:343, height:267, borderRadius: 20}}
                />
             <Text style={styles.userPostTitle}>{item.comment}</Text>
             <View style={styles.userCard}>
              <View style={styles.userCardInformation}>
                <TouchableOpacity
                  style={styles.wrap}
                  onPress={() => navigation.navigate('CommentsScreen', {photo: item.photo})}
                >
                  <Feather name="message-circle" size={24} color="#FF6C00" />
                  <Text style={styles.textStatistic}>{item.comment}</Text>
            </TouchableOpacity>
            
                <View style={{ ...styles.wrap, marginLeft: 24 }}>
                  <AntDesign name="like2" size={24} color="#FF6C00" />
                  <Text style={styles.textStatistic}>{item.likes}</Text>
                </View>
              </View>

              <View style={styles.wrap}>
                <AntDesign name="enviromento" size={24} color="#BDBDBD" />
                <Text style={styles.textStatistic} 
                 onPress={() =>
                    navigation.navigate("MapScreen", {
                      location: item.location,
                    })
                  }
                >{item.location} </Text>
              </View>
            </View>
            </View>
           )}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
    alignItems: 'center',
    },
    userContainer: {
        marginVertical: 32,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
      },
      avatarImg: {
        width: 60,
        height: 60,
        borderRadius: 16,
        resizeMode: 'cover',
      },
      userInfo: {
        marginLeft: 8,
        fontWeight: '700',
      },
      userName: {
        color: '#212121',
        fontSize: 13,
        lineHeight: 15,
        fontWeight: '400',
      },
      userEmail: {
        color: '#212121',
        opacity: 0.8,
        fontSize: 11,
        lineHeight: 13,
      },
      userPostTitle: {
        marginTop: 8,
        fontSize: 16,
        lineHeight: 19,
        color: '#212121',
        fontWeight: '500',
      },
      itemList: {},
  cardImage: {
    resizeMode: 'cover',
    borderRadius: 8,
  },
  userCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 35,
  },

  userCardInformation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStatistic: {
    marginLeft: 4,
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
  },
});