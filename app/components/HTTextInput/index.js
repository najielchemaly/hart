import React from 'react'
import {View, TextInput} from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'
import {colors} from '../../constants'

export default function HTTextInput(props) {
  const {
    light,
    placeholder,
    onChangeText,
    secureTextEntry,
    style,
    value,
  } = props
  const {container, lightContainer, textInput, lightTextInput} = styles

  return (
    <View style={[container, light && lightContainer, style]}>
      <TextInput
        value={value}
        style={[textInput, light && lightTextInput]}
        placeholder={placeholder}
        onChangeText={text => onChangeText(text)}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={light ? colors.white : colors.black}
      />
    </View>
  )
}

HTTextInput.propTypes = {
  light: PropTypes.bool,
}

HTTextInput.defaultProps = {
  onChangeText: () => {},
  light: true,
}
