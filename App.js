import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as Font from 'expo-font';
import Home from "./components/Home";
import Gameboard from "./components/Gameboard";
import Scoreboard from "./components/Scoreboard";

const Tab = createBottomTabNavigator();

const loadFonts = async () => {
  try {
    await Font.loadAsync({
      'comic-sans': require('./assets/fonts/comic-sans.ttf'),
    });
  } catch (error) {
    console.error("Error loading fonts:", error);
  }
};

export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        sceneContainerStyle={{ backgroundColor: "white" }} // Adjust background color here
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'information' : 'information-outline';
            } else if (route.name === 'Gameboard') {
              iconName = focused ? 'dice-multiple' : 'dice-multiple-outline';
            } else if (route.name === 'Scoreboard') {
              iconName = focused ? 'view-list' : 'view-list-outline';
            }
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{ tabBarVisible: false }} />
        <Tab.Screen name="Gameboard" component={Gameboard} />
        <Tab.Screen name="Scoreboard" component={Scoreboard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
