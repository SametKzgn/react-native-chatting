import { React, useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "./screens/Settings";
import ChatList from "./screens/ChatList";
import Chat from "./screens/Chat";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-native-paper";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {initializeApp} from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyAK8zQMUSOnrCLk6-qT_XGh2m63pPN44ZE",
  authDomain: "sam-chatting.firebaseapp.com",
  projectId: "sam-chatting",
  storageBucket: "sam-chatting.appspot.com",
  messagingSenderId: "58592846062",
  appId: "1:58592846062:web:91f9b006ddb5c6f9db53ff"
};

const app = initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const isLoggedIn = false;
    if (!isLoggedIn) {
      navigation.navigate("Signup");
    }
  }, []);

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <Ionicons
              name={route.name == "ChatList" ? "chatbubbles" : "settings"}
              color={color}
              size={size}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="ChatList" component={ChatList} />
      <Tabs.Screen name="settings" component={Settings} />
    </Tabs.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator>
          <Tabs.Screen
            name="Main"
            component={TabsNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ presentation: "fullScreenModal" }}
          />
          <Stack.Screen
            name="Signup"
            component={SignUp}
            options={{ presentation: "fullScreenModal" }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};
export default App;
