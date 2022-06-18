import React from 'react'
import {TouchableOpacity, Text, Image} from 'react-native'

import styles from './styles'

export default function HTSocialButton(props) {
  const {title, onPress, image, style} = props
  const {container, textStyle, imageStyle} = styles
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[container, style]}
      onPress={() => onPress}>
      <Image source={image} resizeMode={'center'} style={imageStyle} />
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  )
}

HTSocialButton.defaultProps = {
  onPress: () => {},
}
