import React, {useEffect} from 'react'
import {View, Image} from 'react-native'

import styles from './styles'
import {logoWithTitle} from '../../assets'
import {Home} from '..'

export default function Splash(props) {
  const {navigation} = props
  function validateTimer() {
    let sec = 2
    var timer = setInterval(function() {
      sec--
      if (sec < 0) {
        clearInterval(timer)
        navigation.navigate(Home.name)
      }
    }, 1000)
  }

  useEffect(() => {
    validateTimer()
  }, [])

  return (
    <View style={styles.container}>
      <Image source={logoWithTitle}></Image>
    </View>
  )
}
