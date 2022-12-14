import { FAMILY, SIZE, COLOR } from '@theme/typography'

export default {
    /*** -- Language -- ***/
    langContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: COLOR.primary,
        paddingHorizontal: 20,
        paddingVertical: 100
    },
    langHeader: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.huge,
        color: COLOR.light
    },
    langDesc: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.medium,
        color: COLOR.light,
        marginBottom: 30
    },
    langPicker: {
        backgroundColor: COLOR.primary,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: COLOR.default,
        paddingHorizontal: 10
    },
    langPickerText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.default
    }
}