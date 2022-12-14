import { FAMILY, SIZE, COLOR } from '@theme/typography'

export default {
    /*** -- Faqs -- ***/
    faqContent: {
        minHeight: 50,
        backgroundColor: COLOR.primary,
        zIndex: 0
    },
    faqContent2: {
        position: 'absolute',
        width: '100%',
        height: 120,
        backgroundColor: COLOR.primary,
        borderRadius: 20,
        zIndex: 1
    },
    faqContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 2
    },
    faqContentCol: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 30
    },
    faqContentIcon: {
        fontSize: SIZE.big,
        color: COLOR.default
    },
    faqHeaderContent: {
        flex: 1,
        marginHorizontal: 15
    },
    faqHeaderTitle: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.large,
        color: COLOR.light
    },
    faqHeaderText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.light
    },

    faqSearch: {
        flexDirection: 'row',
        backgroundColor: COLOR.smoke,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 40,
        marginBottom: 30
    },
    faqSearchInput: {
        flex: 1,
        fontFamily: FAMILY.regular,
        fontSize: SIZE.medium,
        color: COLOR.greyDark,
        paddingHorizontal: 15
    },
    faqSearchBtn: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    faqSearchBtnIcon: {
        color: COLOR.greyLight
    },

    faqContentTab: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderColor: COLOR.smokeDark,
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    faqContentTabActiveText: {
        flex: 1,
        fontFamily: FAMILY.bold,
        fontSize: SIZE.medium,
        color: COLOR.greyDark,
    },
    faqContentTabText: {
        flex: 1,
        fontFamily: FAMILY.regular,
        fontSize: SIZE.medium,
        color: COLOR.grey
    },
    faqContentTabActiveIcon: {
        fontSize: SIZE.huge,
        color: COLOR.greyDark,
    },
    faqContentTabIcon: {
        fontSize: SIZE.huge,
        color: COLOR.grey,
    },
    faqContentItems: {
        paddingHorizontal: 15,
        paddingBottom: 20
    },
    faqContentItemText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.medium,
        color: COLOR.grey,
        lineHeight: 20
    }
}