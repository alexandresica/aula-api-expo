import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../telas/home';
import PerfilScreen from '../telas/perfil';
import ItensScreen from '../telas/itens';

const Tab = createBottomTabNavigator();

export default function Tabnavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="perfil" component={PerfilScreen} />
      <Tab.Screen name="itens" component={ItensScreen} />
    </Tab.Navigator>
  );
}