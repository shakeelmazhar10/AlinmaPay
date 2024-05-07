import React from 'react';
import { Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './profile.style';
import { RNPressable, RNText, RNView } from '@components/atoms';
import { SCALE_100 } from '@theme/spacing';
import colors from '@theme/colors';
import { SafeAreaViewComp } from '@components/pages';
import useLocalization from '@hooks/localization.hook';

const Profile = ({ navigation }: any): JSX.Element => {
  const { t, i18n } = useTranslation();
  const localizationText = useLocalization();

  return (
    <SafeAreaViewComp>
      <RNView style={styles.outerWrapper}>
        <Icon name="finger-print-sharp" size={SCALE_100} color={colors.green} />
        <RNView>
          <RNPressable
            onPress={() => Alert.alert(t(localizationText.this_is_profile_screen))}
            style={styles.buttonStyle}
          >
            <RNText style={styles.text}>
              {t(localizationText.this_is)} <RNText style={styles.profileText}> {t(localizationText.profile)} </RNText>{' '}
              {t(localizationText.screen)}
            </RNText>
          </RNPressable>
        </RNView>
      </RNView>
      <RNView style={styles.footerView}>
        <RNText style={styles.footerText}>{t(localizationText.by_handi_tv)}</RNText>
      </RNView>
    </SafeAreaViewComp>
  );
};

export default Profile;
