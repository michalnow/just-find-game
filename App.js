import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'

const MainNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    Home: {
      screen: HomeScreen
    },
  },
  {
    headerMode: 'screen'
  },
  {
    initialRouteName: 'Home'
  }
);

const App = createAppContainer(MainNavigator)

export default App;
