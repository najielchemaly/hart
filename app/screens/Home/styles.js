import {StyleSheet} from 'react-native'
import {getStatusBarHeight} from 'react-native-status-bar-height'

import {dimension} from '../../constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: dimension.screenWidth * 0.1,
  },
  inputContainer: {
    width: '100%',
    marginTop: getStatusBarHeight() * 2,
  },
  dogContainer: {
    position: 'absolute',
    marginTop: dimension.screenHeight * 0.55,
  },
  dogImage: {
    aspectRatio: 3 / 2,
    height: dimension.screenWidth * 0.6,
  },
  textInput: {
    marginTop: 15,
  },
  button: {
    marginTop: 20,
  },
  socialButton: {
    marginTop: 30,
  },
  newUserText: {textAlign: 'center', marginTop: 20, marginBottom: 10},
})
