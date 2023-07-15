import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
// import { StyleSheet,  View  } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity} from "react-native";
// import RegistrationScreen from './Screen/RegistrationScreen';
// import LoginScreen from './Screen/LoginScreen';
import PostsScreen from './Screen/MainScreen/PostsScreen';
import CreatePostsScreen from './Screen/MainScreen/CreatePostsScreen';
import ProfileScreen from './Screen/MainScreen/ProfileScreen';
// import icons
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

// const MainStack = createStackNavigator(); // вказує на групу навігаторів

const MainTabs = createBottomTabNavigator();


export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_700Bold: require('./assets/fonts/Roboto-Bold.ttf'), 
    Roboto_400Regular: require('./assets/fonts/Roboto-Regular.ttf'),
    Roboto_500Medium: require('./assets/fonts/Roboto-Medium.ttf'), 
  });
 
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
        <MainTabs.Navigator  screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 85,
          paddingTop: 10,
          paddingBottom: 35,
          paddingHorizontal: 70,
        },
      }}>
          <MainTabs.Screen    options={{
          tabBarIcon: ({ focused, color, size }) => (
            <SimpleLineIcons name="grid" size={24} color="#212121" />
          ),
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontFamily: "Roboto_500Medium",
            fontSize: 17,
          },
          headerRight: () => (
            <TouchableOpacity
              // onPress={() => navigation.navigate("Login")}
              title="Log out"
              color="#fff"
            >
              <MaterialIcons
                style={{marginRight:16}}
                name="logout"
                size={24}
                color="#BDBDBD"
              />
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center',
        }}
        name="Публікації" component={PostsScreen} />

          <MainTabs.Screen 
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <AntDesign 
                name="plus" 
                size={18} 
                color="#FFF"  
               />
              ),
              headerTintColor: "#212121",
              headerTitleStyle: {
                fontFamily: "Roboto_500Medium",
                fontSize: 17,
              },
              tabBarIconStyle: {
                border: 1,
                backgroundColor: "#FF6C00",
                borderRadius: 20,
                maxHeight: 40,
                width: 70,
              },
              headerLeft: () => (
                <TouchableOpacity
                  // onPress={() => navigation.navigate("Login")}
                  title="Log out"
                  color="#fff"
                >
                 <AntDesign name="arrowleft" 
                 size={24} 
                  color="#BDBDBD"
                  style={{marginLeft: 16}}
                  />
                </TouchableOpacity>
              ),
              headerTitleAlign: 'center',
            }}
          name="Створити публікацію" component={CreatePostsScreen} />

          <MainTabs.Screen 
           options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Feather name="user" size={24} color="#212121" />
               ),
               headerTintColor: "#212121",
               headerTitleStyle: {
                 fontFamily: "Roboto_500Medium",
                 fontSize: 17,
               },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                // onPress={() => navigation.navigate("Login")}
                title="Log out"
                color="#fff"
              >
               <AntDesign 
               name="arrowleft"
                size={24} 
                 color="#BDBDBD"
                 style={{marginLeft:16}}
                 />
              </TouchableOpacity>
            ),
          }}
          name="Коментарі" component={ProfileScreen} />
        </MainTabs.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

{/* <MainStack.Navigator initialRouteName="Login" >  {/* Аналог Routes */}
        // <MainStack.Screen name="Registration" component={RegistrationScreen}    options={{ headerShown: false }}/>  {/* Аналог Route */}
        // <MainStack.Screen name="Login" component={LoginScreen}    options={{ headerShown: false }}/>
        // </MainStack.Navigator>  */}