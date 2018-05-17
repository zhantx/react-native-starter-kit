// @flow

import React, { Component } from 'react';
import { Linking } from 'react-native';
import { Provider } from 'react-redux';
import navigatorUtils from './utils/NavigationUtils';
import store from './configureStore';
import TopNavigator from './TopNavigator';


export default class App extends Component<*> {
  componentDidMount() {
    Linking.getInitialURL().then((url) => {
      if (url) {
        this.handleOpenURL({ url });
      }
    }).catch(err => console.error('An error occurred', err));
    Linking.addEventListener('url', this.handleOpenURL);
  }
  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }
  handleOpenURL(event) {
    console.log(event.url);
  }
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
