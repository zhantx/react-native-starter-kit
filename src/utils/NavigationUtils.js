import { NavigationActions } from 'react-navigation';

class NavigatorUtils {
  constructor() {
    this.topNavigator = null;
  }

  setTopLevelNavigator(topNavigator) {
    this.topNavigator = topNavigator;
  }

  backToTop() {
    if (this.topNavigator.state.nav.routes.length > 1) {
      const backAction = NavigationActions.back({
        key: this.topNavigator.state.nav.routes[1].key,
      });
      this.topNavigator.dispatch(backAction);
    }
  }
}

const navigateOnce = getStateForAction => (action, state) => {
  const { type, routeName } = action;
  return (
    state &&
    type === NavigationActions.NAVIGATE &&
    routeName === state.routes[state.routes.length - 1].routeName
  ) ? null : getStateForAction(action, state);
  // you might want to replace 'null' with 'state' if you're using redux (see comments below)
};

const navigatorUtils = new NavigatorUtils();
export default navigatorUtils;
export { navigateOnce };
