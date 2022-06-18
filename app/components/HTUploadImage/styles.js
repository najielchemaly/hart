import {StyleSheet} from 'react-native'

import {colors} from '../../constants'

export default StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: colors.gray,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  edit: {position: 'absolute', bottom: 10, color: 'white', fontSize: 12},
})
