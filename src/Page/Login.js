import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Button, TouchableWithoutFeedback } from 'react-native';


export default class LoginPage extends Component {
    // navigateToScreen = (route) => () => {
    //     const navigationAction = NavigationActions.navigate({
    //         routeName: route
    //     })
    //     this.props.navigation.dispatch(navigationAction)
    // }
    render() {
        return (
            <View style={styles.container}>
                <Image style={{ marginBottom: 50, width: 70, height: 70 }} source={require('../assets/logo.png')} />

                <TextInput
                    style={styles.textInput}
                    placeholder='Email'
                    utoCapitalize="none"
                />
                <TextInput
                    secureTextEntry
                    style={[styles.textInput]}
                    placeholder='Password'
                    placeholderTextColor='#ffffff'
                />

                <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                    this.navigate('Register')
                }} >
                    <Text style={styles.textSignup}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.instructions}>Don’t have account? Register</Text>
                {/* <TouchableWithoutFeedback
                    onPress={() => {
                        this.navigateToScreen('Register')()
                        AsyncStorage.removeItem('token')
                    }}>
                    <View><Text>Click Me</Text></View>
                </TouchableWithoutFeedback> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#1ABC9C',
        backgroundColor: '#ffffff',
        flexDirection: 'column'
    },
    textInput: {
        height: 60,
        borderColor: '#ffffff',
        borderWidth: 1,
        color: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
        width: 350
    },
    buttonStyle: {
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10,
        width: 350
    },
    textSignup: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
        color: '#1ABC9C'
    },
    instructions: {
        textAlign: 'center',
        color: '#ffffff',
        marginBottom: 5,
        marginTop: 10
    },
});