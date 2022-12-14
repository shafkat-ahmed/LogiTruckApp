import { FAMILY, SIZE, COLOR } from '@theme/typography'

export default {
    /*** -- TermsofUse -- ***/
    termsContent: {
        minHeight: 50,
        backgroundColor: COLOR.primary,
        zIndex: 0
    },
    termsContent2: {
        position: 'absolute',
        width: '100%',
        height: 120,
        backgroundColor: COLOR.primary,
        borderRadius: 20,
        zIndex: 1
    },
    termsContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 2
    },
    termsContentCol: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 30
    },
    termsContentIcon: {
        fontSize: SIZE.big,
        color: COLOR.default
    },
    termsHeaderContent: {
        flex: 1,
        marginHorizontal: 15
    },
    termsHeaderTitle: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.large,
        color: COLOR.light
    },
    termsHeaderText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.light
    },
    termsContent3: {
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
    termsContentText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.medium,
        color: COLOR.grey,
        lineHeight: 24
    }
}