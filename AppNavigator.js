import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//screens
import Home from './Screens/Home';
import User from './Screens/User';
import Repo from './Screens/Repo';
import Welldone from './Screens/Welldone';

const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>

          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Repo" component={Repo}/>
          <Stack.Screen name="User" component={User}/>
          <Stack.Screen name="Welldone" component={Welldone}/>
        
        </Stack.Navigator>
    );
}

export default AppNavigator;