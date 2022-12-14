import { FAMILY, SIZE, COLOR } from '@theme/typography'

export default {
  /* Layout */
  layout: {
    flexGrow: 1
  },
  layoutFx: {
    flex: 1
  },

  /* Header */
  nav: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 0,
    marginHorizontal: -15
  },
  navTransparent: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginHorizontal: -15
  },
  navLeft: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navMiddle: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navRight: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  navContentCol: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  navBtn: {
    padding: 10
  },
  navBtnIcon: {
    color: COLOR.default
  },
  navText: {
    fontFamily: FAMILY.regular,
    color: COLOR.dark
  },

  row: {
    flexDirection: 'row'
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  headerLight: {
    backgroundColor: COLOR.primary
  },
  headerDark: {
    backgroundColor: COLOR.default
  },
  headerTransparent: {
    backgroundColor: 'transparent'
  },

  /* Colors */
  dark: {
    color: COLOR.dark
  },
  light: {
    color: COLOR.light
  },

  /* Sizes */
  tiny: {
    fontSize: SIZE.tiny
  },
  small: {
    fontSize: SIZE.small
  },
  medium: {
    fontSize: SIZE.medium
  },
  compact: {
    fontSize: SIZE.compact
  },
  large: {
    fontSize: SIZE.large
  },

  regular: {
    fontFamily: FAMILY.regular
  },
  bold: {
    fontFamily: FAMILY.bold
  }
}