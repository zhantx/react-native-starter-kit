// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import navigatorUtils from './utils/NavigationUtils';
import store from './configureStore';
import TopNavigator from './TopNavigator';


export default class App extends Component<*> {
  render() {
    return (
      <Provider store={store}>
        <TopNavigator
          ref={(input) => { navigatorUtils.setTopLevelNavigator(input); }}
        />
      </Provider>
    );
  }
}
