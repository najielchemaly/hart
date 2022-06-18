import React from 'react'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {Image, Text} from 'react-native'
import {plusIcon} from '../../assets'
import styles from './styles'

export default function HTUploadImage(props) {
  const {onPress, style, image} = props
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      activeOpacity={0.8}
      style={[styles.container, style]}>
      {!image && <Image source={plusIcon} />}
      {image && <Text style={styles.edit}>{'Edit'}</Text>}
    </TouchableOpacity>
  )
}

HTUploadImage.defaultProps = {
  onPress: () => {},
}
