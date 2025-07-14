import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from './Input'
import { useState } from 'react'
import Buttton from './Buttton'

export default function AuthForm({ isLogin, onsubmit }) {

  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('')
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('')



  function submitHandle() {

    onsubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    })
  }

  function updateInput(inputType, enteredValue) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;

      case 'password':
        setEnteredPassword(enteredValue);
        break;

      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;

      case 'confirmEmail':
        setEnteredConfirmEmail(enteredValue);
        break;

    }
  }

  return (
    <View>
      <Input label="Email"
        keyboardType="email-address"
        onUpdateValue={updateInput.bind(this, 'email')}
        value={enteredEmail}

      />

      {!isLogin && (
        <Input label="Emaili Doğrula"
          keyboardType="email-address"
          onUpdateValue={updateInput.bind(this, 'confirmEmail')}
          value={enteredConfirmEmail}
        />
      )}


      <Input label="Şifre"
        secure
        onUpdateValue={updateInput.bind(this, 'password')}
        value={enteredPassword}
      />

      {!isLogin && (
        <Input label="Şifreyi Doğrula"
          secure
          onUpdateValue={updateInput.bind(this, 'confirmPassword')}
          value={enteredConfirmPassword}
        />
      )}
      <View>
        <Buttton onPress={submitHandle}>
          {isLogin ? 'Giriş Yap' : 'Kaydol'}
        </Buttton>
      </View>

    </View>

  )
}

const styles = StyleSheet.create({})