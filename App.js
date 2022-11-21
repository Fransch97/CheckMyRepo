//native comp
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import Home from './Screens/Home';
import User from './Screens/User';
import Repo from './Screens/Repo';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Repo" component={Repo}/>
        <Stack.Screen name="User" component={User}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
