import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation, useRoute, useNavigationState, useFocusEffect, useIsFocused, } from '@react-navigation/native'

const Detail = ({}) => {
  const navigation = useNavigation()
 const route= useRoute()

 const compoDetails = useNavigationState(state => state.index); // render items based on usenavigation (means navigation wala page )
 alert(JSON.stringify(compoDetails))

 const isFocused = useIsFocused();
 alert(isFocused)   //it gives True and False

 useFocusEffect(
  React.useCallback(() => {
    alert('Welcome in the page')
    return ()=> alert('you have closed Details page')
  },[])
  )

 const {itemId} = route.params;

  return (
    <View>
    
    <Text>{isFocused ? 'focused here ' : 'unfocused '}</Text>

      <Text>Detail</Text>
      <Text>itemId: </Text>
      <Button title='go to Drawernav' onPress={()=>
        navigation.navigate('Kuchbhi')}
        />
      <Text>Go Back</Text>
      <Button title='go Back' onPress={()=>navigation.goBack()}/>

   
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({})