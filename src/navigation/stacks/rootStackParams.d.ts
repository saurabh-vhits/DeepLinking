import React from 'react';

export type RootStackParams = {
  Login: undefined;
  Home: undefined;
  Location: undefined;
};

export type rootStackScreenProps = {
  name: string;
  component: React.ComponentType<any>;
  options?: {
    title?: string;
    presentation?:
      | 'modal'
      | 'transparentModal'
      | 'containedModal'
      | 'containedTransparentModal'
      | 'fullScreenModal'
      | 'formSheet'
      | undefined;
  };
};
