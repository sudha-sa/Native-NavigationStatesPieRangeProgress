import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from './Homepage';
import Homepages from './Homepages';

const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Homepage" component={Homepage} />
      <Tab.Screen name="Homepages" component={Homepages} />
    </Tab.Navigator>
  );
}
export default BottomNav



