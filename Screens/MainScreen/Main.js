import React from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import PostsScreen from "../PostsScreen";
import MapScreen from "../MapScreen";
import CommentsScreen from "../CommentsScreen";

import { Feather } from "@expo/vector-icons";

const NestedScreen = createStackNavigator();

export default function Main () {
    const navigation = useNavigation();

   return(
    <NestedScreen.Navigator>
        <NestedScreen.Screen
        name = "PostsScreen"
        component= {PostsScreen}
        option={{headerShow: false}}
        />
        <NestedScreen.Screen
        name="MapScreen"
        component={MapScreen}
        />
         <NestedScreen.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather
                name="arrow-left"
                size={24}
                color="#212121"
                style={{ marginLeft: 16 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </NestedScreen.Navigator>
   ) 
}