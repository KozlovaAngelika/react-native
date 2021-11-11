import Loader from 'components/Loader';
import Notice from 'components/Notice';
import React, { ReactElement, PropsWithChildren } from 'react';
import { View } from 'react-native';

interface Props {
  isLoading: boolean;
  message: string;
  error: boolean;
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
  if (message) {
    return <Notice isError={error} message={message} />;
  }
  return <View>{children}</View>;
};

export default Content;
