import { FAMILY, SIZE, COLOR } from '@theme/typography'

export default {
    /*** -- Profile -- ***/
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
        width: '100%',
        marginTop: -100,
        zIndex: 2
    },
    bgImg: {
        position: 'absolute',
        width: '100%',
        height: 220
    },
    /** Header **/
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 15
    },
    profileImg: {
        width: 86,
        height: 86,
        borderRadius: 10
    },
    profileContent: {
        justifyContent: 'center',
        marginHorizontal: 15
    },
    profileText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.large,
        color: COLOR.light
    },
    profileDesc: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.light,
        marginBottom: 10
    },

    editBtn: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 30,
        height: 30,
        backgroundColor: COLOR.orange,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    editBtnIcon: {
        fontSize: 16,
        color: COLOR.light
    },

    /** Form **/
    regForm: {
        width: '100%',
        marginBottom: 15
    },
    regText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.light
    },
    infoBox: {
        backgroundColor: COLOR.light,
        borderRadius: 8,
        elevation: 10,
        shadowColor: COLOR.greyDark,
        shadowRadius: 3,
        marginHorizontal: 20,
        marginBottom: 20
    },
    infoHeader: {
        backgroundColor: COLOR.primary,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    infoHeaderText: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.medium,
        color: COLOR.light
    },
    fSelect: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: COLOR.smokeLight,
        paddingHorizontal: 15
    },
    fRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: COLOR.smokeLight
    },
    fPicker: {
        flex: 1
    },
    fPickerItem: {
        flex: 1,
        width: '100%',
        paddingTop: 0,
        paddingBottom: 0
    },
    fInput: {
        flex: 1,
        fontFamily: FAMILY.regular,
        fontSize: SIZE.medium,
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    fBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLOR.orange,
        borderRadius: 3,
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginHorizontal: 20,
        marginBottom: 15
    },
    fBtnText: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.medium,
        color: COLOR.light
    },
    fBtnIcon: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.light
    }
}