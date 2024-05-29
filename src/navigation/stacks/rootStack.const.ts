import Login from '../../screens/auth/login/Login';
import {Home} from '../../screens/home';
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
