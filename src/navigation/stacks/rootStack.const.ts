import {Home, Location, Login} from '@screens/index';
import screenName from '../screenName';
import {rootStackScreenProps} from './rootStackParams';

export const rootStackScreen: rootStackScreenProps[] = [
  {
    name: screenName.home,
    component: Home,
  },
  {
    name: screenName.login,
    component: Login,
  },
  {
    name: screenName.location,
    component: Location,
    options: {
      presentation: 'modal',
    },
  },
];
