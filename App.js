import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen'
import secondScreen from './src/screens/secondScreen'

const MainNavigator = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen
    },
    SecondScreen: {
      screen: secondScreen
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
