import { Home, Login } from '@screens/index';
import screenName from '../screenName';

export const rootStackScreen = [
  {
    name: screenName.home,
    Component: Home,
  },
  {
    name: screenName.login,
    Component: Login,
  },
];
