import { Platform } from 'react-native'

export const FAMILY = {
  bold: Platform.OS=='ios' ? 'Poppins-SemiBold' : 'PoppinsSemiBold',
  regular: Platform.OS=='ios' ? 'Poppins-Medium' : 'PoppinsMedium'
}

export const SIZE = {
  tiny: 10,
  small: 12,
  medium: 14,
  compact: 16,
  large: 18,
  huge: 24,
  higantic: 36,
  higantic2: 44,
  big: 72
}

export const COLOR = {
  primary: 'rgba(36, 42, 56, 1)',
  default: 'rgba(255, 211, 40, 1)',

  dark: 'rgba(0, 0, 0, 1)',
  light: 'rgba(255, 255, 255, 1)',

  grey: 'rgba(4, 40, 54, 0.5)',
  greyDark: 'rgba(4, 40, 54, 0.8)',
  greyLight: 'rgba(4, 40, 54, 0.2)',

  smoke: 'rgba(0, 0, 0, 0.05)',
  smokeDark: 'rgba(0, 0, 0, 0.1)',
  smokeLight: 'rgba(0, 0, 0, 0.03)',

  orange: 'rgba(255, 137, 1, 1)',
  red: '#E32227'
}