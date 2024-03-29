import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import React from 'react';

import InitialPage from '../screens/initialPage/index.jsx';
import Schedules from '../screens/schedules/index.jsx';
import SignUp from '../screens/signUp/index.jsx';
import SignIn from '../screens/signIn/index.jsx';
import Classe from '../screens/class/index.jsx';
import Warns from '../screens/warns/index.jsx';
import Menu from '../screens/menu/index.jsx';
import Main from '../screens/main/index.jsx';
import Sac from '../screens/sac/index.jsx';

const routes = [ InitialPage, SignIn, SignUp, Main, Warns, Menu, Schedules, Classe, Sac ]
const Stack = createNativeStackNavigator();

const Router = ({}) => {

  const user = useSelector((state) => state.user);

  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={user?.auth ? 'Main' : 'InitialPage'}>
      {
        routes && routes.map((screen, i) => (
          <Stack.Screen key={i} name={screen.name} component={screen} options={{ headerShown: false }}/>
        ))
      }
    </Stack.Navigator>
  </NavigationContainer>
)

}

export default Router