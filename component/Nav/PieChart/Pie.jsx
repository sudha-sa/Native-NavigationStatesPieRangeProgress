import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Svg } from "react-native-svg"
import { VictoryPie, VictoryTooltip } from "victory-native"


const PieCheck = () => {
  return (
    <ScrollView>
      <View>
        <Svg>
          <VictoryPie 
          data={[
              { x: 1, y: 3, placement: "vertical" },
              { x: 2, y: 4, placement: "parallel" },
              { x: 3, y: 2, placement: "perpendicular" },
            ]}
            colorScale="warm"
            radius={150}
            style={{ labels: { padding: 5, fontSize: 20,} }}
            labelRadius={({ innerRadius }) => innerRadius + 3}
            innerRadius={30}
            labels={({ datum }) => `${datum.placement}\nlabel`}
            labelPlacement={({ datum }) => datum.placement}
            // labelPosition="startAngle"
            labelComponent={<VictoryTooltip active />}
          />

          <VictoryPie
            data={[
              { x: 1, y: 3, placement: "vertical" },
              { x: 2, y: 4, placement: "parallel" },
              { x: 3, y: 2, placement: "perpendicular" },
            ]}
            colorScale="warm"
            labelRadius={({ innerRadius }) => innerRadius + 80}
            // radius={({ datum }) => 50 + datum.y * 20}
            // innerRadius={50}
            style={{ labels: { fill: "white", fontSize: 20, fontWeight: "bold" } }}
          />
        </Svg>
      </View>
    </ScrollView>
  )
}

export default PieCheck;

const styles = StyleSheet.create({})


