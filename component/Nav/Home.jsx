import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useLinkTo} from '@react-navigation/native'
import Detail from './Detail'

const Home = () => {
  const navigation = useNavigation()
  const linkTo = useLinkTo();
  return (
    <View>
      <Text>Home</Text>
      <Button title='go to Detail' onPress={()=>
linkTo('/Detail/23')}
        // navigation.navigate('Detail', {itemId: 45})}
        />

   </View>
    
  )
}

export default Home

const styles = StyleSheet.create({})