import React from 'react'
import {View} from 'react-native'

import styles from './styles'
import {appStyles} from '../../constants'

export default function HTCardView(props) {
  const {children} = props
  const {container} = styles
  return <View style={[container, appStyles.shadow]}>{children}</View>
}
