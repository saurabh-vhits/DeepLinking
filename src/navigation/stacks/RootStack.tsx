import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {rootStackScreen} from './rootStack.const';

const Stack = createNativeStackNavigator();
const RootStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        presentation: 'card',
      }}>
      {rootStackScreen?.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen?.name}
          component={screen?.Component}></Stack.Screen>
      ))}
      <></>
    </Stack.Navigator>
  );
};

export default RootStack;
