import { FAMILY, SIZE, COLOR } from '@theme/typography'

export default {
    /*** -- SearchTripDetail -- ***/
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
    formHeaderAvatar: {
        width: 72,
        height: 72,
        borderRadius: 10
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
    formHeaderRating: {
        flexDirection: 'row'
    },
    formHeaderStar: {
        fontSize: SIZE.compact,
        color: COLOR.default
    },
    formHeaderStarActive: {
        fontSize: SIZE.compact,
        color: COLOR.default
    },

    tripItem: {
        flex: 1,
        backgroundColor: COLOR.light,
        borderRadius: 3,
        elevation: 10,
        shadowColor: COLOR.greyDark,
        marginHorizontal: 15,
        marginBottom: 20
    },
    truckInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: COLOR.smoke,
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    truckCol: {
        flex: 1,
        marginRight: 10
    },
    truckTrip: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.medium,
        color: COLOR.primary
    },
    truckData: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.greyDark,
        lineHeight: 18
    },
    checkIcon: {
        fontSize: SIZE.small,
        color: COLOR.grey
    },
    truckFare: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.large,
        color: COLOR.primary
    },
    truckImg: {
        width: 100,
        height: 75,
        borderRadius: 3
    },
    tripInfo: {
        borderBottomWidth: 1,
        borderColor: COLOR.smokeDark,
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    tripContent2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5
    },
    tripContent3: {
        borderBottomWidth: 1,
        borderColor: COLOR.smokeDark,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    tripContent3Text: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.grey,
        lineHeight: 20
    },
    tripContent3Date: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.medium,
        color: COLOR.grey,
        marginTop: 30
    },
    tripContent4: {
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    tripPosted: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.grey,
        marginHorizontal: 15,
        marginVertical: 15
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
        justifyContent: 'center',
        backgroundColor: COLOR.orange,
        borderRadius: 5,
        padding: 15
    },
    editIcon: {
        fontSize: SIZE.large,
        color: COLOR.light,
        paddingLeft: 5
    },
    editText: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.small,
        color: COLOR.light,
        textTransform: 'uppercase',
        paddingHorizontal: 5
    }
}