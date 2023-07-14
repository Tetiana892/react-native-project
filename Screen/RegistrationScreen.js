import { ImageBackground, 
    StyleSheet,
    View,
    KeyboardAvoidingView, 
    Platform}from "react-native";

import Photo from '../assets/images/photo.png'

export default function RegistrationScreen(){

    const behavior = Platform.OS === "ios" ? "padding" : "height";
    const keyboardVerticalOffset = Platform.OS === "ios" ? -140 : -160;

    return (
<ImageBackground source={Photo}  style={styles.imageBg}>
<View style={{ flex: 1, justifyContent: "flex-end" }}>
<KeyboardAvoidingView 
 behavior={behavior}
 keyboardVerticalOffset={keyboardVerticalOffset}>
<View style={styles.form}>

</View>

          </KeyboardAvoidingView>
</View>
</ImageBackground>
    );
}

const styles = StyleSheet.create({
    imageBg: {
       flex: 1, width: "100%" 
      },
      form: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 16,
        paddingTop: 90,
        paddingBottom: 60,
        position: "relative",
      },
    })