import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Detail from './Detail';
import DrawerNav from './DrawerNav';

// const Stack = createStackNavigator();

const Stack = createNativeStackNavigator();

function StackNav() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Detail} />
                <Stack.Screen name="Kuchbhi" component={DrawerNav} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNav

