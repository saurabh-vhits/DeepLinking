import {View, Text, Button} from 'react-native';
import React from 'react';
import {useAuthNavigation} from '@hooks/useAppNavigation';
import {CustomStatusBar, Header} from '@components';
import color from '@theme/color';

const Home = () => {
  const navigation = useAuthNavigation();
  return (
    <View style={{flex: 1, backgroundColor: color.white}}>
      <CustomStatusBar />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
        }}>
        <Header label="Home" showBackIcon />
        <Button title="Go Login" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
};

export default Home;
