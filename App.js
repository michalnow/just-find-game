import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './src/screens/Home'
import secondScreen from './src/screens/secondScreen'

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    SecondScreen: {
      screen: secondScreen
    },
  },
  {
    header: null
  },
  {
    initialRouteName: 'Home'
  }
);

const App = createAppContainer(MainNavigator)

export default App;
