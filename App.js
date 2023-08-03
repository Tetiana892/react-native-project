import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import Home from './Screens/Home';
import CommentsScreen from './Screens/CommentsScreen';
import MapScreen from './Screens/MapScreen';

const MainStack = createStackNavigator(); 

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
      <MainStack.Navigator >
       <MainStack.Screen name="Registration" component={RegistrationScreen}  options={{ headerShown: false }}/>
         <MainStack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }}/>
        <MainStack.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
        <MainStack.Screen
          name="CommentsScreen"
          component={CommentsScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{ headerShown: false }}
        />
         </MainStack.Navigator>  
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}




 