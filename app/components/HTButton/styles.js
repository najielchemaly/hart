import {StyleSheet} from 'react-native'

import {colors, fonts} from '../../constants'

export default StyleSheet.create({
  parent: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: 30,
  },
  darkContainer: {
    backgroundColor: colors.darkOrange,
    borderRadius: 30,
  },
  text: {
    color: colors.darkOrange,
    textAlign: 'center',
    fontFamily: fonts.varelaRound,
    paddingHorizontal: 20,
    paddingVertical: 10,
    minWidth: 120,
    maxHeight: 60,
  },
  textBold: {
    fontFamily: fonts.paytone,
    fontWeight: 'bold',
  },
  darkTitle: {
    color: colors.white,
  },
})
