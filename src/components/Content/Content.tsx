import Loader from 'components/Loader';
import Notice from 'components/Notice';
import React, { ReactElement, PropsWithChildren } from 'react';
import { View } from 'react-native';

interface Props {
  isLoading: boolean;
  message: string;
  error: Error | null;
}

const Content = ({
  children,
  isLoading,
  message,
  error,
}: PropsWithChildren<Props>): ReactElement => {
  if (isLoading) {
    return <Loader />;
  }
  if (message || error) {
    return <Notice isError={Boolean(error)} message={message} />;
  }
  return <View>{children}</View>;
};

export default Content;
