import {StyleSheet} from 'react-native'
import {getStatusBarHeight} from 'react-native-status-bar-height'

import {fonts, colors} from '../../constants'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {width: '100%', alignItems: 'center'},
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: fonts.paytone,
    color: colors.darkOrange,
    marginTop: -getStatusBarHeight(),
  },
  uploadImg: {marginTop: 20},
  inputContainer: {width: '100%', paddingHorizontal: 40, paddingVertical: 10},
  input: {marginTop: 15},
  buttonNext: {marginTop: 40},
  buttonCancel: {position: 'absolute', bottom: 30},
  otp: {marginTop: 30},
})
