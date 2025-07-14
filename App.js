import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import { useContext } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

function NormalStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#D0E2F2',
      }, contentStyle: {
        backgroundColor: '#C9D6DF'
      }

    }}>
      <Stack.Screen name="Login"
        options={{ headerTitle: 'Kullanıcı Girişi' }}
        component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignupScreen}
        options={{ headerTitle: 'Kullanıcı Kayıt' }}
      />
    </Stack.Navigator>

  );
}


function AfterNormalStack() {
    const authContext=useContext(AuthContext)

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#D0E2F2',
      }, contentStyle: {
        backgroundColor: '#C9D6DF'
      }

    }}>
      <Stack.Screen name="Home"
        options={{ headerTitle: 'Anasayfa' ,
          headerLeft:()=>(

            <Pressable onPress={authContext.logout}>
<Ionicons name="exit-outline" size={26} color="black" />            </Pressable>

          )
        }}
        component={HomeScreen} />
     
    </Stack.Navigator>

  );
}


function Navigation (){
  const authContext=useContext(AuthContext)
  return (
    <NavigationContainer>
      {!authContext.isAuthenticated &&
       <NormalStack /> }

       {authContext.isAuthenticated &&
       <AfterNormalStack /> }
        
      </NavigationContainer>
  );
}




export default function App() {
  return (
    <AuthContextProvider>
      <Navigation/>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({

});
