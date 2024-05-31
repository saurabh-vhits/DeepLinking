import { CustomStatusBar, Header, RNText } from '@components';
import React, { FC } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { styles } from './home.style';
import useHome from './useHome';
import imageIndex from '@imageIndex';

const Home: FC = () => {
  const {onPressBackIcon, demoText} = useHome();
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <View style={styles.mainContainer}>
        <Header label="Login" showBackIcon onPressBackIcon={onPressBackIcon} />
        <ScrollView
          contentInsetAdjustmentBehavior="always"
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}>
          <Image
            source={imageIndex.demo}
            style={styles.image}
            resizeMode="cover"
          />
          <RNText style={styles.paragraph}>{demoText}</RNText>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
