import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <Button
            title="Go to Jane's profile"
            onPress={() =>
                navigation.navigate('Profile', { name: 'Jane' })
            }
        />
    );
};

export default HomeScreen