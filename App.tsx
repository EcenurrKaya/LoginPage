import { NavigationContainer } from '@react-navigation/native';
import WelcomePage from './pages/WelcomeScreen/Welcome';
import {createNativeStackNavigator}  from '@react-navigation/native-stack';
import Login from './pages/LoginScreen/Login';
import Register from './pages/RegisterScreen/Register';

const Stack= createNativeStackNavigator();
const App=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name='Welcome'
        component={WelcomePage}
        options={{ headerShown: false }}/>

      <Stack.Screen name='Login'
        component={Login}
        options={{ headerShown: false }}/>

      <Stack.Screen name='Register' 
        component={Register}
        options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

