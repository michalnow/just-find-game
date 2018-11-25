import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'



const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Login: {
      screen: LoginScreen
    }
  },
  {
    headerMode: 'screen'
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(MainNavigator);
