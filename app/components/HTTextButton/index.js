import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native'

import styles from './styles'

export default function HTTextButton(props) {
  const {title, titleStyle, onPress, style} = props
  const {container, text} = styles
  return (
    <View style={[container, style]}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => onPress()}>
        <Text style={[text, titleStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

HTTextButton.defaultProps = {
  onPress: () => {},
}
