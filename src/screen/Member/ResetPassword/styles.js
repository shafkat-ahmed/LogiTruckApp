import { FAMILY, SIZE, COLOR } from '@theme/typography'

export default {
    /*** -- ResetPassword -- ***/
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
        zIndex: 2
    },
    formHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginBottom: 50
    },
    formHeaderTitle: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.huge,
        color: COLOR.light,
        marginBottom: 5
    },
    formHeaderDesc: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.medium,
        color: COLOR.light,
        textAlign: 'center',
        lineHeight: 20,
        opacity: 0.8
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
    formBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLOR.orange,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 18,
        margin: 20
    },
    formBtnText: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.medium,
        color: COLOR.light
    },
    formBtnIcon: {
        fontSize: SIZE.huge,
        color: COLOR.light
    },

    modalContainer: {
        width: '86%',
        height: '40%',
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