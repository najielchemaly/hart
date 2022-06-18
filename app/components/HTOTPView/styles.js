import {StyleSheet} from 'react-native'

import {colors, fonts} from '../../constants'

export default StyleSheet.create({
  container: {alignItems: 'center'},
  cell: {
    backgroundColor: colors.gray,
    borderRadius: 8,
  },
  input: {
    color: colors.textBrown,
    fontSize: 18,
    fontFamily: fonts.varelaRound,
  },
  cellFocused: {
    borderColor: colors.black,
  },
  title: {
    color: colors.textBrown,
    textAlign: 'center',
    fontSize: 13,
    fontFamily: fonts.varelaRound,
    marginBottom: 10,
  },
  errorTitle: {
    color: colors.error,
  },
  receiveMsg: {
    color: colors.textGray,
    marginTop: 30,
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resendText: {color: colors.darkOrange, marginLeft: 5},
})
