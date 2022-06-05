import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Image, ScrollView, TextInput,Button } from 'react-native';
import { HomeScreen,ProfileScreen,LoginPage,SignUpPage,LoginScreen,RegisterScreen } from '../Page';
const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{headerShown: false}}
                    // options={{ title: 'Selamat Datang' }}
                />
                 <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Selamat Datang' }}
                />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack