import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Slider from '@react-native-community/slider'

const RangeInput = () => {
    const [range, setRange] = useState(0)
  return (
    <View>
        <Text style={{fontSize:40, fontWeight:'bold', margin:20}}>{(range)}</Text>
      <Slider
    style={{width: 300, height: 20, justifyContent:'center',fontSize:80}}
    minimumValue={0}
    maximumValue={25}
    minimumTrackTintColor="#FFFFFF"
    maximumTrackTintColor="#000000"
    thumbTintColor='blue'
onValueChange={(value)=>setRange(value)}

    />
    </View>
  )
}

export default RangeInput

const styles = StyleSheet.create({})