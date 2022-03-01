import { useNavigation } from '@react-navigation/native';

import { KeyboardAvoidingView,  ImageBackground,StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React ,{ useEffect, useState } from 'react'
import { auth } from '../firebase'


const image = { uri: "https://wallpaperaccess.com/full/529122.png" };

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          navigation.replace("Home")
        }
      })
  
      return unsubscribe
    }, [])
    const handleSignUp = () => {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with:', user.email);
          })
          .catch(error => alert(error.message))
      }
      const handleLogin = () => {
        auth
          .signInWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
          })
          .catch(error => alert(error.message))
      }
    
  return (
      
      
    <KeyboardAvoidingView
    
    style={styles.container}
    behavior="padding"
    
  >
     <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
   
 
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
        secureTextEntry
      />
    </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={handleLogin}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
       onPress={handleSignUp}
        style={[styles.button, styles.buttonOutline]}
      >
        <Text style={styles.buttonOutlineText}>Register</Text>
      </TouchableOpacity>
      
    </View>
    
    </ImageBackground>
    </View>
    
  </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        width: '100%'
      },
      image: {
        flex: 1,
        justifyContent: "center",
        width: '100%'
      },
      inputContainer: {
        width: '80%',
        justifyContent: "center",

      },
      input: {
        backgroundColor: 'white',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 20,
        justifyContent: "center",
        marginLeft:'13%',
        width: '103%',
        height: '17%',



      },
      buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        
      },
      button: {
        backgroundColor: '#d76774',
        width: '60%',
        padding: 14,
        marginLeft:'65%',
        borderRadius: 29,
        alignItems: 'center',
      },
      buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#d76774',
        borderWidth: 2,
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
      buttonOutlineText: {
        color: '#d76774',
        fontWeight: '700',
        fontSize: 18,
      },
    })