import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//screens
import Home from './Screens/Home';
import InsertScreen from './Screens/InsertScreen';
import Welldone from './Screens/Welldone';

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>

      <Stack.Screen 
        name="Home" 
        component={Home}
      />
      <Stack.Screen 
        name="User" 
        component={InsertScreen}
        initialParams={{ 
          title: "user", 
          placeholder:"github username", 
          screenEmit:"username" 
        }} 
      />
      <Stack.Screen 
        name="Repo" 
        component={InsertScreen}
        initialParams={{ 
          title: "repository", 
          placeholder:"repository name",
          screenEmit:"repository" 
        }} 
      />
      <Stack.Screen 
        name="Welldone" 
        component={Welldone}
      />
    
    </Stack.Navigator>
  );
}

export default AppNavigator;