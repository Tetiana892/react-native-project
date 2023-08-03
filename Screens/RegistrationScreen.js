import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  Alert,
  TouchableOpacity,
}from "react-native";

import { useNavigation } from '@react-navigation/native';

import Photo from '../assets/images/photo.png';
import { AntDesign } from '@expo/vector-icons'; 


export default function RegistrationScreen(){
  const navigation = useNavigation();

    const [login, onChangeLogin] = useState("");
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);
    const [isFocusedLogin, setIsFocusedLogin] = useState(false);
    const [avatar, setAvatar] = useState(null);
    
    const behavior = Platform.OS === "ios" ? "padding" : "height";
    const keyboardVerticalOffset = Platform.OS === "ios" ? -140 : -160;

    const togleShowPassword = () => {
        setShowPassword((prev) => !prev);
      };

      const onLogin =  () => {
        const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const redex= emailRegex.test(email);
        const credentials = `login: ${login} e-mail: ${email}, pass: ${password}`;

          if (!login || !email || !password) {
            Alert.alert("Поле не може бути пустим!");
            return;
          }
    
        if (!redex) {
            Alert.alert("Невірний формат електронної пошти!");
            return;
        } 
         console.log(credentials);
         clearForm();
         navigation.navigate("Home", { screen: "PostsScreen" });
      };

      const clearForm = () => {
        onChangeLogin("");
        onChangeEmail("");
        onChangePassword("");
      };
      const handleAvatarSelect = async () => {
        try {
          const permissionResult =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (!permissionResult.granted) {
            alert("Необходимо предоставить разрешение для доступа к галерее.");
            return;
          }
    
          if (avatar) {
            setAvatar(null);
          } else {
            const pickerResult = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [1, 1],
              quality: 1,
            });
    
            if (!pickerResult.canceled) {
              setAvatar(pickerResult.assets[0].uri);
            }
          }
        } catch (error) {
          console.log("Ошибка выбора изображения:", error);
        }
      };
    
      const onRegistration = () => {
        if (validateForm()) {
          // Предположим, у вас есть функция для отправки данных на сервер или сохранения в базу данных.
          // Здесь вы можете вызвать вашу функцию для регистрации пользователя и передать данные:
          const registrationData = {
            login,
            email,
            avatar,
          };
    
          // Примените вашу логику отправки данных на сервер для регистрации пользователя
          // В данном примере, просто симулируем успешную регистрацию через setTimeout
          setTimeout(() => {
            navigation.navigate("Home", { avatar, login, mail });
          }, 1000); // Здесь вы можете использовать реальный запрос на сервер, а не setTimeout
        } else {
          Alert.alert("Форма не прошла валидацию. Пожалуйста, исправьте ошибки.");
          setShowPassword("");
        }
      };
    return (
        <ImageBackground style={styles.imageBg} source={Photo}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <KeyboardAvoidingView
              behavior={behavior}
              keyboardVerticalOffset={keyboardVerticalOffset}
            >
              <View style={styles.form}>
                <View style={styles.photoWrap}>
                  <TouchableOpacity
                   onPress={handleAvatarSelect}
                    
                  >
                     {avatar ? (<View style={styles.avaDell}>
                    <AntDesign name="pluscircleo" size={25} color="#FF6C00"/>
                    </View>):(
                      <View style={styles.avaAdd}>
                      <AntDesign name="pluscircleo" size={24} color="#FF6C00" />
                    </View>
                    )
                    }
                    
                  </TouchableOpacity>
                </View>
                <Text style={styles.formTitle}>Реєстрація</Text>
                <View>
                  <TextInput
                    value={login}
                    onChangeText={onChangeLogin}
                    style={[
                      styles.input,
                      {
                        borderColor: isFocusedLogin ? "#FFA500" : "#ccc",
                        borderWidth: isFocusedLogin ? 2 : 1,
                      },
                    ]}
                    onFocus={() => setIsFocusedLogin(true)}
                    onBlur={() => setIsFocusedLogin(false)}
                    placeholder="Логін"
                  />
                </View>
    
                <View>
                  <TextInput
                    value={email}
                    onChangeText={onChangeEmail}
                    style={[
                      styles.input,
                      {
                        borderColor: isFocusedEmail ? "#FFA500" : "#ccc",
                        borderWidth: isFocusedEmail ? 2 : 1,
                      },
                    ]}
                    onFocus={() => setIsFocusedEmail(true)}
                    onBlur={() => setIsFocusedEmail(false)}
                    placeholder="Адреса електронної пошти"
                  />
                </View>
                <View style={{ position: "relative" }}>
                  <TextInput
                    value={password}
                    onChangeText={onChangePassword}
                    secureTextEntry={showPassword}
                    style={[
                      styles.input,
                      {
                        borderColor: isFocusedPassword ? "#FFA500" : "#ccc",
                        borderWidth: isFocusedPassword ? 2 : 1,
                      },
                    ]}
                    onFocus={() => setIsFocusedPassword(true)}
                    onBlur={() => setIsFocusedPassword(false)}
                    placeholder="Пароль"
                  />
                  <TouchableOpacity
                    onPress={togleShowPassword}
                    activeOpacity={0.8}
                    style={styles.showPasswordWrap}
                  >
                    <Text style={styles.showPasswordTitle}>
                      {showPassword ? "Показати" : "Приховати"}
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  // onPress={onLogin}
                  onPress={onRegistration}
                  activeOpacity={0.8}
                  style={styles.btn}
                >
                  <Text style={styles.btnTitle}>Зареєструватися</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={styles.linkTitle}>Вже є аккаунт? Увійти</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
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
    
    formTitle: {
      fontSize: 30,
      fontWeight: 500,
      lineHeight: 35,
      textAlign: "center",
      color: "#212121",
      marginBottom: 20,
    },
    
    input: {
      height: 50,
      marginTop: 12,
      borderWidth: 1,
      borderColor: "#E8E8E8",
      borderRadius: 8,
      padding: 10,
      backgroundColor: "#F6F6F6",
    },
    
    btn: {
      backgroundColor: "#FF6C00",
      borderRadius: 100,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 50,
    },
    
    btnTitle: {
      fontSize: 16,
      lineHeight: 19,
      color: "#FFFFFF",
    },
    linkTitle: {
      fontSize: 16,
      lineHeight: 19,
      textAlign: "center",
      color: "#1B4371",
      marginTop: 20,
    },
    showPasswordWrap: {
      position: "absolute",
      top: 28,
      right: 16,
    },
    
    showPasswordTitle: {
      fontSize: 16,
      lineHeight: 19,
      color: "#1B4371",
    },
    photoWrap: {
      width: 120,
      height: 120,
      backgroundColor: "#F6F6F6",
      position: "absolute",
      top: "-19%",
      left: "37%",
      borderRadius: 16,
    },
    avaAdd: {
      position: "absolute",
      top: 80,
      left: 100,
      width: 30,
      height: 30,
      alignItems: "center",
      justifyContent: "center",
    },
    avaDell: {
      position: "absolute",
      left: 45,
      bottom: 33,
      width: 30,
      height: 30,
      alignItems: "center",
      justifyContent: "center",
      transform: [{ rotate: "-45deg" }],
    },
    });