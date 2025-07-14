import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titles}>Hoşgeldiniz !!</Text>
      <Text style={styles.txt}>Başarılı bir şekilde giriş yaptınız...</Text>

    </View>
  )
}

const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center'
},
titles:{
    fontWeight:'bold',
    fontSize:30,
},
txt:{
    fontSize:20,
    marginTop:15,
},

})