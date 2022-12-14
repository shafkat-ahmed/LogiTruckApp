import { FAMILY, SIZE, COLOR } from '@theme/typography'

export default {
    /*** -- ContactUs  -- ***/
    contactContent: {
        minHeight: 50,
        backgroundColor: COLOR.primary,
        zIndex: 0
    },
    contactContent2: {
        position: 'absolute',
        width: '100%',
        height: 120,
        backgroundColor: COLOR.primary,
        borderRadius: 20,
        zIndex: 1
    },
    contactContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 2
    },
    contactContentCol: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 30
    },
    contactContentIcon: {
        fontSize: SIZE.big,
        color: COLOR.default
    },
    contactHeaderContent: {
        flex: 1,
        marginHorizontal: 15
    },
    contactHeaderTitle: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.large,
        color: COLOR.light
    },
    contactHeaderText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.light
    },

    contactTabContentCol: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 40
    },
    contactTabActiveBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR.primary,
        borderRadius: 0,
        borderWidth: 1,
        borderColor: COLOR.primary,
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    contactTabInactiveBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0,
        borderWidth: 1,
        borderColor: COLOR.primary,
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    contactTabActiveBtnText: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.medium,
        color: COLOR.light
    },
    contactTabInactiveBtnText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.medium,
        color: COLOR.dark
    },

    contactContent3: {
        flex: 1,
        marginHorizontal: 20
    },

    contactForm: {
        paddingVertical: 30
    },
    contactCol: {
        marginBottom: 15
    },
    contactFormLabel: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.greyDark,
        textTransform: 'uppercase',
        marginTop: 5
    },
    contactFormInput: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.medium,
        color: COLOR.grey,
        textTransform: 'uppercase',
        borderBottomWidth: 3,
        borderColor: COLOR.greyLight,
        borderRadius: 5,
        paddingVertical: 10
    },
    contactFormInputMulti: {
        height: 100,
        textAlignVertical: 'top'
    },
    contactFormSendBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR.orange,
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    contactFormSendBtnText: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.compact,
        color: COLOR.light
    },

    contactInfo: {
        paddingVertical: 30
    },
    contactRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: COLOR.smokeDark,
        paddingVertical: 20
    },
    contactInfoIcon: {
        marginRight: 30
    },
    contactInfoTitle: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.compact,
        color: COLOR.greyDark,
        marginBottom: 5
    },
    contactInfoText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.medium,
        color: COLOR.grey,
        lineHeight: 20
    },

    /*** -- ModalConfirm  -- ***/
    modalContainer: {
        width: '90%',
        height: '40%',
        maxHeight: '90%',
        borderRadius: 5
    },
    modalContent: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    modalContentIcon: {
        fontSize: SIZE.big,
        color: COLOR.dark,
        paddingVertical: 20
    },
    modalContentTitle: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.huge,
        color: COLOR.greyDark,
        textAlign: 'center',
        marginBottom: 15
    },
    modalContentText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.grey,
        textAlign: 'center',
        lineHeight: 20
    }
}