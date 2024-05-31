import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback} from 'react';

const useHome = () => {
  const navigation = useAuthNavigation();
  const demoText: string = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of type ̰and scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like AldusPageMaker including versions of Lorem Ipsum. It is a longestablished fact that a reader will be distracted by the readablecontent of a page when looking at its layout. The point of usingLorem Ipsum is that it has a more-or-less normal distribution ofletters, as opposed to using 'Content here, content here', making itlook like readable English. Many desktop publishing packages and webpage editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in theirinfancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of type ̰and scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like AldusPageMaker including versions of Lorem Ipsum. It is a longestablished fact that a reader will be distracted by the readablecontent of a page when looking at its layout. The point of usingLorem Ipsum is that it has a more-or-less normal distribution ofletters, as opposed to using 'Content here, content here', making itlook like readable English. Many desktop publishing packages and webpage editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in theirinfancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;

  /** handle back navigation */
  const onPressBackIcon = useCallback(() => {
    navigation.navigate('Home');
  }, []);

  return {onPressBackIcon,demoText};
};

export default useHome;
