import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function ButtonWhite({ children, onPress }) {
  return (
    <Pressable style={({ pressed }) => [styles.buton,
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
  buton: {
    marginTop: 10,
    paddingVertical: 5,
    borderRadius: 3,

  },
  pressed: {

    opacity: 0.5,
  },
  txt: {
    color: '#3F72AF',
    textDecorationLine: 'underline', // Link efekti verir
    fontWeight: 'bold',
    textAlign: 'center'
  }
})