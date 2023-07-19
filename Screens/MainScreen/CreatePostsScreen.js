import React, { useState } from "react";
import { Text, View,  StyleSheet,Image } from "react-native";
import { Camera } from "expo-camera";
import {TouchableOpacity} from "react-native-gesture-handler";
import * as MediaLibrary from "expo-media-library";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'; 

export default function CreatePostsScreen() {
  const [photo, setPhoto] = useState(null);
  const [camera, setCamera] = useState(null);
  const navigation = useNavigation();
  // const [type, setType] = useState(Camera.Constants.Type.back);

 const takePhoto =  async () => {
  const photo = await camera.takePictureAsync();
  setPhoto(photo.uri);
  console.log("photo", photo);
 };

 const sendPhoto = () => {
  navigation.navigate("PostsScreen", {photo});
 };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        ref={setCamera}
      >
      {photo &&  (
          <View style= {styles.takePhotoContainer}>
          <Image 
          source={{uri: photo}}
           style={styles.imageCamera}/>
        </View>
        )}
          <TouchableOpacity
            style={styles.snapContainer}
            onPress={takePhoto} 
          >
            <View style={{ alingItems: 'center',
    justifyContent: 'center'}}>
            <Ionicons name="ios-camera" size={24} color="#BDBDBD" />
            </View>
          </TouchableOpacity> 
      </Camera>
      <View>
      <TouchableOpacity
            style={styles.sendBtn}
            onPress={sendPhoto} 
          >
            <Text style={styles.sendLabel}>
      Опубліковати
            </Text>
          </TouchableOpacity> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    height: 240,
    borderRadius: 8,
    backgroundColor: "#E8E8E8",
    marginBottom: 8,
   },
  camera: {
    height: "70%",
    resizeMode: "contain",
    marginHorizontal:10,
    borderRadius: 10,
    marginTop: 30,
    alingItems: 'center',
    justifyContent: 'flex-end',
   },

  snapContainer: {
  borderWidth:1,
  width: 70,
  height: 70,
  borderRadius: 50,
  justifyContent: 'center',
  alingItems:'center',
  marginBottom: 20,
  backgroundColor: "#fff",
  },

takePhotoContainer:{
  position: "absolute",
  top: 0,
  left: 90,
  height: "100%",
  borderWidth: 1,
  borderRadius: 10,
  justifyContent: 'center',
  alingItems:'center',
  borderColor: "#fff",
},

sendBtn:{
  marginHorizontal:30,
  backgroundColor: "#FF6C00",
      borderRadius: 100,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 50,
},
sendLabel:{
  color: "#fff",
  font: "Roboto_400Regular",
},
imageCamera:{
  // position: "absolute",
  borderRadius:10,
  alignItems: "center",
  justifyContent: "center",
  width: 200,
  height:300,
}
 
});