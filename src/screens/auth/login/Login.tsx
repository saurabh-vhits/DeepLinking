import {View, Text, Button} from 'react-native';
import React from 'react';
import {CustomStatusBar, Header} from '@components';
import color from '@theme/color';
import {useAuthNavigation} from '@hooks/useAppNavigation';

const Login = () => {
  const navigation = useAuthNavigation();
  return (
    <View style={{flex: 1, backgroundColor: color.white}}>
      <CustomStatusBar />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
        }}>
        <Header label="Login" showBackIcon />
        <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
};

export default Login;
