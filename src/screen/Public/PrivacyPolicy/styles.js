import { FAMILY, SIZE, COLOR } from '@theme/typography'

export default {
    /*** -- PrivacyPolicy  -- ***/
    privacyContent: {
        minHeight: 50,
        backgroundColor: COLOR.primary,
        zIndex: 0
    },
    privacyContent2: {
        position: 'absolute',
        width: '100%',
        height: 120,
        backgroundColor: COLOR.primary,
        borderRadius: 20,
        zIndex: 1
    },
    privacyContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 2
    },
    privacyContentCol: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 30
    },
    privacyContentIcon: {
        fontSize: SIZE.big,
        color: COLOR.default
    },
    privacyHeaderContent: {
        flex: 1,
        marginHorizontal: 15
    },
    privacyHeaderTitle: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.large,
        color: COLOR.light
    },
    privacyHeaderText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.light
    },
    privacyContent3: {
        backgroundColor: COLOR.light,
        borderRadius: 5,
        elevation: 10,
        shadowColor: COLOR.greyDark,
        shadowOpacity: 0.1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginHorizontal: 20,
        marginBottom: 20
    },
    privacyContentText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.medium,
        color: COLOR.grey,
        lineHeight: 24
    }
}