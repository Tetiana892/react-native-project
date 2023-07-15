
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity} from "react-native";

import PostsScreen from './MainScreen/PostsScreen';
import CreatePostsScreen from './MainScreen/CreatePostsScreen';
import ProfileScreen from './MainScreen/ProfileScreen';

// import icons
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const MainTabs = createBottomTabNavigator();

export default function Home({navigation}){
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
              onPress={() => navigation.navigate("Login")}
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
                  onPress={() => navigation.navigate("Login")}
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
}
