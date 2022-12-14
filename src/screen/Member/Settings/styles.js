import { FAMILY, SIZE, COLOR } from '@theme/typography'

export default {
    /*** -- Settings -- ***/
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
    formBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: COLOR.smoke,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 25
    },
    formBtnIcon: {
        fontSize: SIZE.huge,
        color: COLOR.greyDark
    },
    formBtnText: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.medium,
        color: COLOR.greyDark
    }
}