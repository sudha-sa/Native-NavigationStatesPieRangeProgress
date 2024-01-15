import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Detail from './Detail';
import BottomNav from './BottomNav';
import Icon from 'react-native-vector-icons/AntDesign'

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator initialRouteName='BottomNav'
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1, backgroundColor: '#1F51C6', }}>
            <View
              style={{
                width: "100%",
                height: 150,
                backgroundColor: '#1F51C6',
                justifyContent: 'flex-start',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#1F51C6',
                padding: 10

              }}>
              <Image source={{ uri: "https://i.pinimg.com/originals/27/8e/7c/278e7ceed2fad09fc794a7280c647ded.jpg" }} style={{
                height: 100,
                width: 100,
                borderRadius: 65
              }} />

              <Text style={{ fontSize: 30, color: '#FFFFFF' }} >sudha@sahu</Text>
            </View>
            <DrawerItemList {...props} />
          </View>
        )
      }}
      // drawerContent={props => <CustomDrawerContent {...props}/>}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#FFFFFF',
          width: 170,
        },
        headerStyle: {
          backgroundColor: '#1F51C6',
        },
        drawerLabelStyle: {
          fontSize: 20
        },
        drawerActiveBackgroundColor: '#FFFFFF',
        drawerActiveTintColor: '#1F51C6',
        drawerInactiveTintColor: '#FFFFFF',
      }}>
      <Drawer.Screen name="kuchbhi" component={BottomNav} options={{
        title:'kuchhbi',
        drawerIcon: ()=>(
        <Icon name='phone' size={20} color='#1F51C6'/>
        )
        
      }}/>
      <Drawer.Screen name="Detail" component={Detail} />
    </Drawer.Navigator>
  );
}

export default DrawerNav

const styles = StyleSheet.create({})