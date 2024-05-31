import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {navigationRef} from '../utility/navigationSevices';
import RootStack from './stacks/RootStack';

const Route: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
};

export default Route;
