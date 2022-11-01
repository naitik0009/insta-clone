import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {HomeScreen} from "../screens/home.screen";
import { PostScreen } from "../screens/post.screen";
import {LoginScreen} from "../screens/login.screen";
import { RegisterScreen } from "../screens/register.screen";
const Stack = createNativeStackNavigator();
const screenOption = {
    headerShown:false,
};
export const SignedInStack = ()=>(
<NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOption}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Post" component={PostScreen} />

    </Stack.Navigator>
</NavigationContainer>
);
export const SignedOutStack = ()=>(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={screenOption}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    );