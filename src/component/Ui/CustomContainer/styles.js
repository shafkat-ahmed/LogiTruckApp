import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {
    /*** -- SignIn -- ***/
    bgCrv: {
        minHeight: 100,
        backgroundColor: COLOR.primary
    },
    bgCrvOverlay: {
        position: 'absolute',
        width: '100%',
        height: 200,
        backgroundColor: COLOR.primary,
        borderRadius: 20
    },

    formContainer: {
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 10,

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
    formBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLOR.orange,
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

    formFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    formFooterText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.medium,
        color: COLOR.grey
    },
    formFooterBtn: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    formFooterBtnText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.compact,
        color: COLOR.greyDark
    },

    forgotBtn: {
        alignItems: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    forgotBtnText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.grey
    },

    modalContainer: {
        width: '86%',
        height: '44%',
        borderRadius: 5
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    modalHeaderBtn: {
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    modalContent: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    modalContentIcon: {
        fontSize: SIZE.big,
        paddingVertical: 20
    },
    modalContentTitle: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.huge,
        color: COLOR.primary,
        marginBottom: 10
    },
    modalContentDesc: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.medium,
        color: COLOR.primary,
        textAlign: 'center',
        lineHeight: 18
    }
}