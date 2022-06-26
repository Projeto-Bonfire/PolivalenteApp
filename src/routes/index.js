import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


/*  Initial Pages  */
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

/*  Subpages of dashboard  */
import Avaliação from '../pages/subpages/Avaliação';
import AvisosGerais from '../pages/subpages/AvisosGerais';
import AvisosInternos from '../pages/subpages/AvisosInternos';
import Calendario from '../pages/subpages/Calendario';
import Horarios from '../pages/subpages/Horarios';
import Sugestoes from '../pages/subpages/Sugestões';


const Stack = createStackNavigator();

export default function Routes(){

    const [initialPage, setInitialPage] = useState('Dashboard');


return (


    <NavigationContainer>

      <Stack.Navigator initialRouteName={initialPage}>

        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Avaliação"
          component={Avaliação}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AvisosGerais"
          component={AvisosGerais}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AvisosInternos"
          component={AvisosInternos}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Calendario"
          component={Calendario}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Horarios"
          component={Horarios}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sugestões"
          component={Sugestoes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

)

}



/*


avaliação de materia:

nota < 5 = motivo obrigatorio
 */