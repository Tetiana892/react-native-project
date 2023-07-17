import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';


import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import Home from './Screens/Home';

const MainStack = createNativeStackNavigator(); // вказує на групу навігаторів

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
       <MainStack.Navigator initialRouteName="Login" >  {/* Аналог Routes */}
        <MainStack.Screen name="Registration" component={RegistrationScreen}  options={{ headerShown: false }}/>  {/* Аналог Route */}
         <MainStack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }}/>
         <MainStack.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
         </MainStack.Navigator>  
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

 