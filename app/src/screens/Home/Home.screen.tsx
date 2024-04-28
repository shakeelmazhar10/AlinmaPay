import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Config from 'react-native-config';
import useTheme from '@hooks/themeHook';
import { useTypedDispatch, useTypedSelector } from '@redux/store';
import { setLocalisation } from '@redux/slices/localisationSlice';
import { useTranslation } from 'react-i18next';
import { languages, screenNames } from '@utils/enums';
import { appText } from '@i18n/translations';
import styles from './Home.style';

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Jordan Doe' },
];

function Home({ navigation }: any) {
  const { localisationFlag } = useTypedSelector(
    (state) => state.localisationReducer,
  );
  const dipatch = useTypedDispatch();
  const { t, i18n } = useTranslation();
  const { colors, icons } = useTheme();

  useEffect(() => {
    console.debug('::BASE_URL:: ', Config.BASE_URL);
    dipatch(setLocalisation(languages.AR));
  }, [Config.BASE_URL]);

  function ListUser() {
    return (
      <>
        {users.map((data: any) => (
          <View key={data?.id} style={styleUser}>
            <Text style={{ fontSize: 15 }}>
              {data?.id}
              .
              {data?.name}
            </Text>
          </View>
        ))}
      </>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f9f9f9" />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <IconMaterialCommunityIcons
            name="lock-alert-outline"
            size={80}
            color="green"
          />
          <IconMaterialCommunityIcons
            name="wifi-lock-open"
            size={50}
            color="grey"
          />
          <Text>{t(`${appText.welcome}`)}</Text>

          <View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation?.navigate(screenNames.PROFILE)}
            >
              <Text style={styles.text}>Click here to go to profile Page:</Text>
            </TouchableOpacity>
            <ListUser />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styleUser = StyleSheet.create<any>({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10,
});

export default Home;
