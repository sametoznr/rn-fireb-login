import { StyleSheet, Alert} from 'react-native';
import React, { useState ,useContext} from 'react';
import AuthContent from '../components/AuthContent';
import Loading from '../components/Loading';
import { login } from '../util/auth'; 
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../store/auth-context'





export default function LoginScreen() {
  const [isAuth, setIsAuth] = useState(false);
  const navigation = useNavigation();
    const authContext=useContext(AuthContext)
  

  async function loginHandler({ email, password }) {
  setIsAuth(true);
  try {
   const token= await login(email, password);
         authContext.authcan(token);
  } catch (error) {
    Alert.alert('Hata', error.message || 'Bir hata oluştu.');
  } finally {
    setIsAuth(false);
  }
}


  if (isAuth) {
    return <Loading message="Giriş yapılıyor..." />;
  }

  return <AuthContent isLogin onAuth={loginHandler} />;
}

const styles = StyleSheet.create({});
