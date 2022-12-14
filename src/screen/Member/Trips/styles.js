import { FAMILY, SIZE, COLOR } from '@theme/typography'

export default {
    /*** -- Trips -- ***/
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

    /** Trip List **/
    tripItem: {
        flex: 1,
        backgroundColor: COLOR.light,
        borderRadius: 3,
        elevation: 10,
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowColor: COLOR.greyLight,
        shadowOpacity: 0.1,
        shadowRadius: 3,
        marginHorizontal: 15,
        marginBottom: 20
    },
    truckInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: COLOR.smoke,
        borderBottomWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    truckTrip: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.medium,
        color: COLOR.primary
    },
    truckData: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.greyDark
    },
    checkIcon: {
        fontSize: SIZE.small,
        color: COLOR.grey
    },
    truckImg: {
        width: 100,
        height: 75,
        borderRadius: 3
    },
    tripInfo: {
        borderColor: COLOR.smokeLight,
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    tripContent2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5
    },
    tripPlaces: {
        flex: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    tripIcon: {
        fontSize: SIZE.small,
        paddingHorizontal: 5
    },
    placeText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.grey,
        marginLeft: 10
    },
    lineTracker: {
        position: 'absolute',
        top: 18,
        fontSize: SIZE.large,
        color: COLOR.default,
        marginLeft: 22
    },
    editBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLOR.smoke,
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 5,
        marginVertical: 10
    },
    editIcon: {
        fontSize: SIZE.medium,
        color: COLOR.greyDark,
        paddingLeft: 5
    },
    editText: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.tiny,
        color: COLOR.primary,
        paddingHorizontal: 5
    }
}