// @flow

import { StackNavigator } from 'react-navigation';
import Colors from '@colors';
import { navigateOnce } from '@utils/NavigationUtils';
import Home from '@components/home';

const navigator = StackNavigator({
  Home: {
    screen: Home,
  },
}, {
  headerMode: 'none',
  mode: 'modal',
  navigationOptions: {
    gesturesEnabled: false,
  },
  cardStyle: {
    backgroundColor: Colors.black,
  },
});

navigator.router.getStateForAction = navigateOnce(navigator.router.getStateForAction);

export default navigator;
