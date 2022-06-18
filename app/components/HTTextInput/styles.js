import {StyleSheet} from 'react-native'

import {colors, fonts} from '../../constants'

export default StyleSheet.create({
  container: {
    height: 45,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.gray,
  },
  lightContainer: {
    borderColor: colors.white,
  },
  textInput: {
    flex: 1,
    textAlign: 'center',
    color: colors.black,
    fontSize: 18,
    fontFamily: fonts.varelaRound,
  },
  lightTextInput: {
    color: colors.white,
  },
})
