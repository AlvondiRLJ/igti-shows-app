const { default: HomeScreen } = require("./src/screens/Home");
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./src/screens/Home"

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Séries Inc." component={HomeScreen}/>
      </Stack.Navigator>

    </NavigationContainer>
  )
}
export default App;