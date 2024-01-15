import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { useScrollToTop, useTheme } from '@react-navigation/native'


const Homepages = () => {

  const ref = useRef(null);
  const { colors } = useTheme();

  useScrollToTop(ref);
  return (
    <ScrollView ref={ref}>
    <View style={{ backgroundColor: 'gray'}}>
      <Text style={{fontSize:40}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestias recusandae optio tempora fugiat quae cupiditate et vero? Eos corrupti ex praesentium minus quaerat. Eius sapiente sint libero magnam soluta.</Text>
      <Text style={{fontSize:30}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestias recusandae optio tempora fugiat quae cupiditate et vero? Eos corrupti ex praesentium minus quaerat. Eius sapiente sint libero magnam soluta.</Text>
      <Text style={{fontSize:20}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestias recusandae optio tempora fugiat quae cupiditate et vero? Eos corrupti ex praesentium minus quaerat. Eius sapiente sint libero magnam soluta.</Text>
      <Text style={{ color: colors.text,}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestias recusandae optio tempora fugiat quae cupiditate et vero? Eos corrupti ex praesentium minus quaerat. Eius sapiente sint libero magnam soluta.</Text>
      <Text style={{ backgroundColor: colors.card }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestias recusandae optio tempora fugiat quae cupiditate et vero? Eos corrupti ex praesentium minus quaerat. Eius sapiente sint libero magnam soluta.</Text>
    </View></ScrollView>
  )
}

export default Homepages

const styles = StyleSheet.create({})