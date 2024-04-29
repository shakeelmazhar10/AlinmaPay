import React from 'react';
import { Alert, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Profile.style';

function Home({ navigation }: any) {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f9f9f9" />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <Icon name="finger-print-sharp" size={100} color="green" />
          <View>
            <TouchableOpacity onPress={() => Alert.alert('this is Profile Screen')} style={styles.buttonStyle}>
              <Text style={styles.text}>
                this is <Text style={{ fontWeight: 'bold', color: 'green' }}> PROFILE </Text> screen
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            alignContent: 'flex-end',
            alignItems: 'flex-end',
            padding: 10
          }}
        >
          <Text style={{ color: '#808080' }}>by Handi.dev</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

export default Home;
