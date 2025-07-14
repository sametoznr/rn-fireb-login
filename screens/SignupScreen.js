import { StyleSheet, View } from 'react-native'
import React, { useState,useContext } from 'react'
import AuthContent from '../components/AuthContent'
import { createUser } from '../util/auth'
import Loading from '../components/Loading'
import { AuthContext } from '../store/auth-context'

export default function SignupScreen() {
  const [isAuthh, setIsAuthh] = useState(false)
  const authContext=useContext(AuthContext)

  async function signUpHandler({ email, password }) {
    setIsAuthh(true)
    try {
     const token = await createUser(email, password)
     authContext.authcan(token);
      // Kayıt başarılı mesajı veya yönlendirme ekleyebilirsin
    } catch (error) {
      alert('Kayıt başarısız: ' + (error.message || 'Bir hata oluştu'))
    }
    setIsAuthh(false)
  }

  if (isAuthh) {
    return (
      <View style={styles.centered}>
        <Loading message="Kayıt işlemi yapılıyor..." />
      </View>
    )
  }

  return <AuthContent onAuth={signUpHandler} />
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
