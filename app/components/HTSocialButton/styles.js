import {StyleSheet} from 'react-native'

import {colors, fonts} from '../../constants'

export default StyleSheet.create({
  container: {
    height: 45,
    borderRadius: 22.5,
    borderColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  textStyle: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.varelaRound,
    marginLeft: 10,
  },
  imageStyle: {
    width: 25,
    height: 25,
  },
})
