import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Image, ScrollView, TextInput,Button } from 'react-native';
import { HomeScreen,ProfileScreen,LoginPage,SignUpPage } from '../Page';
const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
                    name="Login"
                    component={LoginPage}
                    options={{ title: 'Selamat Datang' }}
                />
                 <Stack.Screen
                    name="Register"
                    component={SignUpPage}
                    options={{ title: 'Selamat Datang' }}
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