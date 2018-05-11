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

const navigatorUtils = new NavigatorUtils();
export default navigatorUtils;
