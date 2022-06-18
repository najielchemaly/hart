import React, {useState} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import Pincode from 'react-native-smooth-pincode-input'
import PropTypes from 'prop-types'

import styles from './styles'
import {resendIcon} from '../../assets'
import strings from '../../constants/strings'

export default function HTOTPView(props) {
  const {onFulfill, style, error} = props
  const {
    container,
    title,
    cell,
    cellFocused,
    receiveMsg,
    resendContainer,
    resendText,
    input,
    errorTitle,
  } = styles

  function handleOnFulfill(code) {
    onFulfill(code)
    setPincode('')
  }

  function handleOnTextChange(text) {
    setPincode(text)
  }

  const [pincode, setPincode] = useState('')

  return (
    <View style={[container, style]}>
      <Text style={[title, error && errorTitle]}>
        {error ? strings.invalidOtp : strings.enterCode}
      </Text>
      <Pincode
        {...props}
        cellStyle={cell}
        textStyle={input}
        cellStyleFocused={cellFocused}
        value={pincode}
        onFulfill={text => handleOnFulfill(text)}
        onTextChange={text => handleOnTextChange(text)}
      />
      <Text style={[title, receiveMsg]}>{strings.didNotReceiveSms}</Text>
      <TouchableOpacity activeOpacity={0.8} style={resendContainer}>
        <Image source={resendIcon} />
        <Text style={resendText}>{strings.resendCode}</Text>
      </TouchableOpacity>
    </View>
  )
}

HTOTPView.propTypes = {
  cellSize: PropTypes.number,
  cellSpacing: PropTypes.number,
  codeLength: PropTypes.number,
  onFulfill: PropTypes.func,
}

HTOTPView.defaultProps = {
  cellSize: 45,
  cellSpacing: 10,
  codeLength: 4,
  // eslint-disable-next-line no-empty-function
  onFulfill: () => {},
}
