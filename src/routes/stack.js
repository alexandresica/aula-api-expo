import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../telas/login';
import HomeScreen from '../telas/home';
import CadUsuarioScreen from '../telas/cad-usuario';
import RecSenhaScreen from '../telas/recSenha';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator 
      initialRouteName='login'
      screenOptions={{
      headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <Stack.Screen 
        name="login" 
        component={LoginScreen}
        options={{ title: 'Login' }}
       />
      <Stack.Screen 
        name="home" 
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen 
        name="cadUsu" 
        component={CadUsuarioScreen}
        options={{ title: 'Cadastro de Usuário' }}
      />
      <Stack.Screen
        name="recSenha" 
        component={RecSenhaScreen}
        options={{ title: 'Recuperação de senha' }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;