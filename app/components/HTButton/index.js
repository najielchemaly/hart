import React from 'react'
import {TouchableOpacity, Text, View} from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

export default function HTButton(props) {
  const {title, titleStyle, onPress, style, darkMode, bold} = props
  const {container, darkContainer, darkTitle, text, textBold} = styles
  return (
    <View style={[styles.parent, style]}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[container, darkMode && darkContainer]}
        onPress={() => onPress()}>
        <Text
          numberOfLines={1}
          style={[text, titleStyle, darkMode && darkTitle, bold && textBold]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

HTButton.propTypes = {
  light: PropTypes.bool,
}

HTButton.defaultProps = {
  onPress: () => {},
  light: true,
}
