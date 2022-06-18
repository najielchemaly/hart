import React, {useEffect} from 'react';
import {View, Text, ImageBackground, StatusBar} from 'react-native';

import styles from './styles';
import {homeBackground, dogImg, facebookIcon} from '../../assets';
import {
  HTTextInput,
  HTButton,
  HTSocialButton,
  HTTextButton,
} from '../../components';
import strings from '../../constants/strings';
import {colors, fonts} from '../../constants';
import {
  checkPermission,
  createNotificationListeners,
} from '../../constants/notifications';
import Signup from '../Signup';
import Activity from '../Tabbar/Activity';

export default function Home(props) {
  const {navigation} = props;

  useEffect(() => {
    try {
      async function setupFirebase() {
        await checkPermission();
        await createNotificationListeners();
      }

      setupFirebase();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <ImageBackground
      style={styles.container}
      source={homeBackground}
      resizeMode={'cover'}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.inputContainer}>
        <HTTextInput style={styles.textInput} placeholder={strings.email} />
        <HTTextInput style={styles.textInput} placeholder={strings.password} />
        <HTButton
          onPress={() => navigation.navigate(Activity.name)}
          style={styles.button}
          title={strings.signin}
          titleStyle={{fontSize: 25}}
          bold
        />
        <HTSocialButton
          style={styles.socialButton}
          title={strings.signinWithFacebook}
          image={facebookIcon}
        />
        <HTTextButton
          style={{marginTop: 40}}
          title={strings.forgotMyPassword}
          titleStyle={{color: colors.white}}
        />
      </View>
      <View style={styles.dogContainer}>
        <ImageBackground
          style={styles.dogImage}
          source={dogImg}
          resizeMode={'contain'}
        />
        <Text style={styles.newUserText}>{strings.newUser}</Text>
        <HTButton
          onPress={() => navigation.navigate(Signup.name)}
          title={strings.createNewAccount}
          titleStyle={{fontSize: 16}}
          darkMode
        />
      </View>
    </ImageBackground>
  );
}
