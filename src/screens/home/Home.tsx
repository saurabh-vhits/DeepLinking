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


// const onUploadExerciseVideo = useCallback(
//   async (item: ExercisesProps, index: number) => {
//     const exerciseVideo = await ImageCropPicker.openPicker({
//       mediaType: 'video',
//       compressVideoPreset: 'HighestQuality',
//     });
//     if (exerciseVideo && item && index) {
//       const {
//         title,
//         defaultParametersSets,
//         defaultParametersReps,
//         tags,
//         equipment,
//         mainMuscle,
//         secondaryMuscle,
//         trainerInstructions,
//       } = item;
//       try {
//         const formData = new FormData();
//         formData.append(param.default.videoExercise, {
//           name: 'video.mp4',
//           uri: exerciseVideo.path,
//           type: 'video/mp4',
//         });
//         formData.append(
//           param.default.createNewExerciseData,
//           JSON.stringify({
//             title: title,
//             defaultParametersSets: defaultParametersSets,
//             defaultParametersReps: defaultParametersReps,
//             type: '',
//             tags: tags,
//             equipment: equipment,
//             mainMuscle: mainMuscle,
//             secondaryMuscle: secondaryMuscle,
//             trainerInstructions: trainerInstructions,
//           }),
//         );
//         const {data} = await axiosInstance.post(
//           constant.createExercise,
//           formData,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               'Content-Type': 'multipart/form-data',
//             },
//           },
//         );
//         if (data) {
//           Toast(data?.message);
//         }
//       } catch (error: any) {
//         Toast(error?.response?.data?.message);
//       }
//     }
//   },
//   [bodyWeightOnlyState],
// );