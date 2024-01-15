
import { StyleSheet, Text, View , FlatList} from 'react-native'
import React, {useMemo,useState} from 'react'
import CheckBox from '@react-native-community/checkbox';
import RadioGroup from 'react-native-radio-buttons-group';


const Radio = () => {

    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Option 1',
            value: 'option1'
        },
        {
            id: '2',
            label: 'Option 2',
            value: 'option2'
        }
    ]), []);


    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [selectedId, setSelectedId] = useState();

  return (
    <View>

      <Text>Hook</Text>
      <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
        />
      <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
    </View>
  )
}

export default Radio
