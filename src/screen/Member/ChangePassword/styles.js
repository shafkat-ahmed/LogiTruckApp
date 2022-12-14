import { FAMILY, SIZE, COLOR } from '@theme/typography'

export default {
    /*** -- ChangePassword -- ***/
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
        zIndex: 2
    },
    formHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 50
    },
    formHeaderCol: {
        marginHorizontal: 15
    },
    formHeaderIcon: {
        fontSize: SIZE.big,
        color: COLOR.default
    },
    formHeaderTitle: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.huge,
        color: COLOR.light        
    },
    formHeaderDesc: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.light,
        lineHeight: 20,
        opacity: 0.8
    },

    formContent: {
        backgroundColor: COLOR.light,
        borderRadius: 5,
        elevation: 10,
        shadowOffset: {
            width: 15,
            height: 15
        },
        marginHorizontal: 20
    },
    formInputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: COLOR.smoke
    },
    formInputIcon: {
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
    formBtnIcon: {
        fontSize: SIZE.huge,
        color: COLOR.light
    },
    formBtnText: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.medium,
        color: COLOR.light
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