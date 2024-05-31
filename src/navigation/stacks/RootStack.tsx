import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {rootStackScreen} from './rootStack.const';
import {RootStackParams} from './rootStackParams';

const Stack = createNativeStackNavigator<RootStackParams>();
const RootStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        presentation: 'card',
        orientation:'portrait'
      }}>
      {rootStackScreen?.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen?.name as keyof RootStackParams}
          component={screen?.component}
          options={screen?.options}
        />
      ))}
      <></>
    </Stack.Navigator>
  );
};

export default RootStack;
