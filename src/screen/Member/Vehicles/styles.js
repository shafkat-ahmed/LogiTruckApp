import { FAMILY, SIZE, COLOR } from '@theme/typography'

export default {
    /*** -- Vehicles -- ***/
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

    /** Truck **/
    truckItem: {
        flex: 1,
        backgroundColor: COLOR.light,
        borderRadius: 3,
        elevation: 5,
        shadowColor: COLOR.greyDark,
        shadowRadius: 3,
        marginHorizontal: 15,
        marginBottom: 20
    },
    truckInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: COLOR.smoke,
        borderBottomWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    truckContent: {
        flex: 1
    },
    truckImg: {
        width: 100,
        height: 75,
        borderRadius: 3,
        marginRight: 10
    },
    truckBrand: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: COLOR.smokeLight
    },
    truckName: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.medium,
        color: COLOR.primary,
        marginBottom: 5
    },
    rowAlignment: {
        flexDirection: 'row',
        marginTop: 5
    },
    truckNum: {
        flex: 5,
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.greyDark
    },
    truckData: {
        flex: 5,
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.greyDark
    },
    truckContent2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15
    },
    truckPosted: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.greyDark
    },

    editBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLOR.smoke,
        borderRadius: 5,
        padding: 10,
        marginLeft: 5
    },
    editIcon: {
        fontSize: SIZE.medium,
        color: COLOR.primary,
        paddingLeft: 5
    },
    editText: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.tiny,
        paddingHorizontal: 5,
        color: COLOR.primary
    }
}