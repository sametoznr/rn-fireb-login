import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthForm from './AuthForm';
import ButtonWhite from './ButtonWhite';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


export default function AuthContent({ isLogin ,onAuth}) {
  const navigation = useNavigation()

  const [credentailsIsInvalid, setCredentailsIsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });


  function submitHandler(credentails) {
    console.log(credentails);
    let { confirmEmail, confirmPassword, email, password } = credentails;


    email = email.trim();
    password = password.trim();
    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordAreEqual = password === confirmPassword;

    if (!emailIsValid || !passwordIsValid || (!isLogin &&
      (!emailsAreEqual || !passwordAreEqual))) {
      Alert.alert('Hops!', 'Lütfen girdiğiniz değerleri kontrol ediniz!');
      setCredentailsIsInvalid(
        {
          email:!emailIsValid,
          confirmEmail:!emailIsValid || !emailsAreEqual,
          password:!passwordIsValid,
          confirmPassword:!passwordIsValid || !passwordAreEqual,
        }
      )
      return;
    }

    onAuth({email,password})


  }

  function switchScreen() {
    if (isLogin) {
      navigation.navigate('SignUp');
    }
    else {
      navigation.navigate('Login');
    }
  }

  return (
    <View style={styles.container}>
      <AuthForm 
      credentailsIsInvalid={credentailsIsInvalid}
      isLogin={isLogin} onsubmit={submitHandler} />
      <View>
        <ButtonWhite onPress={switchScreen}>
          {isLogin ? 'Yeni kullanıcı oluştur' :
            'Giriş yap'}
        </ButtonWhite>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D0E2F2',
    marginTop: 25,
    marginHorizontal: 15,
    padding: 15,
    borderWidth: 1,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },

})