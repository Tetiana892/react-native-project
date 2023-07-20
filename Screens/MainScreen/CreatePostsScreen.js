import React, { useState } from "react";
import { 
  Text, 
  View, 
   StyleSheet,
   Image,
   TouchableOpacity ,
    KeyboardAvoidingView ,
    TextInput   
  } from "react-native";
import { Camera } from "expo-camera";
// import * as MediaLibrary from "expo-media-library";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'; 
// import * as Location from "expo-location";

export default function CreatePostsScreen() {
  const navigation = useNavigation();

  const [photoLocationName, setPhotoLocationName] = useState('');
  const [photoName, setPhotoName] = useState('');
  const [photo, setPhoto] = useState(null); 
  const [camera, setCamera] = useState(null);
 
 const takePhoto =  async () => {
  const photo = await camera.takePictureAsync();

  setPhoto(photo.uri);
  console.log("photo", photo);
 }

 const sendPhoto = () => {
  navigation.navigate("PostsScreen", {photo});
 };

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
  >
    <View style={styles.container}>
      {photo ?  (
          <View style= {styles.takePhotoContainer}>
          <Image 
          source={{uri: photo}}
           style={styles.imageCamera}/>
        </View>
        ): (
         <Camera
        style={styles.camera}
        ref={setCamera}
             >
               <TouchableOpacity
            style={styles.snapContainer}
            opacity={0.5}
            onPress={takePhoto} 
          >
            <Ionicons name="ios-camera" size={24} color="#BDBDBD" />
          </TouchableOpacity> 
      </Camera>
        )
      }
       <TouchableOpacity onPress={takePhoto}>
            <Text style={styles.imageText}>
              {photo ? 'Редагувати фото' : 'Завантажте фото'}
            </Text>
          </TouchableOpacity>

        <View style={{ flex: 3}}>
            <TextInput
              style={styles.input}
              placeholder="Назва..."
              type={'text'}
              name={'photoName'}
              value={photoName}
              onChangeText={setPhotoName}
            />
            <TextInput
              style={styles.input}
              placeholder="Місцевість..."
              type={'text'}
              name={'photoLocation'}
              value={photoLocationName}
              onChangeText={setPhotoLocationName}
            />
      <TouchableOpacity
             style={[
              styles.button,
              photo
                ? {
                    color: '#FFFFFF',
                    backgroundColor: '#FF6C00',
                  }
                : {
                    color: '#BDBDBD',
                    backgroundColor: '#F6F6F6',
                  },
            ]}
            activeOpacity={0.5}
            onPress={sendPhoto} 
          >
            <Text  style={[
                  styles.buttonText,
                  photo
                    ? {
                        color: '#FFFFFF',
                      }
                    : {
                        color: '#BDBDBD',
                      },
                ]}>
      Опубліковати
            </Text>
          </TouchableOpacity> 
          </View>
    </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#E8E8E8",
   },
  camera: {
    width: '92%',
    height: 240,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
   },

  snapContainer: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

takePhotoContainer:{
  position: "absolute",
  top: 0,
  left: 90,
  height: "100%",
  borderWidth: 1,
  borderRadius: 10,
  display: "flex",
  justifyContent: 'center',
  alingItems:'center',
  borderColor: "#fff",
},

button: {
  height: 50,
  width: 343,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 100,
  marginTop: 44,
},
buttonText: {
  fontWeight: '400',
},
imageCamera:{
  width: '95%',
  height: 240,
 borderRadius: 8,
                
},
imageText: {
  color: '#BDBDBD',
  fontWeight: '400',
  fontSize: 16,
  lineHeight: 19,
  marginTop: 16,
},

input: {
  width: 340,
  height: 50,
  marginTop: 28,
  padding: 16,
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: 16,
  borderBottomColor: '#E8E8E8',
  borderBottomWidth: 2,
},

});