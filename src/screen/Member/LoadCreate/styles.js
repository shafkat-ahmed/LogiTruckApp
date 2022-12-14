import { FAMILY, SIZE, COLOR } from '@theme/typography'

export default {
    /*** -- LoadCreate -- ***/
    bgCrv: {
        minHeight: 100,
        backgroundColor: COLOR.primary,
        zIndex: 0
    },
    bgCrvOverlay: {
        position: 'absolute',
        width: '100%',
        height: 200,
        backgroundColor: COLOR.primary,
        borderRadius: 20,
        zIndex: 1
    },
    formContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 2
    },
    formHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 30
    },
    formHeaderIcon: {
        fontSize: SIZE.big,
        color: COLOR.default
    },
    formHeaderRow: {
        flex: 1,
        marginHorizontal: 15
    },
    formHeaderTitle: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.large,
        color: COLOR.light
    },
    formHeaderDesc: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.light
    },

    formContent: {
        backgroundColor: COLOR.light,
        borderRadius: 5,
        elevation: 10,
        shadowColor: COLOR.greyDark,
        marginHorizontal: 15,
        marginBottom: 20
    },
    formContentHeader: {
        backgroundColor: COLOR.primary,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    formContentHeaderTitle: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.medium,
        color: COLOR.light
    },

    formSelect: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: COLOR.smokeLight,
        paddingHorizontal: 15
    },
    formRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: COLOR.smokeLight,
        paddingHorizontal: 15
    },
    formPicker: {
        flex: 1
    },
    formPickerItem: {
        flex: 1,
        width: '100%',
        paddingTop: 0,
        paddingBottom: 0
    },
    formIcon: {
        fontSize: SIZE.huge,
        color: COLOR.greyLight
    },
    formInput: {
        flex: 1,
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        paddingVertical: 15
    },
    formBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLOR.orange,
        borderRadius: 3,
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginHorizontal: 15,
        marginVertical: 20
    },
    formBtnText: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.medium,
        color: COLOR.light
    },
    formBtnIcon: {
        fontFamily: FAMILY.regular,
        fontSize: 12,
        color: COLOR.light
    },
    /* Modal */
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