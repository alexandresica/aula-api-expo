import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../telas/login';
import HomeScreen from '../telas/home';
import CadUsuarioScreen from '../telas/cad-usuario';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CadUsu" component={CadUsuarioScreen} />
    </Stack.Navigator>
  );
}

export default RootStack