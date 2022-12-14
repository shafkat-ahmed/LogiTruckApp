import { FAMILY, SIZE, COLOR } from '@theme/typography'

export default {
  /*** -- Intro -- ***/

  /*** -- Slides -- ***/
  slideContainer: {
    flex: 1,
    backgroundColor: COLOR.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  slideImg: {
    width: 200,
    height: 200,
    marginBottom: 100
  },
  slideText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.huge,
    color: COLOR.light
  },
  slideDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.compact,
    color: COLOR.light
  },
  introBtn: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  introBtnText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.compact,
    color: COLOR.default
  }
}