import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "./screens/Chat";
import Settings from "./screens/Settings";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "./config/constants";
import SignUp from "./screens/SignUp";
const ChatsStack = createNativeStackNavigator();

const ChatsScreen = () => {
  return (
    <ChatsStack.Navigator>
      <ChatsStack.Screen name="Chat" />
    </ChatsStack.Navigator>
  );
};

const SettingsStack = createNativeStackNavigator();

const SettingsScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" />
    </SettingsStack.Navigator>
  );
};
const Tabs = createBottomTabNavigator();

const TabsScreen = () => (
  <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Chat") {
          iconName = focused ? "chatbubble" : "chatbubble-outline";
        } else if (route.name === "Settings") {
          iconName = focused ? "settings" : "settings-outline";
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: colors.primary,
    })}
  >
    <Tabs.Screen name="Chat" component={Chat} />
    <Tabs.Screen name="Settings" component={Settings} />
  </Tabs.Navigator>
);
const MainStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator headerMode="none" mode="modal"> 
        <MainStack.Screen   name="Tabs" component={TabsScreen} options={{ headerShown: false }} />
        <MainStack.Screen   name="SignUp" component={SignUp} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default App;
