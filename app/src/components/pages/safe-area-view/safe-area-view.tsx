import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import colors from '@theme/colors';
import styles from './safe-area-view.style';

interface SafeAreaViewProps {
  children: JSX.Element | JSX.Element[];
}

const SafeAreaViewComp: React.FC<SafeAreaViewProps> = ({ children }): JSX.Element => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.creamWhite} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>{children}</SafeAreaView>
    </>
  );
};

export default SafeAreaViewComp;