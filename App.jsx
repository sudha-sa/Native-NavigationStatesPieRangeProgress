import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNav from './component/Nav/StackNav'
import 'react-native-gesture-handler';
import RangeInput from './component/Nav/PieChart/RangeInput';
import PieCheck from './component/Nav/PieChart/Pie';
import Radio from './component/Nav/PieChart/Radio';


const App = () => {
  return (
     <StackNav/>
    //  <RangeInput/>
    // <PieCheck />
    //  <Radio/>

    // <View>
    //   <Text>
    //     App
    //   </Text>
    // </View>
  )
}

export default App

const styles = StyleSheet.create({})