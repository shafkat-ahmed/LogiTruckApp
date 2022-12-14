import { FAMILY, SIZE, COLOR } from '@theme/typography'

export default {
    /*** -- AboutUs -- ***/
    aboutContent: {
        minHeight: 50,
        backgroundColor: COLOR.primary,
        zIndex: 0
    },
    aboutContent2: {
        position: 'absolute',
        width: '100%',
        height: 120,
        backgroundColor: COLOR.primary,
        borderRadius: 20,
        zIndex: 1
    },
    aboutContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 2
    },
    aboutContentCol: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 30
    },
    aboutContentIcon: {
        fontSize: SIZE.big,
        color: COLOR.default
    },
    aboutHeaderContent: {
        flex: 1,
        marginHorizontal: 15
    },
    aboutHeaderTitle: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.huge,
        color: COLOR.light
    },
    aboutHeaderText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.light
    },
    aboutContent3: {
        backgroundColor: COLOR.light,
        borderRadius: 5,
        elevation: 10,
        shadowColor: COLOR.greyDark,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginHorizontal: 20,
        marginBottom: 20
    },
    aboutContentText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.medium,
        color: COLOR.grey,
        lineHeight: 24
    }
}