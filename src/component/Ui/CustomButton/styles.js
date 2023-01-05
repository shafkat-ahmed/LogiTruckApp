import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {
    /*** -- SignIn -- ***/
    formBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLOR.red,
        borderRadius: 5,
        paddingVertical: 18,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        marginBottom: 20
    },
    formBtnIcon: {
        fontSize: SIZE.huge,
        color: COLOR.light
    },
    formBtnText: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.medium,
        color: COLOR.light
    },

}