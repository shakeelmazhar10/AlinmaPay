import React, { useEffect } from 'react';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Config from 'react-native-config';
import { useTypedDispatch } from '@redux/store';
import { setLocalisation } from '@app/redux/slices/localisation-slice';
import { useTranslation } from 'react-i18next';
import { languages, screenNames } from '@utils/enums';
import { appText } from '@i18n/translations';
import styles from './home.style';
import { constants } from '@utils/index';
import { RNPressable, RNText, RNView } from '@components/atoms';
import colors from '@theme/colors';
import { SafeAreaViewComp } from '@components/pages';


const Home = ({ navigation }: any): JSX.Element => {
  const dipatch = useTypedDispatch();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    dipatch(setLocalisation(languages.AR));
  }, [Config.BASE_URL]);

  const ListUser = (): JSX.Element => {
    return (
      <>
        {constants.users.map((data: any) => (
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
      <RNView style={styles.outerWrapper}>
        <IconMaterialCommunityIcons name="lock-alert-outline" size={80} color={colors.green} />
        <IconMaterialCommunityIcons name="wifi-lock-open" size={50} color={colors.grey} />
        <RNText>{t(`${appText.welcome}`)}</RNText>

        <RNView>
          <RNPressable style={styles.buttonStyle} onPress={() => navigation?.navigate(screenNames.PROFILE)}>
            <RNText style={styles.text}>Click here to go to profile Page:</RNText>
          </RNPressable>
          <ListUser />
        </RNView>
      </RNView>
    </SafeAreaViewComp>
  );
};

export default Home;
