import { COLOR, FAMILY, SIZE } from '@theme/typography'
import { Platform } from 'react-native'

export default {
  /*** -- Home -- ***/
  homeContent: {
    minHeight: 150,
    backgroundColor: COLOR.primary
  },
  homeContent2: {
    position: 'absolute',
    width: '100%',
    height: 300,
    backgroundColor: COLOR.primary,
    borderRadius: 20,
    zIndex: 1
  },
  homeContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 2
  },

  /*** -- Header -- ***/
  dbContainer: {
    flexGrow: 1
  },
  dbHeaderContentCol: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 15
  },
  dbImg: {
    width: 72,
    height: 72,
    borderRadius: 10
  },
  dbRow: {
    justifyContent: 'center',
    marginHorizontal: 15
  },
  dbName: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.huge,
    color: COLOR.light,
    marginBottom: 5
  },
  dbCity: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.light,
    marginBottom: 10
  },

  /** Count **/
  count: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 10
  },
  countCol: {
    width: '48%',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  bgYellow: {
    backgroundColor: COLOR.default
  },
  bgGrey: {
    backgroundColor: COLOR.orange
  },
  priceText: {
    fontFamily: FAMILY.bold,
    fontSize: 32,
    color: COLOR.greyDark
  },
  priceDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.greyDark
  },
  dbBtn: {
    flexDirection: 'row',
    backgroundColor: COLOR.light,
    borderRadius: 3,
    elevation: 5,
    shadowOffset: {
      width: 15,
      height: 15
    },
    shadowColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginHorizontal: 15,
    marginBottom: 10,
    ...(Platform.OS=='android' &&
    { 
    borderWidth:2,
    borderColor:'rgba(0,0,0,0.05)'
    }
    )
  },
  dbBtnIcon: {
    fontSize: SIZE.higantic2,
    color: COLOR.greyDark,
    marginRight: 5
  },
  dbCol: {
    justifyContent: 'center',
    marginHorizontal: 15
  },
  dbBtnTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.compact,
    color: COLOR.dark
  },
  dbBtnDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.grey
  }
}