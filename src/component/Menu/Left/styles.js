import { FAMILY, SIZE, COLOR } from '@theme/typography'

export default {
  /*** -- Drawer -- ***/
  navContainer: {
    flex: 1
  },
  navContent: {
    flexDirection: 'row',
    backgroundColor: COLOR.primary,
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  navContentImg: {
    width: 72,
    height: 72,
    borderRadius: 5
  },
  navContentTitle: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.compact,
    color: COLOR.light,
    marginHorizontal: 20,
    marginVertical: 5
  },
  navContentText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: COLOR.light,
    marginHorizontal: 20
  },
  navHeader: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.compact,
    color: COLOR.greyDark,
    marginHorizontal: 30,
    marginVertical: 15
  },

  /*** -- Menu Item -- ***/
  navMenuContent: {
    flex: 1,
    paddingVertical: 30
  },
  navItemBtn: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 5
  },
  navItemBtnCol: {
    width: 36,
    height: 36,
    alignItems: 'center'
  },
  navItemBtnIcon: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.huge
  },
  navItemBtnText: {
    flex: 1,
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    marginHorizontal: 20
  },
  navItemText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    marginHorizontal: 30,
    marginVertical: 20
  }
}