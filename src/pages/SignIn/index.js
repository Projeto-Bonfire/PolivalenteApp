import { View, Image, TextInput, Text, TouchableOpacity, Keyboard} from 'react-native'
import React, {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getUser } from '../../services/database/getUser.js';
import { main, formulario, footer } from './styles.js';
import Dashboard from '../Dashboard';



export default function SignIn({navigation}) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false); 
  const [userNotFound, setUserNotFound] = useState(false)
  const [dado, setDado] = useState({});
  const [user, setUser] = useState()
/*
  useEffect( () => {
    checkUser()
  }, []);

  const checkUser = async () => {
    const pushUser =  await AsyncStorage.getItem('user')
    setUser(pushUser ? 'Dashboard' : 'SignIn')
    console.log(pushUser)
    if (pushUser){
      navigation.navigate('Dashboard')
    }
  }
  */
  const verifyUser = async () => {


    if (!email) return setErrorEmail('not field');
    if (!password) return setErrorPassword('not field')
    setErrorEmail(false)
    setErrorPassword(false)
    const dado = await getUser({email: email, password: password});
    setDado(dado)
   
if (dado.status === 'incorrect password'){ 

  setErrorPassword('incorrect password')

} else if (dado.status === 'User not found'){
  setErrorPassword(false)
   setUserNotFound(true)
} else {
setUserNotFound(false)

  navigation.navigate('Dashboard')

}
  }

/*
  
  useEffect(() => {
    pegarDado();
  }, []);

*/

const [keyboardStatus, setKeyboardStatus] = useState(undefined);

useEffect(() => {
  const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
    setKeyboardStatus("Keyboard Shown");
  });
  const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
    setKeyboardStatus("Keyboard Hidden");
  });

  return () => {
    showSubscription.remove();
    hideSubscription.remove();
  };
}, []);

const isFocus = () =>  !focusEmail && !focusPassword;
  return (

    




<View style={main.container}>

<View>

      {keyboardStatus != 'Keyboard Shown' && (<Image
      source={require("../../assets/imgs/vetor.png")}
      style={main.logo}
      />)}

 
</View>



<View style={formulario.container}>

<TextInput
     style={[
       formulario.input,
       focusEmail ? formulario.inputFocus:'',
       errorEmail ? formulario.inputError:''
      ]}
      onChangeText={text => {
        setEmail(text)
        setErrorEmail(false)
      }}
      onFocus={() => setFocusEmail(true)}
      onBlur={() => setFocusEmail(false)}
      autoCorrect={false}
      multiline={false}

      KeyboardType='email-address'
      placeholder={`EMAIL ${errorEmail == 'not field' ? '*' : '' }`}

     />

<TextInput
     style={[
       formulario.input,
       focusPassword ? formulario.inputFocus:'',
       errorPassword ? formulario.inputError:''
      ]}
     
      onChangeText={text => {
        setPassword(text)
        setErrorPassword(false)

      }
      }
      secureTextEntry={true}
      autoCorrect={false}
      multiline={false}
      onFocus={() => setFocusPassword(true)}
      onBlur={() => setFocusPassword(false)}
      placeholder={`SENHA ${errorPassword == 'not field' ? '*' : '' }`}
     />

     {

     }
   { errorPassword == 'incorrect password' && (  <Text style={formulario.errorText}>Usuario ou senha invalidos*</Text>)}
   { errorEmail == 'not field' && (  <Text style={formulario.errorText}>Preencha o campo de email*</Text>)}
   { errorPassword == 'not field' && (  <Text style={formulario.errorText}>Preencha o campo de senha*</Text>)}
   {userNotFound && (  <Text style={formulario.errorText}>Usuario n??o cadastrado*</Text>)}

<TouchableOpacity
        style={formulario.button}
        onPress={verifyUser}
   
      >
        <Text style={formulario.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

 </View>

 {keyboardStatus != 'Keyboard Shown' && (
<View style={footer.container}>
<Text>Esqueceu a senha</Text>
<Text 
onPress={() => navigation.navigate('SignUp') }
>Criar conta</Text>
</View>
 )}
</View>



  )
}


