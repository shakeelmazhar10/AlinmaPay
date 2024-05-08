import React from 'react';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTypedDispatch, useTypedSelector } from '@store/store';
import { setLocalization } from '@store/slices/localization-slice';
import { useTranslation } from 'react-i18next';
import { languages, screenNames } from '@utils/enums';
import styles from './home.style';
import { constants } from '@utils/index';
import { RNPressable, RNText, RNView } from '@components/atoms';
import colors from '@theme/colors';
import { SafeAreaViewComp } from '@components/templates';
import { ToggleButton } from '@components/molecules';
import useLocalization from '@localization/localization.hook';

const Home = ({ navigation }: any): JSX.Element => {
  const dispatch = useTypedDispatch();
  const { t, i18n } = useTranslation();
  const { localizationFlag } = useTypedSelector((state) => state.localizationReducer);
  const localizationText = useLocalization();

  const onToggleChange = () => {
    const newLanguage = localizationFlag === languages.EN ? languages.AR : languages.EN;
    i18n
      .changeLanguage(newLanguage)
      .then(() => {
        dispatch(setLocalization(newLanguage));
      })
      .catch((error) => {
        console.error('Error changing language:', error);
      });
  };

  const ListUser = (): JSX.Element => {
    return (
      <>
        {constants.USERS.map((data: any) => (
          <RNView key={data?.id} style={styles.ListView}>
            <RNText style={{ fontSize: 15 }}>
              {data?.id}.{data?.name}
            </RNText>
          </RNView>
        ))}
      </>
    );
  };

  return (
    <SafeAreaViewComp>
      <ToggleButton toggleState={localizationFlag === languages.EN} onToggleChange={onToggleChange} />
      <RNView style={styles.outerWrapper}>
        <IconMaterialCommunityIcons name="lock-alert-outline" size={80} color={colors.green} />
        <IconMaterialCommunityIcons name="wifi-lock-open" size={50} color={colors.grey} />
        <RNText>{t(localizationText.welcome)}</RNText>

        <RNView>
          <RNPressable style={styles.buttonStyle} onPress={() => navigation?.navigate(screenNames.PROFILE)}>
            <RNText style={styles.text}>{t(localizationText.redirect_to_profile)}</RNText>
          </RNPressable>
          <ListUser />
        </RNView>
      </RNView>
    </SafeAreaViewComp>
  );
};

export default Home;
