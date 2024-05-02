import React from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './profile.style';
import { RNPressable, RNText, RNView } from '@components/atoms';
import { SCALE_100 } from '@theme/spacing';
import colors from '@theme/colors';
import { SafeAreaViewComp } from '@components/pages';

const Profile = ({ navigation }: any): JSX.Element => {
  return (
    <SafeAreaViewComp>
      <RNView style={styles.outerWrapper}>
        <Icon name="finger-print-sharp" size={SCALE_100} color={colors.green} />
        <RNView>
          <RNPressable onPress={() => Alert.alert('this is Profile Screen')} style={styles.buttonStyle}>
            <RNText style={styles.text}>
              this is <RNText style={styles.profileText}> PROFILE </RNText> screen
            </RNText>
          </RNPressable>
        </RNView>
      </RNView>
      <RNView style={styles.footerView}>
        <RNText style={styles.footerText}>by Handi.dev</RNText>
      </RNView>
    </SafeAreaViewComp>
  );
};

export default Profile;
