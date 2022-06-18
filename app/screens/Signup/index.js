import React, {useState} from 'react';
import {ImageBackground, Text, View} from 'react-native';

import styles from './styles';
import {homeBackground} from '../../assets';
import {
  HTCardView,
  HTUploadImage,
  HTTextInput,
  HTButton,
  HTTextButton,
  HTOTPView,
} from '../../components';
import strings from '../../constants/strings';
import {Activity} from '..';

export default function Signup(props) {
  const {navigation} = props;
  return (
    <ImageBackground
      style={styles.container}
      source={homeBackground}
      resizeMode={'cover'}>
      <HTCardView>
        {renderSignup()}
        {/* {renderEmailVerification()} */}
        {/* {renderForgotPassword()} */}
        {/* {renderChangePassword(navigation)} */}
        <HTTextButton
          style={styles.buttonCancel}
          title={strings.cancel}
          onPress={() => navigation.goBack()}
        />
      </HTCardView>
    </ImageBackground>
  );
}

function renderSignup() {
  return (
    <View style={styles.subContainer}>
      <Text style={styles.title}>{strings.createYourAccount}</Text>
      <HTUploadImage style={styles.uploadImg} />
      <View style={styles.inputContainer}>
        <HTTextInput
          style={styles.input}
          placeholder={strings.fullname}
          light={false}
        />
        <HTTextInput
          style={styles.input}
          placeholder={strings.emailAddress}
          light={false}
        />
        <HTTextInput
          style={styles.input}
          placeholder={strings.phoneNumber}
          light={false}
        />
        <HTTextInput
          style={styles.input}
          placeholder={strings.password}
          light={false}
        />
      </View>
      <HTButton
        style={styles.buttonNext}
        title={strings.next}
        titleStyle={{fontSize: 25}}
        darkMode
        bold
      />
    </View>
  );
}

function renderEmailVerification() {
  return (
    <View style={styles.subContainer}>
      <Text style={styles.title}>{strings.verifyYourEmail}</Text>
      <View style={styles.inputContainer}>
        <HTTextInput
          style={styles.input}
          placeholder={strings.emailAddress}
          light={false}
        />
        <HTOTPView style={styles.otp} />
      </View>
    </View>
  );
}

function renderForgotPassword() {
  const [codeSent, setCodeSend] = useState(false);

  return (
    <View style={styles.subContainer}>
      <Text style={styles.title}>{strings.forgotPassword}</Text>
      <View style={styles.inputContainer}>
        <HTTextInput
          style={styles.input}
          placeholder={strings.emailAddress}
          light={false}
        />
        {codeSent && <HTOTPView style={styles.otp} />}
        {!codeSent && (
          <HTButton
            onPress={() => setCodeSend(true)}
            style={styles.buttonNext}
            title={strings.send}
            titleStyle={{fontSize: 25}}
            darkMode
            bold
          />
        )}
      </View>
    </View>
  );
}

function renderChangePassword(navigation) {
  return (
    <View style={styles.subContainer}>
      <Text style={styles.title}>{strings.forgotPassword}</Text>
      <View style={styles.inputContainer}>
        <HTTextInput
          style={styles.input}
          placeholder={strings.newPassword}
          light={false}
        />
        <HTTextInput
          style={styles.input}
          placeholder={strings.confirmNewPassword}
          light={false}
        />
        <HTButton
          onPress={() => navigation.navigate(Activity.name)}
          style={styles.buttonNext}
          title={strings.send}
          titleStyle={{fontSize: 25}}
          darkMode
          bold
        />
      </View>
    </View>
  );
}
