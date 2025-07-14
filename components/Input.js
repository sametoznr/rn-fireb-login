import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({label,keyboardType,onUpdateValue,
    value,secure,
  }) 
{

  return (
    <View style={styles.inputcont}>
        <Text style={styles.label}>{label}</Text>
      <TextInput
      style={styles.inputxt}
      keyboardType={keyboardType}
      onChangeText={onUpdateValue}
      value={value}
      secureTextEntry={secure}/>
    </View>
  )
}

const styles = StyleSheet.create({
    inputcont:{
                
                borderRadius:2,
                marginTop:4, 
                paddingTop:3,
    },
    inputxt:{
            fontSize:13,
            backgroundColor:'#F7F7F7',
            borderWidth:1,
            borderRadius:3,
    },
    label:{
        fontWeight:'bold',
        fontSize:16,
        marginBottom:3,
    },

})