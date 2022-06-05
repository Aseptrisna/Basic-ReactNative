import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';
const ProfileScreen = ({ navigation, route }) => {
    return <Text>This is {route.params.name}'s profile</Text>;
};
export default ProfileScreen