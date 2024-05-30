import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';

const Location: FC = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 30}}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
};

export default Location;
