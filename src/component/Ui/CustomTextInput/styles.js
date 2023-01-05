import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {
    /*** -- SignIn -- ***/
    formContainer: {
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2
    },
    formHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50
    },
    formHeaderTitle: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.huge,
        color: COLOR.light
    },
    formHeaderDesc: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.light
    },

    formContent: {
        width: '90%',
        backgroundColor: COLOR.light,
        borderRadius: 5,
        elevation: 10,
        shadowOffset: {
            width: 15,
            height: 15
        }
    },
    formInputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: COLOR.smoke
    },
    formInputIcon: {
        fontSize: SIZE.huge,
        color: COLOR.grey,
        paddingLeft: 20,
        paddingRight: 10
    },
    formInputText: {
        flex: 1,
        fontFamily: FAMILY.regular,
        fontSize: SIZE.medium,
        color: COLOR.greyDark,
        paddingVertical: 18,
        paddingLeft: 10,
        paddingRight: 20
    },
}