import { COLOR, FAMILY, SIZE } from '@theme/typography'
import { Platform, StyleSheet } from 'react-native'

export default {
    /*** -- SearchTrip -- ***/
    bgCrv: {
        minHeight: 100,
        backgroundColor: COLOR.primary,
        zIndex: 0
    },
    bgCrvOverlay: {
        position: 'absolute',
        width: '100%',
        height: 200,
        backgroundColor: COLOR.primary,
        borderRadius: 20,
        zIndex: 1
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

    formContent: {
        backgroundColor: COLOR.light,
        borderRadius: 7,
        elevation: 10,
        shadowColor: COLOR.greyDark,
        marginHorizontal: 15,
        marginBottom: 20,
        ...(Platform.OS=='android' &&
         { 
         borderWidth:2,
         borderColor:'rgba(0,0,0,0.05)'
         }
         )
    },
    formContentHeader: {
        backgroundColor: COLOR.primary,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    formContentHeaderTitle: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.medium,
        color: COLOR.light
    },

    formSelect: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderColor: COLOR.smokeLight
    },
    formRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: COLOR.smokeLight,
        paddingHorizontal: 15
    },
    formPicker: {
        flex: 1
    },
    formPickerItem: {
        flex: 1,
        width: '100%',
        paddingTop: 0,
        paddingBottom: 0
    },
    formIcon: {
        fontSize: SIZE.large,
        color: COLOR.greyLight
    },
    formInput: {
        flex: 1,
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        paddingVertical: 15
    },
    formBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLOR.orange,
        borderRadius: 3,
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginHorizontal: 15,
        marginVertical: 20
    },
    formBtnText: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.medium,
        color: COLOR.light
    },
    formBtnIcon: {
        fontFamily: FAMILY.regular,
        fontSize: 12,
        color: COLOR.light
    },
    container : {
        height:350,
    },
    map : {
        ...StyleSheet.absoluteFillObject,
    }

}