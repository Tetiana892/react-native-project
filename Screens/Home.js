import React from "react";
import { StyleSheet, View } from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import PostsScreen from './MainScreen/PostsScreen';
import CreatePostsScreen from './MainScreen/CreatePostsScreen';
import ProfileScreen from './MainScreen/ProfileScreen';

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const PostsStack = createStackNavigator();
const CreatePostsStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const headerLogout = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.logoutBtn}
      onPress={() => navigation.navigate("Login")}
    >
      <MaterialIcons name="logout" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};

const headerToTop = () => {
  const navigation = useNavigation();
  return(
    <TouchableOpacity
      style={{left: 16}}
      onPress={() => navigation.navigate('PostsScreen')}
    >
     <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity>
  )
};

const headerTo = () => {
  const navigation = useNavigation();
  return(
    <TouchableOpacity
      style={{left: 16}}
      onPress={() => navigation.navigate('CreatePostsScreen')}
    >
     <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity>
  )
};

const PostsStackScreen = () => {
  return (
    <PostsStack.Navigator>
      <PostsStack.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerTitleAlign: "center",
          headerTitleStyle: styles.headerText,
          headerStyle: styles.headerStyle,
          headerRight: headerLogout,
          headerLeft: () => null,
        }}
      />
    </PostsStack.Navigator>
  );
};

const CreatePostsStackScreen = () => {
  return (
    <CreatePostsStack.Navigator>
      <CreatePostsStack.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerTitleAlign: "center",
          headerTitleStyle: styles.headerText,
          headerStyle: styles.headerStyle,
          headerLeft:headerToTop,
          }}
      />
    </CreatePostsStack.Navigator>
  );
};

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "Профіль",
          headerTitleAlign: "center",
          headerTitleStyle: styles.headerText,
          headerStyle: styles.headerStyle,
          headerLeft:headerTo,
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default function Home() {

    return (
      <Tabs.Navigator
        screenOptions={{
          tabBarLabelStyle: { display: "none" },
          tabBarStyle: {
            paddingTop: 10,
            paddingBottom: 34,
            paddingHorizontal: 70,
            height: 85,
          },
        }}
      >
        <Tabs.Screen
          name="PostsTab"
          component={PostsStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <View style={styles.postBtn}>
                <AntDesign name="appstore-o" size={24} color={"#212121CC"} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="CreatePostsTab"
          component={CreatePostsStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <View style={styles.createBtn}>
                <AntDesign name="plus" size={13} color={"#ffffff"} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="ProfileTab"
          component={ProfileStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <View style={styles.profBtn}>
                <AntDesign name="user" size={24} color={"#212121CC"} />
              </View>
            ),
          }}
        />
      </Tabs.Navigator>
    );
 
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "Roboto_500Medium",
    fontSize: 17,
    lineHeight: 22,
    color: "#212121",
  },
  headerStyle: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#E8E8E8",
  },
  logoutBtn: {
    right: 16,
  },
  createBtn: {
    width: 70,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
  },
});