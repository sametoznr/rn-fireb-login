import { StyleSheet, Text, View ,Pressable} from 'react-native'
import React from 'react'

export default function Buttton({children,onPress}) {
  return (
    <Pressable style={({pressed})=>[styles.buton, 
        pressed && styles.pressed]}
        onPress={onPress}
        >
        <View>
      <Text style={styles.txt}>{children}</Text>

        </View>
        
    </Pressable>
  )
}

const styles = StyleSheet.create({
    buton:{
       backgroundColor:'#3F72AF',
       marginTop:10,
       borderWidth:1,
       paddingVertical:5,
       borderRadius:3,
       
    },
    pressed:{

       opacity:0.5,
    },
    txt:{
     fontSize:16,
     fontWeight:'bold',
     textAlign:'center',
     color:'white'
    }
})