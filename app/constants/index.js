import {Dimensions} from 'react-native'

const colors = {
  darkOrange: '#e64a26',
  white: '#ffffff',
  gray: '#E9E2E0',
  black: '#000',
  textGray: '#847F7E',
  textBrown: '#332C2A',
  error: '#E01333',
}

const appStyles = {
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
  },
  margin: 20,
}

const dimension = {
  screenWidth: Math.round(Dimensions.get('window').width),
  screenHeight: Math.round(Dimensions.get('window').height),
}

const fonts = {
  varela: 'Varela',
  varelaRound: 'Varela Round',
  paytone: 'Paytone One',
}

export {colors, appStyles, dimension, fonts}
