import {StyleSheet} from 'react-native'

import {dimension, colors} from '../../constants'

export default StyleSheet.create({
  container: {
    height: '80%',
    marginTop: dimension.screenHeight * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginHorizontal: 20,
    borderRadius: 10,
  },
})
